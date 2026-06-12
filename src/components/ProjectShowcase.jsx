import "./ProjectShowcase.css";
import projects from "../data/projects";

function ProjectShowcase(){

return(

<section
className="projects"
data-aos="fade-up"
>

<h2>

Completed Projects

</h2>

<div className="project-grid">

{projects.map((item)=>(

<div
key={item.id}
className="project-card"
>

<img
src={item.image}
alt={item.title}
/>

<div className="project-info">

<h3>

{item.title}

</h3>

<p>

📍 {item.location}

</p>

<p>

💰 {item.budget}

</p>

<p>

⏱ {item.duration}

</p>

<button>

View Project

</button>

</div>

</div>

))}

</div>

</section>

);

}

export default ProjectShowcase;