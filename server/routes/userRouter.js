const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/ctrlFunctions/user');
const authControllers = require('../controllers/ctrlFunctions/auth');
const { authChecker } = require('../middlewares/authChecker');

// get, post 등 작성
router.get('/posts', authChecker, userControllers.myPosts);
router.get('/bookmarks', authChecker, userControllers.myBookmarks);
router.post('/bookmarks', authChecker, userControllers.addBookmarks);
router.delete('/bookmarks', authChecker, userControllers.deleteBookmarks);
router.patch('/userInfo', userControllers.updateMyInfo);
router.post('/', userControllers.signup);

router.post('/signin', authControllers.signin);
router.post('/signout', authChecker, authControllers.signout);

module.exports = router;
