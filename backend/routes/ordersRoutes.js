const express = require("express");
const router = express.Router();
const {
  getOrders,
  createOrder,
  updateOrder,
  deleteOrder,
  getSingleOrder,
  createMultipleOrders,
} = require("../controllers/orderControllers");

router.get("/", getOrders);

router.post("/", createOrder);

router.post("/mpo", createMultipleOrders);

router.get("/:id", getSingleOrder);

router.put("/:id", updateOrder);

router.delete("/:id", deleteOrder);

module.exports = router;
