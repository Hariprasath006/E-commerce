import React,{useEffect,useState} from "react";
import axios from "axios";

function AdminOrders(){

const [orders,setOrders] = useState([]);

useEffect(()=>{

axios.get("http://localhost:5000/api/orders")
.then(res=>setOrders(res.data));

},[]);

return(

<div style={{padding:"40px"}}>

<h2>Orders List</h2>

{orders.map((order)=>(

<div key={order._id} className="order-card">

{order.items.map((item,index)=>(

<div key={index} className="order-body">

<img src={item.image} alt={item.name} width="60"/>

<div>
<h3>{item.name}</h3>
<p>Price: ${item.price}</p>
</div>

</div>

))}

<p>Total: ${order.totalPrice}</p>
<p>Address: {order.address}</p>
<p>Status: {order.status}</p>

</div>

))}

</div>

)

}

export default AdminOrders;