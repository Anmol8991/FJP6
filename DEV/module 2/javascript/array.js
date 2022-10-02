// empty array

let arr = [];
console.log(arr);

// ARRAY with ELEMENT

let elearr = [1,2,4,5,"Hello I am string",false,'c',4.5];
console.log(elearr);

console.log("Element at 4th Index "+ elearr[4]);

console.log("Element at 0th Index "+ elearr[0]);

elearr[3] = "Nothing";

console.log(elearr);

console.log('##############');

// ARRAY METHOD
// 1.PUSH
console.log("Array before push :",elearr);
elearr.push('new item');
console.log("Array after push :",elearr);

// 2. POP
console.log("Array before pop :",elearr);
elearr.pop();
console.log("Array after pop:",elearr);

// 3. SHIFT
console.log("Array before shift:",elearr);
elearr.shift();
console.log("Array after shift :",elearr);

//4. UNSHIFT
console.log("Array before unshift:",elearr);
elearr.unshift("newly added item");
console.log("Array after unshift :",elearr);

// 5. LENGTH

let len = elearr.length;
console.log(len);

