///// BD1.5 Assignment 2 - Creating APIs on the backend of Stock portfolio platform for Rajsi Traders

let express = require('express');
let cors = require("cors");
let { resolve } = require('path');
let app = express();
let port = 3000;
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to Stock portfolio analysis API!");
});

//Endpoint-1: Calculate the returns of the Stocks added
app.get("/calculate-returns", (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let marketPrice = parseFloat(req.query.marketPrice);
  let quantity = parseFloat(req.query.quantity);
  let result = (marketPrice - boughtAt) * quantity;
  res.send(result.toString());
});
/// API Call - /calculate-returns?boughtAt=300&marketPrice=400&quantity=2

//Endpoint-2: Calculate the Total Returns
app.get("/total-returns", (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);
  let result = (stock1 + stock2 + stock3 + stock4);
  res.send(result.toString());
});
/// API Call - /total-returns?stock1=100&stock2=200&stock3=200&stock4=400

//Endpoint-3: Calculate the Return Percentage
app.get("/calculate-return-percentage", (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let returns = parseFloat(req.query.returns);
  let returnPercentage = (returns / boughtAt) * 100;
  let result = returnPercentage;
  res.send(result.toString());
});
/// API Call - /calculate-return-percentage?boughtAt=400&returns=200

//Endpoint-4: Calculate the Total Return Percentage
app.get("/total-return-percentage", (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);
  let returnPercentage = (stock1 + stock2 + stock3 + stock4);
  let result = returnPercentage;
  res.send(result.toString());
});
/// API Call - /total-return-percentage?stock1=10&stock2=20&stock3=20&stock4=40

//Endpoint-5: Identify the status of Stocks based on their Return value
app.get("/status", (req, res) => {
  let returnPercentage = parseFloat(req.query.returnPercentage);
  let result;
  if (returnPercentage > 0) {
    result = "Profit";
  } else {
    result = "Loss";
  }
  res.send(result.toString());
});
/// API Call - /status?returnPercentage=90


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});