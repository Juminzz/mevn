const request = require('request')

const url = `http://apis.data.go.kr/6260000/BusanJobOpnngInfoService/getJobOpnngInfo?ServiceKey=1XvaT59aF%2F2FopKPt8JuLRHhRWQwGexBw1zpMrdjUcQblYVLRTpKSzVcz2GULXdz7%2B8AMRYi8nyMenbz6zic3A%3D%3D&pageNo=1&numOfRows=10&resultType=json`
request(url, (e, res, body) => {
  const rst = JSON.parse(body)
  const _ = rst.getJobOpnngInfo
  ;('http://apis.data.go.kr/6260000/BusanJobOpnngInfoService/getJobOpnngInfo?ServiceKey=1XvaT59aF%2F2FopKPt8JuLRHhRWQwGexBw1zpMrdjUcQblYVLRTpKSzVcz2GULXdz7%2B8AMRYi8nyMenbz6zic3A%3D%3D&pageNo=1&numOfRows=10&resultType=json')
  console.log(_)
})
