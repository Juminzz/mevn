require('dotenv').config()
const express = require('express')
const history = require('connect-history-api-fallback')
const logger = require('morgan')
const path = require('path')
const { createProxyMiddleware } = require('http-proxy-middleware')
const VSchema = require('./mdb.cjs')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(
  createProxyMiddleware('/v1', {
    target: 'https://openapi.naver.com',
    changeOrigin: true
  })
)
const _path = path.join(__dirname, './vdb/dist')
app.use('/', express.static(_path))
app.use(logger('tiny'))

/* MongoDB CRUD */

/* CRUD에서 Create */
app.post('/dbc', (req, res) => {
  const title = req.body.title
  const content = req.body.content
  const date = req.body.date
  // ; 즉시실행 함수
  ;(async () => {
    const _data = {
      title,
      content,
      date
    }
    const vs = await new VSchema(_data)
    const t = await vs.save()
    console.log(t)
    res.send('입력완료')
  })()
})

/* CRUD에서 Read */
app.get('/dbr/:date', (req, res) => {
  const date = req.params.date // path의 경로 (params)
  const read = async () => {
    const t = await VSchema.find({ date }, { _id: 0, __v: 0 })
      .lean()
      .then((t) => {
        res.send
        console.log(t)
      })
  }
  read()
})

/* CRUD에서 Update */
app.post('/dbu', (req, res) => {
  ;(async () => {
    const t = await VSchema.updateOne(
      {
        date: req.body.date
      },
      {
        $set: {
          title: req.body.title,
          content: req.body.content,
          date: req.body.date
        }
      },
      { upsert: true }
    )
    console.log(t)
    res.send('수정완료')
  })()
})

/* CRUD에서 Delete */
app.get('/dbd/:date', (req, res) => {
  const date = req.params.date
  const t = VSchema.deleteOne({ date: { $eq: date } }).then((t) => {
    res.send('삭제완료')
    console.log(t)
  })
})

app.listen(3000, () => {
  console.log('3000 포트에서 서버 동작')
})
