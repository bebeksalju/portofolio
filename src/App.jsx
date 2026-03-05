import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import ExperienceProjects from './components/ExperienceProjects';
import Awards from './components/Awards';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-[#030610] min-h-screen text-slate-300 font-sans selection:bg-cyber-green selection:text-cyber-dark relative selection:bg-opacity-80">
      <Navbar />
      <main>
        <Hero />
        <BentoGrid />
        <ExperienceProjects />
        <Awards />
      </main>
      <Contact />
    </div>
  );
}

export default App;
