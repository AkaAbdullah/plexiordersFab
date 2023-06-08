import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { TypeAnimation } from "react-type-animation";
import { useNavigate } from "react-router-dom";

export const AddNewOrders = () => {
  const navigate = useNavigate();
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
          <Button
            onClick={() => navigate("/addneworders")}
            variant="contained"
            startIcon={<AddIcon />}
          >
            Add New Orders
          </Button>
        </CardActions>
      </Card>
    </>
  );
};
