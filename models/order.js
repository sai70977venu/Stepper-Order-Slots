const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  Date_time: {
    type: Date,
  },
  store_id: {
    type: mongoose.Schema.Types.ObjectId,
  },
});

const Orders = mongoose.model("orders", orderSchema);
module.exports = Orders;
