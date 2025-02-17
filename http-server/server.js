// import http module\

var http = require("http");

// creat server

var server = http.createServer();
server.listen(8080, function () {
  console.log(" http://localhost:8080/");
});

server.on("request", function (req, res) {
  console.log("Received request");
  res.write("你好");
  res.end();
});
