import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ViewCompactAltIcon from "@mui/icons-material/ViewCompactAlt";
import { useEffect, useState } from "react";
import { InfinitySpin } from "react-loader-spinner";

export const TodaysOrders = () => {
  return (
    <>
      <Card className="cardContainer" sx={{ minWidth: 275, maxWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 25 }}>Todays Order</Typography>
          <Typography variant="h3" className="cardContainer">
            <InfinitySpin width="200" color="#4fa94d" />
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" startIcon={<ViewCompactAltIcon />}>
            View Orders
          </Button>
        </CardActions>
      </Card>
    </>
  );
};
