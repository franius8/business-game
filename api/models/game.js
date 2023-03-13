const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GameSchema = new Schema({
    players: {
        type: Array,
        required: true
    },
    turn: {
        type: Number,
        required: true
    },
    currentPlayer: {
        type: Number,
        required: true
    },
    playersBankrupt: {
        type: Number,
        required: true
    },
    gameLogId: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("game", GameSchema);
