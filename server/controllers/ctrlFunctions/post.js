const {
  generateAccessToken,
  sendAccessToken,
  isAuthorized,
} = require('../tokenFunctions');
const { posts } = require('../../models');
const { comments } = require('../../models');

module.exports = {
  writePost: async (req, res) => {
    const { title, content } = req.body;
    const checkedData = isAuthorized(req);
    if (checkedData) {
      const user_id = checkedData.id;
      const postData = await posts.create({ user_id, title, content });
      res.status(200).json({
        data: { ...postData.dataValues },
        message: '게시글 작성이 완료되었습니다.',
      });
    } else {
      res.status(404).json('게시글 작성에 실패하였습니다.');
    }
  },

  seePost: async (req, res) => {
    const checkedData = isAuthorized(req);
    if (checkedData) {
      const postData = await posts.findOne({
        where: { id: req.params.postId },
      });
      await postData.update({ views: postData.views + 1 });
      const commentsData = await comments.findAll({
        where: { post_id: req.params.postId },
      });
      res.status(200).json({
        data: {
          ...postData.dataValues,
          comments: commentsData.map((el) => {
            return el.dataValues;
          }),
        },
        message: '게시글 조회에 성공하였습니다.',
      });
    } else {
      res.status(404).json('게시글을 찾을 수 없습니다.');
    }
  },

  deletePost: (req, res) => {
    res.send('hello');
  },

  updatePost: (req, res) => {
    res.send('hello');
  },

  updateReaction: (req, res) => {
    res.send('hello');
  },
};
