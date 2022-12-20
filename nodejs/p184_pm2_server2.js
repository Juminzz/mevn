const http = require('http')
const PORT = 12010
const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    const obj = {"이름": "홍길동"}
    res.end(JSON.stringify(obj))
})
setTimeout(()=>{
    JSON.parse("{Z")    // 에러를 발생시켜서 1초마다 서버가 중지되게 만든다.
},1000)

server.listen(PORT, ()=>{
    console.log(`${PORT}의 포트에서 서버가 가동됨`)
})