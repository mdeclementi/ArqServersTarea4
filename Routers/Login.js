const express = require('express');
const router = express.Router();
const loginController = require('../Controllers/Login')

router.post("", loginController.postLogin);
//router.post("", usersController.postLogin);

module.exports = router;