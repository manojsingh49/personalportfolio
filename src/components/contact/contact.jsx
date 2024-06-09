import React from "react";
import "./contact.css";

function Contact() {
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <p>
        Email: <a href="mailto:student@example.com">manoj.singh123@gmail.com</a>
      </p>
      <p>
        LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/manoj-singh03"
          target="_blank"
          rel="noopener noreferrer"
        >
          My LinkedIn
        </a>
      </p>
      <p>
        GitHub:{" "}
        <a
          href="https://github.com/manojsingh49"
          target="_blank"
          rel="noopener noreferrer"
        >
          My GitHub
        </a>
      </p>
    </div>
  );
}
export default Contact;
