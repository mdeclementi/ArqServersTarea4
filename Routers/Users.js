const express = require('express');
const router = express.Router();
const usersController = require('../Controllers/Users')

router.post("", usersController.postCreateUser);
router.get("/:id", usersController.getActivarUser);

module.exports = router;