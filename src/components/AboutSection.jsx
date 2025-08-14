import React from "react";
import { Button } from "@/components/ui/button";
import { Download, Code, Coffee, Lightbulb, GraduationCap } from "lucide-react";
import content from "../../content.json";

const AboutSection = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full-Stack Development",
      description:
        "Proficient in MERN stack with a focus on creating scalable web applications",
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Continuous Learning",
      description:
        "Always exploring new technologies and best practices in web development",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Problem Solving",
      description:
        "Passionate about solving real-world problems through innovative solutions",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-background scroll-mt-20 sm:scroll-mt-24 md:scroll-mt-28"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 anim-on-scroll" data-animation="fade-up">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto anim-on-scroll" data-animation="fade-up" data-delay="0.2">
              Get to know more about my journey, passion, and what drives me as
              a developer
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Bio Content */}
            <div className="space-y-6 lg:col-span-2">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground anim-on-scroll" data-animation="fade-left">
                My Journey as a Developer
              </h3>

              <div className="space-y-4 text-muted-foreground leading-relaxed anim-on-scroll" data-animation="fade-right" data-delay="0.3">
                <p>
                  I am Rana Islam, an enthusiastic MERN stack developer and
                  student. I believe in the power of turning ideas into reality
                  through technology. My journey in web development started with
                  curiosity and turned into a deep passion for creating
                  meaningful digital experiences. As a student, I am constantly
                  learning new technologies and adapting myself to them. I have
                  built a strong foundation in the MERN stack (MongoDB,
                  Express.js, React.js, Node.js) and enjoy building full-stack
                  applications to solve real-world problems. My goal is to build
                  a successful career in software development and contribute to
                  innovative projects that make a positive impact. I am always
                  eager to collaborate with like-minded individuals and take on
                  new challenges.
                </p>
              </div>

              {/* Education */}
              {content.education && content.education.length > 0 && (
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-foreground mt-8 mb-4 anim-on-scroll" data-animation="fade-up">
                    Education
                  </h4>
                  {content.education.map((edu, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <GraduationCap className="w-6 h-6 text-primary flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">
                          {edu.degree}
                        </p>
                        <p className="text-muted-foreground">
                          {edu.institution} ({edu.year})
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Contact Info */}
              <div className="space-y-2 text-sm anim-on-scroll" data-animation="fade-left" data-delay="0.2">
                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  {content.contact.email.join(", ")}
                </p>
                <p>
                  <span className="font-semibold">Phone:</span>{" "}
                  {content.contact.phone.join(", ")}
                </p>
                <p>
                  <span className="font-semibold">Location:</span>{" "}
                  {content.contact.location}
                </p>
              </div>

              {/* Download Resume Button */}
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground hover-lift anim-on-scroll"
                data-animation="scale"
                data-delay="0.4"
              >
                <Download className="mr-2" size={20} />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="glassmorphism p-6 rounded-xl hover-lift text-center anim-on-scroll"
                data-animation="fade-up"
                data-delay={0.1 * index}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 text-primary">
                  {highlight.icon}
                </div>
                <h4 className="text-xl font-semibold mb-2 text-foreground">
                  {highlight.title}
                </h4>
                <p className="text-muted-foreground">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
