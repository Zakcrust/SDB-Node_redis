const data = require('../../data');

const get = function (_id) {
    return getAll().find( Cashback => Cashback._id == _id);
}

const getAll = function () {
    return data.Cashback;
}

module.exports = {
    get,
    getAll
};