import React from "react";
import "./about.css";
import "../../styles.css";
import profilePhoto from "../../assets/pp.jpg";

function About() {
  return (
    <div className="about">
      <div className="about-text">
        <h2>Hello, I'm Manoj Singh</h2>
        <h3>Full Stack Developer</h3>
        <p>
          As a full stack developer, I possess a comprehensive skill set that
          encompasses both front-end and back-end web development.
        </p>
      </div>
      <div className="about-photo">
        <img src={profilePhoto} alt="Profile" className="profile-photo" />
      </div>
    </div>
  );
}

export default About;
