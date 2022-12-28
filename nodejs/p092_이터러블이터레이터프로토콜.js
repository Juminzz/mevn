const log = console.log
function* gen() {
  yield 10
  if (false) yield 20
  yield 30
  return 90
  yield 30
}

let iter = gen()
log([...iter]) // [ 10, 30 ]

iter = gen()
// 한번더 iter 쓴 이유는 위에서 소모 했기때문에 밑에 결과안나옴
for (const a of iter) {
  log(a) // 10 , 30
}
