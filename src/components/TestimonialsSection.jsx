import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Placeholder testimonials - these will be replaced with actual testimonials
  const testimonials = [
    {
      id: 1,
      name: "Coming Soon",
      position: "Client Testimonial",
      company: "Future Project",
      content:
        "I'm currently working on exciting projects and building relationships with clients. Testimonials from satisfied clients and collaborators will be featured here soon.",
      rating: 5,
      avatar: "/api/placeholder/60/60",
    },
    {
      id: 2,
      name: "Future Collaborator",
      position: "Team Member",
      company: "Upcoming Project",
      content:
        "As I continue to grow as a developer and work on more projects, testimonials from team members and collaborators will showcase our successful partnerships.",
      rating: 5,
      avatar: "/api/placeholder/60/60",
    },
    {
      id: 3,
      name: "Potential Client",
      position: "Project Owner",
      company: "Next Venture",
      content:
        "I'm excited to work with new clients and deliver exceptional results. Their feedback and testimonials will be displayed here to showcase the quality of my work.",
      rating: 5,
      avatar: "/api/placeholder/60/60",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={
          index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }
      />
    ));
  };

  return (
    <section
      id="testimonials"
      className="py-20 bg-background scroll-mt-20 sm:scroll-mt-24 md:scroll-mt-28"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 anim-on-scroll" data-animation="fade-up">
              Client <span className="text-gradient">Testimonials</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto anim-on-scroll" data-animation="fade-up" data-delay="0.2">
              What clients and collaborators say about working with me
            </p>
          </div>

          {/* Testimonials Carousel */}
          <div className="relative max-w-4xl mx-auto">
            <div className="glassmorphism p-8 md:p-12 rounded-2xl anim-on-scroll" data-animation="scale" data-delay="0.4">
              {/* Quote Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Quote className="w-8 h-8 text-primary" />
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="text-center mb-8">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonials[currentTestimonial].content}"
                </p>

                {/* Rating */}
                <div className="flex justify-center mb-6">
                  {renderStars(testimonials[currentTestimonial].rating)}
                </div>

                {/* Author Info */}
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">
                      {testimonials[currentTestimonial].name.charAt(0)}
                    </span>
                  </div>
                  <div className="text-left">
                    <h4 className="text-lg font-semibold text-foreground">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[currentTestimonial].position}
                    </p>
                    <p className="text-sm text-primary font-medium">
                      {testimonials[currentTestimonial].company}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center space-x-4 mt-8 anim-on-scroll" data-animation="fade-up" data-delay="0.6">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="hover-lift"
              >
                <ChevronLeft size={20} />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="hover-lift"
              >
                <ChevronRight size={20} />
              </Button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-primary scale-125"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="glassmorphism p-8 rounded-2xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Ready to Work Together?
              </h3>
              <p className="text-muted-foreground mb-6">
                I'm always excited to take on new challenges and collaborate on
                innovative projects. Let's create something amazing together!
              </p>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground hover-lift"
                onClick={() => {
                  const element = document.querySelector("#contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Start a Project
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
