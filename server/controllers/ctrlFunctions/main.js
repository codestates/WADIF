const {
  generateAccessToken,
  sendAccessToken,
  isAuthorized,
} = require('../tokenFunctions');
const { posts, users } = require('../../models');
module.exports = {
  hotTopic: async (req, res) => {
    try {
      const postData = await posts.findAll({
        order: [['views', 'DESC']],
        include: [
          {
            model: users,
            attributes: ['username'],
          },
        ],
      });
      res.status(200).json({
        data: postData.map((el) => {
          el.dataValues.username = el.dataValues.user.username;
          delete el.dataValues.user;
          return el;
        }),
        token: req.body.accessToken,
        message: '조회수 정렬로 게시글을 조회하였습니다.',
      });
    } catch (e) {
      res.send('error');
      throw e;
    }
  },
};
