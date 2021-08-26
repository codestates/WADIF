const { generateAccessToken, sendAccessToken, isAuthorized } = require('../tokenFunctions');

module.exports = {
  writeComment: (res, req) => {
    res.send('hello')
  },

  seeComment: (res, req) => {
    res.send('hello')    
  },

  addReaction: (res, req) => {
    res.send('hello')    
  }
}