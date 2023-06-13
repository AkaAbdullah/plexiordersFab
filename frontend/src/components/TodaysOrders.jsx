import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const filterDataByDate = (data, currentDate) => {
  const filteredData = data.filter((item) => {
    const itemDate = new Date(item.createdAt);
    const itemDateOnly = new Date(
      itemDate.getFullYear(),
      itemDate.getMonth(),
      itemDate.getDate()
    );
    const currentDateOnly = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate()
    );
    return itemDateOnly.getTime() === currentDateOnly.getTime();
  });

  return filteredData;
};

export const TodaysOrders = () => {
  const [todaysOrders, setTodaysOrders] = useState([]);
  const naviagate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://hilarious-pantsuit-elk.cyclic.app/api/orders/"
        );
        const allOrders = response.data;

        const currentDate = new Date();
        const filteredOrders = filterDataByDate(allOrders, currentDate);

        setTodaysOrders(filteredOrders);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchData();
  }, []);

  const [lengthTodaysOrders, setLengthTodaysOrders] = useState("");
  useEffect(() => {
    setLengthTodaysOrders(todaysOrders.length);
  }, [todaysOrders]);
  // Rest of your component code...

  return (
    <>
      <div onClick={() => naviagate("/todaysorders")} className="boxButton">
        <h3>Todays Orders </h3>
        <h1>{lengthTodaysOrders}</h1>
      </div>
    </>
  );
};
