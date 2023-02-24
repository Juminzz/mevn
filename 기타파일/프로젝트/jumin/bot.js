require('dotenv').config()
const TelegramBot = require('node-telegram-bot-api')
const axios = require('axios')
const cheerio = require('cheerio')
const request = require('request')
const token = process.env.botid
// const { XMLParser, XMLBuilder, XMLValidator } = require('fast-xml-parser')
// const parser = new XMLParser()

let key = process.env.pkey

const bot = new TelegramBot(token, { polling: true }) //

bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id
  const resp = match[1]
  bot.sendMessage(chatId, resp)
})

const bus =
  'https://apis.data.go.kr/6260000/BusanBIMS/stopArrByBstopid?serviceKey=' +
  key +
  '&bstopid=505870000'
// const a = async () =>
request(bus, (e, res, body) => {
  // const rr = parser.parse(body);
  const rs = body
  console.log(e)
  return rs
})

// a().then((rs) => console.log(rs))

bot.on('message', (msg) => {
  // 환율 시작
  const money =
    'https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD'
  fetch(money)
    .then((response) => response.json())
    .then((data) => {
      if (text == '환율') {
        bot.sendMessage(
          chatId,
          '환율정보 ' +
            '\n' +
            data[0].currencyCode +
            '\n' +
            data[0].name +
            '\n' +
            '날짜 : ' +
            data[0].date +
            '\n' +
            '현재시간 : ' +
            data[0].time +
            '\n' +
            '현재환율 : 1달러 = ' +
            data[0].basePrice +
            '원 \n' +
            '고가 : ' +
            data[0].highPrice +
            '원\n' +
            '저가 : ' +
            data[0].lowPrice +
            '원'
        )
      }
    }) // 환율 끝

  // 미세먼지 시작
  const url =
    'https://apis.data.go.kr/6260000/AirQualityInfoService/getAirQualityInfoClassifiedByStation?serviceKey=' +
    key +
    '&pageNo=1&numOfRows=10&resultType=json'
  console.log(url)
  request(url, (e, res, body) => {
    const rst = JSON.parse(body)
    const _ = rst.getAirQualityInfoClassifiedByStation.body.items.item[3]
    if (text == '미세먼지') {
      bot.sendMessage(chatId, `초미세먼지 : ${_.pm25} \n미세먼지 : ${_.pm10}`)
    }
  })

  // 미세먼지 끝

  // 영화순위 시작
  const movie = 'https://movie.daum.net/ranking/reservation'
  axios.get(movie).then((res) => {
    let $ = cheerio.load(res.data)
    let lank = []

    $('.link_txt ').each(function () {
      lank.push($(this).text().trim())
    })

    const movie = []
    lank.forEach(function (v, i) {
      if (i < 10) movie.push(`${i + 1}위 :${v.trim()}`)
    })

    if (text == '영화순위') {
      bot.sendMessage(chatId, '영화순위 @\n\n' + movie.join('\n'))
      console.log(lank)
    }
    if (text == '영화순위') {
      bot.sendMessage(-1001686288502, movie.join('\n'))
      console.log(lank)
    }
  }) // 영화순위 끝

  식단
  const rise =
    'https://www.pusan.ac.kr/kor/CMS/MenuMgr/menuListOnBuilding.do?mCode=MN202'

  axios.get(rise).then((res) => {
    let $ = cheerio.load(res.data)
    let menu = [],
      day = []
    date2 = []

    // const date = new Date();
    // const Tomonth = date.getMonth() + 1;
    // const Today = date.getDate();
    // const date = new Date();
    // console.log(date.getDay());

    const ac = $('.date').each(function () {
      date2.push($(this).text())
    })
    $('.day').each(function () {
      day.push($(this).text())
    })
    $('.menu-tit01~p').each(function () {
      menu.push($(this).text())
    })
    for (i in menu) {
      // console.log(`${date2[i]}(${day[i]})\n${menu[i]}`);
    }
    if (text == '식단') {
      bot.sendMessage(chatId, `${date2[i]}(${day[i]})\n${menu[i]}`)
    }
  }) // 식단 끝

  // 버스 도착알림 시작

  console.log(msg)

  console.log(bus)
  // 버스 도착알림 끝

  const text = msg.text
  const chatId = msg.chat.id

  const date = new Date()
  if (text == '현재시간') {
    bot.sendMessage(chatId, date.toLocaleString())
  }
})

// 아침수업
setInterval(() => {
  const date = new Date()
  const curTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
  // console.log(date);
  if (curTime == '9:30:0') {
    const money =
      'https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD'
    fetch(money)
      .then((response) => response.json())
      .then((data) => {
        bot.sendMessage(
          -679408568,
          '환율정보 ' +
            '\n' +
            data[0].currencyCode +
            '\n' +
            data[0].name +
            '\n' +
            '날짜 : ' +
            data[0].date +
            '\n' +
            '현재시간 : ' +
            data[0].time +
            '\n' +
            '현재환율 : 1달러 = ' +
            data[0].basePrice +
            '원 \n' +
            '고가 : ' +
            data[0].highPrice +
            '원\n' +
            '저가 : ' +
            data[0].lowPrice +
            '원'
        )
      })
  }
}, 1000)

// 점심시간
setInterval(() => {
  const date = new Date()
  const curTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
  if (curTime == '13:0:0') {
    const url =
      'https://apis.data.go.kr/6260000/AirQualityInfoService/getAirQualityInfoClassifiedByStation?serviceKey=' +
      key +
      '&pageNo=1&numOfRows=10&resultType=json'
    request(url, (e, res, body) => {
      const rst = JSON.parse(body)
      const _ = rst.getAirQualityInfoClassifiedByStation.body.items.item[3]
      bot.sendMessage(
        -679408568,
        `점 심 시 간 @@ \n\n현재 미세먼지 \n초미세먼지 : ${_.pm25} \n미세먼지 : ${_.pm10}`
      )
    })
  }
}, 1000)

// 집가기전
setInterval(() => {
  const date = new Date()
  const curTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
  if (curTime == '17:45:0') {
    const movie = 'https://movie.daum.net/ranking/reservation'
    axios.get(movie).then((res) => {
      let $ = cheerio.load(res.data)
      let lank = []

      $('.link_txt ').each(function () {
        lank.push($(this).text().trim())
      })

      const movie = []
      lank.forEach(function (v, i) {
        if (i < 10) movie.push(`${i + 1}위 :${v.trim()}`)
      })
      bot.sendMessage(
        -679408568,
        '집갑시다~~~  \n\n' + '영화순위 @\n' + movie.join('\n')
      )
    })
  }
}, 1000)
