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
    const bankruptPlayers = req.body.bankruptPlayers;
    const Game = require("../models/game");
    Game.findById(gameID)
        .then(game => {
            game.players = players;
            game.turn = turn;
            game.bankruptPlayers = bankruptPlayers;
            game.save();
            res.send("success");
        }
    );
});

router.post("/changePlayer", function(req, res, next) {
    const gameID = req.body.game_id;
    const Game = require("../models/game");
    Game.findById(gameID)
        .then(game => {
            const players = game.players;
            const index = game.currentPlayer;
            let firstChange = true;
            while (firstChange || game.currentPlayer.bankrupt) {
                if (index < players.length - 1) {
                    game.currentPlayer = index + 1;
                } else {
                    game.currentPlayer = 0;
                }
                firstChange = false;
            }
            game.save();
            res.send(game.currentPlayer.toString());
        }
    );
});

module.exports = router;