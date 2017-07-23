/*
create a http server that serves the requested files on the url
Eg.
http://localhost:3000/files/home.html - serve the content of home.html file
http://localhost:3000/files/products.html - - serve the content of products.html file
 */


const http = require('http');
const fs = require('fs');
const requestHandler = function (request, response) {
  switch (request.url) {
    case '/':
    case '/home':
      response.writeHead(200, {"Content-Type": "text/html"});
      response.write(fs.readFileSync('home.html'));
      response.end();
      break;
    case '/products':
      response.writeHead(200, {"Content-Type": "text/html"});
      response.write(fs.readFileSync('products.html'));
      response.end();
  }
};

const server = http.createServer(requestHandler);
server.listen(3001, function () {
  console.log("Server is listening on 3001");
});

