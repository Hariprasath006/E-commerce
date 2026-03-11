import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const navigate = useNavigate();

const login = async () => {

try{

const trimmedEmail = email.trim();
const trimmedPassword = password.trim();

console.log(trimmedEmail, trimmedPassword);

const res = await axios.post(
"http://localhost:5000/api/users/login",
{
email: trimmedEmail,
password: trimmedPassword
}
);

localStorage.setItem("user",JSON.stringify(res.data.user));

alert("Login successful");

/* ADMIN LOGIN */

if(res.data.user.email === "admin@example.com"){
navigate("/admin-add");
}else{
navigate("/");
}

}catch(error){

console.log(error.response?.data);
alert("Invalid login credentials");

}

};

return(

<div style={styles.container}>

<div style={styles.card}>

<h2 style={styles.title}>Login</h2>

<input
style={styles.input}
type="email"
placeholder="Enter Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<input
style={styles.input}
type="password"
placeholder="Enter Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<button style={styles.button} onClick={login}>
Login
</button>

<p style={{marginTop:"15px"}}>
Don't have an account? <Link to="/register">Register</Link>
</p>

</div>

</div>

)

}

const styles = {

container:{
height:"100vh",
display:"flex",
justifyContent:"center",
alignItems:"center",
background:"#f2f2f2"
},

card:{
background:"white",
padding:"40px",
borderRadius:"10px",
boxShadow:"0 4px 10px rgba(0,0,0,0.1)",
width:"350px",
textAlign:"center"
},

title:{
marginBottom:"25px"
},

input:{
width:"100%",
padding:"10px",
marginBottom:"15px",
borderRadius:"5px",
border:"1px solid #ccc"
},

button:{
width:"100%",
padding:"10px",
background:"#ff9900",
border:"none",
color:"black",
fontWeight:"bold",
cursor:"pointer",
borderRadius:"5px"
}

};

export default Login;