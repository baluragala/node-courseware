let express = require('express');
let app = express();

app.get('/', function (req, res) {
  res.send('Hello Express!')
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});