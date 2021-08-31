const { verify } = require('jsonwebtoken');
const { generateAccessToken } = require('../controllers/tokenFunctions');
const { users } = require('../models');
module.exports = {
  authChecker: async (req, res, next) => {
    // case1: access token과 refresh token 모두가 만료된 경우 -> 에러 발생
    // case2: access token은 만료됐지만, refresh token은 유효한 경우 ->  access token 재발급
    // case4: accesss token과 refresh token 모두가 유효한 경우 -> 바로 다음 미들웨어로 넘긴다.

    const authorization = req.headers['authorization'];
    // 토큰이 아예 발급되지 않아서 headers에 없을때
    if (!authorization) {
      res.json({ data: null, message: '토큰이 필요합니다.' });
    }

    const accessToken = authorization.split(' ')[1];
    const refreshToken = req.cookies.refreshToken;

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
    const refreshTokenData = verify(
      refreshToken,
      process.env.REFRESH_SECRET,
      (err, data) => {
        if (err) {
          return null;
        } else {
          return data;
        }
      },
    );

    if (!accessTokenData) {
      if (!refreshTokenData) {
        // case1 : access, refresh 모두 만료됬을 경우
        res.json({
          data: null,
          message: '토큰이 모두 만료 되었으니, 다시 로그인해주세요',
        });
        // res.redirect('/');
      } else {
        //case2: aceess는 만료됐지만, refresh는 유효한 경우
        const { userId } = refreshTokenData;
        const data = await users.findOne({ where: { userId } });
        if (!data) {
          return res.json({
            data: null,
            message: '일치하는 유저 정보가 없습니다.',
          });
        }
        delete data.dataValues.password;
        const payload = data.dataValues;

        const newAccessToken = generateAccessToken(payload);
        req.body.userInfo = payload;
        req.body.accessToken = newAccessToken;
        // resendAccessToken(res, newAccessToken, payload);
        next();
      }
    } else {
      // case4: accesss token과 refresh token 모두가 유효한 경우
      req.body.userInfo = accessTokenData;
      req.body.accessToken = null;
      next();
    }
  },
};
