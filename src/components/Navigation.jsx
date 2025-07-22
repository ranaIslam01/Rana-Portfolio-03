import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
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
        <div className="container mx-auto px-2 sm:px-4 flex items-center justify-between min-h-[48px]">
          {/* Logo with reload functionality */}
          <button
            className="min-w-0 truncate text-lg xs:text-xl sm:text-2xl font-bold text-gradient select-none focus:outline-none"
            onClick={() => window.location.reload()}
            title="Reload Page"
          >
            Rana Islam
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-sm lg:text-base text-foreground hover:text-primary transition-colors duration-200 font-medium px-1 lg:px-2"
              >
                {item.name}
              </button>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Controls */}
          <div className="md:hidden flex items-center space-x-1 xs:space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="mobile-menu-container relative animate-fade-in duration-300 focus:outline-none focus:ring-2 focus:ring-primary/60 shadow-md bg-white/80 dark:bg-background/80 backdrop-blur-md border border-primary/20 hover:scale-110 hover:shadow-lg transition-all"
              style={{ borderRadius: "50%" }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <span className="transition-transform duration-300 ease-in-out">
                {isMobileMenuOpen ? (
                  <X size={24} className="text-foreground" />
                ) : (
                  <Menu size={24} className="text-foreground" />
                )}
              </span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden mobile-menu-container fixed top-0 left-0 w-full h-full transition-all duration-300 ease-in-out z-50 flex flex-col items-center ${
            isMobileMenuOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
          aria-hidden={!isMobileMenuOpen}
        >
          <div className="w-full flex-1 flex flex-col justify-center items-center">
            <div className="glassmorphism mt-20 mx-2 xs:mx-4 rounded-lg p-2 xs:p-4 shadow-lg w-full max-w-xs">
              <div className="flex flex-col space-y-1 xs:space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="text-left text-sm xs:text-base text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200 font-medium py-2 xs:py-3 px-3 xs:px-4 rounded-lg w-full"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div
            className="md:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            aria-hidden="true"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </nav>

      {/* Scroll to Top Button */}
      <button
        className={`fixed bottom-6 right-6 z-40 bg-primary text-white rounded-full shadow-lg p-3 transition-all duration-500 ease-in-out ${
          showScrollTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8 pointer-events-none"
        } hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/60`}
        style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.15)" }}
        aria-label="Scroll to Top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 19V5M5 12l7-7 7 7"
          />
        </svg>
      </button>
    </>
  );
};

export default Navigation;
