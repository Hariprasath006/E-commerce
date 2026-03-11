const express = require("express");
const router = express.Router();
const Food = require("../models/Food");
const multer = require("multer");

/* MULTER STORAGE */

const storage = multer.diskStorage({

destination:(req,file,cb)=>{
cb(null,"uploads/");
},

filename:(req,file,cb)=>{
cb(null,Date.now()+"-"+file.originalname);
}

});

const upload = multer({storage});


/* GET ALL FOODS */

router.get("/",async(req,res)=>{

try{

const foods = await Food.find().sort({createdAt:-1});

res.json(foods);

}catch(error){

res.status(500).json({message:error.message});

}

});


/* ADD FOOD */

router.post("/",upload.single("image"),async(req,res)=>{

try{

if(!req.file){
return res.status(400).json({message:"Image required"});
}

const newFood = new Food({

name:req.body.name,
price:req.body.price,
category:req.body.category,
description:req.body.description,
offerPrice:req.body.offerPrice,

image:"http://localhost:5000/uploads/"+req.file.filename

});

await newFood.save();

res.json(newFood);

}catch(error){

res.status(500).json({message:error.message});

}

});


/* DELETE FOOD */

router.delete("/:id",async(req,res)=>{

try{

await Food.findByIdAndDelete(req.params.id);

res.json({message:"Food Deleted"});

}catch(error){

res.status(500).json({message:error.message});

}

});

module.exports = router;