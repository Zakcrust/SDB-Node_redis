const cashbackService = require('../services/cashback.service');

const get = function (req, res) {
    res.send(cashbackService.get(req.params._id))
}

const getAll = function (req, res) {
    res.send(cashbackService.getAll())
}

module.exports = {
    get,
    getAll
};