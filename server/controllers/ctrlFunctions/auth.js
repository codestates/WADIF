const { generateAccessToken, sendAccessToken, isAuthorized } = require('../tokenFunctions');

module.exports = {
  signin: (req, res) => {
    const { userId, password } = req.body;
    users.findOne({ where: { userId, password }})
    .then(data => {
      if (!data) {
        res.status(401).send('유효하지 않은 아이디이거나 비밀번호가 일치하지 않습니다.');
      }
      const payload = data.dataValues;
      const accessToken = generateAccessToken(payload);
      sendAccessToken(res, accessToken);
    })
  },

  signout: (req, res) => {
    res.send('hello')    
  }
}