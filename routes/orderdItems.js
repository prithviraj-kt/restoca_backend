const express = require("express");
const router = express.Router();
const ORDER = require("../model/foodOrderedSchema")

router.get("/getOrdereditems/:token",async(req,res)=>{
    const token = req.params.token;
    try {
        const orderedItems = await ORDER.find({token});
        res.json(orderedItems);
    } catch (error) {
        res.json({
            msg:error.msg
        })
    }

})
router.post("/saveOrdereditem", async (req, res) => {
    const data = req.body;
    try {
        const orderItem = await ORDER.create(data);
        res.json(orderItem);
    } catch (error) {
        res.json({
            error: error.message
        })
    }
})

module.exports = router;
