let chalk = require('chalk');

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

exports.info = info;
module.exports.debug = debug;
exports.error = error;