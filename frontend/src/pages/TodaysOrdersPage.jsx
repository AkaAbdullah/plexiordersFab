import { Button, TextareaAutosize } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import axios from "axios";
import TextField from "@mui/material/TextField";
import NavBar from "../components/NavBar";
import toast, { Toaster } from "react-hot-toast";
import { Oval } from "react-loader-spinner";

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

export const TodaysOrdersPage = () => {
  //this is the update popup modal here in this section
  const [editFormModal, setEditFormModal] = useState(false);
  const [formData, setFormData] = useState({
    orderNo: "",
    thickness: "",
    lengthAndFractonValue: "",
    widthAndFractionValue: "",
    diameterAndFractionValue: "",
    quantity: "",
    price: "",
    tracking: "",
    comments: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.put(
        `https://hilarious-pantsuit-elk.cyclic.app/api/orders/${uid}`,
        formData
      );
      console.log(response.data); // Updated order data
      // Add any additional logic or UI updates here
      setEditFormModal(false);
      notify();
    } catch (error) {
      console.error(error);
      // Handle the error gracefully
    }
  };

  const style2 = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "40%",
    bgcolor: "background.paper",
    border: "1px solid #000",
    boxShadow: 24,
    p: 20,
    textAlign: "center",
  };

  const handleInputFields = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [placeholders, setplaceholders] = useState([]);

  useEffect(() => {
    console.log(placeholders.orderNo);
  }, [placeholders]);

  const [uid, setuid] = useState("");
  const handleUpdateModal = (orderid) => {
    setuid(orderid);
    console.log("orderid" + orderid);
    setEditFormModal(true);
  };

  useEffect(() => {
    console.log("working" + uid);
    axios
      .get(`https://hilarious-pantsuit-elk.cyclic.app/api/orders/${uid}`)
      .then((response) => {
        setplaceholders(response.data);
      });
  }, [uid]);

  const handleCloseEitModel = () => {
    setEditFormModal(false);
  };

  //gap

  //pop up modal
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "70%",
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
      .get(`https://hilarious-pantsuit-elk.cyclic.app/api/orders/${orderId}`)
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

  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    if (orders.length === 0) {
      setSpinner(true);
    } else {
      setSpinner(false);
    }
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://hilarious-pantsuit-elk.cyclic.app/api/orders/"
        );
        const allOrders = response.data;

        const currentDate = new Date();
        const filteredOrders = filterDataByDate(allOrders, currentDate);

        setOrders(filteredOrders);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchData();
  }, [editFormModal]);

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
  const notify = () => toast.success("Order Saved.");

  return (
    <>
      <NavBar className="navPRo" />
      <Toaster position="top-right" reverseOrder={false} />

      <h1 className="headingPageOrders">Todays Plexi orders </h1>
      <div>
        <Modal
          open={editFormModal}
          onClose={handleCloseEitModel}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style2}>
            <h4 className="UpdateHeading">
              Update Order : {placeholders.orderNo}
            </h4>
            <div>
              <form className="updateForm" onSubmit={handleSubmit}>
                <TextField
                  name="orderNo"
                  size="small"
                  label={placeholders.orderNo}
                  variant="outlined"
                  onChange={handleInputFields}
                />
                <TextField
                  name="thickness"
                  size="small"
                  label={`Thickness ${placeholders.thickness}`}
                  variant="outlined"
                  onChange={handleInputFields}
                />
                <TextField
                  name="lengthAndFractonValue"
                  size="small"
                  label={`Length and Fraction Value ${placeholders.lengthAndFractonValue}`}
                  variant="outlined"
                  onChange={handleInputFields}
                />
                <TextField
                  name="widthAndFractionValue"
                  size="small"
                  label={`Width and Fraction Value ${placeholders.widthAndFractionValue}`}
                  variant="outlined"
                  onChange={handleInputFields}
                />
                <TextField
                  name="diameterAndFractionValue"
                  size="small"
                  label={`Diameter and Fraction Value ${placeholders.diameterAndFractionValue}`}
                  variant="outlined"
                  onChange={handleInputFields}
                />
                <TextField
                  name="quantity"
                  size="small"
                  label={`Quantity  ${placeholders.quantity}`}
                  variant="outlined"
                  onChange={handleInputFields}
                />
                <TextField
                  name="price"
                  size="small"
                  label={`Price  ${placeholders.price}`}
                  variant="outlined"
                  onChange={handleInputFields}
                />
                <TextField
                  name="tracking"
                  size="small"
                  label={`Tracking  ${placeholders.tracking}`}
                  variant="outlined"
                  onChange={handleInputFields}
                />

                <TextareaAutosize
                  className="cmm"
                  placeholder="Comments"
                  name="comments"
                  size="small"
                  label={placeholders.comments}
                  variant="outlined"
                  onChange={handleInputFields}
                />
                <Button
                  type="submit"
                  style={{ minWidth: "227px" }}
                  size="large"
                  variant="contained"
                >
                  Update Order Info
                </Button>
              </form>
            </div>
          </Box>
        </Modal>
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
          {spinner ? (
            <div className="spiiner">
              <Oval
                height={100}
                width={100}
                color="#4fa94d"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#4fa94d"
                strokeWidth={2}
                strokeWidthSecondary={2}
              />
            </div>
          ) : (
            " "
          )}
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
                    <Button
                      onClick={() => handleUpdateModal(order._id)}
                      size="small"
                      variant="contained"
                    >
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
      <div className="lfooter">
        <h4> Fab Glass and Mirror &copy;</h4>
      </div>
    </>
  );
};
