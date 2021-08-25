const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/ctrlFunctions/user");
const authControllers = require("../controllers/ctrlFunctions/auth");

// get, post 등 작성
router.get("/posts", userControllers.myPosts);
router.get("/bookmarks", userControllers.myBookmarks);
router.post("/bookmarks", userControllers.addBookmarks);
router.delete("/bookmarks", userControllers.deleteBookmarks);
router.patch("/userInfo", userControllers.updateMyInfo);
router.post('/signup', userControllers.signup);

router.post('/signin', authControllers.signin);
router.post('/signout', authControllers.signout);

module.exports = router;