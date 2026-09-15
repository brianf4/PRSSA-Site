const express = require("express");
const router = express.Router();
const joinController = require('../controllers/join');

router.get('/join', joinController.getJoinPage);

module.exports = router;
