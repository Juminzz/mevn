require('dotenv').config()

const request = require('request')

let key = process.env.pkey

const url =
  'http://apis.data.go.kr/6260000/FestivalService/getFestivalKr?ServiceKey=' +
  key +
  '&pageNo=1&numOfRows=10&resultType=json'

console.log(url)
request(url, (e, res, body) => {
  const rst = JSON.parse(body)
  const _ = rst.getFestivalKr
  console.log(_)
})
