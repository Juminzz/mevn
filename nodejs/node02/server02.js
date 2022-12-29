const express = require('express')
const path = require('path')
const logger = require('morgan')
const fs = require('fs')

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

app.post('/info', function (req, res) {
  let name = req.body.name
  let age = req.body.age
  let tt = new Date()
  // let a

  fs.appendFile(_path + name + '.txt', age + '\t' + tt + '\n', (e) => {
    if (e) throw e
    res.send(
      `<script>alert("${name}.txt 파일 저장완료!");history.go(-1)</script>`
    )

    fs.readFile(_path + '12121.txt', 'utf-8', (err, data) => {
      if (err) throw err
      console.log(data)
    })
  })
  fs.unlink(_path + name + '.txt', () => {
    console.log(' 삭제됨')
  })
})

app.get('/list', (req, res) => {
  fs.readFile(_path + '12121.txt', 'utf-8', (err, data) => {
    // 파일이 없으면 생성하고 내용추가 없으면 그냥 추가
    if (err) throw err
    console.log(data)
    res.send(data)
  })
})

app.listen(port, () => {
  console.log(port + ' 로 연결되었습니다.')
})
