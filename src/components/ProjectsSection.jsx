import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Plus } from "lucide-react";

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Helper function to determine the correct image source
  const getImageSrc = (imagePath) => {
    // যদি imagePath একটি API placeholder হয়, সেটি সরাসরি ব্যবহার করুন
    if (imagePath.startsWith("/api/placeholder")) {
      return imagePath;
    }
    // যদি imagePath 'dist/assets/' দিয়ে শুরু হয় (যেমন "dist/assets/image.png"),
    // তাহলে ব্রাউজার রুট থেকে অ্যাক্সেস করার জন্য একটি স্লাশ (/) যোগ করুন।
    // এটা ধরে নিচ্ছে যে dist ফোল্ডারের কন্টেন্ট সার্ভারের রুট থেকে পরিবেশিত হচ্ছে।
    else if (imagePath.startsWith("dist/assets/")) {
      return `/${imagePath}`;
    }
    // অন্য কোনো কাস্টম লজিক বা ফলব্যাক (যদি থাকে)
    return imagePath;
  };

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution built with MERN stack featuring user authentication, payment integration, and admin dashboard.",
      longDescription:
        "This comprehensive e-commerce platform showcases my full-stack development skills. Built with React.js for the frontend, Node.js and Express.js for the backend, and MongoDB for data storage. Features include user registration and authentication, product catalog with search and filtering, shopping cart functionality, secure payment processing, order management, and an admin dashboard for inventory management.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Stripe API",
        "JWT",
      ],
      image: "dist/assets/ecommerce.jpg", // এই প্রজেক্টের জন্য প্লেসহোল্ডার ইমেজ
      liveUrl: "https://example.com/ecommerce-demo",
      githubUrl: "https://github.com/ranaIslam01/e-commerce",
      status: "Live Demo",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, team collaboration features, and progress tracking.",
      longDescription:
        "A modern task management solution designed for teams and individuals. The application features real-time collaboration using Socket.io, drag-and-drop task organization, project timelines, team member assignments, and comprehensive progress tracking. Built with a focus on user experience and performance optimization.",
      technologies: [
        "React.js",
        "Node.js",
        "Socket.io",
        "MongoDB",
        "Material-UI",
      ],
      image: "dist/assets/Task management app.png", // এই প্রজেক্টের জন্য প্লেসহোল্ডার ইমেজ
      liveUrl: "https://example.com/task-app-demo",
      githubUrl: "https://github.com/ranaIslam01/task-management-app",
      status: "In Progress",
    },
    {
      id: 3,
      title: "Social Media Dashboard",
      description:
        "A responsive social media analytics dashboard with data visualization and real-time metrics tracking.",
      longDescription:
        "An intuitive dashboard for social media analytics featuring interactive charts, real-time data updates, and comprehensive reporting. The application integrates with multiple social media APIs to provide unified analytics across platforms. Includes features like engagement tracking, audience insights, and automated reporting.",
      technologies: [
        "React.js",
        "Chart.js",
        "Express.js",
        "MongoDB",
        "Social Media APIs",
      ],
      image: "dist/assets/facebook.jpg", // আপনার image.png এর পাথ
      liveUrl: "https://social-media-facebook-clone-01.vercel.app/",
      githubUrl: "https://github.com/ranaIslam01/Social_Media_Facebook_Clone",
      status: "Completed",
    },
    {
      id: 4,
      title: "Weather Forecast App",
      description:
        "A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      longDescription:
        "A comprehensive weather application that provides accurate forecasts and weather analytics. Features include current weather conditions, 7-day forecasts, interactive weather maps, location-based services, weather alerts, and historical weather data. The app uses modern design principles and smooth animations for an engaging user experience.",
      technologies: ["React.js", "Weather API", "Geolocation API", "Chart.js"],
      image: "dist/assets/Weather Forecast App.jpg", // এই প্রজেক্টের জন্য প্লেসহোল্ডার ইমেজ
      liveUrl: "https://example.com/weather-app-demo",
      githubUrl: "https://github.com/ranaIslam01/weather-forecast-app",
      status: "Live Demo",
    },
  ];

  const openProjectModal = (project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="projects"
      className="py-20 bg-background scroll-mt-20 sm:scroll-mt-24 md:scroll-mt-28"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              My <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my development work and technical expertise through
              various projects
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {projects.map((project) => (
              <div
                key={project.id}
                className="glassmorphism dark:glassmorphism-dark rounded-xl overflow-hidden hover-lift group cursor-pointer"
                onClick={() => openProjectModal(project)}
              >
                {/* Project Image Display */}
                <div className="relative w-full aspect-[16/9] bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  {project.image && (
                    <img
                      src={getImageSrc(project.image)}
                      alt={project.title || "Project Image"}
                      className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105 rounded-b-none"
                      loading="lazy"
                    />
                  )}
                  {/* যদি project.image না থাকে বা লোড না হয়, তাহলে Plus আইকন দেখাবে */}
                  {!project.image && (
                    <div className="text-6xl text-primary/30">
                      <Plus />
                    </div>
                  )}

                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="text-xs">
                      {project.status}
                    </Badge>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.liveUrl, "_blank");
                      }}
                      disabled={project.liveUrl === "#"}
                    >
                      <ExternalLink className="mr-2" size={16} />
                      Live Demo
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.githubUrl, "_blank");
                      }}
                      disabled={project.githubUrl === "#"}
                    >
                      <Github className="mr-2" size={16} />
                      Code
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="glassmorphism p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                More Projects Coming Soon!
              </h3>
              <p className="text-muted-foreground mb-6">
                I'm constantly working on new projects and learning new
                technologies. Stay tuned for more exciting developments!
              </p>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground hover-lift"
              >
                <a
                  href="https://github.com/ranaIslam01?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Github className="mr-2" size={20} />
                  View All on GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glassmorphism dark:glassmorphism-dark max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-2xl">
            <div className="p-6 bg-white/80 dark:bg-[#232946]/90 rounded-2xl shadow-xl">
              {/* Modal Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary dark:text-primary mb-2">
                    {selectedProject.title}
                  </h3>
                  <Badge
                    variant="secondary"
                    className="bg-primary/90 text-primary-foreground dark:bg-primary/80 dark:text-background shadow"
                  >
                    {selectedProject.status}
                  </Badge>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={closeProjectModal}
                  className="text-muted-foreground hover:text-foreground"
                >
                  ×
                </Button>
              </div>

              {/* Project Image in Modal */}
              <div className="w-full aspect-[16/9] bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 rounded-lg mb-6 flex items-center justify-center">
                {/* মোডালের ছবির জন্য getImageSrc ফাংশন ব্যবহার করা হয়েছে */}
                {selectedProject.image && (
                  <img
                    src={getImageSrc(selectedProject.image)}
                    alt={selectedProject.title || "Project Image"}
                    className="w-full h-full object-cover object-center rounded-lg"
                    loading="lazy"
                  />
                )}
                {/* যদি selectedProject.image না থাকে বা লোড না হয়, তাহলে Plus আইকন দেখাবে */}
                {!selectedProject.image && (
                  <div className="text-8xl text-primary/30">
                    <Plus />
                  </div>
                )}
              </div>

              {/* Project Description */}
              <p className="text-foreground dark:text-gray-200 mb-6 leading-relaxed">
                {selectedProject.longDescription}
              </p>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-primary dark:text-primary">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <Badge key={index} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <Button
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={() => window.open(selectedProject.liveUrl, "_blank")}
                  disabled={selectedProject.liveUrl === "#"}
                >
                  <ExternalLink className="mr-2" size={16} />
                  Live Demo
                </Button>
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() =>
                    window.open(selectedProject.githubUrl, "_blank")
                  }
                  disabled={selectedProject.githubUrl === "#"}
                >
                  <Github className="mr-2" size={16} />
                  View Code
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
