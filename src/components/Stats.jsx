import "./Stats.css";

function Stats() {
  return (
    <section className="stats" data-aos="fade-up">
      <div>
        <h2> Our Stats </h2>
      </div>
      
      <div className="stat-card">
        <h2>10+</h2>
        <p>Years Experience</p>
      </div>

      <div className="stat-card">
        <h2>50+</h2>
        <p>Projects Completed</p>
      </div>

      <div className="stat-card">
        <h2>100%</h2>
        <p>Custom Design</p>
      </div>

      <div className="stat-card">
        <h2>Local</h2>
        <p>Bhavnagar Service</p>
      </div>
    </section>
  );
}

export default Stats;