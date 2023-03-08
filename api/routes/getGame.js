const express = require('express');
const router = express.Router();

router.get('/:id', function(req, res, next) {
    const gameID = req.params.id;
    const Game = require("../models/game");
    Game.findById(gameID)
    .then(game => {
        res.send(game);
    });
});

module.exports = router;