const fs = require('fs');
/*
beforeExit
disconnect
Exit
Message
rejectionHandled
uncaughtException
unhandledRejection
warning

 */

/*
  The 'beforeExit' event is emitted when Node.js empties its event loop
  and has no additional work to schedule. Normally, the Node.js process
  will exit when there is no work scheduled, but a listener registered
  on the 'beforeExit' event can make asynchronous calls, and thereby
  cause the Node.js process to continue.
*/

/*process.on('beforeExit', function (args) {
  console.log(`beforeExit : ${args}`);
  process.exit(999)
});*/

process.on('disconnect', function (args) {
  console.log(`disconnect : ${args}`)
});

process.on('exit', function (args) {
  console.log(`exit : ${args}`)
});

process.on('message', function (args) {
  console.log(`message : ${args}`)
});

//fs.createReadStream('non-existent-path');

process.on('uncaughtException', function (args) {
  console.log(`uncaughtException : ${args}`)
});

process.on('unhandledRejection', function (...args) {
  console.log(`unhandledRejection : ${args}`)
});


/*let p = new Promise((resolve, reject) => {
  reject();
});

p
  .then(() => console.log('promise resolved'));*/


process.on('warning', function (args) {
  console.log(`warning : ${args}`)
});