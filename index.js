const mongoose = require("mongoose");


// const ProductSchema = new mongoose.Schema({
//   name: String,
//   price: Number,
//   category: String,
// });
// const saveInDB = async () => {
//   await mongoose.connect("mongodb://localhost:27017/E-commerce");
//   /

//   const Product = mongoose.model("products", ProductSchema);
//   let data = new Product({
//     name: "m3 again",
//     price: 100,
//     category: "mobile",
//   });
//   let result = await data.save();
//   console.log(result);
// };

 

// const mongoose = require('mongoose');
  // model means connect mongodb with nodejs ( structure)

  // connect to database
mongoose.connect('mongodb://localhost:27017/E-commerce');
  // new instance for new entry or update or delete
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String

});
// Schema Means validate fields and type validation
  // Field Define In Schema
 

const saveInDB = async () => {
    const Product = mongoose.model('products', productSchema);
    let data = new Product({
        name: "max 100",
        price: 200,
        brand: 'maxx',
        category: 'Mobile'
    });
    const result = await data.save();
    console.log(result);
}

const updateInDB =async  () => {
    const Product = mongoose.model('products', productSchema);
    let data =await  Product.updateOne(
        { name: "max 6" },
        {
            $set: { price: 550,name:'max pro 6' }
        }
    )
    console.log(data)
}

const deleteInDB = async ()=>{
    const Product = mongoose.model('products', productSchema);
    let data = await Product.deleteOne({name:'max 100'})
    console.log(data);
}
const findInDB = async ()=>{
    const Product = mongoose.model('products', productSchema);
    // find data from database
    let data = await Product.find({name:'max pro 611'})
    console.log(data);
}

findInDB();
