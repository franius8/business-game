const express = require('express');
const router = express.Router();

router.post('/', function(req, res, next) {
    const Game = require("../models/game");
    const players = req.body
    const game = new Game({
        players: players
    });
    let id;
    game.save().then(result => {
        id = result._id;
        res.send(id.toString());
    });
});

module.exports = router;