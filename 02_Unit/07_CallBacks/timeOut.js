setTimeout(()=>{
    console.log("Do something after 3 sec");
},3000);


setTimeout(doSomething, 2000);
function doSomething(){
    console.log("Do something after 2 sec");
}