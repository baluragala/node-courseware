const fs = require('fs');
let dirName = process.argv[2];
fs.rmdir(dirName, function (err, data) {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});