const dbConnect = require('./mongodb')
// first way to handle promise
// dbConnect().then((resp) => {
//     // toArray also return Promise
//   resp.find({}).toArray().then((data)=>console.log(data));
// });
// console.log(dbConnect());

// 2nd way to handle promise
const main = async () => {
  // console.log('main function call')
  let data = await dbConnect();
  data = await data.find().toArray();
  console.log(data);
};
main();
