const http = require("http");
const fs = require("fs");

const port = process.argv[2];
const filepath = process.argv[3];

const server = http.createServer(function (req, res) {
  var readStream = fs.createReadStream(filepath);

  readStream.on("open", function () {
    readStream.pipe(res);
  });

  readStream.on("error", function (err) {
    res.end(err);
  });
});

server.listen(port);
