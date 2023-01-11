const Photo = require('./p346_CRUD_ori.js')
const main = async () => {
  const t = await Photo.findOne({
    $or: [
      {
        title: {
          $eq: 'LJM'
        }
      }
    ]
  }).lean()
  console.log(t)
}
main()

// 일치하면 값이 나옴 $or:
