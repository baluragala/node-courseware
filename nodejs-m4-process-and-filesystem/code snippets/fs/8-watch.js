let fs = require('fs');
let filePath = __dirname;
fs.watch(filePath, function (event, filename) {
  console.log('--------------------------------------');
  console.log('File Name :' + JSON.stringify(filename));
  console.log('Event : ' + JSON.stringify(event));
});