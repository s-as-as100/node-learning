const dbConnect = require("./mongodb");

const insert = async () => {
  const db = await dbConnect();
  const result = await db.insertMany(
    [{
      name: "note 5",
      price: 2000,
      category: "electronics",
    },
    {
      name: "note max 5",
      price: 2000,
      category: "electronics",
    },
    {
      name: "note pro 5",
      price: 2000,
      category: "electronics",
    }]
  );
  if (result.acknowledged) {
    console.log("data inserted successfully");
  }

  //   console.log(result.acknowledged);
};
insert();
