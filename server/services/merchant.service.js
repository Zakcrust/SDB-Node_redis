const data = require('../../data');

const get = function (_id) {
    return getAll().find(Merchant => Merchant._id == _id);
}

const getAll = function () {
    return data.Merchant;
}

module.exports = {
    get,
    getAll
};