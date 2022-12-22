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
    throw '내맘이야 에러'
})
.catch(reason=>{
    console.log(`이 promise는 이 ${reason}로 종료가 되었습니다.`)
})
.finally(()=>{ // 그냥 실행되는 finally
    console.log('이 로직은 promise 이후에 무조건 실행되는 로직입니다.')
})

// .then(result,reason) reason의 결과 값을 반환