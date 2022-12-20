const express = require('express')
const app = express()
const port = 3000

// /는루트 최상위  ?는 요청 
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/main', (req, res) => {
    res.send('main 경로로 오신것을 환영합니다')
})
app.get('/main/login', (req, res) => {
    res.send('로그인 화면입니다')
})
app.get('/main/login/popup', (req, res) => {
    res.send('팝업창 입니다.')
})
app.get('/main/login/popup/image', (req, res) => {
    res.send('이미지 경로 입니다.')
})
app.get('/main/login/popup/image/text', (req, res) => {
    res.send('text 입니다.')
})

app.listen(port, () => {
  console.log(`Success app listening on port ${port}`)
})

// app.use((req,res,next)=>{
//     console.log('1 Time:', Date.now())
//     next()
// })
// app.use((req,res,next)=>{
//     console.log('2 Time:', Date.now())
//     next()
// })
// app.listen(port, ()=>{
//     console.log(`서버가 생성되었습니다. ${port}`)
// })
