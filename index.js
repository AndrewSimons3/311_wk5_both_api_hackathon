const express = require('express')
const app = express()
const port = process.env.PORT || 4001
const employeesRouter = require('./routes/employees');
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use('/employees', employeesRouter);


app.get('/',(req, res) => {
  return res.json("Welcome to our API")
 });

app.listen(4001, () => 
  console.log(`Example app listening on port ${4001}!`));