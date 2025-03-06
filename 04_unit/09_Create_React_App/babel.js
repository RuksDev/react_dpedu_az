const list_1 = [1,2,3,4,5,6].map (n => n+1); // n returns n+1 b'cos single line 

console.log(list_1)


// babel script for older ECMAScript versions

const list_2 = [1,2,4,5,6].map(function (n){
    return n+1; 
})

console.log(list_2);
