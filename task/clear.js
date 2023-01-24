const del = require('del');

const clear = () => {
    return del('./public');
};

module.exports = clear;