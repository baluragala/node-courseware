let fs = require('fs');
let path = require('path');
let os = require('os');

let logDirectory = process.env.LOG_DIR || __dirname;
let date = new Date();
let dateFolder = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
if (!fs.existsSync(path.join(logDirectory, dateFolder)))
  fs.mkdir(path.join(logDirectory, dateFolder));

let logFileName = `log_${date.getHours()}${date.getMinutes()}${date.getSeconds()}.log`;
let fileName = path.join(logDirectory, dateFolder, logFileName);

function info(source, message) {
  let date = new Date();
  fs.appendFile(fileName, `${date.toDateString()} ${date.toTimeString()} INFO - ${source} - ${JSON.stringify(message)}${os.EOL}`);
}

function debug(source, message) {
  let date = new Date();
  fs.appendFile(fileName, `${date.toDateString()} ${date.toTimeString()} DEBUG - ${source} - ${JSON.stringify(message)}${os.EOL}`);
}

function error(source, message) {
  let date = new Date();
  fs.appendFile(fileName, `${date.toDateString()} ${date.toTimeString()} ERROR - ${source} -  ${JSON.stringify(message)}${os.EOL}`);
}

exports = module.exports = {info, debug, error};