const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AuctionSchema = new Schema({
    gameId: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    player: {
        type: Number,
        required: true
    },
    highestBidder: {
        type: Number,
        required: true
    },
    property: {
        type: Number,
        required: true
    },
    auctionFinished: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model("auction", AuctionSchema);