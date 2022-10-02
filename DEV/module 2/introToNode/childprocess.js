let cp =  require('child_process');
// used to execute other commands or execute other files 
// A child process in computing is a process created by another process 
//(the parent process). This technique pertains to multitasking operating 
//systems, and is sometimes called a subprocess or traditionally a subtask.

console.log(cp);

//open calculator with the help of this file

// for windows replace gnome-calculator with calc
//for mac replace gnome-calculator with open -a Calculator

cp.execSync("open -a Calculator");
//open vscode with childProcess

// cp.execSync("code");

let content = cp.execSync("node test.js");

console.log(""+content);