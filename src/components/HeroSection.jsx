import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  Download,
  Github,
  Instagram,
  Facebook,
  Linkedin,
  Mail,
  Twitter,
} from "lucide-react";
import profileImage from "../assets/rana.jpg";
import AnimatedText from "./AnimatedText";

const HeroSection = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;
    let mouseX = 0;
    let mouseY = 0;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Mouse tracking
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Particle system
    const particles = [];
    const particleCount = 80;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;
        this.radius = Math.random() * 3 + 1;
        this.opacity = Math.random() * 0.6 + 0.2;
        this.originalVx = this.vx;
        this.originalVy = this.vy;
      }

      update() {
        // Mouse interaction
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          const force = (150 - distance) / 150;
          this.vx += (dx / distance) * force * 0.02;
          this.vy += (dy / distance) * force * 0.02;
        } else {
          // Return to original velocity
          this.vx += (this.originalVx - this.vx) * 0.02;
          this.vy += (this.originalVy - this.vy) * 0.02;
        }

        this.x += this.vx;
        this.y += this.vy;

        // Boundary collision
        if (this.x < 0 || this.x > canvas.width) {
          this.vx *= -1;
          this.originalVx *= -1;
        }
        if (this.y < 0 || this.y > canvas.height) {
          this.vy *= -1;
          this.originalVy *= -1;
        }

        // Keep particles in bounds
        this.x = Math.max(0, Math.min(canvas.width, this.x));
        this.y = Math.max(0, Math.min(canvas.height, this.y));
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(143, 188, 143, ${this.opacity})`;
        ctx.fill();

        // Add glow effect
        ctx.shadowBlur = 10;
        ctx.shadowColor = `rgba(143, 188, 143, ${this.opacity * 0.5})`;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      // Draw connections
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            const opacity = 0.15 * (1 - distance / 120);
            ctx.strokeStyle = `rgba(143, 188, 143, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient pt-32 sm:pt-40 md:pt-48 scroll-mt-32 sm:scroll-mt-40 md:scroll-mt-48"
    >
      {/* Animated Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 1 }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-2 sm:px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-4 sm:mb-8 flex justify-center animate-fade-in">
            <div className="relative">
              <img
                src={profileImage}
                alt="Rana Islam"
                className="w-44 h-44 xs:w-28 xs:h-28 sm:w-32 sm:h-32 md:w-44 md:h-44 lg:w-54 lg:h-54 rounded-full object-cover border-4 border-primary shadow-2xl hover-lift transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-secondary/20"></div>
              {/* Floating animation */}
              <div className="absolute inset-0 rounded-full animate-pulse bg-primary/10"></div>
            </div>
          </div>

          {/* Main Heading with Animated Text */}
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
            Hi, I'm{" "}
            <span className="text-gradient">
              <AnimatedText text="Rana Islam" delay={500} />
            </span>
          </h1>

          {/* Subtitle with Animation */}
          <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4 sm:mb-8">
            MERN Stack Developer & Student
          </h2>

          {/* Description */}
          <div className="text-sm xs:text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-12 max-w-md sm:max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in-delay-3">
            A passionate MERN stack developer and a student with a strong desire
            to create beautiful, interactive, and high-performance web
            applications. I am always eager to learn new technologies and apply
            them to solve real-world problems.
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center items-center mb-8 sm:mb-16 opacity-0 animate-fade-in-delay-4">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2 xs:px-6 xs:py-2.5 sm:px-8 sm:py-3 text-base xs:text-lg font-semibold hover-lift transform transition-all duration-300 hover:scale-105"
            >
              <Mail className="mr-2" size={20} />
              Get In Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-5 py-2 xs:px-6 xs:py-2.5 sm:px-8 sm:py-3 text-base xs:text-lg font-semibold hover:lift transform transition-all duration-300 hover:scale-105"
            >
              <a
                href="./dist/assets/cv_eng.pdf"
                download
                className="text-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-3 sm:space-x-6 mb-8 sm:mb-16 opacity-0 animate-fade-in-delay-5">
            <Button
              variant="ghost"
              size="icon"
              className="hover-lift transform transition-all duration-300 hover:scale-110 hover:text-primary"
            >
              <a
                href="https://github.com/ranaIslam01"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={28} />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover-lift transform transition-all duration-300 hover:scale-110 hover:text-primary"
            >
              <a
                href="https://www.facebook.com/ranaislam2255"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={24} />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover-lift transform transition-all duration-300 hover:scale-110 hover:text-primary"
            >
              <a
                href="https://x.com/rana_islams"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={24} />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover-lift transform transition-all duration-300 hover:scale-110 hover:text-primary"
            >
              <a
                href="https://www.instagram.com/ranaislam6008377/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={24} />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover-lift transform transition-all duration-300 hover:scale-110 hover:text-primary"
            >
              <a
                href="https://www.linkedin.com/in/আপনার_linkedin_প্রোফাইল"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={24} />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover-lift transform transition-all duration-300 hover:scale-110 hover:text-primary"
            >
              <Mail size={24} />
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce opacity-0 animate-fade-in-delay-6 mt-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollToAbout}
              className="hover-lift transform transition-all duration-300 hover:scale-110"
            >
              <ArrowDown className="text-primary" size={24} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
