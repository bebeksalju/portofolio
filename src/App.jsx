import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import ExperienceProjects from './components/ExperienceProjects';
import Awards from './components/Awards';
import Certificates from './components/Certificates';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen text-[#1C1C1E] font-sans selection:bg-ios-blue/20 selection:text-ios-blue relative">
      {/* Animated Fixed Background */}
      <div className="ios-mesh-bg fixed inset-0 -z-10 pointer-events-none" />
      
      <Navbar />
      <main>
        <Hero />
        <BentoGrid />
        <ExperienceProjects />
        <Awards />
        <Certificates />
      </main>
      <Contact />
    </div>
  );
}

export default App;
