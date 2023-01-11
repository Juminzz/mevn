const Photo = require('./p346_CRUD_ori.js')
const main = async () => {
  const t = await Photo.findOne(
    {
      title: {
        $eq: 'LJM'
      }
    }
    // { _id: 0, title: 1, url: 1 } // _id 0 이면 값 안나옴 1은 값 나옴
  ).lean()
  console.log(t)
}
main()
