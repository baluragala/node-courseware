let fs = require('fs');

let readableStream = fs.createReadStream('./stream.html');

readableStream.on('data', function (chunk) {
  console.log(`Data(${chunk.length}) => ${chunk}`);
});

readableStream.on('error', function (error) {
  console.error(`Error occurred : ${error}`);
});

readableStream.on('end', function () {
  console.log("Reading file completed.");
});