/* 예제 1 */
// function b(){
//     var i = 3;
//     for (var i=0;i<10;i++){
//     }
//     return i;
// }
// console.log(b()) // 10

/* 예제 2 */
// function b(){
    
//     for (var i=0;i<10;i++){
//     }
//     return i;
// }
// console.log(b()) //10

/* 예제 3 */
// function b(){
//         for (let i=0;i<10;i++){
//         }
//         return i;
//     }
//     console.log(b())  // ReferenceError: i is not defined

/* 예제 4 */
let a = 1;
if(true){
    console.log(a); // ReferenceError: Cannot access 'a' before initialization 
    let a = 2;
    // console.log(a);  // 2
}       

// var = 선언 및 초기화 => 할당
// let,const = 선언 => TDZ => 초기화 => 할당
// TDZ = 선언과 초기화가 동시에 일어나는 것을 막음