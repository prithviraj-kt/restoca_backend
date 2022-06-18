const mongoose = require("mongoose");

const foodSchema = mongoose.Schema({
  _id:String,
  name: String,
  description: String,
  hotelName: String,
  price: String,
  category: String,
  vegNonVeg: String,
});


const Food = mongoose.model("Food", foodSchema);

module.exports = Food;
