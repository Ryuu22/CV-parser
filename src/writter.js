'use strict';
const fs = require("fs");

module.exports = {
	saveHTML: function (data) {
        fs.writeFileSync("output/cv.html", data);
	},
};
