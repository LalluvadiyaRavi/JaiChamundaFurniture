import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact" data-aos="fade-right">
    <div className="contact-content">

      <div className="contact-card">

        <h3>Let's Build Your Dream Furniture</h3>

        <p className="contact-subtitle">
          Get in touch for custom furniture,
          modular kitchens, wardrobes and interior work.
        </p>

        <div className="contact-info">

          <div className="info-item">
            <span>📍</span>
            <div>
              <h4>Location</h4>
              <p>Bhavnagar, Gujarat</p>
            </div>
          </div>

          <div className="info-item">
            <span>📞</span>
            <div>
              <h4>Call Us</h4>
              <p>+91 XXXXX XXXXX</p>
            </div>
          </div>

          <div className="info-item">
            <span>🕒</span>
            <div>
              <h4>Working Hours</h4>
              <p>Mon - Sat | 9:00 AM - 7:00 PM</p>
            </div>
          </div>

        </div>

        <div className="contact-actions">

          <a
            href="https://wa.me/919978264852"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            WhatsApp Us
          </a>

          <a
            href="tel:+919978264852"
            className="call-btn"
          >
            Call Now
          </a>

        </div>

      </div>
      <div className="map-container"> 
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d442.42424395314345!2d72.15848637855284!3d21.74322314161157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395f5bf0ad2243f1%3A0x3f7fc70eb894a2b9!2sSiddhivinayak%20Ganesha%20Temple!5e0!3m2!1sen!2sin!4v1781287589458!5m2!1sen!2sin" 
        width="100%" height="400" style={{ border: 0 }} allowFullScreen="" 
        loading="lazy" referrerPolicy="no-referrer-when-downgrade" 
        title="Jai Chamunda Furniture Location" >
        </iframe> 
      </div>
    </div>
    </section>
  );
}

export default Contact;