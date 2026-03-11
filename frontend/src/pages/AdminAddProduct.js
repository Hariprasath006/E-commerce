import React,{useState} from "react";
import axios from "axios";

function AdminAddProduct(){

const [name,setName] = useState("");
const [price,setPrice] = useState("");
const [offerPrice,setOfferPrice] = useState("");
const [category,setCategory] = useState("");
const [description,setDescription] = useState("");
const [image,setImage] = useState(null);

const uploadProduct = async()=>{

try{

const formData = new FormData();

formData.append("name",name);
formData.append("price",price);
formData.append("offerPrice",offerPrice);
formData.append("category",category);
formData.append("description",description);
formData.append("image",image);

await axios.post(
"http://localhost:5000/api/foods",
formData,
{
headers:{
"Content-Type":"multipart/form-data"
}
}
);

alert("Product Added Successfully");

setName("");
setPrice("");
setOfferPrice("");
setCategory("");
setDescription("");
setImage(null);

}catch(err){

alert("Error adding product");

}

};

return(

<div style={{padding:"40px"}}>

<h2>Add Product</h2>

<input
placeholder="Product Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<br/><br/>

<textarea
placeholder="Description"
value={description}
onChange={(e)=>setDescription(e.target.value)}
/>

<br/><br/>

<input
placeholder="Category"
value={category}
onChange={(e)=>setCategory(e.target.value)}
/>

<br/><br/>

<input
placeholder="Price"
value={price}
onChange={(e)=>setPrice(e.target.value)}
/>

<br/><br/>

<input
placeholder="Offer Price"
value={offerPrice}
onChange={(e)=>setOfferPrice(e.target.value)}
/>

<br/><br/>

<input
type="file"
onChange={(e)=>setImage(e.target.files[0])}
/>

<br/><br/>

<button onClick={uploadProduct}>
Upload Product
</button>

</div>

)

}

export default AdminAddProduct;