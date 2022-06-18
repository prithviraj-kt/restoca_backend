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


module.exports = router;