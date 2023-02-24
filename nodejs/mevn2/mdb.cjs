const mongoose = require('mongoose')
const VSchema = require('./schema.cjs')
const USER = process.env.mdbid
const PWD = process.env.mdbpw
const HOST = '127.0.0.1:27017' // localhost 접속 불가
const DB = 'vuedb'

const mongodbURL = `mongodb://${USER}:${PWD}@${HOST}/${DB}`

// mongoose.set('useFindAndModify,false) // 버전 6부터 자동관리라 제외
mongoose.set('strictQuery', false) // 버전 6부터 변경사항 넣기
mongoose
  .connect(mongodbURL, { useNewUrlParser: true })
  .then(() =>
    console.log('MDB 접속 완료 !\n 스키마 로드 완료 !\n 커리대기중...')
  )
  .catch((e) => console.log(e))
module.exports = VSchema
