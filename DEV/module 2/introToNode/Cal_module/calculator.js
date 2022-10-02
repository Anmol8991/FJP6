function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function div(a,b){
    return a/b;
}

function mul(a,b){
    return a*b;
}
// module.exports helps to use functions present in this file 
//in some other file which calls or reads or requires this file 
module.exports = {
    addition:add,
    subtraction:sub,
    division:div,
    multiply:mul
}