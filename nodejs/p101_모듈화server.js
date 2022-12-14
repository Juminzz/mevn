import fetch from 'node-fetch'

const url =
  'https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD'

async function request(url) {
  const response = await fetch(url)
  const data = await response.json()
  return data
}

async function view() {
  const dataList = await request(url)
  console.log(dataList)
  console.log(dataList[0].baseprice+'원')
}
view()
