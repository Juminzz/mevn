const express = require('express')
const path = require('path')
const logger = require('morgan')

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
  let id = req.body.iid
  let data = req.body.idata
  let name = req.body.ipw
  console.log(id, name, data)
  res.send('확인되었습니다')
})

app.listen(port, () => {
  console.log(port + ' 로 연결되었습니다.')
})
