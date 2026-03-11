import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar({ cartCount }) {

const navigate = useNavigate();
const user = JSON.parse(localStorage.getItem("user"));

const [open,setOpen] = useState(false);

const isAdmin = user && user.email === "admin@example.com";

return(

<div className="navbar">

<div
className="logo"
onClick={()=>navigate("/")}
style={{cursor:"pointer"}}
>
Fresh Shop
</div>

<div className="nav-links">

<Link to="/">Home</Link>
<a href="#products">All Product</a>

</div>

<div className="nav-right">

<div
className="cart-icon"
onClick={()=>navigate("/cart")}
>

🛒

<span className="cart-count">
{cartCount}
</span>

</div>


{user ? (

<div className="profile">

<div
className="profile-icon"
onClick={()=>setOpen(!open)}
>

👤 {user.name}

</div>

{open && (

<div className="profile-dropdown">

<p onClick={()=>navigate("/orders")}>
My Orders
</p>

{/* ADMIN OPTION */}

{isAdmin && (
<p onClick={()=>navigate("/admin-add")}>
Admin Panel
</p>
)}

<p
onClick={()=>{

localStorage.removeItem("user");
navigate("/login");

}}
>
Logout
</p>

</div>

)}

</div>

) : (

<button
onClick={()=>navigate("/login")}
className="login-btn"
>
Login
</button>

)}

</div>

</div>

)

}

export default Navbar;