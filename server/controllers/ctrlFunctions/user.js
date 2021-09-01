const { users, posts, bookmarks } = require('../../models');

module.exports = {
  myInfos: async (req, res) => {
    const { userInfo } = req.body;
    try {
      const postData = await posts.findAll({ where: { user_id: userInfo.id } });
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
        data: {
          userInfo,
          post: postData,
          comment: bookmarksData.map((el) => el.post),
        },
        message: '나의 게시글 찾기에 성공하였습니다.',
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
        res
          .status(200)
          .json({ data: null, message: '관심 목록에 추가되었습니다' });
      } else {
        res
          .status(404)
          .json({ data: null, message: '존재하지 않는 게시물입니다' });
      }
    } catch (err) {
      res.status(500).json({ message: '서버 에러' });
    }
  },

  deleteBookmarks: async (req, res) => {
    const { userInfo } = req.body;
    try {
      const destroyCheck = await bookmarks.destroy({
        where: { user_id: userInfo.id, post_id: req.params.postId },
      });

      if (destroyCheck) {
        res
          .status(200)
          .json({ data: null, message: '게시물이 삭제되었습니다.' });
      } else {
        res
          .status(404)
          .json({ data: null, message: '게시물을 찾을 수 없습니다.' });
      }
    } catch (err) {
      res.status(500).json({ message: '서버 에러' });
    }
  },

  updateMyInfo: async (req, res) => {
    const { userInfo, password, email, profile } = req.body;
    try {
      const userData = await users.findOne({
        where: { userId: userInfo.userId },
      });
      userData.update({ password, email, profile });
      res.status(200).json({
        data: userData,
        message: '개인정보 수정이 완료되었습니다.',
      });
    } catch (err) {
      res.status(500).json({ message: '서버 에러' });
    }
  },

  checkUserInfo: async (req, res) => {
    const { userId, password } = req.body;
    try {
      const userData = await users.findOne({
        where: { userId, password },
      });
      if (userData) {
        res.status(200).json({
          data: true,
          message: '아이디 혹은 비밀번호가 일치합니다.',
        });
      } else {
        res.status(400).json({
          data: false,
          message: '아이디 혹은 비밀번호가 일치하지 않습니다.',
        });
      }
    } catch (err) {
      res.status(500).json({ message: '서버 에러' });
    }
  },

  signup: async (req, res) => {
    const { userId, password, username, email } = req.body;
    try {
      const [result, created] = await users.findOrCreate({
        where: { userId },
        defaults: { password, username, email },
      });
      if (created) {
        res
          .status(201)
          .json({ data: null, message: '와디프에 오신 것을 환영합니다.' });
      } else {
        res
          .status(408)
          .json({ data: null, message: '이미 가입된 아이디입니다.' });
      }
    } catch (err) {
      res.status(500).json({ message: '서버 에러' });
    }
  },
};
