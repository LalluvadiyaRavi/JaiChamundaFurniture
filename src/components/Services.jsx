import "./Services.css";

function Services(){
    return (
        <section id="services" className="services" data-aos="fade-up">
            <h2>Our Services</h2>

            <div className="services-container">
                <div className="service-card">
                    <h3>🛠 Modular Kitchen</h3>
                    <p>Custom Kitchen Solution for modern homes.</p>
                </div>
            
                <div className="service-card">
                    <h3>🚪 Wardrobe</h3>
                    <p>Stylish and kitchen solutions for modern homes.</p>
                </div>
            
                <div className="service-card">
                    <h3>📺 TV Unit</h3>
                    <p>Modern TV Unit designs for your living room.</p>
                </div>
            
                <div className="service-card">
                    <h3>🏠 Interior Design</h3>
                    <p>Complete furniture and interior solutions.</p>
                </div>
            </div>
        </section>
    );
}

export default Services;