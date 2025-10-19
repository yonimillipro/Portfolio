import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const projects = [
    {
      id: 1,
      title: "React Dashboard",
      description:
        "A modern admin dashboard built with React, JavaScript, and Tailwind CSS. Features responsive design, data visualization, and interactive components.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
      technologies: [
        "React",
        "JavaScript",
        "Tailwind CSS",
        "Chart.js",
        "Framer Motion",
      ],
      github: "https://github.com/yourusername/react-dashboard",
      live: "https://your-react-dashboard.vercel.app",
      category: "Frontend",
    },
    {
      id: 2,
      title: "Task Management UI",
      description:
        "A beautiful task management interface with drag-and-drop functionality, smooth animations, and responsive design.",
      image:
        "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg",
      technologies: ["React", "Framer Motion", "React DnD", "Tailwind CSS"],
      github: "https://github.com/yourusername/task-management",
      live: "https://your-task-manager.vercel.app",
      category: "Frontend",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A beautiful weather dashboard with animated weather icons, location-based forecasts, and interactive charts for weather data visualization.",
      image:
        "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg",
      technologies: ["React", "Chart.js", "OpenWeather API", "Tailwind CSS"],
      github: "https://github.com/yourusername/weather-dashboard",
      live: "https://your-weather-app.vercel.app",
      category: "Frontend",
    },
    {
      id: 4,
      title: "Spotify Clone",
      description:
        "A feature-rich music player clone with a responsive design, authentication, and integration with a backend/music API for playback and discovery.",
      image: "https://images.pexels.com/photos/164749/pexels-photo-164749.jpeg",
      technologies: [
        "React",
        "Redux",
        "Tailwind CSS",
        "Spotify API",
        "Next.js",
      ],
      github: "https://github.com/yourusername/spotify-clone",
      live: "https://your-spotify-clone.vercel.app",
      category: "Fullstack",
    },
    {
      id: 5,
      title: "Netflix Clone",
      description:
        "A video streaming service interface clone featuring dynamic content browsing, user authentication, and movie trailers using a movie database API.",
      image: "https://images.pexels.com/photos/220201/pexels-photo-220201.jpeg",
      technologies: [
        "React",
        "Firebase",
        "TypeScript",
        "TMDB API",
        "Tailwind CSS",
      ],
      github: "https://github.com/yonimillipro/Netflix-clone",
      live: "https://netflix-clone-eight-opal-67.vercel.app/",
      category: "Fullstack",
    },
    {
      id: 6,
      title: "Hotel Reservation System",
      description:
        "A booking platform inspired by Booking.com, featuring hotel search, room selection, date filtering, and a mock payment process.",
      image: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
      technologies: [
        "React",
        "Redux Toolkit",
        "Node.js/Express",
        "MongoDB",
        "Tailwind CSS",
      ],
      github: "https://github.com/yourusername/hotel-reservation",
      live: "https://your-hotel-reservation.vercel.app",
      category: "Fullstack",
    },
  ];

  const filteredProjects = projects;

  return (
    <section
      id="projects"
      className={`py-20 ${darkMode ? "bg-gray-900/50" : "bg-gray-100/50"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl sm:text-5xl font-bold mb-6 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            My{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-4"></div>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Here are some of my recent projects that showcase my skills and
            experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              // The lift effect is now instant/default framer motion speed
              whileHover={{
                y: -6,
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
              }}
              className={`group rounded-xl overflow-hidden border transition-all duration-150 ease-out hover:border-purple-500/50 ${
                darkMode
                  ? "bg-gray-800 border-gray-700"
                  : "bg-white border-gray-200"
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  // Reduced transition-transform duration from 500 to 300
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex space-x-3">
                    <a
                      href={project.github}
                      className="flex items-center px-3 py-2 bg-gray-900/80 backdrop-blur-sm text-white rounded-full hover:bg-blue-600 transition-colors duration-200 text-sm font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} className="mr-1" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center px-3 py-2 bg-gray-900/80 backdrop-blur-sm text-white rounded-full hover:bg-purple-600 transition-colors duration-200 text-sm font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Live Demo
                    </a>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs px-3 py-1 rounded-full">
                  {project.category}
                </div>
              </div>

              <div className="p-6">
                <h3
                  className={`text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {project.title}
                </h3>
                <p
                  className={`text-sm mb-4 leading-relaxed ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 text-xs rounded-full border ${
                        darkMode
                          ? "bg-gray-700/50 text-gray-300 border-gray-600"
                          : "bg-gray-100/50 text-gray-600 border-gray-300"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
