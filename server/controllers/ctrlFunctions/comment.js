const { generateAccessToken, sendAccessToken, isAuthorized } = require('../tokenFunctions');

module.exports = {
  writeComment: (req, res) => {
    res.send('hello')
  },

  seeComment: (req, res) => {
    res.send('hello')    
  },

  addReaction: (req, res) => {
    res.send('hello')    
  }
}