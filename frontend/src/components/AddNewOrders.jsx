import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ViewCompactAltIcon from "@mui/icons-material/ViewCompactAlt";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";

export const AddNewOrders = () => {
  return (
    <>
      <Card className="cardContainer" sx={{ minWidth: 275, maxWidth: 275 }}>
        <CardContent>
          <TypeAnimation
            sequence={[
              "Lets Add some", // Types 'One'
              1000, // Waits 1s
              "new Orders 😃", // Deletes 'One' and types 'Two'
              2000, // Waits 2
              () => {
                console.log("Sequence completed");
              },
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: "2em", display: "inline-block" }}
          />
        </CardContent>
        <CardActions>
          <Button variant="contained" startIcon={<ViewCompactAltIcon />}>
            Add New Orders
          </Button>
        </CardActions>
      </Card>
    </>
  );
};
