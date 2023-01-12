require('dotenv').config()
const TelegramBot = require('node-telegram-bot-api')
const token = process.env.botid

const bot = new TelegramBot(token, { polling: true })

bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id
  const resp = match[1]

  bot.sendMessage(chatId, resp)
})
console.log(lotto)
bot.on('message', (msg) => {
  const text = msg.text
  const chatId = msg.chat.id
  console.log(msg)
  const date = new Date()
  if (text == '아이유') {
    bot.sendMessage(chatId, '아이유이쁘다')
  }
  if (text == '네이버') {
    bot.sendMessage(chatId, 'https://naver.com')
  }
  if (text == '현재시간') {
    bot.sendMessage(chatId, date.toLocaleString())
  }
})
