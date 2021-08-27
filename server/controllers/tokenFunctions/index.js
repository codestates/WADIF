const { sign, verify } = require('jsonwebtoken');

module.exports = {
  generateAccessToken: (data) => {
    return sign(data, process.env.ACCESS_SECRET, { expiresIn: "5m" });
  },

  sendAccessToken: (res, accessToken) => {
    res.json({ data: { accessToken }, message: "ok" });
  },
  
  isAuthorized: (req) => {
    const authorization = req.headers["authorization"];
    if (!authorization) {
      return null;
    }
    const token = authorization.split(" ")[1];
    try {
      return verify(token, process.env.ACCESS_SECRET);
    } 
    catch (err) {
      return null;
    }
  }
};