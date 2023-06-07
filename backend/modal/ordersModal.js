const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    orderNo: {
      type: String,
      required: true,
    },
    marketPlaceOrderID: {
      type: String,
      required: true,
    },
    thickness: {
      type: String,
      required: true,
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
      required: true,
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
