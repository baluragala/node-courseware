let fs = require('fs');

if (process.argv.length <= 2) {
  console.log("Usage: " + __filename + " path/to/directory");
  process.exit(-1);
}

let path = process.argv[2];
let runSync = process.argv[3];

if (runSync) {
  console.log('Synchronous operation');
  let items = fs.readdirSync(path);
  items.forEach((item) => console.log(item))
} else {
  console.log('Asynchronous operation');
  fs.readdir(path, function (err, items) {
    items.forEach((item) => console.log(item))
  });
}