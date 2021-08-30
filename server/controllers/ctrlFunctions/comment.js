const {
  generateAccessToken,
  sendAccessToken,
  isAuthorized,
} = require('../tokenFunctions');
const { users, comments } = require('../../models');

module.exports = {
  writeComment: async (req, res) => {
    console.log(req.body);
    const user_id = req.body.userInfo.id;
    const { post_id, content, opinion } = req.body;
    try {
      const commentData = await comments.create({
        user_id,
        post_id,
        opinion,
        content,
      });
      console.log(commentData);
      if (commentData) {
        res
          .status(201)
          .json({ data: commentData, message: '의견이 작성되었습니다.' });
      } else {
        res.status(404).json({ message: '의견 작성에 실패하였습니다.' });
      }
    } catch (e) {
      throw e;
    }
  },

  seeComment: async (req, res) => {
    console.log(req);
    const { postId, opinion } = req.params;

    try {
      const commentsData = await comments.findAll({
        include: [
          {
            model: users,
            attributes: ['username'],
          },
        ],
        where: { post_id: postId, opinion },
      });
      console.log(commentsData);
      res.status(200).json({
        data: commentsData.map((el) => {
          el.dataValues.username = el.dataValues.user.username;
          delete el.dataValues.user;
          return el;
        }),
        message: '의견 조회에 성공하였습니다.',
      });
    } catch (e) {
      res.status(404).send('게시글이 이미 삭제 되었거나 존재하지 않습니다.');
    }
  },

  addReaction: (req, res) => {
    res.send('hello');
  },
};
