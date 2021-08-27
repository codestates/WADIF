const { generateAccessToken, sendAccessToken, isAuthorized } = require('../tokenFunctions');

module.exports = {
  writePost: (req, res) => {
    res.send('hello')
  },

  seePost: (req, res) => {
    res.send('hello')    
  },

  deletePost: (req, res) => {
    res.send('hello')    
  },

  updatePost: (req, res) => {
    res.send('hello')    
  },

  updateReaction: (req, res) => {
    res.send('hello')    
  },
}