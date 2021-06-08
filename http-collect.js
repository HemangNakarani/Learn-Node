const http = require("http");
const { BufferListStream } = require("bl");

const uri = process.argv[2];

function processData(err, data) {
  if (err) return console.err(err);

  let dataString = data.toString();
  console.log(dataString.length);
  console.log(dataString);
}

http.get(uri, (response) => {
  response.pipe(BufferListStream(processData));
});
