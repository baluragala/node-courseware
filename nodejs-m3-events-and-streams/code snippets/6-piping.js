let rs = process.stdin;
let ws = process.stdout;

rs.on('data', function (chunk) {
  console.log(chunk);
});

rs.on('end', function (chunk) {
  console.log('closed');
});

rs.on('error', function (error) {
  console.error(error);
});


rs.pipe(ws);