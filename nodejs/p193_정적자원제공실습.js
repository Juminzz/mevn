const express = require('express');
const path = require('path');   // 경로를 활용할 수 있는 유틸
const logger = require('morgan')
const app = express()
const port = 3000
const _path = path.join(__dirname, './dist') // 경로를 합쳐줌
console.log(_path)
app.use('./dist',express.static(_path)) // 절대경로로 접근
app.use(logger('tiny'))
//커스텀 미들웨어
app.use((req,res,next)=>{
    console.log('요청이 왔습니다')
    next()
})

app.get('/book/:bookName',(req,res)=>{
    // const {bookName} = req.params
    res.send('안녕하세요 '+req.params.bookName+' 을(를) 주문하셨네요')
})
app.listen(port,()=>{
    console.log(`너의 서버는? ${port}`)
})


app.use('/',express.static('d://LJM//MEVN//nodejs//p193'))