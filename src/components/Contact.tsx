import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import AnimatePresence
import { useInView } from "react-intersection-observer";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  CheckCircle, // Icon for success
  XCircle, // Icon for error
  Loader, // Icon for loading
} from "lucide-react";
import emailjs from "@emailjs/browser";

interface ContactProps {
  darkMode: boolean;
}

// EmailJS Credentials
const SERVICE_ID = "service_8h0bacn";
const TEMPLATE_ID = "template_f89xzsv";
const PUBLIC_KEY = "gmYTFmoSxTvx1qC1g";

// Define the type for the notification message
type MessageStatus = "success" | "error" | null;

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  // State for form submission feedback
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messageStatus, setMessageStatus] = useState<MessageStatus>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessageStatus(null); // Reset message status

    // EmailJS logic
    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        formData as Record<string, unknown>,
        PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("EmailJS Success:", result.text);
          setMessageStatus("success");
          // Reset form on success
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.error("EmailJS Error:", error.text);
          setMessageStatus("error");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
        // Clear success/error message after 5 seconds
        setTimeout(() => {
          setMessageStatus(null);
        }, 5000);
      });
  };

  // Custom Notification Component
  const Notification = () => {
    if (!messageStatus) return null;

    const isSuccess = messageStatus === "success";
    const Icon = isSuccess ? CheckCircle : XCircle;
    const bgColor = isSuccess ? "bg-green-500/90" : "bg-red-500/90";
    const messageText = isSuccess
      ? "Message sent successfully! I'll get back to you soon."
      : "Failed to send the message. Please try again or contact me directly.";

    // Animation variants for the slide-in/slide-out toast
    const notificationVariants = {
      hidden: { opacity: 0, y: -50, scale: 0.8 },
      visible: { opacity: 1, y: 0, scale: 1 },
      exit: { opacity: 0, y: -50, scale: 0.8 },
    };

    return (
      <AnimatePresence>
        {messageStatus && (
          <motion.div
            key="notification"
            variants={notificationVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
            className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-xl backdrop-blur-md ${bgColor} text-white max-w-sm`}
          >
            <div className="flex items-center space-x-3">
              <Icon className="w-6 h-6 flex-shrink-0" />
              <p className="font-semibold">{isSuccess ? "Success" : "Error"}</p>
            </div>
            <p className="mt-2 text-sm">{messageText}</p>
            <button
              onClick={() => setMessageStatus(null)}
              className="absolute top-1 right-1 p-1 rounded-full hover:bg-white/20 transition-colors"
              aria-label="Close notification"
            >
              <XCircle size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "yonimillipro@gmail.com",
      href: "mailto:yonimillipro@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+(251)-940848780",
      href: "tel:+251940848780",
    },
    { icon: MapPin, label: "Location", value: "Adiss Ababa, A/A", href: "#" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/yonimillipro", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/yoni-milli-25101a329/",
      label: "LinkedIn",
    },
    { icon: Twitter, href: "https://x.com/YoniMilli", label: "Twitter" },
  ];

  return (
    <section
      id="contact"
      className={`py-20 ${darkMode ? "bg-gray-900" : "bg-white"}`}
    >
      {/* 1. Global Notification Component */}
      <Notification />

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
            Get In{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-4"></div>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Let's work together to bring your ideas to life. I'm always open to
            discussing new opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div
              className={`backdrop-blur-sm rounded-xl p-8 border ${
                darkMode
                  ? "bg-gray-800/50 border-gray-700"
                  : "bg-gray-50/50 border-gray-200"
              }`}
            >
              <h3
                className={`text-2xl font-bold mb-6 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Send me a message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <label
                      htmlFor="name"
                      className={`block text-sm font-medium mb-2 ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-300 ${
                        darkMode
                          ? "bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
                          : "bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500"
                      }`}
                      placeholder="Your name"
                      required
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <label
                      htmlFor="email"
                      className={`block text-sm font-medium mb-2 ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-300 ${
                        darkMode
                          ? "bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
                          : "bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500"
                      }`}
                      placeholder="your.email@example.com"
                      required
                    />
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <label
                    htmlFor="subject"
                    className={`block text-sm font-medium mb-2 ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-300 ${
                      darkMode
                        ? "bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
                        : "bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500"
                    }`}
                    placeholder="What's this about?"
                    required
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <label
                    htmlFor="message"
                    className={`block text-sm font-medium mb-2 ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className={`w-full px-4 py-3 border rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-300 resize-none ${
                      darkMode
                        ? "bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
                        : "bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500"
                    }`}
                    placeholder="Tell me about your project..."
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={isSubmitting} // Disable button while submitting
                    className={`w-full px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center ${
                      isSubmitting
                        ? "opacity-60 cursor-not-allowed"
                        : "hover:from-blue-600 hover:to-purple-700"
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader className="mr-2 animate-spin" size={20} />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2" size={20} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </motion.div>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div
              className={`backdrop-blur-sm rounded-xl p-8 border ${
                darkMode
                  ? "bg-gray-800/50 border-gray-700"
                  : "bg-gray-50/50 border-gray-200"
              }`}
            >
              <h3
                className={`text-2xl font-bold mb-6 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map(
                  ({ icon: Icon, label, value, href }, index) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      className={`flex items-center space-x-4 transition-colors duration-300 group ${
                        darkMode
                          ? "text-gray-300 hover:text-white"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div
                          className={`text-sm ${
                            darkMode ? "text-gray-400" : "text-gray-500"
                          }`}
                        >
                          {label}
                        </div>
                        <div className="font-medium">{value}</div>
                      </div>
                    </motion.a>
                  )
                )}
              </div>
            </div>

            <div
              className={`backdrop-blur-sm rounded-xl p-8 border ${
                darkMode
                  ? "bg-gray-800/50 border-gray-700"
                  : "bg-gray-50/50 border-gray-200"
              }`}
            >
              <h3
                className={`text-2xl font-bold mb-6 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Follow Me
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map(({ icon: Icon, href, label }, index) => (
                  <motion.a
                    key={label}
                    href={href}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className={`p-3 rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white ${
                      darkMode
                        ? "bg-gray-700/50 text-gray-300"
                        : "bg-gray-200/50 text-gray-600"
                    }`}
                    aria-label={label}
                    target="_blanke"
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
              <p
                className={`text-sm mt-6 ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Feel free to reach out on any platform. I'm always happy to
                connect and discuss new opportunities!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import {
//   Mail,
//   Phone,
//   MapPin,
//   Send,
//   Github,
//   Linkedin,
//   Twitter,
// } from "lucide-react";

// interface ContactProps {
//   darkMode: boolean;
// }

// const Contact: React.FC<ContactProps> = ({ darkMode }) => {
//   const [ref, inView] = useInView({
//     threshold: 0.1,
//     triggerOnce: true,
//   });

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle form submission
//     console.log("Form submitted:", formData);
//     // Reset form
//     setFormData({ name: "", email: "", subject: "", message: "" });
//   };

//   const contactInfo = [
//     {
//       icon: Mail,
//       label: "Email",
//       value: "yonimillipro@gmail.com",
//       href: "mailto:yonimillipro@gmail.com",
//     },
//     {
//       icon: Phone,
//       label: "Phone",
//       value: "+(251)-940848780",
//       href: "tel:+251940848780",
//     },
//     { icon: MapPin, label: "Location", value: "Adiss Ababa, A/A", href: "#" },
//   ];

//   const socialLinks = [
//     { icon: Github, href: "https://github.com/yonimillipro", label: "GitHub" },
//     {
//       icon: Linkedin,
//       href: "https://www.linkedin.com/in/yoni-milli-25101a329/",
//       label: "LinkedIn",
//     },
//     { icon: Twitter, href: "https://x.com/YoniMilli", label: "Twitter" },
//   ];

//   return (
//     <section
//       id="contact"
//       className={`py-20 ${darkMode ? "bg-gray-900" : "bg-white"}`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 50 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h2
//             className={`text-4xl sm:text-5xl font-bold mb-6 ${
//               darkMode ? "text-white" : "text-gray-900"
//             }`}
//           >
//             Get In{" "}
//             <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//               Touch
//             </span>
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-4"></div>
//           <p
//             className={`text-lg max-w-2xl mx-auto ${
//               darkMode ? "text-gray-300" : "text-gray-600"
//             }`}
//           >
//             Let's work together to bring your ideas to life. I'm always open to
//             discussing new opportunities.
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             <div
//               className={`backdrop-blur-sm rounded-xl p-8 border ${
//                 darkMode
//                   ? "bg-gray-800/50 border-gray-700"
//                   : "bg-gray-50/50 border-gray-200"
//               }`}
//             >
//               <h3
//                 className={`text-2xl font-bold mb-6 ${
//                   darkMode ? "text-white" : "text-gray-900"
//                 }`}
//               >
//                 Send me a message
//               </h3>
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={inView ? { opacity: 1, y: 0 } : {}}
//                     transition={{ duration: 0.6, delay: 0.4 }}
//                   >
//                     <label
//                       htmlFor="name"
//                       className={`block text-sm font-medium mb-2 ${
//                         darkMode ? "text-gray-300" : "text-gray-700"
//                       }`}
//                     >
//                       Full Name
//                     </label>
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleInputChange}
//                       className={`w-full px-4 py-3 border rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-300 ${
//                         darkMode
//                           ? "bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
//                           : "bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500"
//                       }`}
//                       placeholder="Your name"
//                       required
//                     />
//                   </motion.div>
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={inView ? { opacity: 1, y: 0 } : {}}
//                     transition={{ duration: 0.6, delay: 0.5 }}
//                   >
//                     <label
//                       htmlFor="email"
//                       className={`block text-sm font-medium mb-2 ${
//                         darkMode ? "text-gray-300" : "text-gray-700"
//                       }`}
//                     >
//                       Email Address
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       className={`w-full px-4 py-3 border rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-300 ${
//                         darkMode
//                           ? "bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
//                           : "bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500"
//                       }`}
//                       placeholder="your.email@example.com"
//                       required
//                     />
//                   </motion.div>
//                 </div>
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={inView ? { opacity: 1, y: 0 } : {}}
//                   transition={{ duration: 0.6, delay: 0.6 }}
//                 >
//                   <label
//                     htmlFor="subject"
//                     className={`block text-sm font-medium mb-2 ${
//                       darkMode ? "text-gray-300" : "text-gray-700"
//                     }`}
//                   >
//                     Subject
//                   </label>
//                   <input
//                     type="text"
//                     id="subject"
//                     name="subject"
//                     value={formData.subject}
//                     onChange={handleInputChange}
//                     className={`w-full px-4 py-3 border rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-300 ${
//                       darkMode
//                         ? "bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
//                         : "bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500"
//                     }`}
//                     placeholder="What's this about?"
//                     required
//                   />
//                 </motion.div>
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={inView ? { opacity: 1, y: 0 } : {}}
//                   transition={{ duration: 0.6, delay: 0.7 }}
//                 >
//                   <label
//                     htmlFor="message"
//                     className={`block text-sm font-medium mb-2 ${
//                       darkMode ? "text-gray-300" : "text-gray-700"
//                     }`}
//                   >
//                     Message
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleInputChange}
//                     rows={5}
//                     className={`w-full px-4 py-3 border rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-300 resize-none ${
//                       darkMode
//                         ? "bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
//                         : "bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500"
//                     }`}
//                     placeholder="Tell me about your project..."
//                     required
//                   />
//                 </motion.div>
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={inView ? { opacity: 1, y: 0 } : {}}
//                   transition={{ duration: 0.6, delay: 0.8 }}
//                 >
//                   <motion.button
//                     type="submit"
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="w-full px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
//                   >
//                     <Send className="mr-2" size={20} />
//                     Send Message
//                   </motion.button>
//                 </motion.div>
//               </form>
//             </div>
//           </motion.div>

//           {/* Contact Info */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="space-y-8"
//           >
//             <div
//               className={`backdrop-blur-sm rounded-xl p-8 border ${
//                 darkMode
//                   ? "bg-gray-800/50 border-gray-700"
//                   : "bg-gray-50/50 border-gray-200"
//               }`}
//             >
//               <h3
//                 className={`text-2xl font-bold mb-6 ${
//                   darkMode ? "text-white" : "text-gray-900"
//                 }`}
//               >
//                 Contact Information
//               </h3>
//               <div className="space-y-6">
//                 {contactInfo.map(
//                   ({ icon: Icon, label, value, href }, index) => (
//                     <motion.a
//                       key={label}
//                       href={href}
//                       target="_blank"
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={inView ? { opacity: 1, y: 0 } : {}}
//                       transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
//                       className={`flex items-center space-x-4 transition-colors duration-300 group ${
//                         darkMode
//                           ? "text-gray-300 hover:text-white"
//                           : "text-gray-600 hover:text-gray-900"
//                       }`}
//                     >
//                       <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
//                         <Icon className="w-6 h-6 text-white" />
//                       </div>
//                       <div>
//                         <div
//                           className={`text-sm ${
//                             darkMode ? "text-gray-400" : "text-gray-500"
//                           }`}
//                         >
//                           {label}
//                         </div>
//                         <div className="font-medium">{value}</div>
//                       </div>
//                     </motion.a>
//                   )
//                 )}
//               </div>
//             </div>

//             <div
//               className={`backdrop-blur-sm rounded-xl p-8 border ${
//                 darkMode
//                   ? "bg-gray-800/50 border-gray-700"
//                   : "bg-gray-50/50 border-gray-200"
//               }`}
//             >
//               <h3
//                 className={`text-2xl font-bold mb-6 ${
//                   darkMode ? "text-white" : "text-gray-900"
//                 }`}
//               >
//                 Follow Me
//               </h3>
//               <div className="flex space-x-4">
//                 {socialLinks.map(({ icon: Icon, href, label }, index) => (
//                   <motion.a
//                     key={label}
//                     href={href}
//                     initial={{ opacity: 0, scale: 0 }}
//                     animate={inView ? { opacity: 1, scale: 1 } : {}}
//                     transition={{ delay: 0.8 + index * 0.1 }}
//                     whileHover={{ scale: 1.2, rotate: 5 }}
//                     className={`p-3 rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white ${
//                       darkMode
//                         ? "bg-gray-700/50 text-gray-300"
//                         : "bg-gray-200/50 text-gray-600"
//                     }`}
//                     aria-label={label}
//                     target="_blanke"
//                   >
//                     <Icon size={20} />
//                   </motion.a>
//                 ))}
//               </div>
//               <p
//                 className={`text-sm mt-6 ${
//                   darkMode ? "text-gray-400" : "text-gray-500"
//                 }`}
//               >
//                 Feel free to reach out on any platform. I'm always happy to
//                 connect and discuss new opportunities!
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
