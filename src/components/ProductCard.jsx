import "./ProductCard.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import QuoteForm from "../components/QuoteForm";


function ProductCard({ product }) {
  const [showForm, setShowForm] = useState(false);
  return (
    <div>
    <div className="product-card">
      {product.bestseller && (
        <span className="badge">Best Seller</span>
      )

      }
      <img
        src={product.image}
        alt={product.name}
      />

      <h3>{product.name}</h3>

      <p>{product.description}</p>

      <div className="product-buttons">
          <Link to={`/products/${product.id}`}>
            <button>
              View Details
            </button>
          </Link>
        

          <button
            className="quote-btn"
            onClick={() => setShowForm(true)}
          >
            Request Quote
          </button>

          <a
            href={`https://wa.me/919978264852?text=${encodeURIComponent(
              `Hello Jai Chamunda Furniture,

              I am interested in ${product.name}.

              Please provide more details and a quotation.

              Thank you.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="whatsapp-btn">
              WhatsApp Inquiry
            </button>
          </a>

      </div>
    </div>
        <QuoteForm
        isOpen={showForm}
        onClose={() => setShowForm(false)}
        productName={product.name}
      />
    </div>
    
  );
}

export default ProductCard;