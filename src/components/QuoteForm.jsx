import "./QuoteForm.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";

function QuoteForm({ isOpen, onClose, productName }) {
    const [formData, setFormData] = useState({
    user_name: "",
    phone: "",
    location: "",
    requirements: "",
    budget: "",
    });

    const [success, setSuccess] = useState(false);
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const isValidForm = () => {
      return (
        formData.user_name.trim() &&
        formData.phone.trim() &&
        formData.location.trim()
      );
    };
    const handleSubmit = (e) => {
      
    e.preventDefault();
    if (!isValidForm()) {
          alert("Please fill all required fields.");
          return;
    }
    emailjs
        .send(
        "service_ob10bg1",
        "template_7xkcx2g",
        {
            ...formData,
            product: productName,
        },
        "cK6PgLrzchzEtDCse"
        )
        .then(() => {
        setSuccess(true);

        setFormData({
            user_name: "",
            phone: "",
            location: "",
            requirements: "",
            budget: "",
        });
        })
        .catch((error) => {
        console.error(error);

        alert("Failed to send request.");
        });
    };
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">

      <div className="quote-modal">

        <button
          className="close-btn"
          onClick={onClose}
        >
          ×
        </button>

        <h2>Request Quote</h2>

        <p>
          Product: <strong>{productName}</strong>
        </p>
        {success && (
        <p style={{ color: "green" }}>
            Quote request sent successfully!
            We will contact you soon.
        </p>
        )}
        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            placeholder="Your Name"
            minLength="3"
            maxLength="50"
            required
          />

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            pattern="[0-9]{10}"
            maxLength="10"
            title="Please enter a valid 10-digit mobile number"
            required
          />

          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Location"
            minLength="3"
            required
          />

          <textarea
            name="requirements"
            value={formData.requirements}
            onChange={handleChange}
            placeholder="Tell us your requirements"
            rows="4"
          />

          <input
            type="text"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            placeholder="Budget (Optional)"
          />

          <button type="submit">
            Submit Request
          </button>

        </form>

      </div>

    </div>
  );
}

export default QuoteForm;