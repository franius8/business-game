const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GameLogSchema = new Schema({
    game_id: {
        type: String,
        required: false
    },
    logEntries: {
        type: Array,
        required: true
    }
});

module.exports = mongoose.model("gameLog", GameLogSchema);