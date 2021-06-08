const mymodule = require("./mymodule");

const dirpath = process.argv[2];
const ext = process.argv[3];

mymodule(dirpath, ext, (err, data) => {
  if (err) console.log(err);
  else {
    data.forEach((dataelement) => {
      console.log(dataelement);
    });
  }
});
