import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import axios from "axios";
import { Link } from "react-router-dom";

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/orders");
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
      <Card className="cardContainer" sx={{ minWidth: 275, maxWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 25 }}>Todays Order</Typography>
          <Typography variant="h3" className="cardContainer">
            <h2>{lengthTodaysOrders}</h2>
          </Typography>
        </CardContent>
        <CardActions>
          <Link to="/todaysorders">
            <Button variant="contained" startIcon={<QueryStatsIcon />}>
              View Orders
            </Button>
          </Link>
        </CardActions>
      </Card>
    </>
  );
};
