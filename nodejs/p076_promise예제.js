const a = (a1 = '아메리카노 나왔습니다!')=>{
    return new Promise((resolve,reject)=>{
        const random = Math.floor(Math.random()*2)+1;
        setTimeout(()=>{
            console.log(`${random}초만에 `+a1)
            resolve(a1)
        },random)
    })
}

const b = (b1 = '라떼 나왔습니다 !')=>{
    return new Promise((resolve,reject)=>{
        const random = Math.floor((Math.random()*15)+20)/10;
        setTimeout(()=>{
            console.log(`${random}초만에 `+b1)
            resolve(b1)
        },random)
    })
}
const c = (c1 = '카푸치노 나왔습니다 !')=>{
    return new Promise((resolve,reject)=>{
        const random = Math.floor(Math.random()*3)+3;
        setTimeout(()=>{
            console.log(`${random}초만에 `+c1)
            resolve(c1)
        },random)
    })
}
const d = (d1 = '비엔나 나왔습니다 !')=>{
    return new Promise((resolve,reject)=>{
        const random = Math.floor(Math.random()*2)+2;
        setTimeout(()=>{
            console.log(`${random}초만에 `+d1)
            resolve(d1)
        },random)
    })
}
a().then(b).then(c).then(c)