import { Typography } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

export const AllOrdersPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/orders")
      .then((data) => data.json())
      .then((result) => setOrders(result));
  }, []);
  console.log(orders);

  return (
    <>
      <div className="ordersPageMainDiv">
        <Typography variant="h2">Acrylic Plexi orders</Typography>
      </div>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Order No</TableCell>
                <TableCell align="center">Thickness</TableCell>
                <TableCell align="center">Length</TableCell>
                <TableCell align="center">Width</TableCell>
                <TableCell align="center">Diameter</TableCell>
                <TableCell align="center">Quantity</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">Tracking</TableCell>
                <TableCell align="center">Date</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow
                  key={order._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {order.orderNo}
                  </TableCell>
                  <TableCell align="center">{order.thickness}</TableCell>
                  <TableCell align="center">
                    {order.lengthAndFractonValue}
                  </TableCell>
                  <TableCell align="center">
                    {order.widthAndFractionValue}
                  </TableCell>
                  <TableCell align="center">
                    {order.diameterAndFractionValue}
                  </TableCell>
                  <TableCell align="center">{order.quantity}</TableCell>
                  <TableCell align="center">{order.price}</TableCell>
                  <TableCell align="center">{order.tracking}</TableCell>
                  <TableCell align="center">{order.createdAt}</TableCell>
                  <TableCell align="center">
                    <div className="tableButtons">
                      <Button size="small" variant="outlined">
                        update
                      </Button>
                      <Button size="small" variant="contained">
                        Complete
                      </Button>
                      <Button size="small" variant="contained">
                        View
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};
