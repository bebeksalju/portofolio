import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import ExperienceProjects from './components/ExperienceProjects';
import Awards from './components/Awards';
import Contact from './components/Contact';

function App() {
  return (
    <div className="ios-mesh-bg min-h-screen text-[#1C1C1E] font-sans selection:bg-ios-blue/20 selection:text-ios-blue relative overflow-hidden">
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
