import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import { useEffect, useState } from "react";
import logo from "../../public/download.png";

import { Link, useNavigate } from "react-router-dom";

export default function NavBar() {
  const [loginDetails, setLoginDetails] = useState(false);

  useEffect(() => {
    const uname = localStorage.getItem("username");
    const password = localStorage.getItem("password");
    if (uname === "admin" && password === "admin111") {
      setLoginDetails(true);
    } else {
      setLoginDetails(false);
    }
  }, []);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    setLoginDetails(true);
    navigate("/login");
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar className="navi">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link className="link" to="/">
                <img className="logo" src={logo} alt="example" />
              </Link>
              <Link className="link" to="/">
                Fab Glass and Mirror
              </Link>
            </Typography>

            <Button startIcon={<QueryStatsIcon />} color="inherit">
              <Link className="link" to="/todaysorders">
                View Todays Orders
              </Link>
            </Button>
            <Button startIcon={<AddIcon />} color="inherit">
              <Link className="link" to="/addneworders">
                Add new Orders
              </Link>
            </Button>
            <Button onClick={handleLogout} color="inherit">
              {loginDetails ? `Logout` : `Login`}
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
