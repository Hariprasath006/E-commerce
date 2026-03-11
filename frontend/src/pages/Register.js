import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {

const navigate = useNavigate();

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const register = async () => {

try{

const res = await axios.post(
"http://localhost:5000/api/users/register",
{
name,
email,
password
}
);

alert("Registration successful");

navigate("/login");

}catch(error){

console.log(error.response?.data);
alert("Registration failed");

}

};

return(

<div style={{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",background:"#f2f2f2"}}>

<div style={{background:"white",padding:"40px",borderRadius:"10px",width:"350px",textAlign:"center"}}>

<h2>Register</h2>

<input
placeholder="Enter Name"
style={{width:"100%",padding:"10px",marginTop:"15px"}}
onChange={(e)=>setName(e.target.value)}
/>

<input
placeholder="Enter Email"
style={{width:"100%",padding:"10px",marginTop:"10px"}}
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Enter Password"
style={{width:"100%",padding:"10px",marginTop:"10px"}}
onChange={(e)=>setPassword(e.target.value)}
/>

<button
style={{width:"100%",padding:"10px",marginTop:"15px",background:"#ff9900",border:"none"}}
onClick={register}
>
Register
</button>

</div>

</div>

)

}

export default Register;