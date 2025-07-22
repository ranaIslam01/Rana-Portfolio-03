import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("Frontend");

  const skillsData = {
    Frontend: [
      { name: "React.js", level: "Advanced", color: "bg-blue-500" },
      { name: "Next.js", level: "Intermediate", color: "bg-gray-800" },
      { name: "HTML5", level: "Advanced", color: "bg-orange-500" },
      { name: "CSS3", level: "Advanced", color: "bg-blue-600" },
      { name: "JavaScript (ES6+)", level: "Advanced", color: "bg-yellow-500" },
      { name: "Tailwind CSS", level: "Advanced", color: "bg-cyan-500" },
    ],
    Backend: [
      { name: "Node.js", level: "Advanced", color: "bg-green-600" },
      { name: "Express.js", level: "Advanced", color: "bg-gray-700" },
    ],
    Database: [{ name: "MongoDB", level: "Advanced", color: "bg-green-500" }],
    Tools: [
      { name: "Git", level: "Advanced", color: "bg-red-500" },
      { name: "GitHub", level: "Advanced", color: "bg-gray-900" },
      { name: "RESTful APIs", level: "Advanced", color: "bg-purple-500" },
      { name: "Postman", level: "Intermediate", color: "bg-orange-600" },
    ],
  };

  const categories = Object.keys(skillsData);

  const getLevelWidth = (level) => {
    switch (level) {
      case "Advanced":
        return "w-5/6";
      case "Intermediate":
        return "w-3/5";
      case "Beginner":
        return "w-2/5";
      default:
        return "w-1/2";
    }
  };

  const getLevelColor = (level) => {
    switch (level) {
      case "Advanced":
        return "bg-primary";
      case "Intermediate":
        return "bg-secondary";
      case "Beginner":
        return "bg-muted-foreground";
      default:
        return "bg-muted-foreground";
    }
  };

  return (
    <section
      id="skills"
      className="py-20 bg-background scroll-mt-20 sm:scroll-mt-24 md:scroll-mt-28"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              My <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and proficiency
              levels
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 hover-lift ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "glassmorphism text-foreground hover:bg-primary/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData[activeCategory].map((skill, index) => (
              <div
                key={index}
                className="glassmorphism p-6 rounded-xl hover-lift group"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {skill.name}
                  </h4>
                  <Badge variant="secondary" className="text-xs">
                    {skill.level}
                  </Badge>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-muted rounded-full h-2 mb-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-1000 ease-out ${getLevelColor(
                      skill.level
                    )} ${getLevelWidth(skill.level)}`}
                  ></div>
                </div>

                <p className="text-sm text-muted-foreground">
                  Proficiency: {skill.level}
                </p>
              </div>
            ))}
          </div>

          {/* MERN Stack Highlight */}
          <div className="mt-16 text-center">
            <div className="glassmorphism p-8 rounded-2xl max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gradient">
                MERN Stack Expertise
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Specialized in full-stack development using MongoDB, Express.js,
                React.js, and Node.js. I create end-to-end web applications with
                modern architecture, responsive design, and optimal performance.
              </p>

              {/* MERN Stack Icons */}
              <div className="flex justify-center items-center space-x-8 flex-wrap gap-4">
                {["MongoDB", "Express.js", "React.js", "Node.js"].map(
                  (tech, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center space-y-2 hover-lift"
                    >
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-primary">
                          {tech.charAt(0)}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-foreground">
                        {tech}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
