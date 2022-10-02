let fs = require("fs");
let path = require("path");
console.log(__dirname);
let folderpath = path.join(__dirname,"..","..","html");
console.log(folderpath);

if (!fs.existsSync(folderpath)){
    fs.mkdirSync(folderpath);
}
let srcpath = path.join(folderpath,"..","..","module 1","index.html");
let destPath = path.join(folderpath,"index.html");
fs.copyFileSync(srcpath,destPath);