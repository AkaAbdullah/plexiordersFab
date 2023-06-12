import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../redux/OrdersState";
import NavBar from "../components/NavBar";

export const TestPage = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.orders);

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <h2>Test page</h2>
      {orders.map((order) => (
        <p key={order._id}>{order.orderNo}</p>
      ))}
    </>
  );
};
