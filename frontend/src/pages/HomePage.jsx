import OrderCount from "../components/OrderCount";
import { TodaysOrders } from "../components/TodaysOrders";
import { AddNewOrders } from "../components/AddNewOrders";
import NavBar from "../components/NavBar";
import { Footer } from "../components/Footer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const uname = localStorage.getItem("username");
    const password = localStorage.getItem("password");
    if (uname === "admin" && password === "admin111") {
      return;
    } else {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <NavBar />
      <div className="homeContainer">
        <OrderCount />
        <TodaysOrders />
        <AddNewOrders />
      </div>
      <Footer />
    </>
  );
};
