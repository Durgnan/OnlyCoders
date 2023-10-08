const path = require('path');

const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();

// /users/create-user => POST
router.post('/create-user', userController.createUser);



module.exports = router;