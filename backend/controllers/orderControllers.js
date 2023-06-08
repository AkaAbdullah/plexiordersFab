const asyncHandler = require("express-async-handler");
const Orders = require("../modal/ordersModal");

// Route api/orders
const getOrders = asyncHandler(async (req, res) => {
  const orders = await Orders.find();
  res.status(200).json(orders);
});

//creating orders
// Route api/orders
const createOrder = asyncHandler(async (req, res) => {
  if (!req.body.orderNo) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const order = await Orders.create({
    orderNo: req.body.orderNo,
    marketPlaceOrderID: req.body.marketPlaceOrderID,
    thickness: req.body.thickness,
    lengthAndFractonValue: req.body.lengthAndFractonValue,
    widthAndFractionValue: req.body.widthAndFractionValue,
    diameterAndFractionValue: req.body.diameterAndFractionValue,
    quantity: req.body.quantity,
  });

  res.status(200).json(order);
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
