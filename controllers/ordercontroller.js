const Order = require("../models/order");

const addorder = async (req, res) => {
  let order = {
    user_id: req.body.user_id,
    Date_time: Date.now(),
    store_id: req.body.store_id,
  };

  Order.create(order)
    .then((result) => {
      console.log(result);
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        error: "Error while booking the slot",
      });
    });
};

const getAllOrders = (req, res) => {
  Order.find({})
    .then((stores) => {
      res.send(stores);
    })
    .catch((err) => {
      res.status(500).send({
        error: "Error while retriving orders",
      });
    });
};

const getOrders =  (req, res) => {
  Store.find({ user_id:req.params.id })
      .then((stores) => {
          res.send(stores);
      })
      .catch((err) => {
          res.status(500).send({
              error: 'Error while creating your store'
          });
      });
};

module.exports = { addorder, getAllOrders, getOrders };
