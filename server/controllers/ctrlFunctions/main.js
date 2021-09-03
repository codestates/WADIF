const { posts, users, postReaction } = require('../../models');
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
        data: await Promise.all(
          postData.map(async (el) => {
            el.dataValues.username = el.dataValues.user.username;
            delete el.dataValues.user;
            const likeReaction = await postReaction.findAndCountAll({
              where: { post_id: el.id, reaction: '1' },
            });
            const hateReaction = await postReaction.findAndCountAll({
              where: { post_id: el.id, reaction: '2' },
            });
            el.dataValues.postLikeCount = likeReaction.count;
            el.dataValues.postHateCount = hateReaction.count;
            return el;
          }),
        ),
        message: '조회수 정렬로 게시글을 조회하였습니다.',
      });
    } catch (err) {
      res.status(500).json({ message: '서버 에러' });
    }
  },
};
