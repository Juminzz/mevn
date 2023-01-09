require('dotenv').config()

const request = require('request')

let key = process.env.pkey

const url =
  'http://apis.data.go.kr/6260000/AirQualityInfoService/getAirQualityInfoClassifiedByStation?serviceKey=' +
  key +
  '&pageNo=1&numOfRows=10&resultType=json'
console.log(url)
request(url, (e, res, body) => {
  const rst = JSON.parse(body)
  const _ = rst.getAirQualityInfoClassifiedByStation.body.items.item[3]
  console.log(
    `[${_.site}] \n일산화탄소 : ${_.co} \n오존 : ${_.o3} \n초미세먼지 : ${_.pm25} \n미세먼지 : ${_.pm10}`
  )
})
