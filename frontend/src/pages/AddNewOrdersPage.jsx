import React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useState } from "react";
import axios from "axios";

export const AddNewOrdersPage = () => {
  const [formData, setFormData] = useState({
    orderNo: "",
    markerPlaceORderId: "",
    thickness: "",
    length: "",
    width: "",
    diameter: "",
    quantity: "",
  });

  const handleInputFields = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Display the form data object
    createOrder();
  };

  const createOrder = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/orders",
        {
          orderNo: formData.orderNo,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error creating collection:", error);
    }
  };

  return (
    <>
      <div className="addNewOrdersPage">
        <h1>Add new Orders</h1>
      </div>
      <div className="orderForm">
        <TextField
          name="orderNo"
          size="small"
          label="Order No"
          variant="outlined"
          onChange={handleInputFields}
        />
        <TextField
          name="markerPlaceORderId"
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
          name="length"
          size="small"
          label="Length & Fraction Value"
          variant="outlined"
          onChange={handleInputFields}
        />
        <TextField
          name="width"
          size="small"
          label="Width & Fraction Value"
          variant="outlined"
          onChange={handleInputFields}
        />
        <TextField
          name="diameter"
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
      </div>
    </>
  );
};
