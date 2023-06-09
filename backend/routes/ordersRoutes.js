const express = require("express");
const router = express.Router();
const {
  getOrders,
  createOrder,
  updateOrder,
  deleteOrder,
  getSingleOrder,
} = require("../controllers/orderControllers");

router.get("/", getOrders);

router.post("/", createOrder);

router.get("/:id", getSingleOrder);

router.put("/:id", updateOrder);

router.delete("/:id", deleteOrder);

module.exports = router;
