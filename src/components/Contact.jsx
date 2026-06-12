import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact" data-aos="fade-right">

      <div className="contact-container">

        <h2>Contact Us</h2>

        <div className="contact-content">

          <div className="contact-card">

            <h3>Jai Chamunda Furniture Store</h3>

            <p>📍 Bhavnagar, Gujarat</p>

            <p>📞 +91 XXXXXXXXXX</p>

            <p>🕒 Mon - Sat : 9 AM - 7 PM</p>

            <a 
              href="https://wa.me/919978264852"
              className="whatsapp-btn"
              target="_blank"
            > <img 
              src={`${import.meta.env.BASE_URL}whatsapp-logo.png`}
              alt="WhatsApp"
              style={{textAlign:"center",width:"20px",height:"20px",marginRight:"8px"}} />
               WhatsApp Us
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;