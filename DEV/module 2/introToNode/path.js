// "/Users/anmolarora/Desktop/FJP6/module 2/Node/path.js"
let path = require("path");
// console.log(path);
let extensionName = path.extname("/home/aman/Desktop/FJP6/module2/introTonode/childProcess.js");
console.log(extensionName);

let baseName = path.basename(__filename);
console.log(baseName); // file name only


console.log(__filename); // absolute path of file

let dirPath = __dirname;
console.log(dirPath); // absolute path of directory in which our file lies
// or
//console.log(__dirname);

// join returns a String representing the path of a file
let newFilePath = path.join(dirPath,"testing.js");
console.log(newFilePath);
