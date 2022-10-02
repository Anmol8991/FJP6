// read content of unorganised folder and make  an array which has extension name of each file
let fs = require("fs");
let path = require("path");

let folderpath = path.join(__dirname,"..","unorganised");
// console.log(folderpath);

let content = fs.readdirSync(folderpath);
//console.log(content);

let arr = [];

for(let i = 0; i<content.length;i++){
    let ext = path.extname(content[i]);
    arr.push(ext);

}

console.log(arr);