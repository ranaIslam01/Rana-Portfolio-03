import React, { useState, useEffect } from 'react'
import './App.css'
import { ThemeProvider } from './components/ThemeProvider'
import SimplePreloader from './components/SimplePreloader'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import TestimonialsSection from './components/TestimonialsSection'
import ContactSection from './components/ContactSection'
import Navigation from './components/Navigation'

function App() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handlePreloaderComplete = () => {
    setShowPreloader(false);
  };

  return (
    <ThemeProvider>
      {showPreloader && isLoaded && (
        <SimplePreloader onComplete={handlePreloaderComplete} />
      )}
      <div className="min-h-screen bg-background transition-colors duration-300">
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App

