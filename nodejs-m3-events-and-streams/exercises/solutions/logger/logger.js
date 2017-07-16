let chalk = require('chalk');
let util = require('util');
let EventEmitter = require('events').EventEmitter;

//declare events
const INFO = 'info';
const DEBUG = 'debug';
const ERROR = 'error';

function Logger() {
  let self = this;
  //exporting event constants
  self.INFO = INFO;
  self.DEBUG = DEBUG;
  self.ERROR = ERROR;

  //registering for events
  self.on(INFO, info);
  self.on(DEBUG, debug);
  self.on(ERROR, error);
}

function info(source, message) {
  let date = new Date();
  console.log(chalk.green(`${date.toDateString()} ${date.toTimeString()} INFO ${JSON.stringify(message)}`));
}

function debug(source, message) {
  let date = new Date();
  console.log(chalk.blue(`${date.toDateString()} ${date.toTimeString()} DEBUG ${JSON.stringify(message)}`));
}

function error(source, message) {
  let date = new Date();
  console.log(chalk.red(`${date.toDateString()} ${date.toTimeString()} ERROR ${JSON.stringify(message)}`));
}

util.inherits(Logger, EventEmitter);
exports = module.exports = Logger;