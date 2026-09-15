const express = require("express");
const router = express.Router();
const eventsController = require('../controllers/events');

router.get('/events', eventsController.getEventsPage);

module.exports = router;
