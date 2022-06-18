const mongoose = require("mongoose");

const foodSchema = mongoose.Schema({
  price: String,
  category: String,
  vegNonVeg: String,
  time: Date,
  price: String,
  category: String,
  vegNonVeg: String,
  time: Date,
});

const Food = mongoose.model("Food", foodSchema);

module.exports = Food;
