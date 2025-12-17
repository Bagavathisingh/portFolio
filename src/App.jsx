import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  User,
  Briefcase,
  MessageSquare,
} from "lucide-react";

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState({});
  const [navBackground, setNavBackground] = useState(false);

  const projects = [
    {
      title: "E-Learning Platform",
      description:
        "A full-stack E-learning platform with user authentication, payment processing, and admin dashboard. Built with modern technologies for optimal performance.",
      tech: ["React.js", "Javascript", "TailwindCSS", "MongoDB", "Firebase"],
      liveLink: "https://metastudy.vercel.app",
      githubLink: "https://github.com/Bagavathisingh/metalearn",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tech: ["React", "Socket.io", "Node.js", "MongoDB"],
      liveLink: "https://task-manger-rust.vercel.app/",
      githubLink: "https://github.com/Bagavathisingh/task-Manger",
    },
    {
      title: "Weather Dashboard",
      description:
        "A responsive weather application with location-based forecasts, interactive maps, and beautiful data visualizations.",
      tech: ["React.js", "Express.js", "Weather API", "Tailwind CSS"],
      liveLink: "https://weather-motion.vercel.app",
      githubLink: "https://github.com/Bagavathisingh/weatherApp",
    },
        {
      title: "CyberBoy Chatbot",
      description:
        "CyberBoy is an intelligent chatbot designed to help with cybersecurity queries, digital safety, and tech-related solutions.",
      tech: ["React.js", "Express.js", "OpenRouter API", "Tailwind CSS","MangoDB"],
      liveLink: "https://cyberboybot.netlify.app",
      githubLink: "https://github.com/Bagavathisingh/cyberBoy",
    },
  ];

  const skills = [
    "React",
    "Next.js",
    "JavaScript",
    "Node.js",
    "Python",
    "MongoDB",
    "Docker",
    "Tailwind",
    "Flutter",
    "React-Native",
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Scroll handling for navigation background
  useEffect(() => {
    const handleScroll = () => {
      setNavBackground(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Popup state
  const [showPopup, setShowPopup] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-slate-200 overflow-x-hidden">

      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-slate-800 border border-slate-600 rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center animate-fadeIn">
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              Thank you!
            </h3>
            <p className="text-slate-300 mb-6">
              Thank you for your message!
              <br />
              I'll get back to you soon.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="btn-gradient w-full py-2 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
      
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes rotate {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-slideInUp {
          animation: slideInUp 1s ease-out;
        }
        .animate-slideInUp-delay-1 {
          animation: slideInUp 1s ease-out 0.2s both;
        }
        .animate-slideInUp-delay-2 {
          animation: slideInUp 1s ease-out 0.4s both;
        }
        .animate-slideInUp-delay-3 {
          animation: slideInUp 1s ease-out 0.6s both;
        }
        .animate-rotate {
          animation: rotate 3s linear infinite;
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }

        .hero-bg {
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><radialGradient id="grad" cx="50%" cy="50%" r="50%"><stop offset="0%" style="stop-color:rgba(59,130,246,0.1);stop-opacity:1" /><stop offset="100%" style="stop-color:rgba(139,92,246,0.05);stop-opacity:0" /></radialGradient></defs><circle cx="50" cy="50" r="50" fill="url(%23grad)" /></svg>')
            center/cover;
        }

        .gradient-text {
          background: linear-gradient(45deg, #ffffff, #3b82f6, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .btn-gradient {
          background: linear-gradient(45deg, #3b82f6, #8b5cf6);
        }

        .card-hover:hover {
          transform: translateY(-10px);
          border-color: rgba(59, 130, 246, 0.3);
          box-shadow: 0 20px 40px rgba(59, 130, 246, 0.1);
        }

        .nav-link::after {
          content: "";
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(45deg, #3b82f6, #8b5cf6);
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .skill-tag:hover {
          transform: scale(1.05);
        }

        .project-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(45deg, #3b82f6, #8b5cf6);
        }

        .rotating-border::before {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: conic-gradient(
            from 0deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          animation: rotate 3s linear infinite;
        }
      `}</style>

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 border-b border-slate-700/10 transition-all duration-300 ${
          navBackground
            ? "bg-slate-900/95 backdrop-blur-lg"
            : "bg-slate-900/90 backdrop-blur-md"
        }`}
      >
        <div className="max-w-6xl mx-auto px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold gradient-text">Bagavathisingh</div>
          <ul className="hidden md:flex space-x-8">
            {["home", "about", "projects", "contact"].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item)}
                  className="nav-link relative text-slate-300 hover:text-blue-400 font-medium transition-all duration-300 capitalize"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center relative overflow-hidden"
      >
        <div className="hero-bg absolute inset-0 animate-float"></div>
        <div className="max-w-6xl mx-auto px-8 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 gradient-text animate-slideInUp">
              Hi, I'm Bagavathisingh
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 mb-8 animate-slideInUp-delay-1">
              Web & App Developer & UI/UX Designer
            </p>
            <p className="text-lg text-slate-300 max-w-2xl mb-12 leading-relaxed animate-slideInUp-delay-2">
              I create beautiful, functional, and user-centered digital
              experiences. With expertise in modern web and application
              technologies and a passion for clean design, I bring ideas to life
              through code.
            </p>
            <div className="flex flex-wrap gap-4 animate-slideInUp-delay-3">
              <button
                onClick={() => scrollToSection("projects")}
                className="btn-gradient text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-1 transition-all duration-300"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-full font-semibold hover:-translate-y-1 transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className={`py-24 transition-all duration-800 ${
          isVisible.about ? "animate-fadeIn" : "opacity-0"
        }`}
      >
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center">
              <div className="w-72 h-72 rounded-full btn-gradient flex items-center justify-center text-8xl text-white relative overflow-hidden rotating-border">
                <span className="relative z-10">👨‍💻</span>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-semibold mb-6 text-slate-100">
                Passionate Developer
              </h3>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                I'm a student passionate about learning web & app development
                and UI/UX design. I enjoy experimenting with code, building
                small projects, and improving my skills every day.
              </p>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open source projects, or sharing knowledge with
                the developer community.
              </p>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={skill}
                    className="skill-tag bg-blue-500/10 border border-blue-500/30 text-blue-400 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 cursor-default"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className={`py-24 transition-all duration-800 ${
          isVisible.projects ? "animate-fadeIn" : "opacity-0"
        }`}
      >
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-card relative bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 backdrop-blur-lg card-hover transition-all duration-300 overflow-hidden"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <h3 className="text-xl font-semibold mb-4 text-slate-100">
                  {project.title}
                </h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-purple-500/10 border border-purple-500/30 text-purple-400 px-3 py-1 rounded-xl text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-purple-400 font-medium transition-colors duration-300 flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-purple-400 font-medium transition-colors duration-300 flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className={`py-24 transition-all duration-800 ${
          isVisible.contact ? "animate-fadeIn" : "opacity-0"
        }`}
      >
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Get In Touch
          </h2>
          <div className="text-center">
            <p className="text-lg text-slate-300 mb-12 leading-relaxed max-w-2xl mx-auto">
              I'm always interested in new opportunities and collaborations.
              Let's discuss how we can work together!
            </p>
            <div onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
              <div className="text-left">
                <label
                  htmlFor="name"
                  className="block text-slate-300 font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-slate-800/50 border border-slate-600/50 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                />
              </div>
              <div className="text-left">
                <label
                  htmlFor="email"
                  className="block text-slate-300 font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-slate-800/50 border border-slate-600/50 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                />
              </div>
              <div className="text-left">
                <label
                  htmlFor="message"
                  className="block text-slate-300 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  className="w-full bg-slate-800/50 border border-slate-600/50 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-vertical"
                />
              </div>
              <button
                onClick={handleSubmit}
                className="w-full btn-gradient text-white py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-1 transition-all duration-300"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/80 border-t border-slate-700/50 py-12">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <div className="flex justify-center gap-6 mb-6">
            <a
              href="https://github.com/Bagavathisingh"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-blue-500/10 border border-blue-500/30 rounded-full flex items-center justify-center text-blue-400 hover:bg-blue-500 hover:text-white hover:-translate-y-1 transition-all duration-300"
              title="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/bagavathi-singh"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-blue-500/10 border border-blue-500/30 rounded-full flex items-center justify-center text-blue-400 hover:bg-blue-500 hover:text-white hover:-translate-y-1 transition-all duration-300"
              title="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
          <p className="text-slate-400">
            &copy; 2025 Bagavathisingh. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
