const {
  generateAccessToken,
  sendAccessToken,
  isAuthorized,
} = require('../tokenFunctions');
const { posts, comments, users } = require('../../models');

module.exports = {
  writePost: async (req, res) => {
    const { title, content, userInfo } = req.body;
    const postData = await posts.create({
      user_id: userInfo.id,
      title,
      content,
    });
    postData.dataValues.username = userInfo.username;
    console.log(postData);
    if (postData) {
      res.status(200).json({
        data: postData,
        message: '게시글 작성이 완료되었습니다.',
      });
    } else {
      res.status(404).json('게시글 작성에 실패하였습니다.');
    }
  },

  seePost: async (req, res) => {
    try {
      const postData = await posts.findOne({
        where: { id: req.params.postId },
        include: [
          {
            model: users,
            attributes: ['username'],
          },
        ],
      });

      if (postData) {
        await postData.update({ views: postData.views + 1 });
        postData.dataValues.username = postData.dataValues.user.username;
        delete postData.dataValues.user;

        const commentsData = await comments.findAll({
          include: [
            {
              model: users,
              attributes: ['username'],
            },
          ],
          where: { post_id: req.params.postId },
        });
        res.status(200).json({
          data: {
            ...postData.dataValues,
            comments: commentsData.map((el) => {
              el.dataValues.username = el.dataValues.user.username;
              delete el.dataValues.user;
              return el;
            }),
          },
          message: '게시글 조회에 성공하였습니다.',
        });
      } else {
        res.status(404).json('게시글을 찾을 수 없습니다.');
      }
    } catch (err) {
      res.status(500).json({ message: '서버 에러' });
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
