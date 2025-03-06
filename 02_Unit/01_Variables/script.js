//VARIABLES DECLARATION

var age = 25;
let name = "John";
const live = "Badulla";

age = 30;
name = "Maya";
// live = "Gampaha"; // can't change const

console.log(name, age, live);

//VARIABLE SCOPES

var _var = 10;
let _let = 20;
const _const = 30;

// console.log(_var, _let, _const); // print smoothly

function scopeTest() {
  var _var2 = 100;
  let _let2 = 200;
  const _const2 = 300;

  if (true) {
    // console.log(_var2, _let2, _const2); print smoothly

    var _var3 = "one";
    let _let3 = "two";
    const _const3 = "tree";

    console.log(_var3, _let3, _const3); //print smoothly
  }

  console.log(_var3); //print smoothly, only work var only let and const are blocks scopes
  // console.log(_let3, _const3); //never print out side the block
}

scopeTest();

// console.log(_var2); // Never run var also work in inside the function scope
console.log(_var); // _var variable global therefor print _var variable

//VARIABLE NAMING

var $name;
var _name;
var name1;
var _$n_02ame$; // all are ok
// 01. can't use keywords for variables
// 02. variables are case sensitive
//
