import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ShoppingCart({ cart, setCart, removeFromCart }){

const navigate = useNavigate();

const total = cart?.reduce((sum,item)=>sum + item.price,0) || 0;
const tax = total * 0.02;
const finalTotal = (total + tax).toFixed(2);

const placeOrder = async () => {

try{

await axios.post("http://localhost:5000/api/orders/create",{

items: cart,
totalPrice: finalTotal,
address:"Gandhi Nagar, Chennai",
payment:"COD"

});

setCart([]);

localStorage.removeItem("cart");

alert("Order Placed Successfully");

navigate("/orders");

}catch(error){

alert("Error placing order");

}

};

return (

<div className="cart-page">

<div className="cart-left">

<h1>Shopping Cart <span>{cart.length} Items</span></h1>

{cart.map((item,index)=>(

<div className="cart-row" key={index}>

<img
src={Array.isArray(item.image) ? item.image[0] : item.image}
alt={item.name}
/>

<div className="cart-info">

<h3>{item.name}</h3>
<p>Weight: N/A</p>
<p>Qty: 1</p>

</div>

<div className="cart-price">
${item.price}
</div>

<button
className="remove-item"
onClick={()=>removeFromCart(index)}
>
✕
</button>

</div>

))}

<p className="continue" onClick={()=>navigate("/")}>
← Continue Shopping
</p>

</div>

<div className="cart-right">

<h2>Order Summary</h2>

<div className="summary">

<h4>DELIVERY ADDRESS</h4>
<p>Gandhi Nagar, Chennai, Tamil Nadu, India</p>

<button onClick={()=>navigate("/address")}>
Change
</button>

<h4>PAYMENT METHOD</h4>

<select>
<option>Cash On Delivery</option>
</select>

<hr/>

<p>Price <span>${total}</span></p>

<p>Shipping Fee <span className="free">Free</span></p>

<p>Tax (2%) <span>${tax.toFixed(2)}</span></p>

<h3>Total Amount: ${finalTotal}</h3>

<button
className="place-order"
onClick={placeOrder}
>
Place Order
</button>

</div>

</div>

</div>

)

}

export default ShoppingCart;