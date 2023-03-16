const express = require('express');
const Auction = require("../models/auction");
const router = express.Router();

router.post("/createAuction", (req, res, next) => {
    const Auction = require("../models/auction");
    const auction = new Auction({
        gameId: req.body.gameId,
        player: req.body.player,
        property: req.body.property,
        price: 0,
        highestBidder: -1,
        auctionFinished: false
    });
    auction.save().then(result => {
        res.status(200).json({
            auctionId: result._id
        });
    });
});

router.post('/increasePrice', (req, res, next) => {
    const Auction = require("../models/auction");
    Auction.findById(req.body.auctionId)
        .then(auction => {
            auction.price += parseInt(req.body.price);
            auction.highestBidder = req.body.highestBidder;
            auction.save();
            res.status(200).json({
                price: auction.price,
            });
        });
});

router.post("/changePlayer", (req, res, next) => {
    const playerIndex = req.body.playerIndex;
    const auctionId = req.body.auctionId;
    const Auction = require("../models/auction");
    Auction.findById(auctionId)
        .then(auction => {
            auction.player = playerIndex;
            auction.save();
            res.status(200).json({
                player: auction.player
            });
        });
});

router.post("/finishAuction", (req, res, next) => {
    const auctionId = req.body.auctionId;
    const Auction = require("../models/auction");
    Auction.findById(auctionId)
        .then(auction => {
            auction.auctionFinished = true;
            auction.save();
            res.status(200).json({
                auctionFinished: auction.auctionFinished
            });
        });
});

router.get('/getPrice/:id', (req, res, next) => {
    const auctionId = req.params.id;
    const Auction = require("../models/auction");
    Auction.findById(auctionId)
        .then(auction => {
            res.status(200).json({
                price: auction.price
            });
        });
});

router.get('/getPlayer/:id', (req, res, next) => {
    const auctionId = req.params.id;
    const Auction = require("../models/auction");
    Auction.findById(auctionId)
        .then(auction => {
            res.status(200).json({
                player: auction.player
            });
        });
});

router.get('/getProperty/:id', (req, res, next) => {
    const auctionId = req.params.id;
    const Auction = require("../models/auction");
    Auction.findById(auctionId)
        .then(auction => {
            res.status(200).json({
                property: auction.property
            });
        });
});

module.exports = router;