let fs = require("fs");
let path = require ("path");

let srcpath = path.join(__dirname,"file2.txt");
let destpath = path.join(__dirname,"NewFolder","file2.txt");

fs.copyFileSync(srcpath,destpath);

fs.unlinkSync(srcpath);