const express = require('express');
const router = express.Router();

let auctionPrice = 0;

router.get('/increasePrice', (req, res, next) => {
    auctionPrice += parseInt(req.query.price);
    res.status(200).json({
        price: auctionPrice
    });
});

module.exports = router;