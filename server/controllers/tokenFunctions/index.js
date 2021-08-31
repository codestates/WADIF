const { sign } = require('jsonwebtoken');

module.exports = {
  generateAccessToken: (data) => {
    return sign(data, process.env.ACCESS_SECRET, { expiresIn: '15d' });
  },

  generateRefreshToken: (data) => {
    return sign(data, process.env.REFRESH_SECRET, { expiresIn: '30d' });
  },

  sendAccessToken: (res, accessToken) => {
    res.json({ token: accessToken, message: 'ok' });
  },

  sendRefreshToken: (res, refreshToken) => {
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
    });
  },
};
