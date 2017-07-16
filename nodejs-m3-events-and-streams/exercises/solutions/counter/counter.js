//  Raise an error via callback if interval value > 2000
//  pass the event name or counter value as success param to callback
// event names to use - start, end, value of counter

function Counter(interval, limit, callback) {
  let self = this;
  if (interval > 2000) {
    let error = new Error('Cannot instantiate counter. interval value must be between 1000 and 2000');
    callback(error, null);
    return;
  }
  process.nextTick(function () {
      let count = 0;
      callback(null, 'start');
      let intervalRef = setInterval(function () {
        callback(null, ++count);
        if (count === limit) {
          callback(null, 'end');
          clearInterval(intervalRef); // cleanup
        }
      }, interval);
    }
  )
}
module.exports = Counter;