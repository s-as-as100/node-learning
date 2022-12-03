// connect nodejs server to nodejs
const { MongoClient } = require("mongodb");
// path of mongodb
const url = "mongodb://localhost:27017";
let dataBase = "E-commerce";
const client = new MongoClient(url);

async function dbConnect() {
  let result = await client.connect();
  let db = result.db(dataBase);
  return db.collection("products");
  // collection name
  // let collection = db.collection('products');
  // let response = await collection.find({}).toArray()
  // console.log(response);
}
module.exports=dbConnect;