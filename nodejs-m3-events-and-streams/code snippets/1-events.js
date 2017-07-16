const EventEmitter = require("events").EventEmitter;
const eventEmitter = new EventEmitter();

/*
 //Example 1 - working with on

 //subscribing
 eventEmitter.on("STARTED", function () {
 console.log("event has occured - 1");
 }); //1

 eventEmitter.on("STARTED", function () {
 console.log("event has occured - 2");
 }); //2

 eventEmitter.on("STARTED", function () {
 console.log("event has occured - 3");
 }); //3

 //publishing
 eventEmitter.emit("STARTED");

 */

/*
 //Example 2 - working with on and event args

 eventEmitter.on("new-user", function (message) {
 console.log(1);
 console.log(message);
 });

 eventEmitter.on("new-user", function (message) {
 console.log(2);
 message.extras = 'extras'; //do not mutate objects
 console.log(message);
 });

 eventEmitter.on("new-user", function (message) {
 console.log(3);
 console.log(message);
 });

 eventEmitter.on("new-user", function (message) {
 console.log(4);
 console.log(message);
 });


 let message = {"message": "Hello eventing !!"}
 eventEmitter.emit("new-user", message);
 */

/*

 //Example 3 - working with on and event args

 //eventEmitter.emit("logged"); -- order matters

 eventEmitter.on("logged", function () {console.log("subscriber 1");});
 eventEmitter.on("logged", function () {console.log("subscriber 2");});
 eventEmitter.on("logged", function () {console.log("subscriber 3");});
 eventEmitter.on("logged", function () {console.log("subscriber 4");});
 eventEmitter.on("logged", function () {console.log("subscriber 5");});
 eventEmitter.on("logged", function () {console.log("subscriber 6");});
 eventEmitter.on("logged", function () {console.log("subscriber 7");});
 eventEmitter.on("logged", function () {console.log("subscriber 8");});

 //eventEmitter.emit("logged");


*/



/*
//Example 4 - one time event registration
 //once

 eventEmitter.once("firstConnection", function () { console.log("You'll never see this again"); });
 eventEmitter.emit("firstConnection");
 eventEmitter.emit("firstConnection");
 eventEmitter.emit("firstConnection");
 eventEmitter.emit("firstConnection");

 */
/*

 //Example 5 - remove listeners

 function onlyOnce () {
 console.log("You'll never seventEmitter this again");
 eventEmitter.removeListener("firstConnection", onlyOnce);
 }

 eventEmitter.on("firstConnection", onlyOnce);
 eventEmitter.emit("firstConnection");
 eventEmitter.emit("firstConnection");

 */
