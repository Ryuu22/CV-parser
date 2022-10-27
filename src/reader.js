'use strict';
const fs = require("fs");

module.exports = {
	readJson: function (filename) {
    	let jsonData = require(filename);
    	checkJsonData(jsonData);
    return jsonData;
	},
	readTemplate : function (filename) {
    	const buffer = fs.readFileSync(filename);
		var string = buffer.toString();
		return string;
   	}
};

function checkJsonData (data) {
	if(data === undefined) {
		throw 'data is undefined';
    }
    if(data.fullname === undefined | data.fullname === "") {
		throw 'fullname is undefined';
    }
}