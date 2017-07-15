//print console.logs in different colors
const chalk = require('chalk');
// use the date util module in this module
let dateUtils = require('./date-util');
// print current date time
console.log(chalk.blue(dateUtils.getDateTime()));
// print date time for 25th Jan 2017 6 PM
console.log(chalk.green(dateUtils.getDateTime(new Date('2017/01/25 13:00:12'))));

// print the days diff between today and Jun 8th 2001
console.log(chalk.red(dateUtils.daysTill(new Date('2001/06/08'))));

// print the month name for 25th November 2011
console.log(chalk.yellow(dateUtils.getMonthName(new Date('2011/11/25'))));