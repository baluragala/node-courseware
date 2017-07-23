const http = require("http");
const requestHandler = function (request, response) {
  switch (request.url) {
    case '/':
      response.writeHead(200, {"Content-Type": "text/html"});
      response.write("<!DOCTYPE html>");
      response.write("<html>");
      response.write("<head>");
      response.write("<title>Welcome to Node</title>");
      response.write("</head>");
      response.write("<body>");
      response.write("Welcome to Node!");
      response.write("</body>");
      response.write("</html>");
      response.end();
      break;
    case '/home':
      response.writeHead(200, {"Content-Type": "text/html"});
      response.write("<!DOCTYPE html>");
      response.write("<html>");
      response.write("<head>");
      response.write("<title>Welcome to Node</title>");
      response.write("</head>");
      response.write("<body>");
      response.write("Home Page");
      response.write("</body>");
      response.write("</html>");
      response.end();
      break;
    case '/about':
      response.writeHead(200, {"Content-Type": "text/html"});
      response.write("<!DOCTYPE html>");
      response.write("<html>");
      response.write("<head>");
      response.write("<title>Welcome to Node</title>");
      response.write("</head>");
      response.write("<body>");
      response.write("About Page");
      response.write("</body>");
      response.write("</html>");
      response.end();
  }
};

const server = http.createServer(requestHandler);
server.listen(3001, function () {
  console.log("Server is listening on 3001");
});
