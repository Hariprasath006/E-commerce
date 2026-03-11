import React, { useState } from "react";
import { dummyProducts } from "../assets/assets";

import Navbar from "../components/Navbar";
import FoodCard from "../components/FoodCard";
import SearchBar from "../components/SearchBar";
import HeroBanner from "../components/HeroBanner";
import Categories from "../components/Categories";
import Footer from "../components/Footer";

function HomePage({ cart, setCart }) {

const [search,setSearch] = useState("");
const [category,setCategory] = useState("All");

const foods = dummyProducts;

const addToCart = (food) => {

const updatedCart = [...cart, food];

setCart(updatedCart);

localStorage.setItem("cart", JSON.stringify(updatedCart));

};

const filteredFoods = foods.filter((food)=>{

const matchesSearch =
food.name.toLowerCase().includes(search.toLowerCase());

const matchesCategory =
category === "All" || food.category === category;

return matchesSearch && matchesCategory;

});

return(

<div>

<Navbar cartCount={cart.length} />

<HeroBanner />

<Categories />

<SearchBar
search={search}
setSearch={setSearch}
category={category}
setCategory={setCategory}
/>

<h2 id="products" className="sproducts" style={{ marginLeft: "40px" }}>
  All Products
</h2>

<div className="food-grid">

{filteredFoods.map(food => (

<FoodCard
key={food._id}
food={food}
addToCart={addToCart}
/>

))}

</div>

<Footer />

</div>

)

}

export default HomePage;