import React from "react";
import { useNavigate } from "react-router-dom";

function Categories() {

const navigate = useNavigate();

const categories = [

{
name:"Organic veggies",
image:"https://cdn-icons-png.flaticon.com/512/766/766212.png"
},

{
name:"Fresh Fruits",
image:"https://cdn-icons-png.flaticon.com/512/415/415733.png"
},

{
name:"Cold Drinks",
image:"https://cdn-icons-png.flaticon.com/512/3050/3050151.png"
},

{
name:"Instant Food",
image:"https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
},

{
name:"Dairy Products",
image:"https://cdn-icons-png.flaticon.com/512/3050/3050147.png"
},

{
name:"Bakery & Breads",
image:"https://cdn-icons-png.flaticon.com/512/1046/1046786.png"
},

{
name:"Grains & Cereals",
image:"https://cdn-icons-png.flaticon.com/512/766/766223.png"
}

];

return(

<div className="categories-section">

<h2 className="category-title">
Categories
</h2>

<div className="category-grid">

{categories.map((cat,index)=> (

<div
className="category-card"
key={index}
onClick={()=>navigate(`/products?category=${cat.name}`)}
style={{cursor:"pointer"}}
>

<img src={cat.image} alt={cat.name} />

<p>{cat.name}</p>

</div>

))}

</div>

</div>

);

}

export default Categories;