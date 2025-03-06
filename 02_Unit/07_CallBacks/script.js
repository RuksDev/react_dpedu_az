function openFiles(callback) {
  setTimeout(() => {
    console.log("File Opened...");
    callback();
  }, 3000);
  //setTimeout function is asynchronous 
}

function addSomething() {
  console.log("Something added to the file...");
}

function removeSomething() {
  console.log("Something removed from the file...");
}

openFiles(addSomething);
openFiles(removeSomething);

