const a = ['사과', '딸기', '포도', '배']
const it = a[Symbol.iterator]()
// done은 다음 요소가 없으면 true가 된다
console.log(it.next()) // { value: '사과', done: false }
console.log(it.next()) // { value: '딸기', done: false }
console.log(it.next()) // { value: '포도', done: false }
console.log(it.next()) // { value: '배', done: false }
console.log(it.next()) // { value: 'undefined', done: false }
console.log(it.next()) // { value: 'undefined', done: false }
