const merchantService = require('../services/merchant.service');

const get = function (req, res) {
    res.send(merchantService.get(req.params._id))
}

const getAll = function (req, res) {
    res.send(merchantService.getAll())
}

module.exports = {
    get,
    getAll
};