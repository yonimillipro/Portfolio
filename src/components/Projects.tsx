import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

interface ProjectsProps {
  darkMode: boolean;
}

// Fallback image for broken links (A reliable image of code/tech)
const FALLBACK_IMAGE =
  "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

// Full project list with relevant images and verified links for Hotel and Netflix.
const allProjects = [
  // --- Fullstack Project 1: Hotel Reservation System ---
  {
    id: 1,
    title: "Hotel Reservation System",
    description:
      "A booking platform inspired by Booking.com, featuring hotel search, room selection, date filtering, and a mock payment process.",
    // Keep this link for now, but recommend replacing with optimized image hosted elsewhere.
    image:
      "https://github.com/user-attachments/assets/1c65436e-3231-44e2-aa7b-2511da3a867b",
    technologies: ["React", "Css3", "PHP", "MySQL"],
    github: "https://github.com/yonimillipro/reservation",
    live: "https://your-hotel-reservation.vercel.app",
    category: "Fullstack",
  },
  // --- New Fullstack Project 3: Healthcare Web App ---
  {
    id: 2,
    title: "Healthcare Service",
    description:
      "A secure and responsive platform for managing patient appointments, viewing medical history, and telemedicine consultations.",
    // Keep this link for now, but recommend replacing with optimized image hosted elsewhere.
    image:
      "https://github.com/user-attachments/assets/0bcdbae5-24f0-4cc7-88ae-92e43e9f379c",
    technologies: ["React.js", "Tailwind CSS", "Javascript-Es6"],
    github:
      "https://github.com/yonimillipro/Dr.-Saba-Medium-Clinic-Health-Services",
    live: "https://dr-saba-medium-clinic-health-servic.vercel.app/",
    category: "Frontend",
  },
  // --- New Frontend Project 4: Consultancy Web App (FIXED URL) ---
  {
    id: 3,
    title: "Infinite Consultancy ",
    description:
      "A professional website for a study abroad and wellness consultancy, featuring service showcases, testimonial sections, and a booking form.",
    // **FIXED:** Removed the duplicate 'h' from 'hhttps'
    image:
      "https://github.com/user-attachments/assets/e031f28a-5eb8-41eb-8165-f6fe62d48bb4",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Superbase"],
    github: "https://github.com/yonimillipro/edu-merged-site",
    live: "https://edu-merged-site.vercel.app/",
    category: "Fullstack",
  },
  // --- Frontend Project 4: Netflix Clone ---
  {
    id: 4,
    title: "Netflix Clone",
    description:
      "A video streaming service interface clone featuring dynamic content browsing, user authentication, and movie trailers using a movie database API.",
    // **SLIGHTLY IMPROVED URL:** Using the raw content link, though optimization is still key.
    image:
      "https://raw.githubusercontent.com/yonimillipro/Netflix-clone/main/netflix%20-clone.png",
    technologies: ["React", "Firebase", "Javascript-Es6", "TMDB API"],
    github: "https://github.com/yonimillipro/Netflix-clone",
    live: "https://netflix-clone-eight-opal-67.vercel.app/",
    category: "Frontend",
  },

  // --- Frontend Project 5: Task Management UI ---
  {
    id: 5,
    title: "Task Management UI",
    description:
      "A beautiful task management interface with drag-and-drop functionality, smooth animations, and responsive design.",
    image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg",
    technologies: ["React", "CSS3", "Javascript-E6", "JSON Server"],
    github: "https://github.com/yonimillipro/Task-Tracker",
    live: "https://task-tracker-kappa-cyan.vercel.app/",
    category: "Frontend",
  },
  // --- Frontend Project 6: Weather Dashboard ---
  {
    id: 6,
    title: "Weather Dashboard",
    description:
      "A beautiful weather dashboard with animated weather icons, location-based forecasts, and interactive charts for weather data visualization.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg",
    technologies: ["React", "Chart.js", "OpenWeather API", "Tailwind CSS"],
    github: "https://github.com/yourusername/weather-dashboard",
    live: "https://your-weather-app.vercel.app",
    category: "Frontend",
  },
];

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  // State for category filtering
  const [filter, setFilter] = useState<string>("All");

  // Updated categories list: Only Fullstack and Frontend
  const categories = ["All", "Fullstack", "Frontend"];

  const filteredProjects = allProjects.filter((project) => {
    if (filter === "All") {
      return true;
    }
    return project.category === filter;
  });

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

        {/* Category Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300
                ${
                  filter === cat
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                    : `${
                        darkMode
                          ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
                          : "bg-white text-gray-700 border border-gray-300 hover:border-blue-400 hover:text-blue-600"
                      }`
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
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
                  // **Optimization 1: Lazy Loading** - Defers image loading until it is near the viewport
                  loading="lazy"
                  // **Optimization 2: Specify width/height** - Helps prevent layout shift (CLS)
                  width="400"
                  height="192" // The h-48 class is 192px tall.
                  // **Image Error Handling Added**
                  onError={(e) => {
                    // Type casting for e.target is required in TypeScript
                    const target = e.target as HTMLImageElement;
                    target.onerror = null; // Prevent infinite error loop if fallback fails
                    target.src = FALLBACK_IMAGE; // Use the reliable fallback image
                  }}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex space-x-3">
                    <a
                      href={project.github}
                      className="flex items-center px-3 py-2 bg-gray-900/80 backdrop-blur-sm text-white rounded-full hover:bg-blue-600 transition-colors duration-200 text-sm font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View code for ${project.title} on GitHub`}
                    >
                      <Github size={16} className="mr-1" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center px-3 py-2 bg-gray-900/80 backdrop-blur-sm text-white rounded-full hover:bg-purple-600 transition-colors duration-200 text-sm font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View live demo for ${project.title}`}
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

        {/* View More Projects Button/Link */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/yonimillipro"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 ease-in-out"
          >
            View More Projects on GitHub
            <ExternalLink size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Github, ExternalLink } from "lucide-react";

// interface ProjectsProps {
//   darkMode: boolean;
// }

// // Fallback image for broken links (A reliable image of code/tech)
// const FALLBACK_IMAGE =
//   "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

// // Full project list with relevant images and verified links for Hotel and Netflix.
// const allProjects = [
//   // --- Fullstack Project 1: Hotel Reservation System (FIXED IMAGE) ---
//   {
//     id: 1,
//     title: "Hotel Reservation System",
//     description:
//       "A booking platform inspired by Booking.com, featuring hotel search, room selection, date filtering, and a mock payment process.",
//     // **FIXED IMAGE URL** (Replaced Google Drive link with a direct URL)
//     image:
//       "https://github.com/user-attachments/assets/1c65436e-3231-44e2-aa7b-2511da3a867b",
//     technologies: ["React", "Css3", "PHP", "MySQL"],
//     github: "https://github.com/yonimillipro/reservation",
//     live: "https://your-hotel-reservation.vercel.app",
//     category: "Fullstack",
//   },
//   // --- New Fullstack Project 3: Healthcare Web App ---
//   {
//     id: 2,
//     title: "Healthcare Service",
//     description:
//       "A secure and responsive platform for managing patient appointments, viewing medical history, and telemedicine consultations.",
//     image:
//       "https://github.com/user-attachments/assets/0bcdbae5-24f0-4cc7-88ae-92e43e9f379c",
//     technologies: ["React.js", "Tailwind CSS", "Javascript-Es6"],
//     github:
//       "https://github.com/yonimillipro/Dr.-Saba-Medium-Clinic-Health-Services",
//     live: "https://dr-saba-medium-clinic-health-servic.vercel.app/",
//     category: "Frontend",
//   },
//   // --- New Frontend Project 4: Consultancy Web App ---
//   {
//     id: 3,
//     title: "Infinite Consultancy ",
//     description:
//       "A professional website for a study abroad and wellness consultancy, featuring service showcases, testimonial sections, and a booking form.",
//     image:
//       "https://github.com/yonimillipro/Task-tracker-/blob/main/Infinity%20Consultancy%20on%20DarkMode.png?raw=true",
//     technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Superbase"],
//     github: "https://github.com/yonimillipro/edu-merged-site",
//     live: "https://edu-merged-site.vercel.app/",
//     category: "Fullstack",
//   },
//   {
//     id: 4,
//     title: "Netflix Clone",
//     description:
//       "A video streaming service interface clone featuring dynamic content browsing, user authentication, and movie trailers using a movie database API.",
//     image:
//       "https://github.com/yonimillipro/Netflix-clone/blob/main/netflix%20-clone.png?raw=true",
//     technologies: ["React", "Firebase", "Javascript-Es6", "TMDB API"],
//     github: "https://github.com/yonimillipro/Netflix-clone",
//     live: "https://netflix-clone-eight-opal-67.vercel.app/",
//     category: "Frontend",
//   },

//   // --- Frontend Project 5: Task Management UI (Now ID 5) ---

//   {
//     id: 5,
//     title: "Task Management UI",
//     description:
//       "A beautiful task management interface with drag-and-drop functionality, smooth animations, and responsive design.",
//     image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg",
//     technologies: ["React", "CSS3", "Javascript-E6", "JSON Server"],
//     github: "https://github.com/yonimillipro/Task-Tracker",
//     live: "https://task-tracker-kappa-cyan.vercel.app/",
//     category: "Frontend",
//   },
//   // --- Frontend Project 6: Weather Dashboard (Now ID 6) ---
//   {
//     id: 6,
//     title: "Weather Dashboard",
//     description:
//       "A beautiful weather dashboard with animated weather icons, location-based forecasts, and interactive charts for weather data visualization.",
//     image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg",
//     technologies: ["React", "Chart.js", "OpenWeather API", "Tailwind CSS"],
//     github: "https://github.com/yourusername/weather-dashboard",
//     live: "https://your-weather-app.vercel.app",
//     category: "Frontend",
//   },
// ];

// const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
//   // State for category filtering
//   const [filter, setFilter] = useState<string>("All");

//   // Updated categories list: Only Fullstack and Frontend
//   const categories = ["All", "Fullstack", "Frontend"];

//   const filteredProjects = allProjects.filter((project) => {
//     if (filter === "All") {
//       return true;
//     }
//     return project.category === filter;
//   });

//   return (
//     <section
//       id="projects"
//       className={`py-20 ${darkMode ? "bg-gray-900/50" : "bg-gray-100/50"}`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2
//             className={`text-4xl sm:text-5xl font-bold mb-6 ${
//               darkMode ? "text-white" : "text-gray-900"
//             }`}
//           >
//             My{" "}
//             <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//               Projects
//             </span>
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-4"></div>
//           <p
//             className={`text-lg max-w-2xl mx-auto ${
//               darkMode ? "text-gray-300" : "text-gray-600"
//             }`}
//           >
//             Here are some of my recent projects that showcase my skills and
//             experience
//           </p>
//         </div>

//         {/* Category Filter Buttons */}
//         <div className="flex justify-center flex-wrap gap-3 mb-12">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setFilter(cat)}
//               className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300
//                 ${
//                   filter === cat
//                     ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
//                     : `${
//                         darkMode
//                           ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
//                           : "bg-white text-gray-700 border border-gray-300 hover:border-blue-400 hover:text-blue-600"
//                       }`
//                 }
//               `}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredProjects.map((project) => (
//             <motion.div
//               key={project.id}
//               whileHover={{
//                 y: -6,
//                 boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
//               }}
//               className={`group rounded-xl overflow-hidden border transition-all duration-150 ease-out hover:border-purple-500/50 ${
//                 darkMode
//                   ? "bg-gray-800 border-gray-700"
//                   : "bg-white border-gray-200"
//               }`}
//             >
//               <div className="relative overflow-hidden">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   // **Image Error Handling Added**
//                   onError={(e) => {
//                     // Type casting for e.target is required in TypeScript
//                     const target = e.target as HTMLImageElement;
//                     target.onerror = null; // Prevent infinite error loop if fallback fails
//                     target.src = FALLBACK_IMAGE; // Use the reliable fallback image
//                   }}
//                   className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <div className="absolute bottom-4 left-4 right-4 flex space-x-3">
//                     <a
//                       href={project.github}
//                       className="flex items-center px-3 py-2 bg-gray-900/80 backdrop-blur-sm text-white rounded-full hover:bg-blue-600 transition-colors duration-200 text-sm font-medium"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       aria-label={`View code for ${project.title} on GitHub`}
//                     >
//                       <Github size={16} className="mr-1" />
//                       Code
//                     </a>
//                     <a
//                       href={project.live}
//                       className="flex items-center px-3 py-2 bg-gray-900/80 backdrop-blur-sm text-white rounded-full hover:bg-purple-600 transition-colors duration-200 text-sm font-medium"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       aria-label={`View live demo for ${project.title}`}
//                     >
//                       <ExternalLink size={16} className="mr-1" />
//                       Live Demo
//                     </a>
//                   </div>
//                 </div>
//                 <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs px-3 py-1 rounded-full">
//                   {project.category}
//                 </div>
//               </div>

//               <div className="p-6">
//                 <h3
//                   className={`text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300 ${
//                     darkMode ? "text-white" : "text-gray-900"
//                   }`}
//                 >
//                   {project.title}
//                 </h3>
//                 <p
//                   className={`text-sm mb-4 leading-relaxed ${
//                     darkMode ? "text-gray-300" : "text-gray-600"
//                   }`}
//                 >
//                   {project.description}
//                 </p>
//                 <div className="flex flex-wrap gap-2">
//                   {project.technologies.map((tech) => (
//                     <span
//                       key={tech}
//                       className={`px-3 py-1 text-xs rounded-full border ${
//                         darkMode
//                           ? "bg-gray-700/50 text-gray-300 border-gray-600"
//                           : "bg-gray-100/50 text-gray-600 border-gray-300"
//                       }`}
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* View More Projects Button/Link */}
//         <div className="text-center mt-12">
//           <a
//             href="https://github.com/yonimillipro"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 ease-in-out"
//           >
//             View More Projects on GitHub
//             <ExternalLink size={18} className="ml-2" />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
