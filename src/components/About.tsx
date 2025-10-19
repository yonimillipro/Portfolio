import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Zap, Users, Layout, Feather, Sparkles } from "lucide-react";
//import profileImage from "/yon.jpg";
import profileImage from "/pro5.png";
import myResume from "/Yonathan_CV.pdf";

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Feature list
  const features = [
    {
      icon: Layout,
      title: "Responsive Layouts",
      description:
        "Building beautiful, functional interfaces that work seamlessly across all devices, from mobile to desktop.",
    },
    {
      icon: Feather,
      title: "Intuitive UX/UI",
      description:
        "Crafting user-friendly designs that are both aesthetically pleasing and easy to navigate, with a focus on human-centered design principles.",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Optimizing web applications for speed and efficiency, ensuring a fast, smooth, and accessible user experience.",
    },
    {
      icon: Sparkles,
      title: "Animated Interfaces",
      description:
        "Using modern animation libraries like Framer Motion to create engaging, delightful, and interactive user experiences.",
    },
    {
      icon: Code2,
      title: "Clean & Maintainable Code",
      description:
        "Writing scalable and efficient code following modern best practices, with a focus on readability and future maintenance.",
    },

    {
      icon: Users,
      title: "Effective Collaboration",
      description:
        "Working effectively with cross-functional teams using agile methodologies to deliver exceptional and timely results.",
    },
  ];

  return (
    <section
      id="about"
      className={`py-20 ${darkMode ? "bg-gray-900" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className={`text-4xl sm:text-5xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate front-end developer with 3+ years of experience creating
            digital solutions that are both functional and visually stunning.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl transform rotate-3 scale-105 filter blur-lg opacity-60"></div>
              <img
                // src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=500"
                src={profileImage}
                alt="Profile"
                className="relative z-10 w-full h-80 lg:h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>

          <div className="w-full lg:w-1/2 space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              I specialize in creating engaging user experiences with a focus on
              clean, modern, and efficient front-end code. My expertise lies in
              turning complex designs into responsive and interactive web
              applications. I am proficient in modern frameworks and libraries,
              including React/Next.js, Material/Shadcn UI,Tailwind CSS and
              Frame-motion.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              With a keen eye for detail and a passion for crafting
              pixel-perfect interfaces, I am constantly exploring new
              technologies and design trends to build web solutions that not
              only look great but also deliver an exceptional user experience.
            </motion.p>

            {/* Download Resume Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-4"
            >
              <motion.a
                href={myResume}
                // href="/Yonathan_CV.pdf" // replace with your resume file path
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-150 shadow-lg hover:shadow-xl inline-block"
              >
                Download Resume
              </motion.a>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              // OPTIMIZATION: Use 'y' and 'borderColor' for fast, unified animation
              whileHover={{
                scale: 1.02,
                y: -5,
                borderColor: "#a855f7", // Hover border color (purple-500)
              }}
              // Removed duration-300 and added a default border style
              className={`p-6 rounded-2xl border transition-shadow duration-150 ${
                darkMode
                  ? "bg-gray-800 text-white shadow-lg border-gray-700" // Default dark border
                  : "bg-gray-50 text-gray-900 shadow-xl border-gray-200" // Default light border
              }`}
            >
              <div className="flex items-start mb-4">
                <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl mr-4 flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-base">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
// import React from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { Code2, Zap, Users, Layout, Feather, Sparkles } from "lucide-react";
// //import profileImage from "/yon.jpg";
// import profileImage from "/pro5.png";
// import myResume from "/Yonathan_CV.pdf";

// interface AboutProps {
//   darkMode: boolean;
// }

// const About: React.FC<AboutProps> = ({ darkMode }) => {
//   const [ref, inView] = useInView({
//     threshold: 0.1,
//     triggerOnce: true,
//   });

//   // Feature list
//   const features = [
//     {
//       icon: Layout,
//       title: "Responsive Layouts",
//       description:
//         "Building beautiful, functional interfaces that work seamlessly across all devices, from mobile to desktop.",
//     },
//     {
//       icon: Feather,
//       title: "Intuitive UX/UI",
//       description:
//         "Crafting user-friendly designs that are both aesthetically pleasing and easy to navigate, with a focus on human-centered design principles.",
//     },
//     {
//       icon: Zap,
//       title: "Performance Optimization",
//       description:
//         "Optimizing web applications for speed and efficiency, ensuring a fast, smooth, and accessible user experience.",
//     },
//     {
//       icon: Sparkles,
//       title: "Animated Interfaces",
//       description:
//         "Using modern animation libraries like Framer Motion to create engaging, delightful, and interactive user experiences.",
//     },
//     {
//       icon: Code2,
//       title: "Clean & Maintainable Code",
//       description:
//         "Writing scalable and efficient code following modern best practices, with a focus on readability and future maintenance.",
//     },

//     {
//       icon: Users,
//       title: "Effective Collaboration",
//       description:
//         "Working effectively with cross-functional teams using agile methodologies to deliver exceptional and timely results.",
//     },
//   ];

//   return (
//     <section
//       id="about"
//       className={`py-20 ${darkMode ? "bg-gray-900" : "bg-white"}`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h2
//             className={`text-4xl sm:text-5xl font-bold mb-4 ${
//               darkMode ? "text-white" : "text-gray-900"
//             }`}
//           >
//             About{" "}
//             <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//               Me
//             </span>
//           </h2>
//           <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
//             Passionate front-end developer with 3+ years of experience creating
//             digital solutions that are both functional and visually stunning.
//           </p>
//         </motion.div>

//         <div className="flex flex-col lg:flex-row items-center gap-16">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.8 }}
//             className="w-full lg:w-1/2 flex justify-center"
//           >
//             <div className="relative">
//               <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl transform rotate-3 scale-105 filter blur-lg opacity-60"></div>
//               <img
//                 // src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=500"
//                 src={profileImage}
//                 alt="Profile"
//                 className="relative z-10 w-full h-80 lg:h-96 object-cover rounded-2xl shadow-2xl"
//               />
//             </div>
//           </motion.div>

//           <div className="w-full lg:w-1/2 space-y-8">
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
//             >
//               I specialize in creating engaging user experiences with a focus on
//               clean, modern, and efficient front-end code. My expertise lies in
//               turning complex designs into responsive and interactive web
//               applications. I am proficient in modern frameworks and libraries,
//               including React/Next.js, Material/Shadcn UI,Tailwind CSS and
//               Frame-motion.
//             </motion.p>
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
//             >
//               With a keen eye for detail and a passion for crafting
//               pixel-perfect interfaces, I am constantly exploring new
//               technologies and design trends to build web solutions that not
//               only look great but also deliver an exceptional user experience.
//             </motion.p>

//             {/* Download Resume Button */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.6, delay: 0.6 }}
//               className="pt-4"
//             >
//               <motion.a
//                 href={myResume}
//                 // href="/Yonathan_CV.pdf" // replace with your resume file path
//                 download
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl inline-block"
//               >
//                 Download Resume
//               </motion.a>
//             </motion.div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
//           {features.map((feature, index) => (
//             <motion.div
//               key={feature.title}
//               initial={{ opacity: 0, y: 30 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
//               whileHover={{ scale: 1.02, y: -5 }}
//               className={`p-6 rounded-2xl transition-all duration-300 ${
//                 darkMode
//                   ? "bg-gray-800 text-white shadow-lg"
//                   : "bg-gray-50 text-gray-900 shadow-xl"
//               }`}
//             >
//               <div className="flex items-start mb-4">
//                 <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl mr-4 flex-shrink-0">
//                   <feature.icon className="w-6 h-6 text-white" />
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-semibold">{feature.title}</h3>
//                 </div>
//               </div>
//               <p className="text-gray-600 dark:text-gray-400 text-base">
//                 {feature.description}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
