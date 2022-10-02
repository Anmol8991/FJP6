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
    if(arr[i] == ".jpg"){
        console.log(content[i],"--> Image File");
    }else if(arr[i] == ".mp3"){
        console.log(content[i],"--> Audio File");
    }else if(arr[i] == ".zip"){
        console.log(content[i],"--> Other File");
    }else if(arr[i] == ".mp4"){
        console.log(content[i],"--> Video File");
    }else if(arr[i] == ".xlsx"){
        console.log(content[i],"--> Excel File");
    }else if(arr[i] == ".doc"){
        console.log(content[i],"--> Document File");
    }else if(arr[i] == ".pdf"){
        console.log(content[i],"--> Pdf File");
    };

};

