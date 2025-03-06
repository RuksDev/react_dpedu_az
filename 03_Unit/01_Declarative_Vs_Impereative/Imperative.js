const number = [1,2,5,989,1,2,458,40,46,565,2,2,62,65,5,62,0];

const evenNumbers = [];

for (let i = 0; i < number.length; i++) {
    if (number[i] % 2 ===0){
        evenNumbers.push(number[i]);
    }
}

console.log(evenNumbers);