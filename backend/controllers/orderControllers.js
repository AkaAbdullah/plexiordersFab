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
    comments: req.body.comments,
    price: req.body.price,
    tracking: req.body.tracking,
  });

  res.status(200).json(order);
});

//GET req with parameters
const getSingleOrder = asyncHandler(async (req, res) => {
  try {
    const item = await Orders.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }
    res.json(item);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Route api/orders:id

const updateOrder = async (req, res) => {
  const { id } = req.params; // Extract the order ID from the request parameters
  const updateFields = {};

  // Add the fields to be updated to the updateFields object
  if (req.body.orderNo) {
    updateFields.orderNo = req.body.orderNo;
  }
  if (req.body.thickness) {
    updateFields.thickness = req.body.thickness;
  }
  if (req.body.lengthAndFractonValue) {
    updateFields.lengthAndFractonValue = req.body.lengthAndFractonValue;
  }

  if (req.body.widthAndFractionValue) {
    updateFields.widthAndFractionValue = req.body.widthAndFractionValue;
  }

  if (req.body.diameterAndFractionValue) {
    updateFields.diameterAndFractionValue = req.body.diameterAndFractionValue;
  }

  if (req.body.quantity) {
    updateFields.quantity = req.body.quantity;
  }

  if (req.body.price) {
    updateFields.price = req.body.price;
  }
  if (req.body.tracking) {
    updateFields.tracking = req.body.tracking;
  }

  if (req.body.comments) {
    updateFields.comments = req.body.comments;
  }

  try {
    // Find the order in the database by ID and update the specified fields
    const updatedOrder = await Orders.findByIdAndUpdate(id, updateFields, {
      new: true,
    });

    if (!updatedOrder) {
      return res.status(404).json({ error: `Order ${id} not found` });
    }

    res.status(200).json({
      message: `Order ${id} updated successfully`,
      order: updatedOrder,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while updating the order" });
  }
};

// Route api/orders:id
const deleteOrder = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `delete order ${req.params.id}` });
});

module.exports = {
  getOrders,
  createOrder,
  updateOrder,
  deleteOrder,
  getSingleOrder,
};
