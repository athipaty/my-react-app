const express = require('express');
const recipes = require('./recipes')
const app = express();

app.get("/", (req, res) => {
  res.json(recipes)
})

app.listen(3000, () => {
  console.log("App is running on port 3000")
})