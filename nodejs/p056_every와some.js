const numbers = [1,3,5,4]
const isAllOdd = numbers.every(e=>e%2) // 모두 만족해야 true , and 개념
const isSomeOdd = numbers.some(e=>e%2) // 하나만 만족해도 true , or 개념
console.log(isAllOdd,isSomeOdd) // false true