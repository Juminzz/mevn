const a = (c='네이버')=>{
    return new Promise((resolve,reject)=>{
        // 비동기 함수로직
        // throw new Error('[에러발생1]')   // 방법 1
        // reject(new Error('[에러발생2]'))    // 방법 2
        // resolve('난 정상이야')
        reject('[에러발생3]')               // 방법 3
        setTimeout(()=>{
            resolve(`$[c]로 부터 받은 사랑`)
        },1*1000)
    })
}
a()
.then(ret=>{
    return a(`카카오`)
})
.then(ret=>{        // 앞에 ret을 받아서 console로 출력
    console.log(ret)
})
.catch(e=>{     // reject로 하면 catch가 오류 잡아냄
    console.log(e+`에러발생!`)
})