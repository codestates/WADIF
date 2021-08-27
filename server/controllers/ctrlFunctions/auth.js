const { 
  generateAccessToken, 
  sendAccessToken, 
  isAuthorized, 
  sendRefreshToken, 
  generateRefreshToken 
} = require('../tokenFunctions');

const { users } = require('../../models');

module.exports = {
  signin: (req, res) => {
    const { userId, password } = req.body;
    users.findOne({ where: { userId, password }})
    .then(data => {
      if (!data) {
        res.status(401).send('아이디 혹은 비밀번호가 일치하지 않습니다.');
      }

      else {
        console.log(data)
        const payload = data.dataValues;
        const accessToken = generateAccessToken(payload);
        const refreshToken = generateRefreshToken(payload);

        sendRefreshToken(res, refreshToken);
        sendAccessToken(res, accessToken);
      }
    })
  },

  signout: (req, res) => {
    const checkedData = isAuthorized(req);
    if (!checkedData) {
      res.status(401).send('유효하지 않은 사용자 입니다.');
    }
    else {
      res.status(200).send('로그아웃에 성공하였습니다.');
    }
  }
}