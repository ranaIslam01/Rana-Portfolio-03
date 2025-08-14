import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronUp } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Update scroll states
      setIsScrolled(scrollY > 50);
      setShowScrollTop(scrollY > 300);

      // Calculate scroll progress
      const progress = (scrollY / (documentHeight - windowHeight)) * 100;
      setScrollProgress(Math.min(progress, 100));

      // Find active section
      const sections = navItems.map(item => item.href.slice(1));
      let currentSection = 'hero';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offset = 100; // Offset for better UX

          if (rect.top <= offset && rect.bottom >= offset) {
            currentSection = section;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest(".mobile-menu-container")) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    // Prevent background scroll when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "glassmorphism py-1 sm:py-2"
            : "bg-transparent py-2 sm:py-4"
        } bg-background shadow-md md:shadow-none md:bg-transparent`}
        role="navigation"
        aria-label="Main Navigation"
      >
        {/* Scroll Progress Bar */}
        <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-primary via-primary/80 to-secondary transition-all duration-300 ease-out z-10"
             style={{ width: `${scrollProgress}%` }}
        />
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 flex items-center justify-between min-h-[52px] sm:min-h-[56px]">
          {/* Logo with reload functionality */}
          <button
            className="min-w-0 truncate text-lg xs:text-xl sm:text-2xl font-bold text-gradient select-none focus:outline-none"
            onClick={() => window.location.reload()}
            title="Reload Page"
          >
            Rana Islam
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative text-sm lg:text-base font-medium px-3 py-2 rounded-full transition-all duration-300 hover:scale-105 ${
                    isActive
                      ? 'text-primary bg-primary/10 shadow-lg'
                      : 'text-foreground hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                  )}
                </button>
              );
            })}
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Controls */}
          <div className="md:hidden flex items-center space-x-1 xs:space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="mobile-menu-container relative animate-fade-in duration-300 focus:outline-none focus:ring-2 focus:ring-primary/60 shadow-lg bg-white/90 dark:bg-background/90 backdrop-blur-md border border-primary/20 hover:scale-110 hover:shadow-xl transition-all"
              style={{ borderRadius: "50%" }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <span className={`transition-all duration-500 ease-in-out transform ${
                isMobileMenuOpen ? 'rotate-180 scale-90' : 'rotate-0 scale-100'
              }`}>
                {isMobileMenuOpen ? (
                  <X size={22} className="text-foreground" />
                ) : (
                  <Menu size={22} className="text-foreground" />
                )}
              </span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden mobile-menu-container fixed top-0 left-0 w-full h-full transition-all duration-500 ease-out z-50 flex flex-col items-center ${
            isMobileMenuOpen
              ? "opacity-100 translate-y-0 pointer-events-auto backdrop-blur-lg"
              : "opacity-0 -translate-y-8 pointer-events-none"
          }`}
          aria-hidden={!isMobileMenuOpen}
        >
          <div className="w-full flex-1 flex flex-col justify-center items-center px-4">
            <div className={`glassmorphism mt-16 rounded-2xl p-4 xs:p-6 shadow-2xl w-full max-w-sm transform transition-all duration-700 ease-out ${
              isMobileMenuOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'
            }`}>
              {/* Mobile Progress Indicator */}
              <div className="mb-4 p-2 glassmorphism rounded-xl">
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                  <span>Scroll Progress</span>
                  <span>{Math.round(scrollProgress)}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-300"
                    style={{ width: `${scrollProgress}%` }}
                  />
                </div>
              </div>

              <div className="flex flex-col space-y-1">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.href.slice(1);
                  return (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className={`text-left text-sm xs:text-base font-medium py-3 px-4 rounded-xl w-full transition-all duration-300 transform hover:scale-105 ${
                        isActive
                          ? 'text-primary bg-primary/15 shadow-md border border-primary/20'
                          : 'text-foreground hover:text-primary hover:bg-primary/8'
                      } ${isMobileMenuOpen ? `animate-fade-in-up` : ''}`}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="flex items-center justify-between">
                        <span>{item.name}</span>
                        {isActive && (
                          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`md:hidden fixed inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60 backdrop-blur-sm z-40 transition-all duration-500 ${
            isMobileMenuOpen
              ? 'opacity-100 pointer-events-auto'
              : 'opacity-0 pointer-events-none'
          }`}
          aria-hidden="true"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      </nav>

      {/* Enhanced Scroll to Top Button with Progress Circle */}
      <div
        className={`fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-40 transition-all duration-500 ease-in-out ${
          showScrollTop
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-8 scale-90 pointer-events-none"
        }`}
      >
        {/* Progress Circle */}
        <svg
          className="absolute inset-0 w-12 h-12 sm:w-14 sm:h-14 transform -rotate-90"
          viewBox="0 0 50 50"
        >
          <circle
            cx="25"
            cy="25"
            r="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-muted-foreground/30"
          />
          <circle
            cx="25"
            cy="25"
            r="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            className="text-primary"
            style={{
              strokeDasharray: `${2 * Math.PI * 20}`,
              strokeDashoffset: `${2 * Math.PI * 20 * (1 - scrollProgress / 100)}`,
              transition: 'stroke-dashoffset 0.3s ease'
            }}
          />
        </svg>

        {/* Button */}
        <button
          className="relative w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary to-primary/80 text-white rounded-full shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/60 backdrop-blur-sm"
          aria-label="Scroll to Top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 mx-auto" />
        </button>
      </div>
    </>
  );
};

export default Navigation;
