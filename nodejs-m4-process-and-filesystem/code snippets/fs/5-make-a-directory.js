const fs = require('fs');
let dirName = process.argv[2];
fs.mkdir(dirName, function (err, data) {
  console.log(data)
});