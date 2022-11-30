module.exports = requestMidddleware = (req, res, next) => {
  if (!req.query.age) {
    res.send("Please enter age to access this page.");
  } else if (req.query.age < 18) {
    res.send("Please enter the valid age.");
  } else {
    next();
  }
};
