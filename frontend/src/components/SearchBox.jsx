import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ViewCompactAltIcon from "@mui/icons-material/ViewCompactAlt";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import axios from "axios";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 30,
};

export const SearchBox = () => {
  const [searchItem, setSearchItem] = useState("");
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/orders/")
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    function findSimilarNames(objects, searchName) {
      const similarNames = objects.filter((obj) => {
        // Assuming the name property is 'name', adjust the property name if necessary
        const name = obj.name.toLowerCase();
        return name.includes(searchName.toLowerCase());
      });

      return similarNames;
    }

    // Example usage
    const data = [
      { id: 1, name: "John Smith" },
      { id: 2, name: "Jane Johnson" },
      { id: 3, name: "Jack Jackson" },
      { id: 4, name: "David Johnson" },
      { id: 5, name: "Alex Jones" },
    ];

    const searchName = "jo";

    const similarNames = findSimilarNames(data, searchName);
    console.log(similarNames);
  }, [searchItem]);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Card className="cardContainer" sx={{ minWidth: 275, maxWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 25 }}>Search Order No</Typography>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              className="searchInput"
              id="outlined-basic"
              label="Search"
              variant="outlined"
              onChange={(e) => setSearchItem(e.target.value)}
            />
          </Box>
        </CardContent>
        <CardActions>
          <Button
            onClick={handleOpen}
            variant="contained"
            startIcon={<SearchIcon />}
          >
            Search Order
          </Button>
        </CardActions>
        <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Order No :
              </Typography>
              <p>details of order</p>
            </Box>
          </Modal>
        </div>
      </Card>
    </>
  );
};
