import "./Footer.css";
import logo from "../assets/logo.png";
function Footer(){
return(

<footer className="footer">

<div className="footer-top">

<div>

<img
src={logo}
alt=""
className="footer-logo"
/>

<h3>
Jai Chamunda Furniture
</h3>

<p>
Custom Furniture & Interior Solutions
</p>

</div>

<div>

<h4>Quick Links</h4>

<a href="#">Home</a>
<a href="#services">Services</a>
<a href="#gallery">Gallery</a>

</div>

<div>

<h4>Contact</h4>

<p>Bhavnagar, Gujarat</p>

<p>+91 XXXXXXXXXX</p>

</div>

</div>

<div className="copyright">

© 2026 Jai Chamunda Furniture

</div>

</footer>

);

}

export default Footer;