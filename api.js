const express = require("express");
const dbConnect = require("./mongodb");
const mongodb = require("mongodb");
const app = express();
// connect with nodejs
app.use(express.json());

app.get("/", async (res, resp) => {
  let data = await dbConnect();
  data = await data.find().toArray();
  resp.send(data);
});
app.post("/", async (req, resp) => {
  // data add into node js using fr  ontend
  let data = await dbConnect();
  let result = await data.insertOne(req.body);
  resp.send(result);
});

app.put("/:name", async (req, res) => {
  let data = await dbConnect();
  let result = await data.updateOne(
    // condition
    {
      // name: "note max 5",
      // name: req.body.name,
      name:req.params.name
    },
    {
      // static dta update
      // $set: { price: 090 },
      $set: req.body,
    }
  );

  res.send({ result: "update" });
});

app.delete('/:id', async(req,res) => {
  console.log(req.params.id);
  const data = await dbConnect();
  const result = await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
   res.send(result)
})



app.listen(5000);
