import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaMobile,
  FaDatabase,
  FaLightbulb,
  FaFirstAid,
  FaHandPaper,
  FaClipboardList,
  FaPalette,
  FaPlay,
  FaCoins,
} from "react-icons/fa";

const Projects = () => {
  const [playingVideo, setPlayingVideo] = useState(null);

  const projects = [
    {
      title: "Project ESP32 SmartLamp",
      description:
        "IoT smart lamp system controlled via an Android app using Bluetooth connectivity. Features customizable RGB lighting, voice commands, and real-time color changing.",
      tech: ["C++", "Kotlin", "ESP32", "Bluetooth"],
      icon: <FaLightbulb />,
      featured: true,
      video: "/videos/smartlamp-demo.mp4",
      poster: "/img/smartlamp.png",
      imageAlt: "Project ESP32 SmartLamp",
    },
    {
      title: "UI/UX Design - Cinema Ticket App",
      description:
        "A modern UI/UX design for a cinema ticket booking application. Features include movie selection, seat reservation, payment integration, and real-time booking confirmation with an intuitive and user-friendly interface.",
      tech: ["Figma", "UI/UX", "Prototyping", "Design System"],
      icon: <FaPalette />,
      featured: true,
      video: "/videos/ui-ux.mp4",
      poster: "/img/figma.png",
      imageAlt: "UI/UX Cinema Ticket App Design",
    },
    {
      title: "RASTU Crypto Trading Platform",
      description:
        "A modern cryptocurrency exchange frontend built with React, JavaScript, and Tailwind CSS, featuring crypto markets, trading, wallet, earn, and NFT interfaces.",
      tech: ["React", "Tailwind CSS"],
      icon: <FaCoins />,
      featured: false,
      image: "/img/crypto.png",
      imageAlt: "RASTU Crypto Trading Platform",
    },
    {
      title: "PMR Extracurricular Website",
      description:
        "A school Red Cross extracurricular website that showcases PMR activities, programs, events, galleries, and organizational information.",
      tech: ["Laravel", "Blade", "TailwindCSS", "PHP", "MySQL"],
      icon: <FaFirstAid />,
      featured: false,
      image: "/img/pmr.png",
      imageAlt: "PMR Extracurricular Website",
    },
    {
      title: "School Complaint Management System",
      description:
        "A web-based school complaint management system that allows students to submit complaints and administrators to manage categories, review reports, provide responses, and track complaint status.",
      tech: ["Laravel", "PHP", "Blade", "TailwindCSS", "MySQL"],
      icon: <FaClipboardList />,
      featured: false,
      image: "/img/pengaduan.png",
      imageAlt: "School Complaint Management System",
    },
    {
      title: "Hand Gesture Recognition System",
      description:
        "A real-time hand gesture recognition system designed to help people with speech difficulties communicate by translating hand gestures into spoken Indonesian phrases.",
      tech: ["Python", "OpenCV", "MediaPipe", "gTTS", "Pygame"],
      icon: <FaHandPaper />,
      featured: false,
      image: "/img/handgesture.png",
      imageAlt: "Hand Gesture Recognition System",
    },
  ];

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  const toggleVideo = (index) => {
    setPlayingVideo(playingVideo === index ? null : index);
  };

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gold font-inter tracking-[0.3em] uppercase text-sm mb-3">
            Portfolio
          </p>

          <h2 className="font-playfair text-4xl md:text-5xl font-bold">
            Featured <span className="gold-text">Projects</span>
          </h2>

          <p className="text-cream/50 mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills,
            creativity, and experience in technology and software development.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl overflow-hidden hover:border-gold/30 transition-all duration-500 hover:transform hover:-translate-y-2 group border-gold/10 border"
            >
              {/* Video dengan desain lebih baik */}
              {project.video ? (
                <div className="relative bg-gradient-to-b from-black/80 to-black/40 group/video">
                  <div
                    className="relative w-full"
                    style={{ paddingBottom: "56.25%" }}
                  >
                    {playingVideo === index ? (
                      <video
                        src={project.video}
                        controls
                        autoPlay
                        playsInline
                        className="absolute inset-0 w-full h-full object-contain bg-black"
                        controlsList="nodownload"
                      >
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <>
                        <img
                          src={project.poster || "/img/default-poster.jpg"}
                          alt={project.imageAlt || project.title}
                          className="absolute inset-0 w-full h-full object-contain bg-black" // Diubah ke object-contain
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                        <div
                          onClick={() => toggleVideo(index)}
                          className="absolute inset-0 flex items-center justify-center cursor-pointer group-hover/video:scale-105 transition-all duration-300"
                        >
                          <div className="relative">
                            <div className="absolute inset-0 rounded-full bg-gold/20 animate-ping" />
                            <div className="relative w-20 h-20 rounded-full bg-gold flex items-center justify-center transform transition-all duration-300 hover:scale-110 shadow-2xl shadow-gold/30">
                              <FaPlay className="text-black text-2xl ml-1" />
                            </div>
                          </div>
                        </div>

                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                          <span className="bg-black/50 backdrop-blur-sm text-white text-xs px-4 py-2 rounded-full border border-white/10">
                            ▶ Watch Demo
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ) : (
                project.image && (
                  <div className="relative h-56 md:h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.imageAlt || project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                )
              )}

              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-gold text-2xl">{project.icon}</span>
                  <span className="text-xs text-gold font-inter tracking-wider uppercase">
                    Featured
                  </span>
                </div>
                <h3 className="font-playfair text-2xl font-bold text-cream mb-3">
                  {project.title}
                </h3>
                <p className="text-cream/60 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs bg-gold/10 text-gold rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="grid md:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-xl overflow-hidden hover:border-gold/30 transition-all duration-500 hover:transform hover:-translate-y-2 group"
            >
              {project.image && (
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.imageAlt || project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              )}

              <div className="p-6">
                <div className="text-gold text-xl mb-3">{project.icon}</div>
                <h3 className="font-playfair text-xl font-bold text-cream mb-2">
                  {project.title}
                </h3>
                <p className="text-cream/50 text-xs mb-3 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 text-[10px] bg-gold/10 text-gold rounded-full"
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
