import React from "react";

function FoodCard({ food, addToCart }) {

return(

<div className="product-card">

<img
src={food.image[0]}
alt={food.name}
className="product-img"
/>

<h3>{food.name}</h3>

<p className="price">₹{food.offerPrice}</p>

<button
className="cart-btn"
onClick={()=>addToCart(food)}
>
Add to Cart
</button>

</div>

)

}

export default FoodCard;