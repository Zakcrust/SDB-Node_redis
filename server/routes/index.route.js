const express = require('express');
const cars = require('./cars.route');
const accounts = require('./accounts.route');
const merchants = require('./merchant.route');
const cashbacks = require('./cashback.route');

const router = express.Router();

router.use('/cars', cars);
router.use('/accounts', accounts);
router.use('/merchants', merchants);
router.use('/cashbacks', cashbacks);

module.exports = router;