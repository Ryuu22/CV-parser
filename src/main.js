const flagger = require('./flagger');
const logger = require('./logger.js');
const reader = require('./reader.js');
const replacer = require('./replacer.js');
const writter = require('./writter.js');
  
logger.separator();
logger.success("CV-Parser started Version 1.0");
logger.separator();

let jsonData = {};
let template = "";
let jsonFileName = "";
let templateName = "";
let saveFileName = "output/cv.html";

// 0. Read flags
try {
    //Set obligatory flags
    templateName = flagger.readTemplateName();
    jsonFileName = flagger.readDataFileName();

    // Set optional flags
    const outputFileName = flagger.readOutPutFileName();
    if(outputFileName !== "") saveFileName = outputFileName;

} catch (error) {
    logger.error(error);
}

// 1. Attempt to read .json file
logger.print("Attempting to open " + jsonFileName);
try {
    jsonData = reader.readJson(jsonFileName);
    logger.success(`Hello ${jsonData.fullname}`);
} catch (error) {
    logger.error(error); 
    logger.error("Closing Application ");
    process.exit();
}

// 2. Attempt to read HTML template
try {
    template = reader.readTemplate(templateName);
    logger.success(`HTML template succesfully loaded...`);
} catch (error) {
    logger.error(error);   
}

// 3. Replace HTML template tags with JSON input
logger.print(`Replacing custom keys...`);
let output = "";
try {
    output = replacer.replaceKeyWords(template, jsonData);
    logger.success(`Succesfully replaced keys`);

} catch (error) {
    logger.error(error);   
}

// 4. Save as HTML file

try {
    writter.saveHTML(saveFileName, output);
    logger.success(`Succesfully saved on ${saveFileName}`);
} catch (error) {
    logger.error(error);
}