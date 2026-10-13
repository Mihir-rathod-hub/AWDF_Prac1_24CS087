import React from 'react';

/**
 * Projects Component
 * Displays three genuine student projects using an internal array and .map()
 */
function Projects() {
  const projectList = [
    {
      id: 1,
      title: 'Paperless Hospital',
      description:
        'A hospital management project focused on digitizing patient-related workflows, with separate interfaces for patients and doctors and an AI-assisted chatbot.',
      tags: ['React', 'Node.js', 'MongoDB', 'AI Integration'],
    },
    {
      id: 2,
      title: 'Social Spark',
      description:
        'A MERN-stack social media application built to explore user interfaces and full-stack web development.',
      tags: ['React', 'Node.js', 'MongoDB'],
    },
    {
      id: 3,
      title: 'Flappy Bird',
      description:
        'A small 2D game developed while learning game development, featuring bird movement, obstacles, and score tracking.',
      tags: ['Godot', 'GDScript', 'Game Development'],
    },
  ];

  return (
    <section className="portfolio-section" id="projects">
      <div className="section-header">
        <h2 className="section-title">Projects</h2>
        <div className="section-line"></div>
      </div>
      <div className="projects-grid">
        {projectList.map((project) => (
          <div key={project.id} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="tag-badge">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
