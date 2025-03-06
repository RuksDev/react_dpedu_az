//01_SYNCHRONOUS (Execute one task at a time - Line by Line)

console.log("Step 01");
console.log("Step 02");
console.log("Step 03");
console.log("Step 04");
console.log("Step 05");
console.log("Step 06");
for (i = 0; i < 10000; i++) {
  //Some time take to finish this loop b'cos this is synchronous
}
console.log("Step 07");
console.log("Step 08");
console.log("Step 09");
console.log("Step 10");
console.log("Step 11");

//02_ASYNCHRONOUS (Execute multiple tasks at a time )

function one2five() {
  console.log("Step 01");
  console.log("Step 02");
  console.log("Step 03");
  console.log("Step 04");
  console.log("Step 05");
  console.log("Step 06");
}

setTimeout(one2five, 5000);

console.log("Step 07");
console.log("Step 08");
console.log("Step 09");
console.log("Step 10");
console.log("Step 11");