import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowDown, FaInstagram, FaTiktok } from "react-icons/fa";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const socialLinks = [
    {
      icon: <FaInstagram />,
      href: "https://instagram.com/rastuunz",
      label: "Instagram",
      color: "hover:text-pink-500",
      bgColor: "group-hover:bg-pink-500/20",
    },
    {
      icon: <FaTiktok />,
      href: "https://tiktok.com/@tutunezz",
      label: "TikTok",
      color: "hover:text-white",
      bgColor: "group-hover:bg-white/10",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
      },
    },
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden section-padding"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gold/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content - Left Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 max-w-4xl"
          >
            <p className="text-gold font-inter tracking-[0.3em] uppercase text-sm mb-4">
              Welcome to My Portfolio
            </p>

            <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
              Hi, I'm <br />
              <span className="gold-text">Fathur Razak Rastu Febrian</span> <br />
              <span className="text-4xl md:text-5xl lg:text-6xl text-cream/70">
                Software Developer
              </span>
            </h1>

            <p className="text-cream/60 text-lg md:text-xl max-w-2xl mb-10 font-inter leading-relaxed">
              I'm a Software Developer passionate about building useful digital
              solutions through web development, application development, IoT, and
              creative problem-solving. I enjoy turning ideas into real-world
              projects while continuously learning and improving my skills.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="#projects"
                className="px-8 py-4 bg-gold text-dark font-inter font-semibold rounded-full hover:bg-gold-light transition-all duration-300 transform hover:scale-105 shadow-lg shadow-gold/20"
              >
                View My Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border border-gold/30 text-cream font-inter font-semibold rounded-full hover:bg-gold/10 transition-all duration-300 hover:border-gold/60"
              >
                Let's Connect
              </a>
            </div>

            {/* Follow Me Section */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="mt-10 pt-8 border-t border-white/5"
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-gold/30"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
                <motion.p
                  className="text-cream/40 text-xs font-inter tracking-[0.3em] uppercase whitespace-nowrap"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  Follow Me
                </motion.p>
                <motion.div
                  className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-gold/30"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </div>

              <div className="flex gap-8 justify-start">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    variants={itemVariants}
                    whileHover={{
                      y: -10,
                      scale: 1.2,
                      rotate: [0, -8, 8, -4, 4, 0],
                      transition: {
                        duration: 0.5,
                        rotate: { duration: 0.4, ease: "easeInOut" },
                      },
                    }}
                    whileTap={{ scale: 0.85 }}
                    className="group relative"
                  >
                    <div
                      className={`
                        w-16 h-16 rounded-full 
                        bg-white/5 backdrop-blur-sm
                        border border-white/10
                        flex items-center justify-center
                        transition-all duration-500
                        group-hover:border-gold/50
                        group-hover:shadow-2xl
                        ${social.bgColor}
                      `}
                    >
                      <span className="absolute inset-0 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gold/20" />
                      <span
                        className={`
                          relative text-2xl 
                          transition-all duration-500
                          ${social.color}
                          group-hover:scale-110
                        `}
                      >
                        {social.icon}
                      </span>
                    </div>
                    <span
                      className="
                        absolute -bottom-8 left-1/2 transform -translate-x-1/2 
                        opacity-0 group-hover:opacity-100 
                        transition-all duration-300 
                        text-[10px] text-cream/40 font-inter tracking-wider whitespace-nowrap
                        group-hover:translate-y-0 translate-y-1
                      "
                    >
                      {social.label}
                    </span>
                  </motion.a>
                ))}
              </div>

              <motion.div
                className="w-32 h-[2px] bg-gradient-to-r from-transparent via-gold/20 to-transparent mx-auto mt-8 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              />
            </motion.div>
          </motion.div>

          {/* Profile Photo - Clean with Transparent Cursor Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <div 
              className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {/* Simple elegant border ring */}
              <div className="absolute -inset-2 rounded-full border border-gold/20 group-hover:border-gold/40 transition-all duration-500" />
              
              {/* Rotating thin line */}
              <motion.div
                className="absolute -inset-2 rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, transparent, #C9A84C33, transparent 60%)",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />

              {/* Photo Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <img
                  src="img/foto.jpg"
                  alt="Fathur Razak Rastu Febrian"
                  className="w-full h-full object-cover transition-all duration-500"
                  style={{
                    filter: isHovering ? 'grayscale(0%)' : 'grayscale(100%)',
                    transform: isHovering ? 'scale(1.05)' : 'scale(1)',
                  }}
                />

                {/* Transparent Cursor Effect - Gold Glow */}
                <div
                  className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                  style={{
                    opacity: isHovering ? 1 : 0,
                    background: `
                      radial-gradient(
                        circle 150px at ${mousePosition.x}% ${mousePosition.y}%, 
                        rgba(201, 168, 76, 0.15) 0%,
                        rgba(201, 168, 76, 0.05) 30%,
                        transparent 60%
                      )
                    `,
                  }}
                />

                {/* Second layer - more transparent glow */}
                <div
                  className="absolute inset-0 pointer-events-none transition-opacity duration-500"
                  style={{
                    opacity: isHovering ? 0.6 : 0,
                    background: `
                      radial-gradient(
                        circle 200px at ${mousePosition.x}% ${mousePosition.y}%, 
                        rgba(255, 215, 0, 0.04) 0%,
                        transparent 70%
                      )
                    `,
                  }}
                />

                {/* Soft vignette overlay for depth */}
                <div 
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10"
                  style={{
                    opacity: isHovering ? 0 : 0.2,
                    transition: 'opacity 0.5s ease'
                  }}
                />
              </div>

              {/* Minimal decorative dots */}
              <div className="absolute -top-3 -right-3 w-3 h-3 rounded-full bg-gold/30 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="absolute -bottom-3 -left-3 w-3 h-3 rounded-full bg-gold/20 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100" />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-cream/30"
        >
          <FaArrowDown className="text-2xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;