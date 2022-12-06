const express = require("express");
const dbConnect = require("./mongodb");
const app = express();
// connect with nodejs
app.use(express.json());

app.get("/", async (res, resp) => {
  let data = await dbConnect();
  data = await data.find().toArray();
  resp.send(data);
});
app.post("/", async (req, resp) => {
  // data add into node js using frontend
  let data = await dbConnect();
  let result = await data.insertOne(req.body);
  resp.send(result);
});

app.listen(5000);
