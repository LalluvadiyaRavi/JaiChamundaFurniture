import "./Navbar.css";

function Navbar(){
    return(
        <nav>
            
            <div className="logo-section">
                <img 
                src={`${import.meta.env.BASE_URL}logo.png`}
                alt="logo"
                />
                <span>Jai Chamunda Furniture</span>
            </div>
            <ul>
                <li><a href={`${import.meta.env.BASE_URL}`}>Home</a></li>
                <li><a href={`${import.meta.env.BASE_URL}#about`}>About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;