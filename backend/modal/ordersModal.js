const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    orderNo: {
      type: String,
    },
    marketPlaceOrderID: {
      type: String,
    },
    thickness: {
      type: String,
    },
    lengthAndFractonValue: {
      type: String,
    },
    widthAndFractionValue: {
      type: String,
    },
    diameterAndFractionValue: {
      type: String,
    },
    quantity: {
      type: String,
    },
    price: {
      type: String,
    },
    tracking: {
      type: String,
    },
    status: {
      type: Boolean,
    },
    comments: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Orders", orderSchema);
