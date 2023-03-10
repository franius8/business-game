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

router.post("/updateTurn", function(req, res, next) {
    const gameID = req.body.game_id;
    const players = req.body.players;
    const turn = req.body.turn;
    const currentPlayer = req.body.currentPlayer;
    const Game = require("../models/game");
    Game.findById(gameID)
        .then(game => {
            game.players = players;
            game.turn = turn;
            game.currentPlayer = currentPlayer;
            game.save();
            res.send("success");
        }
    );
});

module.exports = router;