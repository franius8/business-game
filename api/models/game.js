const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GameSchema = new Schema({
    players: {
        type: Array,
        required: true
    },
});

module.exports = mongoose.model("game", GameSchema);
