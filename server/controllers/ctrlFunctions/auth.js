const { generateAccessToken, sendAccessToken, isAuthorized } = require('../tokenFunctions');

module.exports = {
  signin: (req, res) => {
    res.send('hello')
  },

  signout: (req, res) => {
    res.send('hello')    
  }
}