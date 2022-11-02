'use strict';
const fs = require("fs");

module.exports = {
	saveHTML: function (data) {
        console.log("saving");
        fs.writeFileSync("output/cv.html", data);
	},
};
