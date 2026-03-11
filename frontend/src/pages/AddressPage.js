    import React, { useState } from "react";
    import axios from "axios";
    import { useNavigate } from "react-router-dom";

    function AddressPage({ cart, setCart }){

    const navigate = useNavigate();

    const [address,setAddress] = useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zip:"",
    country:"",
    phone:""
    });

    const handleChange = (e)=>{
    setAddress({
    ...address,
    [e.target.name]:e.target.value
    });
    };

    const saveAddress = async () => {

    if(!cart || cart.length === 0){
    alert("Cart is empty!");
    return;
    }

    try{

    const totalPrice = cart.reduce((sum,item)=>sum + item.price,0);

    await axios.post(
    "http://localhost:5000/api/orders/create",
    {
    items:cart,
    totalPrice:totalPrice,
    address:address,
    payment:"COD"
    }
    );

    alert("Order placed successfully!");

    setCart([]);
    localStorage.removeItem("cart");

    navigate("/orders");

    }catch(error){

    console.log(error);
    alert("Order failed");

    }

    };
    return(

    <div className="address-page">

    <div className="address-form">

    <h1>
    Add Shipping <span>Address</span>
    </h1>

    <div className="form-grid">

    <input name="firstName" placeholder="First Name" onChange={handleChange}/>
    <input name="lastName" placeholder="Last Name" onChange={handleChange}/>

    <input name="email" placeholder="Email address" onChange={handleChange}/>
    <input name="street" placeholder="Street" onChange={handleChange}/>

    <input name="city" placeholder="City" onChange={handleChange}/>
    <input name="state" placeholder="State" onChange={handleChange}/>

    <input name="zip" placeholder="Zip code" onChange={handleChange}/>
    <input name="country" placeholder="Country" onChange={handleChange}/>

    <input name="phone" placeholder="Phone" onChange={handleChange}/>

    </div>

    <button
    className="save-address"
    onClick={saveAddress}
    >
    SAVE ADDRESS
    </button>

    </div>

    <div className="address-image">

    <img
    src="https://cdn-icons-png.flaticon.com/512/854/854878.png"
    alt="map"
    />

    </div>

    </div>

    )

    }

    export default AddressPage;