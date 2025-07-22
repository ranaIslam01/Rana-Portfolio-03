import React, { useState, useEffect } from "react";
import "./App.css";
import { ThemeProvider } from "./components/ThemeProvider";
import SimplePreloader from "./components/SimplePreloader";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import Navigation from "./components/Navigation";

function App() {
  // Preloader disabled by default. Set to true to enable.
  const [showPreloader, setShowPreloader] = useState(false);
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
      {/* Preloader is disabled. To enable, set showPreloader to true above. */}
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
  );
}

export default App;
