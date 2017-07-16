//  Convert Counter.js and 3-use-counter.js programs from event based to
//  callback based

let Counter = require('./counter');

function processMessage(err, message) {
  if (err) {
    console.error(err);
    return;
  }
  if (message === 'start') {
    console.log("Counter Generation Started");
  } else if (message === 'end') {
    console.log("Counter Generation Completed");
  } else {
    console.log(`Count :${message}`);
  }
}

let counter1 = new Counter(1000, 10, processMessage);
let counter2 = new Counter(5000, 10, processMessage);