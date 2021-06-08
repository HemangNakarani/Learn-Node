const fs = require("fs");
const path = require("path");

module.exports = (dirpath, ext, callback) => {
  fs.readdir(dirpath, function (err, files) {
    if (err) return callback(err);
    let filearray = files.filter((file) => path.extname(file) === "." + ext);
    return callback(null, filearray);
  });
};
