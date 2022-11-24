'use strict';
const fs = require("fs");

module.exports = {
	saveHTML: function (savefilename, data) {
        fs.writeFileSync(savefilename, data);
	},
};
