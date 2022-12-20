/* 데이터 스왑 */
let a = 1;
let b = 2;
[a,b]=[b,a]
console.log('a:'+a,'b:'+b) // a:2 b:1

/* 전통 스왑 방식 */
let aa = 11;
let bb = 22;
let temp
temp = aa;
aa = bb;
bb = temp;
console.log('aa:'+aa,'bb:'+bb) // aa:22 bb:11

/* 배열요소 쉽게 담기 */
const d = () =>[1,2,3,4]
const [ax,bx,cx] = d()
console.log('ax:'+ax,'bx:'+bx,'cx:'+cx) // ax:1 bx:2 cx:3  나머지 4는 버림