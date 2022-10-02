// empty object

let obj = {};
console.log(obj);

let objA = {
"Name":"Anmol",
"Age": 23,
"Phone no": 7776061865,
lastname : "Arora"
};
console.log(objA);

let capAmerica = {
    Name: 'Steve',
    Age: 9999,
    Friends: ['Natasha','Thor','Tony','Bucky','Bruce'],
    address: {
        city:"Queens",
        state:'Haryana'
    },
    sayHi:function(){
        console.log("Cap America says Hiiiii")
    }
}

console.log(capAmerica);
//whole object
// console.log(capAmerica);

//name of capAmerica
console.log(capAmerica.Name)
//age of capAmerica
console.log(capAmerica.Age);
//friends of capAmerica
console.log(capAmerica.Friends);
console.log(capAmerica.Friends[0]);
//address object
console.log(capAmerica.address);
console.log(capAmerica.address.city)

// call fxn sayHi
capAmerica.sayHi();

// undefined in output because function sayHi does not return anything
console.log(capAmerica.sayHi());

console.log("object before update : ",capAmerica)
// add a new key to object
capAmerica.Movies = ['Avengers','Civil War','Endgame'];
console.log("object after update : ",capAmerica);

//delete a key 
delete capAmerica.Movies;

capAmerica.isAvenger = true;

capAmerica.address.state = 'New York'
console.log(capAmerica);

//second method to access a key

console.log(capAmerica.Name);
console.log(capAmerica['Name']);
console.log(capAmerica['address']['city']);