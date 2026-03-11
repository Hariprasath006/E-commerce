import React from "react";
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Footer(){

return(

<div className="footer">

<div>

<h2>Fresh Shop</h2>

<p>
We deliver fresh groceries at your doorstep with fresh quality and fast delivery.
</p>

</div>

<div>

<h4>Quick Links</h4>

<a href="/">Home</a> <br /> <a href="#products">All Product</a> <br /> 

</div>

<div id="contact">

<h4>Contact</h4>

<p><FaPhone /> +91 98765 43210</p>
<p><FaEnvelope /> support@freshshop.com</p>
<p><FaMapMarkerAlt /> Gandhi Nagar, Chennai, India</p>

</div>

<div>

<h4>Follow Us</h4>

<p>
<a href="https://instagram.com" target="_blank" rel="noreferrer">
<FaInstagram /> Instagram
</a>
</p>

<p>
<a href="https://twitter.com" target="_blank" rel="noreferrer">
<FaTwitter /> Twitter
</a>
</p>

<p>
<a href="https://facebook.com" target="_blank" rel="noreferrer">
<FaFacebook /> Facebook
</a>
</p>

<p>
<a href="https://youtube.com" target="_blank" rel="noreferrer">
<FaYoutube /> Youtube
</a>
</p>

</div>

</div>

)

}

export default Footer;
