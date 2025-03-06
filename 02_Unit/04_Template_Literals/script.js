// 01_TEMPLATE

const text = "This is a text";

const text2 = `This
     is
         a
             another
                     text`; //we can use for line brake also tab space (baptist key ` `)
                        
console.log(text);

console.log(text2);

// 02_INTERPOLATION

name = "Kasun";
age = 34;

const my_self = "I'm " + name +"." +"I'm "+ age +" years old."
console.log(my_self);

const my_self_01 = `I'm ${name}. I'm ${age} old.`
console.log(my_self_01); // there is easy solution for baptist using (Interpolation)

