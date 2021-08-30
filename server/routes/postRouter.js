const express = require('express');
const router = express.Router();
const postControllers = require('../controllers/ctrlFunctions/post');
const commentControllers = require('../controllers/ctrlFunctions/comment');
const { authChecker } = require('../middlewares/authChecker');

// post
router.post('/', authChecker, postControllers.writePost);
router.get('/:postId', authChecker, postControllers.seePost);
router.delete('/', postControllers.deletePost);
router.patch('/', postControllers.updatePost);
router.post('/reaction', postControllers.updateReaction);

// comment
router.post('/comments', commentControllers.writeComment);
router.get('/:postId/:opinion/comments', commentControllers.seeComment);
router.post('/comments/reaction', commentControllers.addReaction);

module.exports = router;
