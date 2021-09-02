const { verify } = require('jsonwebtoken');
const {
  generateAccessToken,
  sendAccessToken,
} = require('../controllers/tokenFunctions');
const { users, tokens } = require('../models');
module.exports = {
  authChecker: async (req, res, next) => {
    try {
      const accessToken = req.cookies.accessToken;
      const accessTokenData = verify(
        accessToken,
        process.env.ACCESS_SECRET,
        (err, data) => {
          if (err) {
            return null;
          } else {
            return data;
          }
        },
      );

      // case1: accessToken의 만료시간이 60초도 안남았을 때
      if (accessTokenData.exp - Math.floor(Date.now() / 1000) < 300) {
        const user_id = accessTokenData.id;
        const refreshToken = await tokens.findOne({ where: { user_id } });
        const refreshTokenData = verify(
          refreshToken.refreshToken,
          process.env.REFRESH_SECRET,
          (err, data) => {
            if (err) {
              return null;
            } else {
              return data;
            }
          },
        );

        // console.log('60초 미만! 한시가급해유~');
        const { userId } = refreshTokenData;
        const data = await users.findOne({ where: { userId } });
        if (!data) {
          return res.json({
            data: null,
            message: '일치하는 유저 정보가 없습니다.',
          });
        } else {
          delete data.dataValues.password;
          const payload = data.dataValues;

          const newAccessToken = generateAccessToken(payload);
          sendAccessToken(res, newAccessToken);
          req.body.userInfo = payload;
          next();
        }
      } else if (accessTokenData) {
        // case2: access token이 60초 이상 남은 상태이면서 유효한 경우
        // console.log('60초 이상! 널널해유~');
        const user_id = accessTokenData.id;
        const userInfo = await users.findOne({
          where: { id: user_id },
        });
        req.body.userInfo = userInfo;
        next();
      }
    } catch (err) {
      // case3: accesss token이 완전 만료된 경우
      res.clearCookie('accessToken');
      res.json({
        data: null,
        message: '토큰이 모두 만료 되었으니, 다시 로그인해주세요',
      });
    }
  },
};
