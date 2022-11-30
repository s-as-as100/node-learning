// Middleware
// It is used for modify response
// Easy to apply
const express = require("express");
const app = express();
const requestMidddleware = require("./middleware");
const route = express.Router();
// app.use(requestMidddleware); // for all route apply middleware

route.use(requestMidddleware)
app.get("/", (req, res) => {
  res.send("Welcome to Home Page");
});

app.get("/users", (req, res) => {
  res.send("Welcome to Users Page");
});
route.get("/about", (req, res) => {
  res.send("Welcome to About Page");
});
route.get("/contact", (req, res) => {
  res.send("Welcome to contact Page");
});
app.use('/', route)

app.listen(3000);

// Types of Middleware
// 1. Application middleware
// 2. Router Level middleware
// 3. Error handling Middleware
// 4. Build-in middleware
// 5. Third party middleware

// Route Level middleware

// * Route Level middleware
// * Application middleware on single route
// * Make middleware in different file
// * Apply Middleware in the group of route
