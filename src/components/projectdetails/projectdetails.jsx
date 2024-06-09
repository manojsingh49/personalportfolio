import React from "react";
import "./projectdetails.css";

function Projectdetails() {
  return (
    <section id="projects">
      <h2>Experience</h2>
      <div className="project-details">
        <div className="project-image-container">
          <img src={project1.jpg} alt="Project 1" className="project-image" />
          <div className="project-info">
            <h3>Senior Software Engineer at ABC Healthcare</h3>
            <span className="date">March 2018 - December 2019</span>
          </div>
        </div>
        <ul>
          <li>
            Designed and developed healthcare web applications using the MERN
            stack.
          </li>
          <li>Ensured HIPAA compliance in all developed applications.</li>
          <li>Integrated machine learning models for predictive analytics.</li>
        </ul>
      </div>
      <div className="project-details">
        <div className="project-image-container">
          <img src={projectImage2} alt="Project 2" className="project-image" />
          <div className="project-info">
            <h3>Sr. React/Svelte Engineer at EnthuZiastic</h3>
            <span className="date">March 2021 - January 2022</span>
          </div>
        </div>
        <ul>
          <li>
            Led the development of interactive web applications using React and
            Svelte.
          </li>
          <li>
            Collaborated with designers and product managers to deliver
            user-friendly interfaces.
          </li>
          <li>
            Optimized application performance and ensured responsive design.
          </li>
        </ul>
      </div>
      <div className="project-details">
        <div className="project-image-container">
          <img src={projectImage3} alt="Project 3" className="project-image" />
          <div className="project-info">
            <h3>Software Engineer III at XYZ Bank</h3>
            <span className="date">January 2020 - Present</span>
          </div>
        </div>
        <ul>
          <li>
            Developed and maintained banking applications using Node.js and
            React.
          </li>
          <li>
            Led a team of developers to ensure timely delivery of projects.
          </li>
          <li>
            Implemented microservices architecture for scalable applications.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Projectdetails;
