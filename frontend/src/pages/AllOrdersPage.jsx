import { Button, Typography } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import axios from "axios";

export const AllOrdersPage = () => {
  //pop up modal
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 1000,
    bgcolor: "background.paper",
    border: "1px solid #000",
    boxShadow: 24,
    p: 30,
    textAlign: "center",
  };
  const [open, setOpen] = React.useState(false);
  const [singleItemData, setSingleItemData] = useState([]);

  const handleOpen = (orderId) => {
    axios
      .get(`http://localhost:5000/api/orders/${orderId}`)
      .then((response) => {
        setSingleItemData(response.data);
        setOpen(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //Find by order no
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    console.log("useffect running");
    console.log(singleItemData.orderNo);
    const foundItem = orders.filter(
      (item) => item.orderNo === singleItemData.orderNo
    );
    setSearchResult(foundItem);
  }, [singleItemData]);

  useEffect(() => {
    console.log(searchResult);
  }, [searchResult]);

  //closing model

  const handleClose = () => {
    setOpen(false);
  };

  //state for API response
  const [orders, setOrders] = useState([]);
  //PAGINATION
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 15;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = orders.slice(firstIndex, lastIndex);
  const nPages = Math.ceil(orders.length / recordsPerPage);
  const numbers = [...Array(nPages + 1).keys()].slice(1);

  useEffect(() => {
    fetch("http://localhost:5000/api/orders")
      .then((data) => data.json())
      .then((result) => setOrders(result));
  }, []);

  //Changing pages Link and naviation

  function nextPage() {
    if (currentPage !== nPages) {
      setCurrentPage(currentPage + 1);
    }
  }
  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  function changeCPage(id) {
    setCurrentPage(id);
  }

  return (
    <>
      <div className="ordersPageMainDiv">
        <Typography variant="h2">Acrylic Plexi orders</Typography>
      </div>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <h2 className="heading">{singleItemData.orderNo}</h2>
            <div className="modaltableData">
              <table className="table table-sm  table-bordered table-hover">
                <thead>
                  <th>Thickness</th>
                  <th>Length & F Value</th>
                  <th>Width & F Value</th>
                  <th>Diameter</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Tracking</th>
                  <th>Date</th>
                </thead>
                <tbody>
                  {searchResult.map((order, i) => (
                    <tr key={i}>
                      <td> {order.thickness} </td>
                      <td> {order.lengthAndFractonValue} </td>
                      <td> {order.widthAndFractionValue} </td>
                      <td> {order.diameterAndFractionValue} </td>
                      <td> {order.quantity} </td>
                      <td> {order.price} </td>
                      <td> {order.tracking} </td>
                      <td></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="comments">
                <h3>Order Events</h3>
                <p>{singleItemData.orderNo}</p>
                <p>{singleItemData.marketPlaceOrderID}</p>
                <p>
                  <strong>Created at : </strong> {singleItemData.createdAt}
                </p>

                <p>
                  <strong>updated at : </strong> {singleItemData.updatedAt}
                </p>
                <h5>Comments : </h5>
                <h4>{singleItemData.comments}</h4>
              </div>
            </div>
          </Box>
        </Modal>
      </div>
      <div className="tableData">
        <table className="table table-sm  table-bordered table-hover">
          <thead className="thead-dark">
            <th>Order No</th>
            <th>Thickness</th>
            <th>Length & Fraction Value</th>
            <th>Width & Fraction Value</th>
            <th>Diameter</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Tracking</th>
            <th>Date</th>
            <th>Action</th>
          </thead>
          <tbody>
            {records.map((order, i) => (
              <tr key={i}>
                <td> {order.orderNo} </td>
                <td> {order.thickness} </td>
                <td> {order.lengthAndFractonValue} </td>
                <td> {order.widthAndFractionValue} </td>
                <td> {order.diameterAndFractionValue} </td>
                <td> {order.quantity} </td>
                <td> {order.price} </td>
                <td> {order.tracking} </td>
                <td> {order.createdAt} </td>
                <td>
                  <div className="tableButtons">
                    <Button
                      onClick={() => handleOpen(order._id)}
                      size="small"
                      variant="contained"
                    >
                      View
                    </Button>
                    <Button color="success" size="small" variant="outlined">
                      Mark Complete
                    </Button>
                    <Button size="small" variant="contained">
                      update
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <nav>
          <ul className="pagination">
            <li className="page-item">
              <a href="#" className="page-link" onClick={prePage}>
                Prev
              </a>
            </li>
            {numbers.map((n, i) => (
              <li
                className={`page-item  ${currentPage === n ? "active" : ""}`}
                key={i}
              >
                <a
                  href="#"
                  className="page-link"
                  onClick={() => changeCPage(n)}
                >
                  {n}
                </a>
              </li>
            ))}
            <li className="page-item">
              <a href="#" className="page-link" onClick={nextPage}>
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
