const dotenv = require('dotenv')
dotenv.config() // 실행

const out = process.env.pkey // key값이 최상단 .env파일 안에있음
console.log(out)
