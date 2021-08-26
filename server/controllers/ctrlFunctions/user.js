const { generateAccessToken, sendAccessToken, isAuthorized } = require('../tokenFunctions');

module.exports = {
  myPosts: (res, req) => {
    res.send('hello')
  },

  myBookmarks: (res, req) => {
    res.send('hello')    
  },

  addBookmarks: (res, req) => {
    res.send('hello')    
  },

  deleteBookmarks: (res, req) => {
    res.send('hello')    
  },

  updateMyInfo: (res, req) => {
    res.send('hello')    
  },

  signup: (res, req) => {
    res.send('hello')    
  }
}