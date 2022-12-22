const a = ()=>{
    return new Promise((resolve,reject)=>{
        const random = Math.floor(Math.random()*2+2);
        setTimeout(()=>{
            console.log(`물을 끓이고 ${random}초 `)
            resolve(random)
        },random)
    })
}
const b = ()=>{
    return new Promise((resolve,reject)=>{
        const random = Math.floor(Math.random()*4)+1;
        setTimeout(()=>{
            console.log(`라면을 뜯고 ${random}초 `)
            resolve(random)
        },random)
    })
}
const c = ()=>{
    return new Promise((resolve,reject)=>{
        const random = Math.floor(Math.random()*4)+1;
        setTimeout(()=>{
            console.log(`면을 넣고 ${random}초 `)
            resolve(random)
        },random)
    })
}
const d = ()=>{
    return new Promise((resolve,reject)=>{
        const random = Math.floor(Math.random()*4)+1;
        setTimeout(()=>{
            console.log(`스프를 뜯고 ${random}초 `)
            resolve(random)
        },random)
    })
}
const e = ()=>{
    return new Promise((resolve,reject)=>{
        const random = Math.floor(Math.random()*4)+1;
        setTimeout(()=>{
            console.log(`라면익기 ${random}초 `)
            resolve(random)
        },random)
    })
}
const f = ()=>{
    return new Promise((resolve,reject)=>{
        const random = Math.floor(Math.random()*4)+1;
        setTimeout(()=>{
            console.log(`라면먹기 ${random}초 `)
            resolve(random)
        },random)
    })
}

const main = async()=>{
    await a()
    await b()
    await c()
    await d()
    await e()
    await f()
}
main()