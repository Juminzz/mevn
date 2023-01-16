const Photo = require('./p346_CRUD_ori.js')
const main = async () => {
  const t = await Photo.updateMany(
    {}, // 비워 놓으면 밑에 inc 몽땅 추가 시킨다
    {
      // $set: { 값을 입력}
      // inc = 증가를 시키겠다
      $inc: { code: 1 } // 1씩 증가
    },
    {
      upsert: true,
      multi: true,
      new: true
    }
  ).lean()
  console.log(t)
}
main()
