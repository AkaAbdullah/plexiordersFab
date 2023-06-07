const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 8000;
const { errorHandler } = require("./middleware/errorMiddleware");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/orders", require("./routes/ordersRoutes"));
app.use(errorHandler);

app.listen(port, () => console.log(`server started on port ${port}`));
