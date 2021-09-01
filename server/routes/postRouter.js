const express = require('express');
const router = express.Router();
const postControllers = require('../controllers/ctrlFunctions/post');
const commentControllers = require('../controllers/ctrlFunctions/comment');
const { authChecker } = require('../middlewares/authChecker');

router.use(authChecker);
// post
router.post('/', postControllers.writePost);
router.get('/:postId', postControllers.seePost);
router.delete('/:postId', postControllers.deletePost);
router.patch('/', postControllers.updatePost);
router.post('/reaction', postControllers.addPostReaction);

// comment
router.post('/comments', commentControllers.writeComment);
router.get('/:postId/:opinion/comments', commentControllers.seeComment);
router.post('/comments/reaction', commentControllers.addReaction);

module.exports = router;
