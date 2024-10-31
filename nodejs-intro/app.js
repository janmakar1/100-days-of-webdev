const http = require("http");

function handleRequest(request, response) {
  if (request.url == "/") {
    response.statusCode = 200;
    response.end("<h1>Hello World!</h1>");
  } else if (request.url == "/currenttime") {
    response.statusCode = 200;
    response.end("<h1>" + new Date().toISOString() + "</h1>");
  } else {
    response.statusCode = 404;
    response.end(`<h1>Error 404 - ${request.url} - Page not found</h1>`);
  }
}

const server = http.createServer(handleRequest);

server.listen(3000);
