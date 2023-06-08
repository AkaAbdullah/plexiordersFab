import React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";
import toast, { Toaster } from "react-hot-toast";

export const AddNewOrdersPage = () => {
  const [formData, setFormData] = useState({
    orderNo: "",
    marketPlaceOrderID: "",
    thickness: "",
    lengthAndFractonValue: "",
    widthAndFractionValue: "",
    diameterAndFractionValue: "",
    quantity: "",
  });
  const [open, setOpen] = useState(false);

  //Clearing out form Values after submiting form
  const notify = () => toast.success("Order Saved.");
  //Accesiig fom values

  const handleInputFields = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(true);
    console.log(formData); // Display the form data object
    createOrder();
  };

  const createOrder = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/orders",
        {
          orderNo: formData.orderNo,
          marketPlaceOrderID: formData.marketPlaceOrderID,
          thickness: formData.thickness,
          lengthAndFractonValue: formData.lengthAndFractonValue,
          widthAndFractionValue: formData.widthAndFractionValue,
          diameterAndFractionValue: formData.diameterAndFractionValue,
          quantity: formData.quantity,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setOpen(false);
      notify();
    } catch (error) {
      console.error("Error creating collection:", error);
    }
  };

  return (
    <>
      <div className="addNewOrdersPage">
        <h1>Add new Orders</h1>
      </div>

      <Toaster position="top-right" reverseOrder={false} />
      <div className="orderForm">
        <TextField
          name="orderNo"
          size="small"
          label="Order No"
          variant="outlined"
          onChange={handleInputFields}
        />
        <TextField
          name="marketPlaceOrderID"
          size="small"
          label="Market Place Order Id"
          variant="outlined"
          onChange={handleInputFields}
        />
        <TextField
          name="thickness"
          size="small"
          label="Thickness"
          variant="outlined"
          onChange={handleInputFields}
        />
        <TextField
          name="lengthAndFractonValue"
          size="small"
          label="Length & Fraction Value"
          variant="outlined"
          onChange={handleInputFields}
        />
        <TextField
          name="widthAndFractionValue"
          size="small"
          label="Width & Fraction Value"
          variant="outlined"
          onChange={handleInputFields}
        />
        <TextField
          name="diameterAndFractionValue"
          size="small"
          label="Diameter"
          variant="outlined"
          onChange={handleInputFields}
        />
        <TextField
          name="quantity"
          size="small"
          label="Quantity"
          variant="outlined"
          onChange={handleInputFields}
        />
        <Button
          type="submit"
          onClick={handleSubmit}
          style={{ minWidth: "227px" }}
          size="large"
          variant="contained"
        >
          Save Order Info
        </Button>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    </>
  );
};
