const express = require("express");
const router = express.Router();
const Order = require("../models/Order");


/* CREATE ORDER */

router.post("/create",async(req,res)=>{

try{

const {items,totalPrice,address,payment} = req.body;

const order = new Order({
items,
totalPrice,
address,
payment
});

await order.save();

res.json({
message:"Order placed",
orderId:order._id
});

}catch(error){

res.status(500).json({message:error.message});

}

});


/* GET ALL ORDERS */

router.get("/",async(req,res)=>{

try{

const orders = await Order.find().sort({createdAt:-1});

res.json(orders);

}catch(error){

res.status(500).json({message:error.message});

}

});


/* GET SINGLE ORDER */

router.get("/:id",async(req,res)=>{

try{

const order = await Order.findById(req.params.id);

res.json(order);

}catch(error){

res.status(500).json({message:error.message});

}

});


/* UPDATE ORDER STATUS */

router.put("/status/:id",async(req,res)=>{

try{

await Order.findByIdAndUpdate(
req.params.id,
{status:req.body.status}
);

res.json({message:"Order status updated"});

}catch(error){

res.status(500).json({message:error.message});

}

});

module.exports = router;