import { useState } from "react";
import faqs from "../data/faqs";
import "./FAQ.css";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(
      activeIndex === index ? null : index
    );
  };

  return (
    <section className="faq">

      <div className="faq-header">
        <h2>Frequently Asked Questions</h2>
      </div>

      <div className="faq-container">

        {faqs.map((item, index) => (
          <div
            className="faq-item"
            key={index}
          >

            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              {item.question}

              <span>
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>

            {activeIndex === index && (
              <div className="faq-answer">
                {item.answer}
              </div>
            )}

          </div>
        ))}

      </div>

    </section>
  );
}

export default FAQ;