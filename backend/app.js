const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
dotenv.config();
const express = require("express");
const cors = require("cors");
const app = express();
const userRoutes = require("./routes/user.routes");
const captainRoutes = require("./routes/captain.routes");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use(express.json());
app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));

app.use("/users", userRoutes);
app.use("/captains", captainRoutes);

module.exports = app;
