
import React from "react";
import { motion } from "framer-motion";

import {
  FaUserGraduate,
  FaBriefcase,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPhp,
  FaNodeJs,
  FaPython,
  FaMicrochip,
  FaPalette,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMysql,
  SiFigma,
  SiLaravel,
  SiExpress,
  SiVite,
  SiPostman,
  SiGit,
  SiGithub,
} from "react-icons/si";

import { useLanguage } from "../../context/LanguageContext";

const About = () => {
  const { language } = useLanguage();

  // =========================
  // STATS
  // =========================
  const stats = [
    {
      number: "2+",
      label: language === "en" ? "Years Learning" : "Tahun Belajar",
    },
    {
      number: "7+",
      label: language === "en" ? "Projects Completed" : "Project Selesai",
    },
  ];

  // =========================
  // TECHNOLOGIES
  // =========================
  const technologies = [
    {
      name: "HTML5",
      category: "Frontend",
      icon: <FaHtml5 />,
      color: "text-orange-500",
    },
    {
      name: "CSS3",
      category: "Frontend",
      icon: <FaCss3Alt />,
      color: "text-blue-500",
    },
    {
      name: "JavaScript",
      category: "Frontend",
      icon: <FaJs />,
      color: "text-yellow-400",
    },
    {
      name: "React",
      category: "Frontend",
      icon: <FaReact />,
      color: "text-cyan-400",
    },
    {
      name: "Tailwind CSS",
      category: "Frontend",
      icon: <SiTailwindcss />,
      color: "text-cyan-400",
    },
    {
      name: "PHP",
      category: "Backend",
      icon: <FaPhp />,
      color: "text-indigo-400",
    },
    {
      name: "Laravel",
      category: "Backend",
      icon: <SiLaravel />,
      color: "text-red-500",
    },
    {
      name: "Node.js",
      category: "Backend",
      icon: <FaNodeJs />,
      color: "text-green-500",
    },
    {
      name: "Express.js",
      category: "Backend",
      icon: <SiExpress />,
      color: "text-cream",
    },
    {
      name: "Python",
      category: "Programming",
      icon: <FaPython />,
      color: "text-yellow-300",
    },
    {
      name: "MySQL",
      category: "Database",
      icon: <SiMysql />,
      color: "text-blue-400",
    },
    {
      name: "IoT",
      category: "Technology",
      icon: <FaMicrochip />,
      color: "text-purple-400",
    },
    {
      name: "Figma",
      category: "UI/UX",
      icon: <SiFigma />,
      color: "text-pink-400",
    },
    {
      name: "Canva",
      category: "Design",
      icon: <FaPalette />,
      color: "text-cyan-300",
    },
    {
      name: "Vite",
      category: "Development Tool",
      icon: <SiVite />,
      color: "text-purple-400",
    },
    {
      name: "Postman",
      category: "API Tool",
      icon: <SiPostman />,
      color: "text-orange-500",
    },
    {
      name: "Git",
      category: "Version Control",
      icon: <SiGit />,
      color: "text-orange-600",
    },
    {
      name: "GitHub",
      category: "Version Control",
      icon: <SiGithub />,
      color: "text-cream",
    },
  ];

  return (
    <section
      id="about"
      className="section-padding bg-dark-secondary relative overflow-hidden"
    >
      {/* BACKGROUND DECORATION */}

      <div className="absolute -top-32 -left-32 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom mx-auto relative z-10">

        {/* SECTION HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">

            <div className="w-10 h-px bg-gold/50" />

            <p className="text-gold font-inter tracking-[0.35em] uppercase text-xs">
              {language === "en" ? "About Me" : "Tentang Saya"}
            </p>

            <div className="w-10 h-px bg-gold/50" />

          </div>

          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-cream">
            Software
            <span className="gold-text ml-3">
              Developer
            </span>
          </h2>

          <p className="text-cream/45 max-w-2xl mx-auto mt-6 leading-relaxed text-sm md:text-base">
            {language === "en"
              ? "Passionate about building modern digital experiences through technology, creativity, and continuous learning."
              : "Bersemangat membangun pengalaman digital modern melalui teknologi, kreativitas, dan proses belajar yang berkelanjutan."}
          </p>
        </motion.div>

        {/* MAIN GRID */}

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            {/* ABOUT CARD */}

            <div className="glass-effect rounded-3xl p-7 md:p-9 border border-white/5 hover:border-gold/20 transition-all duration-500">

              {/* CARD HEADER */}

              <div className="flex items-center gap-4 mb-7">

                <div className="w-12 h-12 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center">
                  <FaUserGraduate className="text-gold text-xl" />
                </div>

                <div>

                  <p className="text-gold/60 text-[10px] uppercase tracking-[0.25em] mb-1">
                    {language === "en" ? "Profile" : "Profil"}
                  </p>

                  <h3 className="font-playfair text-2xl font-bold text-cream">
                    {language === "en" ? "Who I Am" : "Siapa Saya"}
                  </h3>

                </div>

              </div>

              {/* DESCRIPTION */}

              <div className="space-y-5">

                <p className="text-cream/65 leading-relaxed text-sm md:text-base">
                  {language === "en"
                    ? "I'm a Software Developer focused on creating modern, functional, and user-centered digital solutions. I enjoy transforming ideas into real-world applications through clean code, creative problem-solving, and continuous learning."
                    : "Saya adalah Software Developer yang berfokus pada pembuatan solusi digital yang modern, fungsional, dan berorientasi pada pengguna. Saya senang mengubah ide menjadi aplikasi nyata melalui kode yang bersih, pemecahan masalah secara kreatif, dan pembelajaran yang berkelanjutan."}
                </p>

                <p className="text-cream/65 leading-relaxed text-sm md:text-base">
                  {language === "en"
                    ? "My experience includes web development, application development, UI/UX, backend systems, automation, and IoT. I work with technologies such as React, JavaScript, PHP, Laravel, Node.js, MySQL, Python, and various development tools."
                    : "Pengalaman saya mencakup pengembangan web, pengembangan aplikasi, UI/UX, sistem backend, otomatisasi, dan IoT. Saya menggunakan teknologi seperti React, JavaScript, PHP, Laravel, Node.js, MySQL, Python, serta berbagai tools pengembangan."}
                </p>

              </div>

              {/* DIVIDER */}

              <div className="h-px bg-white/5 my-8" />

              {/* STATS */}

              <div className="grid grid-cols-2 gap-4">

                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      y: -5,
                      borderColor: "rgba(212,175,55,0.3)",
                    }}
                    className="group rounded-2xl p-5 text-center bg-black/10 border border-white/5 transition-all duration-300"
                  >

                    <div className="text-3xl font-playfair font-bold text-gold group-hover:scale-105 transition-transform duration-300">
                      {stat.number}
                    </div>

                    <div className="text-[11px] text-cream/40 mt-2 uppercase tracking-wider">
                      {stat.label}
                    </div>

                  </motion.div>
                ))}

              </div>

            </div>

            {/* MISSION CARD */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="glass-effect rounded-3xl p-6 md:p-7 mt-6 border border-white/5 hover:border-gold/20 transition-all duration-500"
            >

              <div className="flex items-start gap-4">

                <div className="w-11 h-11 shrink-0 rounded-xl bg-gold/10 border border-gold/10 flex items-center justify-center">
                  <FaBriefcase className="text-gold" />
                </div>

                <div>

                  <p className="text-gold/60 text-[10px] uppercase tracking-[0.25em] mb-1">
                    {language === "en"
                      ? "My Philosophy"
                      : "Filosofi Saya"}
                  </p>

                  <h4 className="text-cream font-semibold text-lg mb-2">
                    {language === "en"
                      ? "Creating With Purpose"
                      : "Berkarya Dengan Tujuan"}
                  </h4>

                  <p className="text-cream/45 text-sm leading-relaxed">
                    {language === "en"
                      ? "To build meaningful digital solutions that combine technology, creativity, and thoughtful design to solve real-world problems while continuously growing as a developer."
                      : "Membangun solusi digital yang bermakna dengan menggabungkan teknologi, kreativitas, dan desain yang matang untuk menyelesaikan masalah nyata sekaligus terus berkembang sebagai seorang developer."}
                  </p>

                </div>

              </div>

            </motion.div>

          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            {/* TECHNOLOGY HEADER */}

            <div className="mb-7">

              <p className="text-gold text-[10px] uppercase tracking-[0.3em] mb-2">
                {language === "en"
                  ? "Technical Expertise"
                  : "Keahlian Teknis"}
              </p>

              <h3 className="font-playfair text-3xl md:text-4xl font-bold text-cream">
                {language === "en"
                  ? "Tools & Technologies"
                  : "Tools & Teknologi"}
              </h3>

              <p className="text-cream/40 text-sm mt-3 max-w-lg leading-relaxed">
                {language === "en"
                  ? "Technologies and tools I use to turn ideas into functional, scalable, and engaging digital experiences."
                  : "Teknologi dan tools yang saya gunakan untuk mengubah ide menjadi pengalaman digital yang fungsional, scalable, dan menarik."}
              </p>

            </div>

            {/* TECHNOLOGY GRID */}

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">

              {technologies.map((technology, index) => (
                <motion.div
                  key={technology.name}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.04,
                  }}
                  viewport={{
                    once: true,
                  }}
                  whileHover={{
                    y: -7,
                    scale: 1.01,
                  }}
                  className="group relative overflow-hidden rounded-2xl p-5 bg-white/[0.02] border border-white/5 hover:border-gold/30 hover:bg-white/[0.04] transition-all duration-300"
                >

                  <div className="absolute -top-10 -right-10 w-20 h-20 bg-gold/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div
                    className={`relative text-4xl md:text-[42px] ${technology.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {technology.icon}
                  </div>

                  <h4 className="relative text-cream font-semibold text-sm">
                    {technology.name}
                  </h4>

                  <p className="relative text-cream/30 text-[10px] uppercase tracking-wider mt-1">
                    {technology.category}
                  </p>

                  <div className="absolute bottom-0 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-500" />

                </motion.div>
              ))}

            </div>

            {/* QUOTE */}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative mt-8 p-6 rounded-2xl bg-gold/[0.03] border border-gold/10"
            >

              <div className="absolute left-0 top-5 bottom-5 w-[2px] bg-gold" />

              <p className="text-cream/50 text-sm italic leading-relaxed pl-4">
                {language === "en"
                  ? '"I believe every project is a chance to learn, create with purpose, and grow into a better developer."'
                  : '"Saya percaya setiap project adalah kesempatan untuk belajar, berkarya dengan tujuan, dan berkembang menjadi developer yang lebih baik."'}
              </p>

            </motion.div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;

