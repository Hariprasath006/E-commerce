import React, { useEffect, useState } from "react";
import axios from "axios";

function MyOrders(){

const [orders,setOrders] = useState([]);

useEffect(()=>{

const fetchOrders = async ()=>{

try{

const res = await axios.get("http://localhost:5000/api/orders");

setOrders(res.data);

}catch(error){

console.log(error);

}

};

fetchOrders();

},[]);

return(

<div className="orders-page">

<h1>MY ORDERS</h1>

{orders.length === 0 && <p>No orders yet</p>}

{orders.map((order,index)=>(

<div className="order-card" key={order._id || index}>

<div className="order-top">

<p>OrderId : {order._id}</p>
<p>Payment : {order.payment || "COD"}</p>

</div>

{(order.items || []).map((item,i)=>(

<div className="order-body" key={i}>

<img
src={Array.isArray(item.image) ? item.image[0] : item.image}
alt={item.name}
/>

<div>

<h3>{item.name}</h3>
<p>Category : {item.category}</p>

</div>

<div className="order-status">

<p>Quantity : {item.qty || 1}</p>
<p>Status : {order.status || "Order Placed"}</p>
<p>Date : {new Date(order.createdAt).toLocaleDateString()}</p>

</div>

<p className="amount">${item.price}</p>

</div>

))}

</div>

))}

</div>

)

}

export default MyOrders;