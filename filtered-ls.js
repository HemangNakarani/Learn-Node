const fs = require("fs");

const dirpath = process.argv[2];
const ext = process.argv[3];

fs.readdir(dirpath, (err, files) => {
  if (err) console.log(err);
  else {
    files.forEach((file) => {
      if (file.split(".")[1] === ext) {
        console.log(file);
      }
    });
  }
});

// Alternate Way As Suggested
// const path = require("path");
// fs.readdir(dirpath, function (err, files) {
//   if (err) return console.error(err);
//   files.forEach(function (file) {
//     if (path.extname(file) === "." + ext) {
//       console.log(file);
//     }
//   });
// });
