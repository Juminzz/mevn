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

  fs.stat(_path + name + '.txt', (err, stats) => {
    console.log(stats ? '파일이존재합니다' : '파일이 없습니다')

    if (stats) {
      res.send(
        `<script>alert("${name}.txt 파일이 이미 존재합니다. ${name}1.txt 이름으로 저장합니다.");history.go(-1)</script>`
      )
      fs.writeFile(_path + name + '1.txt', age, (e) => {
        if (e) throw e
      })
    } else {
      fs.writeFile(_path + name + '.txt', age, (e) => {
        if (e) throw e
        res.send(
          `<script>alert("${name}.txt 파일 저장완료!");history.go(-1)</script>`
        )
      })
    }
  })
})

app.listen(port, () => {
  console.log(port + ' 로 연결되었습니다.')
})
