import "./Navbar.css";
import logo from "../assets/logo.png";
import { useState } from "react";

function Navbar(){
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
                <li><a href="#/">Home</a></li>
                <li><a href="#/products">Products</a></li>
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
            </ul>
        </nav>
    );
}

export default Navbar;