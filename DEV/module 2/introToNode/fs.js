let fs = require("fs");
// console.log(fs);

let path = require("path");

let filePath = path.join(__dirname,"file.txt");
console.log(filePath);

//C-create
// it creates file if it does not exists else it override
fs.writeFileSync(filePath,"Hello I am a text file ");

//R-read
console.log("Before update : ")
// utf-8 is used so that content is printed in readable format (i.e. utf-8)
// and not in buffer format
let content = fs.readFileSync(filePath,'utf-8');
console.log(content);
// alternate way to print data in readable format and not in buffer 
//without using ut-8 encoding
let content = fs.readFileSync(filePath);
console.log(" "+content);


//U-update
fs.appendFileSync(filePath,"\nNewly added content");
console.log("After update : ")
console.log(fs.readFileSync(filePath,'utf-8'));

//D-delete
fs.unlinkSync(filePath);


// CREATE A DIRECTORY
if(!fs.existsSync("NewDirectory"))
    fs.mkdirSync("NewDirectory");

//Read a directory

let folderPath = __dirname;

let contentOfFolder = fs.readdirSync(folderPath);
console.log(contentOfFolder);

//Delete a directory => ONLY works for EMPTY directory
fs.rmdirSync("NewDirectory");

// //copy a file 

let sourcePath = path.join(__dirname,"file1.txt");
let destinationPath = path.join(__dirname,"Cal_module","file1.txt");
console.log(sourcePath);
console.log(destinationPath);

fs.copyFileSync(sourcePath,destinationPath);