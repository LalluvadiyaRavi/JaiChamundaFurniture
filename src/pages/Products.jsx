import { Helmet } from "react-helmet-async";
import { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import "./Products.css";

function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = products.filter((product) => {

      const matchesSearch =
        product.name
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" ||
        product.category === category;

      return matchesSearch && matchesCategory;

    });
  return (
    <>
    <Helmet>

      <title>
      Products |
      Jai Chamunda Furniture
      </title>

      <meta
      name="description"
      content="
      Explore our furniture collection
      "
      />

    </Helmet>
    <section className="products-page">
      <div className="category-filters">

        <button
          className={category === "All" ? "active-category" : ""}
          onClick={() => setCategory("All")}
        >
          All ({products.length})
        </button>

        <button
          className={category === "Kitchen" ? "active-category" : ""}
          onClick={() => setCategory("Kitchen")}
        >
          Kitchen ({products.filter(
            p => p.category === "Kitchen"
            ).length}
            )
        </button>

        <button
          className={category === "Wardrobe" ? "active-category" : ""}
          onClick={() => setCategory("Wardrobe")}
        >
          Wardrobe ({products.filter(
            p => p.category === "Wardrobe"
            ).length}
            )
        </button>

        <button 
        className={category === "Tv Unit" ? "active-category":""}
        onClick={() => setCategory("TV Unit")}>
          TV Unit ({products.filter(
            p => p.category === "TV Unit"
            ).length}
            )
        </button>

        <button 
        className={category === "Interior"?"active-category":""}
        onClick={() => setCategory("Interior")}>
          Interior ({products.filter(
            p => p.category === "Interior"
          ).length}
          )
        </button>

        <button onClick={() => setCategory("Plywood")}>
          Plywood ({products.filter(
            p => p.category === "Plywood"
            ).length}
            )
        </button>

      </div>
      <input
        type="text"
        placeholder="Search Products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />
      <h1>
        Our Furniture Collection
      </h1>

      <div className="products-grid">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
    </>
  );
}

export default Products;