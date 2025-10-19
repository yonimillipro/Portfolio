import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface SkillsProps {
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skillCategories = [
    {
      title: "Frontend Must-Haves",
      skills: [
        { name: "HTML5", level: 98, color: "from-orange-500 to-red-500" },
        { name: "CSS3", level: 95, color: "from-blue-500 to-cyan-500" },
        {
          name: "JavaScript (ES6+)",
          level: 95,
          color: "from-yellow-400 to-orange-400",
        },
      ],
    },
    {
      title: "Frontend Technologies",
      skills: [
        {
          name: "React.js/Next.js",
          level: 90,
          color: "from-blue-400 to-purple-500",
        },
        {
          name: "Material UI/Shadcn UI",
          level: 85,
          color: "from-sky-400 to-blue-500",
        },
        { name: "Tailwind CSS", level: 92, color: "from-teal-400 to-cyan-500" },
        {
          name: "Framer Motion",
          level: 88,
          color: "from-purple-400 to-pink-400",
        },
      ],
    },
    {
      title: "State Management",
      skills: [
        {
          name: "Redux/Redux Toolkit",
          level: 80,
          color: "from-purple-700 to-indigo-700",
        },
        {
          name: "Context API",
          level: 90,
          color: "from-green-500 to-emerald-500",
        },
        {
          name: "Zustand/Jotai",
          level: 75,
          color: "from-yellow-500 to-orange-500",
        },
      ],
    },

    {
      title: "APIs & Data",
      skills: [
        {
          name: "Axios/Fetch",
          level: 90,
          color: "from-green-400 to-green-600",
        },
        {
          name: "JSON Handling",
          level: 95,
          color: "from-emerald-400 to-teal-500",
        },
        {
          name: "REST APIs",
          level: 85,
          color: "from-purple-500 to-indigo-500",
        },
        { name: "GraphQL", level: 65, color: "from-pink-500 to-purple-500" },
      ],
    },

    {
      title: "Tools & Technologies",
      skills: [
        {
          name: "Git & GitHub",
          level: 90,
          color: "from-orange-400 to-red-400",
        },
        { name: "Vite", level: 85, color: "from-yellow-400 to-orange-400" },
        { name: "Webpack", level: 80, color: "from-blue-600 to-purple-600" },
        { name: "ESLint", level: 85, color: "from-indigo-400 to-purple-400" },
        { name: "Figma", level: 88, color: "from-pink-400 to-rose-400" },
      ],
    },

    {
      title: "Performance & Optimization",
      skills: [
        {
          name: "Code Splitting & Lazy Loading",
          level: 85,
          color: "from-green-400 to-emerald-500",
        },
        {
          name: "Lighthouse Audits & Core Web Vitals",
          level: 80,
          color: "from-yellow-400 to-orange-400",
        },
        {
          name: "Progressive Web Apps (PWA)",
          level: 75,
          color: "from-indigo-400 to-blue-500",
        },
      ],
    },
    {
      title: "Deployment & DevOps (Basic)",
      skills: [
        {
          name: "Vercel, Netlify, GitHub Pages",
          level: 90,
          color: "from-cyan-400 to-teal-500",
        },
        {
          name: "CI/CD (GitHub Actions, GitLab)",
          level: 70,
          color: "from-purple-400 to-indigo-500",
        },
      ],
    },
    {
      title: "Additional (Nice-to-Have)",
      skills: [
        {
          name: "TypeScript",
          level: 90,
          color: "from-blue-500 to-blue-600",
        },
        {
          name: "Firebase / Superbase (Basics)",
          level: 65,
          color: "from-orange-400 to-red-400",
        },
        { name: "SEO Basics", level: 75, color: "from-green-500 to-teal-500" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className={`py-20 ${darkMode ? "bg-gray-900" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className={`text-4xl sm:text-5xl font-bold mb-6 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            My{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-4"></div>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className={`backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:border-purple-500/50 ${
                darkMode
                  ? "bg-gray-800/50 border-gray-700"
                  : "bg-gray-50/50 border-gray-200"
              }`}
            >
              <h3
                className={`text-xl font-bold mb-6 text-center ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.6,
                      delay: categoryIndex * 0.2 + skillIndex * 0.1,
                    }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span
                        className={`font-medium ${
                          darkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {skill.name}
                      </span>
                      <span
                        className={`text-sm ${
                          darkMode ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div
                      className={`w-full rounded-full h-2 overflow-hidden ${
                        darkMode ? "bg-gray-700" : "bg-gray-200"
                      }`}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1.5,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: "easeOut",
                        }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
