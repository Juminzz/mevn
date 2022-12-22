const job1 =()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('job 1');
            resolve('job 1')
        },Math.random()*100) 
    })
}
const job2 =()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('job 2');
            resolve('job 2')
        },Math.random()*100) 
    })
}
const job3 =()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('job 3');
            resolve('job 3')
        },Math.random()*100) 
    })
}

const main = async()=>{
    await job1()
    await job2()
    await job3()
}
main()