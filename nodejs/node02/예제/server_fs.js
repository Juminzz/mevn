const express = require('express')
const path = require('path')
const logger = require('morgan')
const fs = require('fs') // file system 약자 (내장모듈)

const app = express()
const port = 3000
const _path = path.join(__dirname, '/')
console.log(_path)

app.use('/', express.static(_path))
app.use(logger('tiny'))

app.use(express.json())
app.use(
  express.urlencoded({
    extended: true
  })
)

// CRUD  (파일 만들기)
// const file = 'test1'
const file2 = 'info'

app.post('/info', function (req, res) {
  let name = req.body.name
  let age = req.body.age
  const data = `이름 : ${name}  <br><br>나이 : ${age}<br><br><br> <button>
  <a href="http://localhost:3000/">뒤로가기</button>`
  console.log(name, age)
  res.send(data)
  fs.writeFile(_path + file2 + '.txt', data, (e) => {
    if (e) console.log(e)
    console.log('파일이 작성완료 되었습니다.')
  })
})

app.listen(port, () => {
  console.log(port + ' 으로 연결되었습니다.')
})
