const { users, comments, commentReaction } = require('../../models');

module.exports = {
  writeComment: async (req, res) => {
    const user_id = req.body.userInfo.id;
    const { postId, content, opinion } = req.body;

    try {
      const commentData = await comments.create({
        user_id,
        post_id: postId,
        opinion,
        content,
      });
      if (commentData) {
        res.status(201).json({
          data: commentData,
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
    } catch (err) {
      res
        .status(404)
        .json({ message: '게시글이 이미 삭제 되었거나 존재하지 않습니다.' });
    }
  },

  addReaction: async (req, res) => {
    const { userInfo, commentId, reaction } = req.body;
    try {
      const [result, created] = await commentReaction.findOrCreate({
        where: { comment_id: commentId, user_id: userInfo.id },
        defaults: { reaction },
      });

      if (created) {
        await commentReaction.update(
          { reaction },
          { where: { comment_id: commentId, user_id: userInfo.id } },
        );
        res
          .status(201)
          .json({ data: result, message: '리액션이 생성되었습니다.' });
      } else {
        await commentReaction.update(
          { reaction },
          { where: { comment_id: commentId, user_id: userInfo.id } },
        );
        res
          .status(200)
          .json({ data: result, message: '리액션이 변경되었습니다.' });
      }
    } catch (err) {
      res.status(500).json({ message: '서버 에러' });
    }
  },
};
