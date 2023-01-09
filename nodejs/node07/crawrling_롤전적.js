const axios = require('axios') // request용도 (크롤링 편하게 해줌)
const cheerio = require('cheerio') // 선택자 용도

const url = 'https://lol.inven.co.kr/dataninfo/match/champTotal.php'

axios.get(url).then((res) => {
  let $ = cheerio.load(res.data)
  let rank = []
  // const time1 = $('.calendar_prid .year').text()
  $('.listTable').each(function () {
    rank.push($(this).text())
  })
  rank.forEach((v, i) => {
    if (i < 100) console.log(`${i + 1}등 :${v.trim()}`)
  })
})
