const {
  generateAccessToken,
  sendAccessToken,
  isAuthorized,
} = require('../tokenFunctions');
const { users, posts, bookmarks } = require('../../models');

module.exports = {
  myPosts: async (req, res) => {
    const { userInfo } = req.body;
    try {
      const postData = await posts.findAll({ where: { user_id: userInfo.id } });
      res.status(200).json({
        data: postData,
        message: '나의 게시글 찾기에 성공하였습니다.',
      });
    } catch (err) {
      res.status(500).json({ message: '서버 에러' });
    }
  },

  myBookmarks: async (req, res) => {
    const { userInfo } = req.body;
    try {
      const bookmarksData = await bookmarks.findAll({
        include: [
          {
            model: posts,
            attributes: [
              'id',
              'title',
              'content',
              'views',
              'createdAt',
              'updatedAt',
            ],
          },
        ],
        where: { user_id: userInfo.id },
      });

      res.status(200).json({
        data: bookmarksData.map((el) => el.post),
        message: '관심목록 찾기에 성공하였습니다.',
      });
    } catch (err) {
      res.status(500).json({ message: '서버 에러' });
    }
  },

  addBookmarks: async (req, res) => {
    const { userInfo, postId } = req.body;
    try {
      const postData = await posts.findOne({ where: { id: postId } });
      if (postData) {
        await bookmarks.create({
          user_id: userInfo.id,
          post_id: postId,
        });
        res.status(200).json({ message: '관심 목록에 추가되었습니다' });
      } else {
        res.status(404).json({ message: '존재하지 않는 게시물입니다' });
      }
    } catch (err) {
      res.status(500).json({ message: '서버 에러' });
    }
  },

  deleteBookmarks: async (req, res) => {
    const { userInfo, postId } = req.body;
    try {
      const destroyCheck = await bookmarks.destroy({
        where: { user_id: userInfo.id, post_id: postId },
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
