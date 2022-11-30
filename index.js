// Middleware
// It is used for modify response
// Easy to apply
 const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Home Page");
});

const requestMidddleware = (req, res, next) => {
  if (!req.query.age) {
    res.send("Please enter age to access this page.");
  } else if (req.query.age < 18) {
    res.send("Please enter the valid age.");
  } else {
    next();
  }
};
app.use(requestMidddleware);

app.get("/users", (req, res) => {
  res.send("Welcome to Users Page");
});

app.listen(3000);

// Types of Middleware 
// 1. Application middleware
// 2. Router Level middleware
// 3. Error handling Middleware
// 4. Build-in middleware
// 5. Third party middleware
