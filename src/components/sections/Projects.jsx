import React, { useState } from "react";
import { motion } from "framer-motion";

import {
  FaLightbulb,
  FaFirstAid,
  FaHandPaper,
  FaClipboardList,
  FaPalette,
  FaPlay,
  FaCoins,
  FaRobot,
} from "react-icons/fa";

import { useLanguage } from "../../context/LanguageContext";

const Projects = () => {
  const { language } = useLanguage();

  const [playingVideo, setPlayingVideo] = useState(null);

  const projects = [
    {
      title: "Project ESP32 SmartLamp",

      description:
        language === "en"
          ? "IoT smart lamp system controlled via an Android app using Bluetooth connectivity. Features customizable RGB lighting, voice commands, and real-time color changing."
          : "Sistem lampu pintar IoT yang dikendalikan melalui aplikasi Android menggunakan koneksi Bluetooth. Memiliki fitur pencahayaan RGB yang dapat disesuaikan, perintah suara, dan perubahan warna secara real-time.",

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
        language === "en"
          ? "A modern UI/UX design for a cinema ticket booking application. Features include movie selection, seat reservation, payment integration, and real-time booking confirmation with an intuitive and user-friendly interface."
          : "Desain UI/UX modern untuk aplikasi pemesanan tiket bioskop. Memiliki fitur pemilihan film, reservasi kursi, integrasi pembayaran, dan konfirmasi pemesanan secara real-time dengan tampilan yang intuitif dan mudah digunakan.",

      tech: ["Figma", "UI/UX", "Prototyping", "Design System"],

      icon: <FaPalette />,

      featured: true,

      video: "/videos/ui-ux.mp4",

      poster: "/img/figma.png",

      imageAlt: "UI/UX Cinema Ticket App Design",
    },

    {
      title: language === "en" ? "AI Desktop Assistant" : "Asisten AI Desktop",

      description:
        language === "en"
          ? "An AI-powered desktop assistant built with Python that can understand voice commands and automate computer tasks. It can open applications such as Chrome, File Explorer, Calculator, and other software automatically based on spoken commands. The system combines speech recognition, text-to-speech, and desktop automation to provide a more natural and efficient way to interact with a computer."
          : "Asisten desktop berbasis AI yang dibuat menggunakan Python untuk memahami perintah suara dan mengotomatiskan berbagai tugas di komputer. Asisten ini dapat membuka aplikasi seperti Chrome, File Explorer, Calculator, dan software lainnya secara otomatis berdasarkan perintah yang diucapkan. Sistem ini menggabungkan speech recognition, text-to-speech, dan otomatisasi desktop untuk memberikan cara berinteraksi dengan komputer yang lebih natural dan efisien.",

      tech: [
        "Python",
        "Speech Recognition",
        "Text-to-Speech",
        "PyAutoGUI",
        "OS Automation",
      ],

      icon: <FaRobot />,

      featured: false,

      video: "/videos/ai.mp4",

      poster: "/img/fotoai.png",

      imageAlt:
        language === "en" ? "AI Desktop Assistant" : "Asisten AI Desktop",
    },

    {
      title: "RASTU Crypto Trading Platform",

      description:
        language === "en"
          ? "A modern cryptocurrency exchange frontend built with React, JavaScript, and Tailwind CSS, featuring crypto markets, trading, wallet, earn, and NFT interfaces."
          : "Frontend platform pertukaran cryptocurrency modern yang dibuat dengan React, JavaScript, dan Tailwind CSS, dengan fitur market crypto, trading, wallet, earn, dan interface NFT.",

      tech: ["React", "Tailwind CSS"],

      icon: <FaCoins />,

      featured: false,

      image: "/img/crypto.png",

      imageAlt: "RASTU Crypto Trading Platform",
    },

    {
      title: "PMR Extracurricular Website",

      description:
        language === "en"
          ? "A school Red Cross extracurricular website that showcases PMR activities, programs, events, galleries, and organizational information."
          : "Website ekstrakurikuler Palang Merah Remaja sekolah yang menampilkan kegiatan PMR, program, event, galeri, dan informasi organisasi.",

      tech: ["Laravel", "Blade", "TailwindCSS", "PHP", "MySQL"],

      icon: <FaFirstAid />,

      featured: false,

      image: "/img/pmr.png",

      imageAlt: "PMR Extracurricular Website",
    },

    {
      title: "School Complaint Management System",

      description:
        language === "en"
          ? "A web-based school complaint management system that allows students to submit complaints and administrators to manage categories, review reports, provide responses, and track complaint status."
          : "Sistem manajemen pengaduan sekolah berbasis web yang memungkinkan siswa mengirim pengaduan dan administrator mengelola kategori, meninjau laporan, memberikan tanggapan, serta melacak status pengaduan.",

      tech: ["Laravel", "PHP", "Blade", "TailwindCSS", "MySQL"],

      icon: <FaClipboardList />,

      featured: false,

      image: "/img/pengaduan.png",

      imageAlt: "School Complaint Management System",
    },

    {
      title: "Hand Gesture Recognition System",

      description:
        language === "en"
          ? "A real-time hand gesture recognition system designed to help people with speech difficulties communicate by translating hand gestures into spoken Indonesian phrases."
          : "Sistem pengenalan gestur tangan secara real-time yang dirancang untuk membantu orang dengan kesulitan berbicara berkomunikasi dengan menerjemahkan gestur tangan menjadi kalimat bahasa Indonesia yang dapat didengar.",

      tech: ["Python", "OpenCV", "MediaPipe", "gTTS", "Pygame"],

      icon: <FaHandPaper />,

      featured: false,

      image: "/img/handgesture.png",

      imageAlt: "Hand Gesture Recognition System",
    },
  ];

  const featuredProjects = projects.filter((p) => p.featured);

  const otherProjects = projects.filter((p) => !p.featured);

  const toggleVideo = (id) => {
    setPlayingVideo(playingVideo === id ? null : id);
  };

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom mx-auto">
        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gold font-inter tracking-[0.3em] uppercase text-sm mb-3">
            {language === "en" ? "Portfolio" : "Portfolio"}
          </p>

          <h2 className="font-playfair text-4xl md:text-5xl font-bold">
            {language === "en" ? "Featured" : "Project"}{" "}
            <span className="gold-text">
              {language === "en" ? "Projects" : "Unggulan"}
            </span>
          </h2>

          <p className="text-cream/50 mt-4 max-w-2xl mx-auto">
            {language === "en"
              ? "Here are some of my recent projects that showcase my skills, creativity, and experience in technology and software development."
              : "Berikut beberapa project terbaru saya yang menunjukkan kemampuan, kreativitas, dan pengalaman saya dalam teknologi serta pengembangan software."}
          </p>
        </motion.div>

        {/* FEATURED PROJECTS */}

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl overflow-hidden hover:border-gold/30 transition-all duration-500 hover:transform hover:-translate-y-2 group border-gold/10 border"
            >
              {/* VIDEO */}

              {project.video ? (
                <div className="relative bg-gradient-to-b from-black/80 to-black/40 group/video">
                  <div className="relative w-full aspect-video">
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
                          className="absolute inset-0 w-full h-full object-contain bg-black"
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
                            ▶ {language === "en" ? "Watch Demo" : "Lihat Demo"}
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ) : (
                project.image && (
                  <div className="relative w-full aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.imageAlt || project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                )
              )}

              {/* CONTENT */}

              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-gold text-2xl">{project.icon}</span>

                  <span className="text-xs text-gold font-inter tracking-wider uppercase">
                    {language === "en" ? "Featured" : "Unggulan"}
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
        {/* OTHER PROJECTS */}

        <div className="grid md:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{
                once: true,
              }}
              className="glass-effect rounded-xl overflow-hidden hover:border-gold/30 transition-all duration-500 hover:-translate-y-2 group"
            >
              {/* MEDIA */}
              {project.video ? (
                <div className="relative bg-black overflow-hidden">
                  <div className="relative w-full aspect-video">
                    {playingVideo === `other-${index}` ? (
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
                        {/* COVER IMAGE */}
                        <img
                          src={project.poster || project.image}
                          alt={project.imageAlt || project.title}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />

                        {/* OVERLAY */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                        {/* PLAY BUTTON */}
                        <button
                          type="button"
                          onClick={() => toggleVideo(`other-${index}`)}
                          className="absolute inset-0 flex items-center justify-center cursor-pointer"
                          aria-label={
                            language === "en"
                              ? `Play ${project.title}`
                              : `Putar ${project.title}`
                          }
                        >
                          <div className="relative">
                            <div className="absolute inset-0 rounded-full bg-gold/20 animate-ping" />

                            <div className="relative w-16 h-16 rounded-full bg-gold flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-2xl shadow-gold/30">
                              <FaPlay className="text-black text-lg ml-1" />
                            </div>
                          </div>
                        </button>

                        {/* WATCH DEMO */}
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
                          <span className="bg-black/60 backdrop-blur-sm text-white text-[10px] px-3 py-1.5 rounded-full border border-white/10">
                            ▶ {language === "en" ? "Watch Demo" : "Lihat Demo"}
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ) : (
                /* IMAGE PROJECT */
                project.image && (
                  <div className="relative w-full aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.imageAlt || project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                )
              )}

              {/* CONTENT */}
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
