import React from "react";
import OrderCount from "../components/OrderCount";
import { TodaysOrders } from "../components/TodaysOrders";
import { SearchBox } from "../components/SearchBox";

export const HomePage = () => {
  return (
    <>
      <div className="homeContainer">
        <OrderCount />
        <TodaysOrders />
        <SearchBox />
      </div>
    </>
  );
};
