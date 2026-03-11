import { Link, Outlet } from "react-router-dom";

function AdminDashboard(){

return(

<div style={{display:"flex"}}>

<div style={{
width:"220px",
background:"#f4f4f4",
height:"100vh",
padding:"20px"
}}>

<h3>Admin</h3>

<Link to="/admin/add">Add Product</Link><br/><br/>
<Link to="/admin/products">Product List</Link><br/><br/>
<Link to="/admin/orders">Orders</Link>

</div>

<div style={{flex:1,padding:"30px"}}>

<Outlet/>

</div>

</div>

)

}

export default AdminDashboard;