import { Helmet } from "react-helmet-async";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import QuoteForm from "../components/QuoteForm";
import "./ProductDetails.css";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";
function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);

  const [selectedImage, setSelectedImage] = useState(null);
//for ligth box or main image on full screen
  const [showLightbox, setShowLightbox] = useState(false);
  //for check multiple images 
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  //for mibiletransfer fom one pic into another
  const [touchStart, setTouchStart] = useState(null);
const [touchEnd, setTouchEnd] = useState(null);


  const product = products.find(
    (item) => item.id === Number(id)
  );
  const relatedProducts = products
  .filter((item) => item.id !== product.id)
  .slice(0, 3);

    useEffect(() => {
        if (product?.images?.length > 0) {
            setSelectedImage(product.images[0]);
        }
    }, [product]);
    useEffect(() => {
  const handleKeyDown = (e) => {

    if (!showLightbox) return;

    if (e.key === "ArrowLeft") {
      prevImage();
    }

    if (e.key === "ArrowRight") {
      nextImage();
    }

    if (e.key === "Escape") {
      setShowLightbox(false);
    }
  };

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener(
      "keydown",
      handleKeyDown
    );
  };

}, [showLightbox, currentImageIndex]);
  if (!product) {
    return <h2>Product Not Found</h2>;
  }
  const prevImage = () => {
    const newIndex =
      currentImageIndex === 0
        ? product.images.length - 1
        : currentImageIndex - 1;

    setCurrentImageIndex(newIndex);
  };
  const nextImage = () => {
    const newIndex =
      currentImageIndex === product.images.length - 1
        ? 0
        : currentImageIndex + 1;

    setCurrentImageIndex(newIndex);
  };
  //for mobile point of viewfunction is -> or <- or image transfer
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {

    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;

    const isLeftSwipe =
      distance > minSwipeDistance;

    const isRightSwipe =
      distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextImage();
    }

    if (isRightSwipe) {
      prevImage();
    }
  };
  return (
    <>
    <Helmet>

    <title>
    {product.name} |
    Jai Chamunda Furniture
    </title>

    <meta
    name="description"
    content={product.description}
    />

    </Helmet>

    <div className="product-details-page">
        <button
            className="back-btn"
            onClick={() => navigate(-1)}
            >
            ← Back to Products
        </button>
   
    <section className="product-details">
      <div className="details-container">

        <div className="details-image">
          <div className="image-zoom-container">
            <img
              src={selectedImage}
              alt={product.name}
              className="main-product-image"
              onClick={() => {
                setCurrentImageIndex(
                  product.images.indexOf(selectedImage)
                );
                setShowLightbox(true);
              }}
            />
          </div>
          <div className="thumbnail-container">

            {product.images?.map((image, index) => (
                <img
                key={index}
                src={image}
                alt={product.name}
                className={`thumbnail ${
                    selectedImage === image
                    ? "active-thumbnail"
                    : ""
                }`}
                onClick={() => {
                  setSelectedImage(image);
                  setCurrentImageIndex(index);
                }}
                />
            ))}

            </div>
        </div>

        <div className="details-content">

          <h1>{product.name}</h1>

          <p>{product.description}</p>

          <h3>Features</h3>

          <ul>
            {product.features.map((feature, index) => (
              <li key={index}>
                  ✓ {feature}
              </li>
            ))}
          </ul>
            <h3>Specifications</h3>

            <div className="specifications">

              {Object.entries(product.specifications).map(
                ([key, value]) => (
                  <div className="spec-row" key={key}>
                    <span>{key}</span>
                    <span>{value}</span>
                  </div>
                )
              )}

            </div>
          <div className="action-buttons">

            <button
                className="quote-btn"
                onClick={() => setShowForm(true)}
            >
                Request Quote
            </button>

            <a
            href={`https://wa.me/917874707088?text=${encodeURIComponent(
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

            </div>

      <QuoteForm
        isOpen={showForm}
        onClose={() => setShowForm(false)}
        productName={product.name}
      />

      {showLightbox && (
  <div
    className="lightbox"
    onClick={() => setShowLightbox(false)}
  >
    <span className="close-lightbox"
    onClick={() => setShowLightbox(false)}
    >
      &times;
    </span>
      <button
        className="lightbox-prev"
        onClick={(e) => {
          e.stopPropagation();
          prevImage();
        }}
      >
        ❮
    </button>

    <img
      src={product?.images?.[currentImageIndex]}
      alt={product.name}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onClick={(e) => e.stopPropagation()}
    />
    
    <div className="image-counter">
      {currentImageIndex + 1} /
      {product.images.length}
    </div>
    <div className="swipe-hint">
      Swipe ←  → to view images
    </div>
    <button
        className="lightbox-next"
        onClick={(e) => {
          e.stopPropagation();
          nextImage();
        }}
      >
        ❯
    </button>
  </div>
)}
  
    </section>
    
    <div className="related-products">

                <h2>You May Also Like</h2>

                <div className="related-grid">

                  {relatedProducts.map((item) => (

                    <Link
                      to={`/products/${item.id}`}
                      key={item.id}
                      className="related-card"
                    >

                      <img
                        src={item.image}
                        alt={item.name}
                      />

                      <h4>{item.name}</h4>

                    </Link>

                  ))}

                </div>

              </div>
     </div>
     </>
  );
  
}
export default ProductDetails;