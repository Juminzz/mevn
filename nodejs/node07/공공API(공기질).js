const request = require('request')

// const url = process.env.Aurl

const url = `http://apis.data.go.kr/6260000/AirQualityInfoService/getAirQualityInfoClassifiedByStation?serviceKey=1XvaT59aF%2F2FopKPt8JuLRHhRWQwGexBw1zpMrdjUcQblYVLRTpKSzVcz2GULXdz7%2B8AMRYi8nyMenbz6zic3A%3D%3D&pageNo=1&numOfRows=10&resultType=json`

request(url, (e, res, body) => {
  const rst = JSON.parse(body)
  const _ = rst.getAirQualityInfoClassifiedByStation.body.items.item[3]
  console.log(
    `${_.site}의 \n일산화탄소 : ${_.co} \n오존 : ${_.o3} \n초미세먼지 : ${_.pm25} \n미세먼지 : ${_.pm10}`
  )
})
