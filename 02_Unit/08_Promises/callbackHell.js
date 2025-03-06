function func1(callback) {
  setTimeout(() => {
    console.log("This is function 1");
    callback();
  }, 1000);
}
function func2(callback) {
  setTimeout(() => {
    console.log("This is function 2");
    callback();
  }, 1000);
}
function func3(callback) {
  setTimeout(() => {
    console.log("This is function 3");
    callback();
  }, 1000);
}
function func4(callback) {
  setTimeout(() => {
    console.log("This is function 4");
    callback();
  }, 1000);
}
function func5(callback) {
  setTimeout(() => {
    console.log("This is function 5");
    callback();
  }, 1000);
}

func1(() => {
    console.log("This is repeat function 1");
  func2(() => {
    func3(() => {
      func4(() => {
        func5(() => {
          console.log("All functions are done");
        });
      });
    });
  });
});
// Callback Hell (nested function) 