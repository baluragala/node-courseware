// Make the logger as async logger that listens to log events and log them to console

// Make the logger class as EventEmitter child

let chalk = require('chalk');
let util = require('util');
let EventEmitter = require('events').EventEmitter;

//declare events
const INFO = 'info';
const DEBUG = 'debug';
const ERROR = 'error';

//register for events - is this a good place ?

function Logger() {
  let self = this;
  //export event constants
  self.INFO = INFO;
  self.DEBUG = DEBUG;
  self.ERROR = ERROR;

  //register for events - is this a good place ?
}

//register for events - is this a good place ?

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

//register for events - is this a good place ?

