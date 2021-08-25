const express = require("express");
const router = express.Router();
const controllers = require("../controllers/ctrlFunctions/main");

// get, post 등 작성
router.get("?sort=:views", controllers.hotTopic);

module.exports = router;