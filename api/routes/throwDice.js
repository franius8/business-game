const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;
    res.send({dice1, dice2})
});

module.exports = router;