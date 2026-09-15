const express = require("express");
const router = express.Router();
const resourcesController = require('../controllers/resources');

router.get('/resources', resourcesController.getResourcesPage);

module.exports = router;
