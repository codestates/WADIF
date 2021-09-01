const {
  generateAccessToken,
  sendAccessToken,
  sendRefreshToken,
  generateRefreshToken,
} = require('../tokenFunctions');
const { users } = require('../../models');

module.exports = {
  signin: async (req, res) => {
    const { userId, password } = req.body;

    try {
      const data = await users.findOne({ where: { userId, password } });
      if (!data) {
        res.status(401).json({
          data: null,
          message: '아이디 혹은 비밀번호가 일치하지 않습니다.',
        });
      } else {
        const payload = data.dataValues;
        delete payload.password;
        const accessToken = generateAccessToken(payload);
        const refreshToken = generateRefreshToken(payload);

        sendAccessToken(res, accessToken);
        sendRefreshToken(res, refreshToken, payload);
      }
    } catch (err) {
      res.status(500).json({ message: '서버 에러' });
    }
  },

  signout: (req, res) => {
    res.clearCookie('accessToken');
    res.status(200).json({ data: null, message: '로그아웃에 성공하였습니다.' });
  },
};
