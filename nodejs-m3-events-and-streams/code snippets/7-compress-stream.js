let fs = require('fs');
let zlib = require('zlib');

fs.createReadStream('./stream.html')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('stream.html.gz'));