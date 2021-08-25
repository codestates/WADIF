const { generateAccessToken, sendAccessToken, isAuthorized } = require('../tokenFunctions');

module.exports = {
  signin: (res, req) => {
    res.send('hello')
  },

  signout: (res, req) => {
    res.send('hello')    
  }
}