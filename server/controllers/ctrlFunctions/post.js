const { generateAccessToken, sendAccessToken, isAuthorized } = require('../tokenFunctions');

module.exports = {
  writePost: (res, req) => {
    res.send('hello')
  },

  seePost: (res, req) => {
    res.send('hello')    
  },

  deletePost: (res, req) => {
    res.send('hello')    
  },

  updatePost: (res, req) => {
    res.send('hello')    
  },

  updateReaction: (res, req) => {
    res.send('hello')    
  },
}