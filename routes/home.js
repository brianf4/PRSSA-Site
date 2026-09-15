//Hangle the initial GET request for the homepage
//Handles POST method request for adding a new item

const express = require("express");
const router = express.Router();
const homeController = require('../controllers/home');

router.get('/', homeController.getHomePage) //read

module.exports = router
