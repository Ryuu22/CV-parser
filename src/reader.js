'use strict';
module.exports = {
  readJson: function (filename) {
    let jsonData = require(filename);
    checkJsonData(jsonData);
    return jsonData;
  },
};

function checkJsonData (data) {
    if(data === undefined) {
        throw 'data is undefined';
    }
    if(data.fullname === undefined | data.fullname === "") {
        throw 'fullname is undefined';
    }
}