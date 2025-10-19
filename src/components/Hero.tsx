import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = [
    "Front-End Developer",
    "React Specialist",
    "UI/UX Enthusiast",
    "Problem Solver",
  ];
  const currentTitle = titles[currentIndex];

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (!isDeleting && displayText === currentTitle) {
          setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && displayText === "") {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        } else if (isDeleting) {
          setDisplayText(currentTitle.substring(0, displayText.length - 1));
        } else {
          setDisplayText(currentTitle.substring(0, displayText.length + 1));
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, currentTitle, titles.length]);

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/yonimillipro",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/yoni-milli-25101a329/",
      label: "LinkedIn",
    },
    { icon: Mail, href: "#contact", label: "Email" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background */}
      <div
        className={`absolute inset-0 ${
          darkMode
            ? "bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20"
            : "bg-gradient-to-br from-gray-50 via-purple-50/20 to-blue-50/20"
        }`}
      >
        <div
          className={`absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] ${
            darkMode
              ? "from-purple-900/20 via-gray-900 to-gray-900"
              : "from-purple-100/20 via-gray-50 to-gray-50"
          }`}
        ></div>
      </div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-1 h-1 rounded-full ${
            darkMode ? "bg-white/20" : "bg-gray-600/20" // <--- FIX: Changed from bg-gray-400/20 for better contrast
          }`}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [null, Math.random() * window.innerHeight],
            x: [null, Math.random() * window.innerWidth],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 mt-[100px] sm:mt-0"
        >
          <h2
            className={`text-xl sm:text-2xl mb-2 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Hello, I'm
          </h2>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            Yonathan Million
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8"
        >
          <div
            className={`text-2xl sm:text-4xl h-16 flex items-center justify-center ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            <span>{displayText}</span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="ml-1 text-blue-400"
            >
              |
            </motion.span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className={`text-lg mb-12 max-w-2xl mx-auto leading-relaxed ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          I craft beautiful, responsive web applications with modern
          technologies. Passionate about creating exceptional user experiences
          through clean code and innovative design.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-6 items-center justify-center mb-16"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View My Work
          </motion.a>

          <div className="flex space-x-4">
            {socialLinks.map(({ icon: Icon, href, label }, index) => (
              <motion.a
                key={label}
                href={href}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                className={`p-3 backdrop-blur-sm rounded-full transition-all duration-300 ${
                  darkMode
                    ? "bg-gray-800/50 text-gray-300 hover:text-white hover:bg-gray-700/50"
                    : "bg-white/50 text-gray-600 hover:text-gray-900 hover:bg-white/70"
                }`}
                aria-label={label}
                // target="_blank"
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
          delay: 2.0,
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <a
          href="#about"
          className={` ${
            darkMode
              ? "border-gray-300 text-gray-300"
              : "border-gray-600 text-gray-600"
          } hover:scale-110 transition-transform duration-300`}
          aria-label="Scroll down to About section"
        >
          <ChevronDown size={50} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
