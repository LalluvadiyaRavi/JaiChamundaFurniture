import "./Hero.css";
import heroImage from "../assets/hero-bg.jpeg";
function Hero() {
  return (
    <section className="hero" data-aos="fade-up" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${heroImage}`}}>
      <div className="hero-content">

        <h1>Jai Chamunda Furniture Store</h1>

        <p>
          Custom Furniture & Interior Solutions in Bhavnagar
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">Get Free Consultation</button>
          <button className="secondary-btn">Call: +91 XXXXX XXXXX </button>
        </div>

      </div>
    </section>
  );
}

export default Hero;