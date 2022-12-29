import express from 'express'
import path from 'path'
import logger from 'morgan'
// const  express = require('express')
// const path = require('path')   // 경로를 활용할 수 있는 유틸
// const logger = require('morgan')
const __dirname = path.resolve()

const app = express()
const port = 3000
const _path = path.join(__dirname, './p193') // 경로를 합쳐줌
console.log(_path)

app.use('/', express.static(_path)) // 절대경로 접근
app.use(logger('tiny'))

app.listen(port, () => {
  console.log(port + ' 로 연결되었습니다.')
})
