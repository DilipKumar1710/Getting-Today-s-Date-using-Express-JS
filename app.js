const express = require("express");

const app = express();

app.get("/", (request, response) => {
  let date = new Date();
  let todayDate = date.getDate();
  let currentMonth = date.getMonth() + 1;
  let currentYear = date.getFullYear();
  response.send(`${todayDate}-${currentMonth}-${currentYear}`);
});

module.exports = app;
