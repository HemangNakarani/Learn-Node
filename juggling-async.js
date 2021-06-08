const http = require("http");
const { BufferListStream } = require("bl");

const uris = process.argv.slice(2);
const responses = [];
let fetched = 0;

function getResponse(index) {
  http.get(uris[index], (response) => {
    response.pipe(
      BufferListStream((err, data) => {
        if (err) return console.err(err);

        responses[index] = data.toString();
        fetched++;

        if (fetched > 2) {
          displayResponses(responses);
        }
      })
    );
  });
}

function displayResponses(data) {
  data.forEach((element) => {
    console.log(element);
  });
}

(function initProcess() {
  for (let i = 0; i < 3; i++) {
    getResponse(i);
  }
})();
