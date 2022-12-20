// brfore ES5
function a(){
    return 1;
}
console.log(a()); // 1

// after ES6
// const a_1 = _=> 1 // 밑이랑 같은 방식
const b = ()=> 1
console.log(b());  // 1

const c = (b = 2) => b
console.log (c()); // 2