function takeShower() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        const shower = true;
        if (shower) {
            console.log("You take shower!");
            resolve("You took shower!");
        }else {
            reject("You didn't take shower!");
        }
    }, 2000);
  });
}

function doHomeworks() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        const homeworks = false;
        if (homeworks) {
            console.log("You do your homeworks!");
            resolve("You completed your homeworks!");
        }else {
            reject("You didn't do your homeworks!");
        }
    }, 1000);
  });
}

function play() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        const canplay = true; 
        if (canplay) {
            console.log("You can play now!");
            resolve("You played!");
        }else {
            reject("You can't play now!");
        }
    }, 3000);
  });
}

takeShower().then((result) => {
  console.log(result);
  return doHomeworks();
})
.then((result) => {
  console.log(result);
  return play();
})
.then((result) => {
  console.log(result);
  console.log("All tasks are completed!");
})
.catch((error) => {
    console.log(error);
})
