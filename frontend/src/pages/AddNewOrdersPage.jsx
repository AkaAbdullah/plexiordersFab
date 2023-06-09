import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";
import toast, { Toaster } from "react-hot-toast";
import NavBar from "../components/NavBar";


function convertFractionToDecimal(fraction) {
  if (fraction.startsWith("/")) {
    const denominator = fraction.substring(1);
    const decimal = 1 / Number(denominator);
    return decimal.toFixed(3); // Adjust the decimal places as needed
  }

  const [whole, numerator, denominator] = fraction.split(/\s+|\/+/);
  const decimal = Number(whole) + Number(numerator) / Number(denominator);
  return decimal.toFixed(3); // Adjust the decimal places as needed
}

export const AddNewOrdersPage = () => {
  const [formData, setFormData] = useState({
    orderNo: "",
    marketPlaceOrderID: "",
    thickness: "",
    lengthAndFractonValue: "",
    widthAndFractionValue: "",
    diameterAndFractionValue: "",
    quantity: "",
    comments: "",
    price: "",
    tracking: "",
  });
  const [open, setOpen] = useState(false);

  const notify = () => toast.success("Order Saved.");
  //Accesiig fom values

  const handleInputFields = (event) => {
    const { name, value } = event.target;
    let convertedValue = value;

    if (name === "thickness") {
      convertedValue = convertFractionToDecimal(value);
    } else if (
      name === "lengthAndFractonValue" ||
      name === "widthAndFractionValue" ||
      name === "diameterAndFractionValue"
    ) {
      convertedValue = convertFractionToDecimal(value);
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: convertedValue,
    }));
  };

  // Rest of your component code...
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
        "https://hilarious-pantsuit-elk.cyclic.app/api/orders/",
        {
          orderNo: formData.orderNo,
          marketPlaceOrderID: formData.marketPlaceOrderID,
          thickness: formData.thickness,
          lengthAndFractonValue: formData.lengthAndFractonValue,
          widthAndFractionValue: formData.widthAndFractionValue,
          diameterAndFractionValue: formData.diameterAndFractionValue,
          quantity: formData.quantity,
          comments: formData.comments,
          price: formData.price,
          tracking: formData.tracking,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setOpen(false);
      window.location.reload();
      setFormData({
        orderNo: "",
        marketPlaceOrderID: "",
        thickness: "",
        lengthAndFractonValue: "",
        widthAndFractionValue: "",
        diameterAndFractionValue: "",
        quantity: "",
        comments: "",
        tracking: "",
        price: "",
      });
      notify();
    } catch (error) {
      console.error("Error creating collection:", error);
    }
  };

  return (
    <>
      <NavBar />
      <Toaster position="top-right" reverseOrder={false} />
      <div className="mainORderDiv">
        <div className="orderForm">
          <h1>Add new Orders </h1>
          <p>Rectangle & square Shapes </p>

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
            name="quantity"
            size="small"
            label="Quantity"
            variant="outlined"
            onChange={handleInputFields}
          />

          <Button
            type="submit"
            onClick={handleSubmit}
            style={{ minWidth: "220px" }}
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
        <div>
          <div className="priceForm">
            <h1>Update Tracking and Price</h1>
            <p>Leave Empty if no Price or Tracking Number Avalible</p>
            <TextField
              name="price"
              size="small"
              label="Price"
              variant="outlined"
              onChange={handleInputFields}
            />
            <TextField
              name="tracking"
              size="small"
              label="Tracking number"
              variant="outlined"
              onChange={handleInputFields}
            />
            <h3>If the Order is Round Please add value here</h3>
            <TextField
              name="diameterAndFractionValue"
              size="small"
              label="Diameter & Fraction Value"
              variant="outlined"
              onChange={handleInputFields}
            />
          </div>
        </div>
      </div>
      <div className="lfooter">
        <h4> Fab Glass and Mirror &copy;</h4>
      </div>
    </>
  );
};
