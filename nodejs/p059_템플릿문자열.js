const name = "큰돌"
const s = `솔직히 알수록 ${name}은 바보인 것 같아.`
console.log(s) // 솔직히 알수록 큰돌은 바보인 것 같아.

const person = {
    "age" : 21,
    "name" : "큰돌"
}
const tag = "<p>나의 나이는" + person.age + "입니다.</p>"
const tag2 = "<p>" + person.name + "님 한영합니다.</p>"
console.log(tag,tag2) // <p>나의 나이는21입니다.</p> , <p>큰돌님 한영합니다.</p>

const person2 = {
    "age" : 21,
    "name" : "큰돌"
}
const tag3 = `<p>나의 나이는 ${person2.age}입니다.</p>`
const tag4 = `<p>${person2.name}님 환영합니다.</p>`
console.log(tag3,tag4) // <p>나의 나이는 21입니다.</p> , <p>큰돌님 환영합니다.</p>