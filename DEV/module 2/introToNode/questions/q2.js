//Q. given an array arr=[audio,video,image,software,documents,applications,other]
//   make folder for each element in the given array and inside each folder make 4 files of that type

let fs = require("fs");
let path = require("path");

let arr = ['Audio','Video','Software','Documents','Applications','Others'];
let nameArr = ['abc','efg','xyz','def'];
let extArr = ['.mp3','.mp4','.exe','.pdf','.apk','.rar'];

let foldpath = path.join(__dirname,"Organise");
if(!fs.existsSync(foldpath)){
    fs.mkdirSync(foldpath);
};

for(let i = 0;i<arr.length;i++){
    
    let folderpath = path.join(foldpath,arr[i]);

    if(!fs.existsSync(folderpath)){
        fs.mkdirSync(folderpath);
    };
    
    for (let j=0;j<nameArr.length;j++){
        let filename = nameArr[j]+extArr[i];
        // console.log(filename);
        let filepath = path.join(folderpath,filename);
        // console.log(filepath);
        fs.writeFileSync(filepath,"");
    };


};