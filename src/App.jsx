import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';

/**
 * App Component
 * Composes Mihir Rathod's personal developer portfolio using modular components.
 */
function App() {
  const studentProfile = {
    name: 'Mihir Rathod',
    themeColor: '#5b50e6',
    bio: "I'm a Computer Science student who enjoys problem-solving, learning how software works, and building projects. I practice data structures and algorithms through coding problems and am expanding my skills in web development, backend development, and software engineering. I'm interested in understanding the fundamentals behind the code I write, not just making things work.",
    skillList: [
      {
        category: 'Programming',
        items: ['C', 'C++', 'Java', 'Python'],
      },
      {
        category: 'Web Development',
        items: ['HTML', 'CSS', 'JavaScript', 'React basics'],
      },
      {
        category: 'Tools and Technologies',
        items: ['Git', 'GitHub', 'VS Code', 'Node.js basics'],
      },
      {
        category: 'Other',
        items: ['Data Structures and Algorithms', 'SQL basics'],
      },
    ],
  };

  return (
    <div className="portfolio-wrapper">
      <div className="portfolio-container">
        {/* Header receives name and themeColor props */}
        <Header 
          name={studentProfile.name} 
          themeColor={studentProfile.themeColor} 
        />

        <main className="portfolio-content">
          {/* About receives bio prop */}
          <About bio={studentProfile.bio} />

          {/* Skills receives skillList prop */}
          <Skills skillList={studentProfile.skillList} />

          {/* Projects displays three genuine projects */}
          <Projects />
        </main>

        {/* Footer receives name prop */}
        <Footer name={studentProfile.name} />
      </div>
    </div>
  );
}

export default App;
