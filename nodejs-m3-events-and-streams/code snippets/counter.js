let util = require("util");
let EventEmitter = require("events").EventEmitter;

function Counter(interval, limit) {
  let self = this;
  process.nextTick(function() {
    let count = 0;
    //console.log('Emitting start event');
    self.emit("start");
    let intervalRef = setInterval(function() {
      //console.log('Emitting count event');
      self.emit("count", ++count);
      if (count === limit) {
        //console.log('Emitting end event');
        self.emit("end");
        clearInterval(intervalRef); // cleanup
      }
    }, interval);
  });
}

util.inherits(Counter, EventEmitter);

module.exports = Counter;
