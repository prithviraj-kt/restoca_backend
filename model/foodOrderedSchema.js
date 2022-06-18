const mongoose = require("mongoose");

const foodOrderSchema = mongoose.Schema({
  name: String,
  description: String,
  hotelName: String,
  price: String,
  category: String,
  vegNonVeg: String,
  token:String,
  quantity:String,
  totalPrice:String,
  date: { type: Date, default: Date.now }
});

const Order = mongoose.model("Order",foodOrderSchema)

module.exports=Order;