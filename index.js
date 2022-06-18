const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());

const URL = "mongodb://localhost:27017/Restoca";

const PORT = process.env.PORT || "8000";

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", require("./routes/foodItems"));
// app.use("/", require("./routes/orderditems"));
app.use("/", require("./routes/orderdItems"));
mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log("Server started at port : " + PORT));
  })
  .catch((err) => {
    console.log("Error: " + err.message);
  });