const fs = require("fs");

const filename = process.argv[2];
const filedata = fs.readFileSync(filename);

console.log(filedata.toString().split("\n").length - 1);
