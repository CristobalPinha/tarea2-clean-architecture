const express = require('express');
const HelloController = require('../interfaces/HelloController');

const router = express.Router();
const helloController = new HelloController();

router.get('/hello', (req, res) => helloController.getHello(req, res));

module.exports = router;