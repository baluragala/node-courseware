//set this to make the stream data encoded to UTF-8
process.stdin.setEncoding('utf8');

process.stdin.on('data', function (chunk) {
  process.stdout.write('Data! -> ' + chunk);
  console.log(chunk);
  if (chunk.trim() /* to replace whitespaces and new lines*/ === 'done') {
    console.log('closing....');
    process.stdin.end();
  }
});

process.stdin.on('end', function () {
  process.stderr.write('End!\n');
});