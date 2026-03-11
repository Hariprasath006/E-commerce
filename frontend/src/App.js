import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Help from "./pages/Help";
import AdminAddProduct from "./pages/AdminAddProduct";
import ShoppingCart from "./pages/ShoppingCart";
import AddressPage from "./pages/AddressPage";
import MyOrders from "./pages/MyOrders";
import Register from "./pages/Register";


function App() {

const [cart,setCart] = useState(
JSON.parse(localStorage.getItem("cart")) || []
);

/* SAVE CART */

useEffect(()=>{

localStorage.setItem("cart",JSON.stringify(cart));

},[cart]);

/* REMOVE FROM CART */

const removeFromCart = (index)=>{

const updatedCart=[...cart];
updatedCart.splice(index,1);
setCart(updatedCart);

}

return (

<BrowserRouter>

<Routes>

{/* HOME */}

<Route
path="/"
element={
<HomePage
cart={cart}
setCart={setCart}
/>
}
/>

{/* ALL PRODUCTS */}

<Route
path="/products"
element={
<HomePage
cart={cart}
setCart={setCart}
/>
}
/>

{/* LOGIN */}

<Route path="/login" element={<Login />} />

{/* REGISTER */}

<Route path="/register" element={<Register />} />

{/* HELP */}

<Route path="/help" element={<Help />} />

{/* ADMIN DASHBOARD */}

<Route path="/admin-add" element={<AdminAddProduct />} />

{/* CART */}

<Route
path="/cart"
element={
<ShoppingCart
cart={cart}
setCart={setCart}
removeFromCart={removeFromCart}
/>
}
/>

{/* ADDRESS */}

<Route
path="/address"
element={<AddressPage cart={cart} setCart={setCart} />}
/>

{/* ORDERS */}

<Route path="/orders" element={<MyOrders />} />

</Routes>

</BrowserRouter>

);

}

export default App;