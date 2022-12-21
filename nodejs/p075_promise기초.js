const a = (c = "네이버")=>{
    return new Promise((resolve,reject)=>{   // 리턴하는 값이 Promise
        // 비동기 함수로직
        setTimeout(()=>{
            resolve(`${c}로부터 받은 사랑`)  // resolve 완료됐다는 신호 reject 완료x
        },1*1000)
    })
}
// a실행한 다음에 실행해라 then
a()
.then(ret=>{
    console.log(ret)
    return a(`카카오`)
})
.then(ret=>{
    console.log(ret)
})



// 예제
// const s = (d = '나가자')=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(`${d}!`)
//         },1*1000)
//     })
// }
// s()
// .then(ret=>{
//     console.log(ret)
//     return s('싸우자')
// })
// .then(ret=>{
//     console.log(ret)
//     return s('이기자')
// })
// .then(ret=>{
//     console.log(ret)
// })