import products from "../data/products";
import ProductCard from "./ProductCard";
import "./FeaturedProducts.css";
import { Link } from "react-router-dom";

function FeaturedProducts() {
  const featuredProducts = products.slice(0, 3);

  return (
    <section className="featured-products" data-aos="fade-up">
      <div className="section-header">
        <h2>Featured Products</h2>
        <p>
          Explore our most popular furniture solutions
        </p>
      </div>

      <div className="featured-grid">
        {featuredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
      <div className="view-all-container">
        <Link to="/products">
            <button className="view-all-btn">
            View All Products →
            </button>
        </Link>
      </div>
    </section>
  );
}

export default FeaturedProducts;