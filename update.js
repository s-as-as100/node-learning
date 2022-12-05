const dbConnect = require("./mongodb");

const updateData = async () => {
  let data = await dbConnect();
  // updateOne -> ony update single data if all same name:
  // UpdateMany ->  update all
  let result = await data.updateOne(
    // first object use for condition {
    { name: "note 5" },
    {
      $set: { name: "max pro 5T", price: 1 },
    }
  );
  console.log(result);
};
updateData();
