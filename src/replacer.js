module.exports = {
	replaceKeyWords: function (template, jsonData) {
        var tempCopy = template;
        for (let i = 0; i < findKeys(jsonData); i++) {
            const currentKey = Object.keys(jsonData)[i];
            // Key is an array of object
            if(jsonData[currentKey].constructor === Array) {
                const tempString = replaceArray(currentKey,jsonData[currentKey]);
                tempCopy = findAndReplace(tempCopy, {
                    key : currentKey,
                    string : tempString
                });
            }
            // Key is a just a string object
            else if (jsonData[currentKey].constructor === String) {
                tempCopy = findAndReplace(tempCopy, {
                    key : currentKey,
                    string : jsonData[currentKey]
                });
            }
            // Key is a complex object

        }
        return tempCopy;
	},
};

function findKeys(jsonData) {
    return Object.keys(jsonData).length;
}

function findAndReplace(template, object) {
    const key = "${" + object.key + "}";
    template = template.replaceAll(key, object.string);
    return template;
}

function replaceArray(currentKey, arr) {
    let tempString = "";

    if (currentKey === "languages") {
        for (let j = 0; j < arr.length; j++) {
            const element = arr[j];

            tempString += createLanguageBlock(element.lang, element.proficiency);
        }
    }
    else if (currentKey === "references") {
        for (let j = 0; j < arr.length; j++) {
            const element = arr[j];
            tempString += createReferenceBlock(element.name, element.contact);
        }      
    }
    else {
        for (let j = 0; j < arr.length; j++) {
            const element = arr[j];
            tempString += element;
        }
    }
    return tempString;
    
}

function createLanguageBlock(lang,level) {
    let lvlpct = level * 10;
    if(level < 0) lvlpct = 0;
    if(level > 10) lvlpct = 100;
    return `<p>${lang}</p><div class="bar_bg"><div class="bar_fg" style="width:${lvlpct}%"></div></div>`;
}

function createReferenceBlock( name,contact ) {
    return `<div class="box"><h5 class="employment_history">${name}</h5><h6 class="employment_history">${contact}</h6></div>`;
}