function greet_old (name) {
    return "Hello " + name + '!';
}

console.log(greet_old("Kamal"));

//ARROW FUNCTION (NEW)
const greet = (name) => {
    return "Hello, " + name + "! I'm an arrow Function";
}

console.log(greet("Nimal"));


//ARROW FUNCTION (WITHOUT RETURN)

function add (a,b) {
    return a + b ; 
}

console.log(add(10,20))

//SMALL EXPRESSIONS ONLY

const add2 = (a,b) => a + b;


console.log(add2(10,20));

// ARROW FUNCTION WITH ARGUMENTS

function add3 (a,b,c) {
    return arguments; 
}

console.log(add3(10,20,30));


// const add3 = (a,b,c) => {
//     return arguments;
// }

// console.log(add3(10,20,30)); // we cat't use arguments in arrow functions 
 
// USE THIS KEYWORD TO ARROW FUNCTION & NORMAL FUNCTION

this.name = "Nimal";

const obj1 = {
    name: "Jhon",

    normalFunction: function() {
        console.log(this.name);
    },

    arrowFunction: () => {
        console.log(this.name);
    }
}
console.log(this.name); // can access like this  output - Nimal
obj1.normalFunction(); //Immediate statement name run  output - Jhon
obj1.arrowFunction();// outside the arrow function this access output - Nimal








