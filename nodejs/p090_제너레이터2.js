function* map(f, list) {
  for (const a of list) {
    yield f(a)
  }
}
const log = console.log
const add = (a) => a + 10
const a = [1, 2, 3]
log(map(add, a)) // Object [Generator] {}
log([...map(add, a)]) // [ 11, 12, 13 ]
