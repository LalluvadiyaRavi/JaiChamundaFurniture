import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-section">
          <h3>Jai Chamunda Furniture</h3>

          <p>
            Premium Furniture & Interior Solutions
            crafted with quality and trust.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/#/products">Products</a>
          <a href="/?scroll=about">About</a>
          <a href="/?scroll=contact">Contact</a>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>

          <p>📍 Bhavnagar, Gujarat</p>
          <p>📞 +91 XXXXX XXXXX</p>
          <p>✉️ jaichamundafurniture@gmail.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Jai Chamunda Furniture.
        All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;