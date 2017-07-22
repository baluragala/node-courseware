let fs = require('fs');

if (process.argv.length <= 2) {
  console.log("Usage: " + __filename + " path/to/directory");
  process.exit(-1);
}

let path = process.argv[2];

fs.readdir(path, function (err, items) {
  for (let i = 0; i < items.length; i++) {
    let file = path + '/' + items[i];
    console.log("File Name: " + file);
    let stat = fs.statSync(file);
    console.log(stat);
    console.log(`*****************************************`);
  }
});