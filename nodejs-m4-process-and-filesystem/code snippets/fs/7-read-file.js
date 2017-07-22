let fs = require('fs');
let fileName = process.argv[2];
fs.readFile(fileName, {encoding: 'UTF-8'}, function (err, data) {
  console.log(data);
});
