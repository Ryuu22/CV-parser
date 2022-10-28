module.exports = {
	replaceKeyWords: function (template, jsonData) {
        var tempCopy = template;
        for (let i = 0; i < findKeys(jsonData); i++) {

            const currentKey = Object.keys(jsonData)[i];
            if(jsonData[currentKey].constructor === Array) {
                //console.log(currentKey + " is an array");
            }
            else if (jsonData[currentKey].constructor === String) {
                tempCopy = findAndReplace(tempCopy, {
                    key : currentKey,
                    string : jsonData[currentKey]
                });
            }
        }
        return tempCopy;
	},
};

function findKeys(jsonData) {
    return Object.keys(jsonData).length;
}

function findAndReplace(template, object) {
    const key = "${" + object.key + "}";
    console.log("Replacing:  " + key, object.string);
    template = template.replace(key, object.string);
    return template;
}


