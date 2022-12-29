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

app.get('/files', (req, res) => {
  fs.readdir(_path, 'utf-8', (err, data) => {
    // 서버의 폴더에 있는 파일의 리스트를 읽는다.
    res.send(data)
  })
})

app.listen(port, () => {
  console.log(port + ' 로 연결되었습니다.')
})
