const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/ctrlFunctions/user');
const authControllers = require('../controllers/ctrlFunctions/auth');
const { authChecker } = require('../middlewares/authChecker');

// sign up, sign in
router.post('/', userControllers.signup);
router.post('/signin', authControllers.signin);

router.use(authChecker);

// get, post 등 작성
router.post('/signout', authControllers.signout);
router.get('/posts', userControllers.myInfos);
router.post('/bookmarks', userControllers.addBookmarks);
router.delete('/bookmarks', userControllers.deleteBookmarks);
router.patch('/userInfo', userControllers.updateMyInfo);
router.post('/userInfo', userControllers.checkUserInfo);

module.exports = router;
