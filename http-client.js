const http = require("http");

const uri = process.argv[2];

function processData(data) {
  console.log(data.toString());
}

http
  .get(uri, (response) => {
    response.on("data", processData);
  })
  .on("error", console.error);
