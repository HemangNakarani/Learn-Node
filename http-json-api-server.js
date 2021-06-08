const express = require("express");
const bodyParser = require("body-parser");
const port = process.argv[2] || 3000;

const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/api/parsetime", function (req, res) {
  const time = new Date(req.query["iso"]);
  res.json({
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds(),
  });
});

app.get("/api/unixtime", function (req, res) {
  const time = new Date(req.query["iso"]);
  res.json({
    unixtime: time.getTime(),
  });
});

app.use((req, res) => {
  res.status(404);
  res.send(null);
});

app.listen(port, function () {});
