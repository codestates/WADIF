const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/ctrlFunctions/user');
const authControllers = require('../controllers/ctrlFunctions/auth');
const { authChecker } = require('../middlewares/authChecker');

// sign up, sign in & out
router.post('/', userControllers.signup);
router.post('/signin', authControllers.signin);

router.use(authChecker);
router.post('/signout', authControllers.signout);

// myPage
router.get('/posts', authChecker, userControllers.myInfos);
// router.get('/bookmarks', authChecker, userControllers.myBookmarks);
router.post('/bookmarks', authChecker, userControllers.addBookmarks);
router.delete('/bookmarks', authChecker, userControllers.deleteBookmarks);
router.patch('/userInfo', authChecker, userControllers.updateMyInfo);
router.post('/userInfo', authChecker, userControllers.checkUserInfo);

module.exports = router;
