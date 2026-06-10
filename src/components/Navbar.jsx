import "./Navbar.css";

function Navbar(){
    return(
        <nav>
            
            <div className="logo-section">
                <img src="./logo.png" alt="Jai Chamunda Furniture" />
                <span>Jai Chamunda Furniture</span>
            </div>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;