const { 
  generateAccessToken, 
  sendAccessToken, 
  isAuthorized, 
  sendRefreshToken, 
  generateRefreshToken 
} = require('../tokenFunctions');

module.exports = {
  signin: (req, res) => {
    const { userId, password } = req.body;
    users.findOne({ where: { userId, password }})
    .then(data => {
      if (!data) {
        res.status(401).send('아이디 혹은 비밀번호가 일치하지 않습니다.');
      }
      const payload = data.dataValues;
      const accessToken = generateAccessToken(payload);
      const refreshToken = generateRefreshToken(payload);

      sendAccessToken(res, accessToken);
      sendRefreshToken(res, refreshToken);
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