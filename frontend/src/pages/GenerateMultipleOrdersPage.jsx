import NavBar from "../components/NavBar";
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const GenerateMultipleOrdersPage = () => {
  const navigate = useNavigate();
  //Creating Toaster
  const notify = () => toast.success("Orders Generated Sucessfully.");
  const notify2 = () => toast.error("Failed to Generate Orders");

  const [orderNumbers, setOrderNumbers] = useState("");

  const handleTextArea = (event) => {
    setOrderNumbers(event.target.value);
  };

  const handleGenerate = async (e) => {
    e.preventDefault();
    if (orderNumbers.length != 0) {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/orders/mpo",
          { orderNumbers },
          {
            headers: {
              "Content-Type": "application/json", // Adjust the content type as needed
              // Other headers can be added here if necessary
            },
          }
        );
        notify();
        navigate("/todaysorders");
      } catch (error) {
        notify2();
        console.error(error.response);
      }
    } else {
      notify2();
    }
  };

  return (
    <>
      <NavBar />
      <div>
        <Toaster position="top-right" reverseOrder={false} />;
      </div>
      <div className="genOrders">
        <h1>Generate Orders</h1>
        <p>Please add space or line break between order numbers</p>
        <p className="rr">Please do not add custom cut Orders here</p>
        <textarea
          onChange={handleTextArea}
          className="textOrders"
          type="text"
          placeholder="5989938833&#10;5000978763&#10;5000083733"
        ></textarea>
        <button onClick={handleGenerate} className="btn">
          Submit
        </button>
      </div>
    </>
  );
};
