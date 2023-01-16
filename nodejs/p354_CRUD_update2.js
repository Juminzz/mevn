const Photo = require('./p346_CRUD_ori.js')
const main = async () => {
  const t = await Photo.updateMany(
    {
      title: {
        $in: ['박서방', '베트맨', 'LJM', '홍당당']
        // title : {$eq : "홍길동"}
        // title : {"name":/\홍/} // 홍 들어가는 글자 (정규식)
      }
    },
    {
      // 스키마에 필드가 미리 준비되어 있어야 한다.
      $push: { something: { $each: [1, 2, 3] } }
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
