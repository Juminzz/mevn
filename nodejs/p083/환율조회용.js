const value = ()=>{
    return new Promise((resolve,reject)=>{
        const url = 'https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD'
            fetch(url)
            .then((response)=>response.json())  // url을 json 형식으로 바꿈
            .then(data=>{
                resolve(data[0].basePrice)
            })
    })
}