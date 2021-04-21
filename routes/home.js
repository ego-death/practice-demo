const express = require('express');
const router = express.Router();
const homeCont = require('../controls/homeCont');

router.get('/', homeCont.getHomePage);

module.exports = router;