const logger = require('./logger.js');
const reader = require('./reader.js');
  
logger.separator();
logger.success("CV-Parser started Version 1.0");
logger.separator();


var jsonData = {};
var template = "";

// 0. Read flags

// 1. Attempt to read .json file
try {
    jsonData = reader.readJson("../material/English.json");
    logger.success(`Hello ${data.fullname}`);
} catch (error) {
    logger.error(error);   
}

// 2. Attempt to read HTML template

try {
    template = reader.readTemplate("material/index.html");
} catch (error) {
    logger.error(error);   
}

// 3. Replace HTML template tags with JSON input

// 4. Save as HTML file