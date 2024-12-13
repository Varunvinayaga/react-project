import React from "react";

function Projects() {
  const projectList = [
    { name: "Project 1", description: "Description of project 1." },
    { name: "Project 2", description: "Description of project 2." },
    { name: "Project 3", description: "Description of project 3." },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Projects</h2>
      <ul>
        {projectList.map((project, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            <strong>{project.name}:</strong> {project.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
