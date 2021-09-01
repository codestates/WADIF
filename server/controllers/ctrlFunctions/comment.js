const {
  generateAccessToken,
  sendAccessToken,
  isAuthorized,
} = require('../tokenFunctions');
const { users, comments, commentReaction } = require('../../models');

module.exports = {
  writeComment: async (req, res) => {
    const user_id = req.body.userInfo.id;
    const { postId, content, opinion, accessToken } = req.body;
    try {
      const commentData = await comments.create({
        user_id,
        post_id: postId,
        opinion,
        content,
      });
      if (commentData) {
        res.status(201).json({
          data: { ...commentData.dataValues, token: req.body.accessToken },

          message: '의견이 작성되었습니다.',
        });
      } else {
        res.status(404).json({ message: '의견 작성에 실패하였습니다.' });
      }
    } catch (err) {
      res.status(500).json({ message: '서버 에러' });
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
        data: {
          comment: await Promise.all(
            commentsData.map(async (el) => {
              el.dataValues.username = el.dataValues.user.username;
              delete el.dataValues.user;
              console.log(el.dataValues);
              const countReactions = await commentReaction.findAndCountAll({
                where: { comment_id: el.dataValues.id, reaction: '1' },
              });
              el.dataValues.reactionCount = countReactions.count;
              return el;
            }),
          ),
          token: req.body.accessToken,
        },
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
