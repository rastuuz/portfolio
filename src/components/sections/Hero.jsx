import React from "react";
import { motion } from "framer-motion";
import { FaArrowDown, FaInstagram, FaTiktok } from "react-icons/fa";

const Hero = () => {
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

  // Variants untuk animasi container
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

  // Variants untuk setiap icon
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
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

          {/* Follow Me Section - Premium Version with 2 Icons */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="mt-10 pt-8 border-t border-white/5"
          >
            {/* Garis dekoratif dengan teks */}
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

            {/* Social Icons dengan efek premium - Hanya 2 icon */}
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
                  {/* Circle Background with Glow */}
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
                    {/* Glow Effect */}
                    <span className="absolute inset-0 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gold/20" />

                    {/* Icon */}
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

                  {/* Tooltip Label */}
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

            {/* Animated Line Under Icons */}
            <motion.div
              className="w-32 h-[2px] bg-gradient-to-r from-transparent via-gold/20 to-transparent mx-auto mt-8 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            />
          </motion.div>
        </motion.div>

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
