const asy = (message,ret)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(message)
            console.log(new Date())
            resolve(ret)
        },2*1000)
    })
}
const pm = [asy("비동기함수1발동",1),asy("비동기함수2발동",2)]
Promise.all(pm) // all 안에는 배열로 넣어야한다.
// .then(data=>{
//     console.log(data)
// })

const timeTest = async ()=>{
    console.time('promiseAll 측정')
    await Promise.all(pm).then(data=>console.log(data))
    console.timeEnd('promiseAll 측정')
}
timeTest()