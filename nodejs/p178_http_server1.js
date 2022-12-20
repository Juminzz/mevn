const http = require('http')
const PORT = 12010
const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end('안녕하세요 MEVN프로젝트입니다.')
}) // req 요청 res 응답
server.listen(PORT, ()=>{
    console.log(`${PORT}의 포트에서 서버가 가동됨`)
})