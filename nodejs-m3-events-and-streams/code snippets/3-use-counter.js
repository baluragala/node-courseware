let Counter = require("./counter");

let counter = new Counter(1000, 10);
console.log("Registering for start", counter);
counter.on("start", function() {
  console.log("Counter Generation Started");
});
console.log("Registering for count");
counter.on("count", function(counterValue) {
  console.log(`Count :${counterValue}`);
});
console.log("Registering for end");
counter.on("end", function() {
  console.log("Counter Generation Completed");
});
