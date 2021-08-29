const {
  generateAccessToken,
  sendAccessToken,
  isAuthorized,
} = require('../tokenFunctions');
const { users } = require('../../models');

module.exports = {
  myPosts: (req, res) => {
    res.send('hello');
  },

  myBookmarks: (req, res) => {
    res.send('hello');
  },

  addBookmarks: (req, res) => {
    res.send('hello');
  },

  deleteBookmarks: (req, res) => {
    res.send('hello');
  },

  updateMyInfo: (req, res) => {
    res.send('hello');
  },

  signup: async (req, res) => {
    const { userId, password, username, email } = req.body;

    try {
      const [result, created] = await users.findOrCreate({
        where: { userId },
        defaults: { password, username, email },
      });
      if (created) {
        res.status(201).send({ message: '와디프에 오신 것을 환영합니다.' });
      } else {
        res.status(408).send({ message: '이미 가입된 아이디입니다.' });
      }
    } catch (e) {
      res.status(500).send('서버 에러');
    }
  },
};
