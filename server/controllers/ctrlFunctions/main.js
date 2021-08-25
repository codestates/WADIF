const { generateAccessToken, sendAccessToken, isAuthorized } = require('../tokenFunctions');

module.exports = {
  hotTopic: (req, res) => {
    res.send('hello')
  }
}