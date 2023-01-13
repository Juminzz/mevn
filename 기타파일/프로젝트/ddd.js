/* 텔레그램봇 호출 */
require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");
const token = process.env.botid;
const bot = new TelegramBot(token, { polling: true });

/* 로또 크롤러 호출 */
const cheerio = require("cheerio");
const axios = require("axios");
const url = "https://dhlottery.co.kr/gameResult.do?method=byWin";

/* 몽고DB 호출/선언 */
const mongoose = require("mongoose");
// const USER = process.env.dbid;
// const PWD = process.env.dbpw;
// const HOST = process.env.dbhost;
// const DB = "mdb";
// const mongodbURL = mongodb:${USER}:${PWD}@${HOST}/${DB};

/* 몽구스 링크 연결 */
mongoose.set("strictQuery", false);
mongoose
  .connect(mongodbURL, { useNewUrlParser: true })
  .then((_) => console.log("connection successful"))
  .catch((err) => console.log(err));

/* 몽고DB 스키마 클래스 호출 */
const Message = require("./schema.js");

/* 사진 임시 저장용 객체 */
const obj = {};

/* 명령어 저장 */
bot.onText(/^김시민기억해 (.+)/, (msg, mat) => {
  (async () => {
    const element = mat[1].split(" ");
    const key = element[0];
    const val = element[1];
    await Message.updateMany(
      {
        명령어: { $eq: key },
      },
      {
        $set: {
          명령어: key,
          명령: val,
          id: msg["message_id"],
        },
      },
      { upsert: true }
    );
    bot.sendMessage(msg.chat.id, "기억했습니다.");
  })();
});
/* 자료 저장 */
bot.onText(/^김시민저장해 (.+)/, (msg, mat) => {
  if (msg["message_id"] - 1 == obj.명령id) {
    const element = mat[1];
    (async () => {
      await Message.updateMany(
        {
          명령어: { $eq: element },
        },
        {
          $set: {
            명령어: element,
            명령: obj.명령,
            id: msg["message_id"],
          },
        },
        { upsert: true }
      );
    })();
    bot.sendMessage(msg.chat.id, "저장했습니다.");
  } else {
    bot.sendMessage(msg.chat.id, "사진을 올리고 다시 시도해주세요.");
  }
});

bot.on("message", (msg) => {
  /* 사진 임시저장 */
  if ("photo" in msg) {
    obj.명령id = msg["message_id"];
    obj.명령 = msg["photo"][0]["file_id"];
  }
  /* 명령 호출 */
  (async function () {
    const r = await Message.findOne(
      {
        명령어: { $eq: msg.text },
      },
      { _id: 0, __v: 0 }
    ).lean();
    if (r !== null) {
      if (r.명령.length >= 30) {
        bot.sendPhoto(msg.chat.id, r.명령);
      } else {
        bot.sendMessage(msg.chat.id, r.명령);
      }
    }
  })();
  /* 로또 명령 */
  if (msg.text == /^로또 (.+)/) {
  }
});
