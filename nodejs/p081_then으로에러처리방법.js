const async1 = param =>{
    return new Promise((resolve,reject)=>{
        resolve(param*2)
    })
}
const async2 = param =>{
    return new Promise((resolve,reject)=>{
        resolve(param*2)
    })
}
async1(1)
.then(async2)
.then(result=>{
    console.log (result) // 4
    throw '에러'
},reason=>{
    console.log(`이 promise는 이 ${reason}으로 종료가 되었습니다.`)
})


// .then(result,reason) reason의 결과 값을 반환