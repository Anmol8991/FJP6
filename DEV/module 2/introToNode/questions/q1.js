//make a folder inside same directory of this file and in that folder make a text file with content
//new file has been made
let fs = require("fs");
let path = require("path");


let folderpath = path.join(__dirname,"NewFolder") ;
// console.log(destpath);
if(!fs.existsSync(folderpath)){
    fs.mkdirSync(folderpath);
};

let filepath = path.join(folderpath,"new_file.txt");
fs.writeFileSync(filepath,"New File has been made");