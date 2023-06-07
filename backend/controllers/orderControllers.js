const asyncHandler = require("express-async-handler");

// Route api/orders
const getOrders = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  res.status(200).json({ message: "get orders" });
});
// Route api/orders
const createOrder = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "create orders" });
});

// Route api/orders:id
const updateOrder = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `update order ${req.params.id}` });
});

// Route api/orders:id
const deleteOrder = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `delete order ${req.params.id}` });
});

module.exports = {
  getOrders,
  createOrder,
  updateOrder,
  deleteOrder,
};
