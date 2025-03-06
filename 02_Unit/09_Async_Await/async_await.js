function takeShower() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shower = true;
      if (shower) {
        console.log("Take your shower!");
        resolve("Took shower");
      } else {
        reject("You didn't take shower!");
      }
    }, 2000);
  });
}

function doHomeworks() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const homeworks = true;
      if (homeworks) {
        console.log("Do your homeworks!");
        resolve("Did homeworks!");
      } else {
        reject("You didn't do your homeworks!");
      }
    }, 1000);
  });
}

function play() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const playing = true;
      if (playing) {
        console.log("You can play now!");
        resolve("You played!");
      } else {
        reject("You can't Play now!");
      }
    });
  });
}

async function doAll() {
  try {
    const shower = await takeShower();
    console.log(shower);
    const homeworks = await doHomeworks();
    console.log(homeworks);
    const playing = await play();
    console.log(playing);
  } catch (error) {
    console.log(Error);
  }
}

doAll();
