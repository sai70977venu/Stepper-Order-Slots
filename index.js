const express = require("express");

const app = express();

const bodyparser = require("body-parser");

const mongoose = require("mongoose");

require("dotenv/config");

const orders = require("./routes/orders");

app.use(bodyparser.json());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));

app.use("/orders", orders);

app.get("/", (req, res) => {
  res.send("orders page");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server is running");
});
