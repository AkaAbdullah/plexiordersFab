import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ViewCompactAltIcon from "@mui/icons-material/ViewCompactAlt";
import { useEffect, useState } from "react";

export const SearchBox = () => {
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
            <TextField id="outlined-basic" label="Search" variant="outlined" />
          </Box>
          ;
        </CardContent>
        <CardActions>
          <Button variant="contained" startIcon={<ViewCompactAltIcon />}>
            Search Order
          </Button>
        </CardActions>
      </Card>
    </>
  );
};
