import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowDown, FaInstagram, FaTiktok } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";

const Hero = () => {
  const { language } = useLanguage();

  // =========================
  // PHOTO CURSOR
  // =========================

  const [photoMouse, setPhotoMouse] = useState({
    x: 50,
    y: 50,
  });

  const [isHoveringPhoto, setIsHoveringPhoto] = useState(false);

  const handlePhotoMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setPhotoMouse({
      x: Math.max(0, Math.min(100, x)),
      y: Math.max(0, Math.min(100, y)),
    });
  };

  // =========================
  // SOCIAL LINKS
  // =========================

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

  // =========================
  // ANIMATION
  // =========================

  const containerVariants = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,

      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.9,
    },

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

  // =========================
  // PHOTO REVEAL MASK
  // =========================
  //
  // BUKAN cahaya.
  // Ini hanya area transparan yang
  // memperlihatkan foto warna di bawahnya.
  //
  // Saat cursor belum masuk:
  // overlay warna benar-benar invisible.
  //

  const revealMask = `
    radial-gradient(
      ellipse 85px 125px at ${photoMouse.x}% ${photoMouse.y}%,
      rgba(0,0,0,1) 0%,
      rgba(0,0,0,0.98) 20%,
      rgba(0,0,0,0.9) 38%,
      rgba(0,0,0,0.65) 58%,
      rgba(0,0,0,0.3) 78%,
      rgba(0,0,0,0) 100%
    )
  `;

  return (
    <section
      id="home"
      className="
        min-h-screen
        flex
        items-center
        relative
        overflow-hidden
        section-padding
      "
    >
      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div
          className="
            absolute
            top-20
            right-20
            w-96
            h-96
            bg-gold/10
            rounded-full
            blur-3xl
          "
        />

        <div
          className="
            absolute
            bottom-20
            left-20
            w-80
            h-80
            bg-gold/5
            rounded-full
            blur-3xl
          "
        />
      </div>

      {/* ================= MAIN CONTAINER ================= */}

      <div
        className="
          container-custom
          mx-auto
          relative
          z-10
          w-full
        "
      >
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[0.95fr_1.05fr]
            items-center
            min-h-[calc(100vh-100px)]
          "
        >
          {/* ================= TEXT CONTENT ================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              z-30
              max-w-3xl
              pt-20
              lg:pt-0
            "
          >
            {/* LABEL */}

            <motion.p
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.2,
              }}
              className="
                text-gold
                font-inter
                tracking-[0.3em]
                uppercase
                text-sm
                mb-5
              "
            >
              {language === "en"
                ? "Welcome to My Portfolio"
                : "Selamat Datang di Portfolio Saya"}
            </motion.p>

            {/* ================= MAIN HEADING ================= */}

            <h1
              className="
                font-playfair
                text-5xl
                md:text-7xl
                lg:text-[5.3rem]
                xl:text-[6.2rem]
                font-bold
                leading-[0.94]
                tracking-[-0.035em]
                mb-7
              "
            >
              <motion.span
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.25,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-cream inline-block"
              >
                {language === "en" ? "Hi, I'm" : "Halo, Saya"}
              </motion.span>

              <br />

              <motion.span
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="gold-text inline-block"
              >
                Fathur Razak
              </motion.span>

              <br />

              <motion.span
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.42,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="gold-text inline-block"
              >
                Rastu Febrian
              </motion.span>

              <br />

              <motion.span
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.52,
                }}
                className="
                  text-3xl
                  md:text-5xl
                  lg:text-[3.4rem]
                  text-cream/60
                  inline-block
                  mt-3
                "
              >
                Software Developer
              </motion.span>
            </h1>

            {/* ================= DESCRIPTION ================= */}

            <motion.p
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.6,
              }}
              className="
                text-cream/60
                text-base
                md:text-lg
                max-w-xl
                mb-9
                font-inter
                leading-relaxed
              "
            >
              {language === "en"
                ? "I'm a Software Developer passionate about building useful digital solutions through web development, application development, IoT, and creative problem-solving. I enjoy turning ideas into real-world projects while continuously learning and improving my skills."
                : "Saya adalah Software Developer yang memiliki minat dalam membangun solusi digital yang bermanfaat melalui pengembangan web, aplikasi, IoT, dan pemecahan masalah secara kreatif. Saya senang mengubah ide menjadi proyek nyata sambil terus belajar dan meningkatkan kemampuan saya."}
            </motion.p>

            {/* ================= BUTTONS ================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.7,
              }}
              className="
                flex
                flex-wrap
                gap-4
                mb-8
              "
            >
              <a
                href="#projects"
                className="
                  px-8
                  py-4
                  bg-gold
                  text-dark
                  font-inter
                  font-semibold
                  rounded-full
                  hover:bg-gold-light
                  transition-all
                  duration-300
                  hover:scale-105
                  shadow-lg
                  shadow-gold/20
                "
              >
                {language === "en"
                  ? "View My Projects"
                  : "Lihat Project Saya"}
              </a>

              <a
                href="#contact"
                className="
                  px-8
                  py-4
                  border
                  border-gold/30
                  text-cream
                  font-inter
                  font-semibold
                  rounded-full
                  hover:bg-gold/10
                  transition-all
                  duration-300
                  hover:border-gold/60
                "
              >
                {language === "en"
                  ? "Let's Connect"
                  : "Hubungi Saya"}
              </a>
            </motion.div>

            {/* ================= FOLLOW ME ================= */}

            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="
                mt-8
                pt-7
                border-t
                border-white/5
                max-w-xl
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-4
                  mb-5
                "
              >
                <motion.div
                  className="
                    h-[1px]
                    flex-1
                    bg-gradient-to-r
                    from-transparent
                    to-gold/30
                  "
                  initial={{
                    scaleX: 0,
                  }}
                  animate={{
                    scaleX: 1,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 0.6,
                  }}
                />

                <motion.p
                  className="
                    text-cream/40
                    text-xs
                    font-inter
                    tracking-[0.3em]
                    uppercase
                    whitespace-nowrap
                  "
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: 0.7,
                  }}
                >
                  {language === "en" ? "Follow Me" : "Ikuti Saya"}
                </motion.p>

                <motion.div
                  className="
                    h-[1px]
                    flex-1
                    bg-gradient-to-l
                    from-transparent
                    to-gold/30
                  "
                  initial={{
                    scaleX: 0,
                  }}
                  animate={{
                    scaleX: 1,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 0.6,
                  }}
                />
              </div>

              <div className="flex gap-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    variants={itemVariants}
                    whileHover={{
                      y: -8,
                      scale: 1.12,
                    }}
                    whileTap={{
                      scale: 0.9,
                    }}
                    className="group relative"
                  >
                    <div
                      className={`
                        w-14
                        h-14
                        rounded-full
                        bg-white/5
                        backdrop-blur-sm
                        border
                        border-white/10
                        flex
                        items-center
                        justify-center
                        transition-all
                        duration-500
                        group-hover:border-gold/50
                        group-hover:shadow-2xl
                        ${social.bgColor}
                      `}
                    >
                      <span
                        className={`
                          relative
                          text-xl
                          transition-all
                          duration-500
                          ${social.color}
                          group-hover:scale-110
                        `}
                      >
                        {social.icon}
                      </span>
                    </div>

                    <span
                      className="
                        absolute
                        -bottom-7
                        left-1/2
                        -translate-x-1/2
                        opacity-0
                        group-hover:opacity-100
                        transition-all
                        duration-300
                        text-[10px]
                        text-cream/40
                        font-inter
                        tracking-wider
                        whitespace-nowrap
                      "
                    >
                      {social.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ================= PROFILE / CUTOUT ================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              h-[600px]
              md:h-[700px]
              lg:h-[820px]
              flex
              items-end
              justify-center
              lg:justify-end
              -mt-4
              lg:mt-0
            "
          >
            {/* ================= HUGE TYPOGRAPHY ================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: 80,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                absolute
                z-0
                right-[-15%]
                top-[45%]
                -translate-y-1/2
                font-playfair
                font-bold
                text-[10rem]
                md:text-[15rem]
                lg:text-[18rem]
                leading-none
                text-gold/[0.035]
                select-none
                pointer-events-none
                whitespace-nowrap
              "
            >
              RASTU
            </motion.div>

            {/* ================= GOLD VERTICAL LINE ================= */}

            <motion.div
              initial={{
                height: 0,
              }}
              animate={{
                height: "55%",
              }}
              transition={{
                duration: 0.9,
                delay: 0.5,
                ease: "easeOut",
              }}
              className="
                absolute
                right-2
                lg:right-0
                bottom-16
                w-px
                bg-gradient-to-t
                from-gold
                via-gold/40
                to-transparent
                z-20
              "
            />

            {/* ================= PHOTO ================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 70,
                scale: 1.04,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 1,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                z-10
                h-[580px]
                md:h-[690px]
                lg:h-[800px]
                w-fit
                max-w-none
                flex
                items-end
                justify-center
                lg:justify-end
              "
              onMouseEnter={() => setIsHoveringPhoto(true)}
              onMouseLeave={() => setIsHoveringPhoto(false)}
              onMouseMove={handlePhotoMouseMove}
            >
              {/* ================= GRAYSCALE IMAGE ================= */}

              <img
                src="/img/rastu.png"
                alt="Rastu"
                draggable="false"
                className="
                  block
                  h-full
                  w-auto
                  max-w-none
                  object-contain
                  object-bottom
                  grayscale
                  select-none
                  pointer-events-none
                  drop-shadow-[0_25px_40px_rgba(0,0,0,0.35)]
                "
              />

              {/* ================= COLOR IMAGE ================= */}

              <img
                src="/img/rastu.png"
                alt=""
                aria-hidden="true"
                draggable="false"
                className="
                  absolute
                  inset-0
                  z-20
                  block
                  h-full
                  w-full
                  object-contain
                  object-bottom
                  select-none
                  pointer-events-none
                  transition-opacity
                  duration-150
                "
                style={{
                  opacity: isHoveringPhoto ? 1 : 0,

                  WebkitMaskImage: revealMask,
                  maskImage: revealMask,

                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",

                  WebkitMaskSize: "100% 100%",
                  maskSize: "100% 100%",

                  WebkitMaskPosition: "center",
                  maskPosition: "center",
                }}
              />
            </motion.div>

            {/* ================= BOTTOM FADE ================= */}

            <div
              className="
                absolute
                z-20
                bottom-0
                left-[-20%]
                right-[-10%]
                h-36
                bg-gradient-to-t
                from-dark
                via-dark/70
                to-transparent
                pointer-events-none
              "
            />

            {/* ================= SMALL INFORMATION ================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.8,
              }}
              className="
                absolute
                z-30
                bottom-16
                right-8
                lg:right-12
                text-right
              "
            >
              <p
                className="
                  text-[9px]
                  tracking-[0.4em]
                  uppercase
                  text-cream/40
                  mb-2
                "
              >
                Software Developer
              </p>

              <div
                className="
                  h-px
                  w-14
                  bg-gold
                  ml-auto
                  mb-3
                "
              />

              <p
                className="
                  font-playfair
                  text-lg
                  md:text-xl
                  text-cream
                "
              >
                Rastu
              </p>
            </motion.div>

            {/* ================= PAGE NUMBER ================= */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
                delay: 0.9,
              }}
              className="
                absolute
                right-0
                top-20
                hidden
                lg:block
                z-30
                text-[10px]
                tracking-[0.3em]
                text-cream/30
              "
            >
              <span className="text-gold"></span>
            </motion.div>
          </motion.div>
        </div>

        {/* ================= SCROLL INDICATOR ================= */}

        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="
            absolute
            bottom-8
            left-1/2
            -translate-x-1/2
            text-cream/30
            z-30
          "
        >
          <FaArrowDown className="text-xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;