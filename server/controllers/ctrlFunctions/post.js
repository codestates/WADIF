const {
  generateAccessToken,
  sendAccessToken,
  isAuthorized,
} = require('../tokenFunctions');
const { posts, comments, users, postReaction } = require('../../models');

module.exports = {
  writePost: async (req, res) => {
    const { title, content, userInfo } = req.body;
    const postData = await posts.create({
      user_id: userInfo.id,
      title,
      content,
    });
    postData.dataValues.username = userInfo.username;
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

  deletePost: async (req, res) => {
    const { postId } = req.params;
    try {
      const destroyCheck = await posts.destroy({
        where: { id: Number(postId) },
      });
      if (destroyCheck) {
        res.status(200).json({ message: '게시물이 삭제되었습니다.' });
      } else {
        res.status(404).json({ message: '게시물을 찾을 수 없습니다.' });
      }
    } catch (err) {
      res.status(500).json({ message: '서버 에러' });
    }
  },

  updatePost: async (req, res) => {
    console.log(req.body);
    const { postId, title, content } = req.body;
    console.log(postId, title, content);
    try {
      const [updated] = await posts.update(
        {
          title,
          content,
        },
        { where: { id: postId } },
      );
      if (updated) {
        res.status(200).json({ message: '게시물이 수정되었습니다.' });
      } else {
        res.status(404).json({ message: '게시물을 찾을 수 없습니다.' });
      }
    } catch (err) {
      res.status(500).json({ message: '서버 에러' });
    }
  },

  addPostReaction: async (req, res) => {
    console.log(req.body);
    const { postId, reaction, userInfo } = req.body;

    try {
      const [result, created] = await postReaction.findOrCreate({
        where: { post_id: postId, user_id: userInfo.id },
        defaults: { reaction },
      });
      if (created) {
        res.status(200).json({ message: '게시물에 반응이 추가되었습니다.' });
      } else {
        const [updated] = await postReaction.update(
          {
            reaction,
          },
          {
            where: { post_id: postId, user_id: userInfo.id },
          },
        );
        res.status(200).json({ message: '게시물에 반응이 변경되었습니다.' });
      }
    } catch (err) {
      res.status(500).json({ message: '서버 에러' });
    }
  },
};
