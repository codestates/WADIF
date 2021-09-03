const express = require('express');
const router = express.Router();
const controllers = require('../controllers/ctrlFunctions/main');
const { authChecker } = require('../middlewares/authChecker');

router.use(authChecker);
// get, post 등 작성
router.get('/', authChecker, controllers.hotTopic);

module.exports = router;
