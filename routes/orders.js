const Order = require("../models/order");

const ordercontroller = require("../controllers/ordercontroller");

const express = require("express");

const router = express.Router();

router.get("/", ordercontroller.getAllOrders);
router.post("/addorder", ordercontroller.addorder);
router.post('/:id', ordercontroller.getOrders);

module.exports = router;
