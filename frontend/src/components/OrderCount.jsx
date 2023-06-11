import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ViewCompactAltIcon from "@mui/icons-material/ViewCompactAlt";
import { useEffect, useState } from "react";
import { InfinitySpin } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

export default function OrderCount() {
  const [count, setCount] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    fetch("https://tired-scarf-seal.cyclic.app/api/orders")
      .then((data) => data.json())
      .then((result) => setCount(result));
    setLoader(false);
  }, []);

  const naviagate = useNavigate();

  return (
    <>
      <Card className="cardContainer" sx={{ minWidth: 275, maxWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 25 }}>Total Order Count</Typography>
          <Typography variant="h3" className="cardContainer">
            {loader ? (
              <InfinitySpin width="200" color="#4fa94d" />
            ) : (
              count.length
            )}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={() => naviagate("/allorders")}
            variant="contained"
            startIcon={<ViewCompactAltIcon />}
          >
            View Orders
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
