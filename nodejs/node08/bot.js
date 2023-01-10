require('dotenv').config()

const TelegramBot = require('node-telegram-bot-api')
const token = process.env.botid

const bot = new TelegramBot(token, { polling: true })

bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id
  const resp = match[1]

  bot.sendMessage(chatId, resp)
})

bot.on('message', (msg) => {
  const text = msg.text
  const chatId = msg.chat.id
  const date = new Date()
  if (text == '안녕하세요') {
    bot.sendMessage(chatId, '반갑습니다')
  }
  if (text == '배고파요') {
    bot.sendMessage(chatId, '밥드세요')
  }
  if (text == '잠와요') {
    bot.sendMessage(chatId, '주무세요~')
  }
  if (text == '롤할사람') {
    bot.sendMessage(chatId, '안해요~')
  }
  if (text == '현재시간') {
    bot.sendMessage(chatId, date.toLocaleString())
  }
})
