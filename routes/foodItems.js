const express = require("express")
const router = express.Router();
const FOOD = require("../model/foodSchema")

router.get("/:hotelName", async (req, res) => {
    const hotelName = req.params.hotelName;
    try {
        const getFoodItems = await FOOD.find({hotelName:hotelName});
        res.json(getFoodItems);
    } catch (error) {
        res.json({
            msg:error.msg
        })
    }
})

router.post("/additem", async (req, res) => {
    const data = req.body;
    try {
        const addItem = await FOOD.create(data);
        res.json(addItem);
    } catch (error) {
        res.json({
            msg:error.message
        })
    }
})

module.exports = router;