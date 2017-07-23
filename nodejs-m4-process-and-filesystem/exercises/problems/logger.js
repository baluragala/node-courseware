/*
Create a logger that writes the logging messages into a file name patterned log_hhmmss in a folder created
by date

Example:
  2017-01-22
    log_123617.log
    log_132622.log

LOG OUTPUT :
Sun Jul 23 2017 12:36:12 GMT+0530 (India Standard Time) INFO - C:\Projects\zeolearn\courseware\nodejs\nodejs-m4-process-and-filesystem\exercises\solutions\use-logger.js - "This is info message"
Sun Jul 23 2017 12:36:12 GMT+0530 (India Standard Time) DEBUG - C:\Projects\zeolearn\courseware\nodejs\nodejs-m4-process-and-filesystem\exercises\solutions\use-logger.js - "This is debug message"
Sun Jul 23 2017 12:36:12 GMT+0530 (India Standard Time) ERROR - C:\Projects\zeolearn\courseware\nodejs\nodejs-m4-process-and-filesystem\exercises\solutions\use-logger.js -  "This is error message"

Instructions:
-------------
 - use fs, path and os modules
 - read log directory from environment variables if not provided default to current working directory
 - use path modules to generate os dependent file paths
 - use fs module to create directory if not exists for given run date
 */

let fs = require('fs');
let path = require('path');
let os = require('os');


function info(source, message) {
}

function debug(source, message) {
}

function error(source, message) {
}

exports = module.exports = {info, debug, error};