module.exports = {
	replaceKeyWords: function (template, jsonData) {
        var tempCopy = template;
        for (let i = 0; i < findKeys(jsonData); i++) {
            const currentKey = Object.keys(jsonData)[i];

            if(jsonData[currentKey].constructor === Array) {
                let tempString = "";
                for (let j = 0; j < jsonData[currentKey].length; j++) {
                    const element = jsonData[currentKey][j];
                    tempString += element;
                }
                tempCopy = findAndReplace(tempCopy, {
                    key : currentKey,
                    string : tempString
                });
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
    template = template.replaceAll(key, object.string);
    return template;
}


