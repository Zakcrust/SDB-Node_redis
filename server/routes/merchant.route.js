const express = require('express');
const router = express.Router({ mergeParams: true });

const merchantController = require('../controllers/merchant.controller');

router.route('/')
    .get(merchantController.getAll);

router.route('/:_id')
    .get(merchantController.get);

module.exports = router;