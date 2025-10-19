import React from "react";
import { motion } from "framer-motion";
import { Heart, Code } from "lucide-react";

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  return (
    <footer
      className={`border-t ${
        darkMode ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Yonathan Million
          </div>
          <p className={`mb-4 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            Front-End Developer passionate about creating amazing web
            experiences
          </p>
          <div
            className={`flex items-center justify-center text-sm ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            <span>Built with</span>
            <Code className="mx-1 w-4 h-4" />
            <span className="mx-1">React, TypeScript & Framer Motion</span>
            <Heart className="mx-1 w-4 h-4" />
          </div>
          <div
            className={`text-sm mt-2 ${
              darkMode ? "text-gray-500" : "text-gray-400"
            }`}
          >
            © {new Date().getFullYear()} Yonathan Million. All rights reserved.
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
