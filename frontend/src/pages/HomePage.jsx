import React from "react";
import OrderCount from "../components/OrderCount";
import { TodaysOrders } from "../components/TodaysOrders";
import { SearchBox } from "../components/SearchBox";
import { AddNewOrders } from "../components/AddNewOrders";

export const HomePage = () => {
  return (
    <>
      <div className="homeContainer">
        <OrderCount />
        <TodaysOrders />
        <SearchBox />
        <AddNewOrders />
      </div>
    </>
  );
};
