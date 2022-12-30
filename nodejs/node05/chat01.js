const express = require('express')
const path = require('path')
const logger = require('morgan')
const { Server } = require('socket.io')
const app = express()

const http = require('http')
const server = http.createServer(app)
const io = new Server(server)

const port = 3000
const _path = path.join(__dirname, '/')
console.log(_path)

app.use('/', express.static(_path))
app.use(logger('tiny'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

// app.use(express.json())
// app.use(
//   express.urlencoded({
//     extended: true
//   })
// )

// on = 모니터링 한다는뜻
io.on('connection', (so) => {
  so.on('chat message', (msg) => {
    // so.on = 받을 내용
    io.emit('chat message', msg) // 전송할 내용
  })
})

server.listen(port, () => {
  console.log(port + ' 로 연결되었습니다.')
})
