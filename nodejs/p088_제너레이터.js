// return은 반환하고 끝내는데
// yield 는 반환하고 끝나는게 아니라 다음으로 넘어감
const log = console.log
function* gen() {
  yield 10
  if (false) yield 20 // false라서 yield 20은 넘어감
  yield 30
  return 90 // 함수 종료
  yield 40 // return으로 끝나서 40이라는 값은 안나옴
}

/* 방법 1  */
let iter = gen()
console.log(iter) // Object [Generator] {}
log(iter.next()) // { value: 10, done: false }
log(iter.next()) // { value: 30, done: false }
log(iter.next()) // { value: 90, done: true } done이 true면 끝남
log(iter.next()) // { value: undefined, done: true } return으로 끝나서 값 안나옴

/* 방법 2 */
// console.log(...gen()) // 10 30 이라는 결과가 바로 나옴
