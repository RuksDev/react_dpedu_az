function add2 (x) {
    return x + 2;
}

function multiplyBy3 (x) {
    return x * 3;
}

function subtract2 (x) {
    return x - 2; 
}

let y  = subtract2(multiplyBy3(add2(5)));
console.log(y)

function compose() {
    var functions = arguments; //using all parameters
    return function (inputs) {
        var value = inputs;
        for(var i = 0; i < functions.length; i++ ){
            value = functions[i](value);
        }
        return value;
    }
}

var allInOneFunction = compose(add2, multiplyBy3, subtract2);

console.log(allInOneFunction(5)); // outputs 19