import CountUp from "react-countup";
import {
  FaHome,
  FaSmile,
  FaAward,
  FaStar
} from "react-icons/fa";
import "./Stats.css";

function Stats() {
  const stats = [
    {
      icon: <FaHome />,
      number: 500,
      suffix: "+",
      title: "Projects Completed",
    },
    {
      icon: <FaSmile />,
      number: 300,
      suffix: "+",
      title: "Happy Customers",
    },
    {
      icon: <FaAward />,
      number: 10,
      suffix: "+",
      title: "Years Experience",
    },
    {
      icon: <FaStar />,
      number: 100,
      suffix: "%",
      title: "Satisfaction",
    },
  ];

  return (
    <section className="stats" data-aos="fade-up">
      <div className="stats-header">
        <h2>Our Stats</h2>
        <p>
          Trusted by hundreds of families across Gujarat
        </p>
      </div>
      <div className="stats-container">
        
        {stats.map((item, index) => (
          <div
            key={index}
            className="stat-card"
          >
            <div className="stat-icon">
              {item.icon}
            </div>
            <h2>
              {item.number}{item.suffix}
            </h2>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;