const job1 =()=>{
    return new Promise((resolve,reject)=>{
       const random = Math.random()*100
        setTimeout(() => {
            console.log('job 1');
            resolve('job 1')
        },random) 
    })
}
const job2 =()=>{
    return new Promise((resolve,reject)=>{
       const random = Math.random()*100
        setTimeout(() => {
            console.log('job 2');
            resolve('job 2')
        },random) 
    })
}
const job3 =()=>{
    return new Promise((resolve,reject)=>{
       const random = Math.random()*100
        setTimeout(() => {
            console.log('job 3');
            resolve('job 3')
        },random) 
    })
}
// job1()  // job1 실행한 후 밑에 실행
// .then(ret=>job2())
// .then(ret=>job3())

job1().then(job2).then(job3) // 위랑 같은방식으로 간단하게 쓴것