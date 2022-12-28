import fetch from 'node-fetch'

const url = 'https://api.upbit.com/v1/ticker?markets=KRW-ETH'

async function request(url) {
  const response = await fetch(url)
  const data = await response.json(url)
  return data
}

async function view() {
  const dataList = await request(url)
  console.log(dataList[0].trade_price)
}
view()
