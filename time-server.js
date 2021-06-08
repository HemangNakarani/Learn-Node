const net = require("net");

const port = process.argv[2];

function now(date) {
  return [
    date.getFullYear(),
    "-",
    date.getMonth() + 1,
    "-",
    date.getDate(),
    " ",
    date.getHours(),
    ":",
    date.getMinutes(),
  ].reduce(function (before, current, count) {
    return (
      before + (count % 2 || ("" + current).length === 2 ? "" : "0") + current
    );
  });
}

const server = net.createServer(function (socket) {
  socket.end(now(new Date()) + "\n");
});

server.listen(port);
