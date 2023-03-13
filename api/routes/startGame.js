const express = require('express');
const Game = require("../models/game");
const router = express.Router();

router.post('/', function(req, res, next) {
    const GameLog = require("../models/gameLog");
    const gameLog = new GameLog({
        game_id: "",
        logEntries: []
    });
    let gameLogId;
    gameLog.save().then(result => {
        gameLogId = result._id;
        const Game = require("../models/game");
        const players = req.body
        const game = new Game({
            players: players,
            gameLogId: gameLogId,
            turn: 0,
            currentPlayer: 0,
            playersBankrupt: 0,
        });
        let id;
        game.save().then(result => {
            id = result._id;
            gameLog.game_id = id;
            gameLog.save();
            res.send(id.toString());
        });
    });

});

module.exports = router;