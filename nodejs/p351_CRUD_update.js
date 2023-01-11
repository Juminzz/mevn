const Photo = require('./p346_CRUD_ori.js')
const main = async () => {
  const t = await Photo.updateMany(
    {
      title: {
        $eq: 'LJM'
      }
    },
    {
      $set: {
        url: 'https://naver.com'
      }
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
