const {generateAccessToken, sendAccessToken, isAuthorized} = require('../tokenFunctions');
const {users} = require('../../models');

module.exports = {
  myPosts: (req, res) => {
    res.send('hello')
  },

  myBookmarks: (req, res) => {
    res.send('hello')
  },

  addBookmarks: (req, res) => {
    res.send('hello')
  },

  deleteBookmarks: (req, res) => {
    res.send('hello')
  },

  updateMyInfo: (req, res) => {
    res.send('hello')
  },

  signup: async (req, res) => {
  }
}