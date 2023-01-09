require('dotenv').config()

const request = require('request')
const { XMLParser, XMLBuilder, XMLValidator } = require('fast-xml-parser')
const parser = new XMLParser()

let key = process.env.pkey
let sname = encodeURI('서면역')

const url =
  'http://apis.data.go.kr/6260000/BusanBIMS/busStopList?serviceKey=' +
  key +
  '&pageNo=1&numOfRows=10&bstopnm=' +
  sname
console.log(url)
console.log('인코딩 한 글: ' + sname)
console.log('디코딩 한 글: ' + decodeURI('%EC%84%9C%EB%A9%B4%EC%97%AD'))
request(url, (e, res, body) => {
  const rst = parser.parse(body)
  const _ = rst.response.body.items
  console.log(_)
})
