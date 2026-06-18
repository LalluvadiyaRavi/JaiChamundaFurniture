import "./Navbar.css";
import logo from "../assets/logo.png";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar(){
    const { user } = useAuth();
    const { cart } = useCart();
    const cartCount = cart.reduce(
        (sum,item) => sum + item.quantity,
        0
    );
    const [menuOpen,setMenuOpen]=useState(false);
    const scrollToSection = (id) => {

        if(window.location.hash.includes("/products")){

        window.location.href=
        `#/`;

        setTimeout(()=>{

        document
        .getElementById(id)
        ?.scrollIntoView({
        behavior:"smooth"
        });

        },300);

        }else{

        document
        .getElementById(id)
        ?.scrollIntoView({
        behavior:"smooth"
        });

        }

        setMenuOpen(false);

    };
    return(
        <nav>
            
            <div className="logo-section">
                <img 
                src={logo}
                alt="logo"
                />
                <span>Jai Chamunda Furniture</span>
            </div>
            <button
                className="menu-btn"
                onClick={() =>
                setMenuOpen(!menuOpen)
                }
                >
                ☰
            </button>

            <ul className={menuOpen?"show":""}>
                <li><link to="/">Home</link></li>
                <li><link to="/products">Products</link></li>
                <li>
                    <Link to="/cart" className="cart-link">
                    🛒 Cart
                    {cartCount > 0 &&(
                        <span className="cart-badge">
                            {cartCount}
                        </span>
                    )}
                    </Link>
                </li>
                <li><button
                    onClick={()=>
                    scrollToSection("about")
                    }
                    >
                        About
                    </button>
                </li>
                
                <li><button
                    onClick={()=>
                    scrollToSection("services")
                    }
                    >
                        Services
                    </button>
                </li>
                <li><button
                    onClick={()=>
                    scrollToSection("gallery")
                    }
                    >
                        Gallery
                    </button>
                </li>
                <li><button
                    onClick={()=>
                    scrollToSection("contact")
                    }
                    >
                        Contact
                    </button>
                </li>
                {user ?(
                    <li>
                        <link to="/profile">
                            👤 {user.name.split(" ")[0]}
                        </link>
                    </li>
                ):(
                    <>
                        <li>
                            <link to="/login">
                             Login
                            </link>
                        </li>
                        
                        <li>
                            <link to="/register">
                             Register
                            </link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
}

export default Navbar;