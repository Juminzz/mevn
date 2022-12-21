console.log("HI !")
setTimeout(function timeout(){
    console.log("async function1 complete")
},1000)
setTimeout(function timeout(){
    console.log("async function2 complete")
},1000)
console.log("kundol!")  
/*
HI !
kundol!
async function1 complete
async function2 complete
 */
