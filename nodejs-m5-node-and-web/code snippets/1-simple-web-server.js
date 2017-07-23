const http = require("http");
const requestHandler = function (request, response) {

  console.log(request);
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<!DOCTYPE html>");
  response.write("<html>");
  response.write("<head>");
  response.write("<title>Welcome to Node</title>");
  response.write("</head>");
  response.write("<body>");
  response.write("Welcome to Node!!");
  response.write("</body>");
  response.write("</html>");
  response.end();
};

const server = http.createServer(requestHandler);

server.listen(8000);