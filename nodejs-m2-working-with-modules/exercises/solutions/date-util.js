// make below functions exported to outside world.

function getDateTime(givenDate) {
  // returns date and time as string
  // if givenDate parameter is undefined then use current date else provide the format
  // for givenDate
  if (!givenDate)
    givenDate = new Date();
  let formattedDateTime = `${givenDate.toDateString()} ${givenDate.toTimeString()}`;
  return formattedDateTime;
}

function daysTill(givenDate) {
  // returns the days between current day and given date
  // if givenDate is undefined throw error
  let timeDiff = Math.abs(givenDate.getTime() - new Date().getTime());
  let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  return diffDays;
}

function getMonthName(givenDate) {
  // return the month name in full for a given date
  if (givenDate instanceof Date) {
    let month = givenDate.getMonth();
    switch (month) {
      case 0:
        return "January";
      case 1:
        return "February";
      case 2:
        return "March";
      case 3:
        return "April";
      case 4:
        return "May";
      case 5:
        return "June";
      case 6:
        return "July";
      case 7:
        return "August";
      case 8:
        return "September";
      case 9:
        return "October";
      case 10:
        return "November";
      case 11:
        return "December";
    }
  } else {
    throw new Error('Invalid Date');
  }
}

exports = module.exports = {getDateTime, daysTill, getMonthName};