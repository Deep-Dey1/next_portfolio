import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(true);

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Hero setActiveSection={setActiveSection} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />;
      case 'about':
        return <About />;
      case 'skills':
        return <Skills />;
      case 'projects':
        return <Projects setActiveSection={setActiveSection} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />;
      case 'contact':
        return <Contact setActiveSection={setActiveSection} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />;
      default:
        return <Hero setActiveSection={setActiveSection} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-light">
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden relative bg-white">
        {/* Background Pattern */}
        <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_2px,transparent_2px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

        {/* Content Container */}
        <div className="flex-1 overflow-y-auto relative z-0">
          {renderSection()}
        </div>
      </div>
    </div>
  );
}

export default App;
