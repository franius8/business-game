const express = require('express');
const Game = require("../models/game");
const router = express.Router();

router.post('/addEntry', function(req, res, next) {
    const gameID = req.body.game_id;
    const entry = req.body.entry;
    const GameLog = require("../models/gameLog");
    GameLog.findOne({game_id: gameID})
        .then(gameLog => {
            gameLog.logEntries.push(entry);
            gameLog.save();
            res.send("success");
        });
});

module.exports = router;