'use strict';
module.exports = {
	readTemplateName: function () {
        let data = findFlag("--template");
        if(data === false ) {
            return "";
        }
        return data;
	},
	readDataFileName: function () {
        let data = findFlag("--data");
        if(data === false ) {
            return "";
        }
        return data;
	},
};

function findFlag(flagName) {
    const args = process.argv;
    for (let i = 0; i < args.length; i++) {
        const element = args[i];
        if(element === flagName) {
            return args[i+1];
        }
    }
    return false;
}
