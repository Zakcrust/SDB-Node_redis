const express = require('express');
const router = express.Router({ mergeParams: true });

const cashbackController = require('../controllers/cashback.controller');

router.route('/')
    .get(cashbackController.getAll);

router.route('/:_id')
    .get(cashbackController.get);

module.exports = router;