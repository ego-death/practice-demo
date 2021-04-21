const express = require('express');
const router = express.Router();
const dsCont = require('../controls/dashboardCont');

router.get('/', dsCont.getHomePage);

module.exports = router;

