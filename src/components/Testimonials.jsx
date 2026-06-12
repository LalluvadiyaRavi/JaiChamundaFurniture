import testimonials from "../data/testimonials";
import "./Testimonials.css";
import { FaQuoteLeft } from "react-icons/fa";

function Testimonials(){
    return(
        <section className="testimonials" data-aos="fade-up">

            <h2>What Our Customers Say</h2>

            <div className="testimonial-grid">
            
                {testimonials.map((item) => (
                <div
                    key={item.id}
                    className="testimonial-card"
                >
                    <div className="customer-avatar">
                    {item.name.charAt(0)}
                    </div>
                     <FaQuoteLeft className="quote-icon" />

                    <div className="stars">
                        ★★★★★
                    </div>

                    <p>
                        "{item.review}"
                    </p>

                   

                    <h4>- {item.name}</h4>

                </div>
                ))}

            </div>

        </section>
    );
}
export default Testimonials;