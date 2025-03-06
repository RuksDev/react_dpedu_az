//SPREAD OPERATOR ...

const arr1 = [1, 2, 3, 4, 5];
const arr2 = ["x", "y", "z"];

console.log(arr1, arr2);

function sum(a, b, c) {
  console.log(a + b + c);
}

sum(arr1[0], arr1[1], arr1[2]); //output - 6
// sum (arr1); // can't call like direct parameter passing
//we use spread (...)

sum(...arr1); //output - 6

// 01.ARRAY OR OBJECT COMBINE USING SPREAD OPERATOR (...)

//ARRAY
const arr3 = [1, 2, 3, 4];
const arr4 = [5, 6, 7, 8];

const arr5 = [...arr3, ...arr4];
console.log(arr5);

//OBJECT

const obj1 = {
  first: 10,
  second: 20,
};
const obj2 = {
  third: 30,
  fourth: 40,
};

const obj3 = { ...obj1, ...obj2 };

console.log(obj3);

//02. ARGUMENT PASSING USING SPREAD OPERATOR

function  sum(a,b,c) {
    console.log(a+b+c);
}

const arr_1 = [1, 2, 3, 4];
const obj_1 = {
    one:10,
    two:20,
    three:30
};

sum(...arr_1);
// sum(...obj_1); //Error happens never passed single value (one:10) key value passed

sum(...Object.values(obj_1)); // output- 60 (this Object.values() method can pass only multiple values)

//03.ARRAY OR OBJECT COPY 

//ARRAY

const arr_2 = [1, 2, 3, 4];
const arr_2copy = [...arr_2];

arr_2 [1] = 100; //1 index of arr_2 replace by 100 but never change arr_2copy b'cos spread operator using

console.log(arr_2copy);

console.log(arr_2, arr_2copy); //[0,100,3,4][1,2,3,4]

//OBJECTS

const obj_new ={
    one:10,
    two:20,
    three:30
}

const obj_newCopy = {...obj_new}; 

obj_new['one'] = 100; // only change obj_new ['one] to 100

console.log(obj_new, obj_newCopy);

//REST OPERATOR 

//spread operator right opposite 

// 01_USING REST OPERATOR FOR FUNCTIONS

const arr6 = [1,2,3,4,5,6,7,8,100];

function sum (...args) {
    let sum = 0;
    for (const arg of args) {
        sum += arg ; 
    }
    console.log(sum);
}
sum (...arr6);

// 02_ARRAY DESTRUCTING

const arr7 = [12,1,5,6,4,3,26,45];

const [first, second, third, ...rest_arguments] = arr7;

console.log(first, second, third, rest_arguments);
console.log(first); // 12
console.log(second);//1
console.log(rest_arguments); //6, 4, 3, 26, 45

// 03_OBJECT DESTRUCTURING

const obj4 = {
    name:"Sunil",
    age: 40,
    city: "Gampaha",
    country: "Sri Lanka",
    mobile_no: 712002001
}

const {name:x, age, country,...rest_arguments1} = obj4;

console.log(name);
console.log(age);
console.log(country);
console.log(rest_arguments1); //object keu must use 
console.log(x) //also we can use this but before add x to variable name









