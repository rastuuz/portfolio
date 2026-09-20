import React, { useEffect, useState } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Certificates from "./components/sections/Certificates";
import Contact from "./components/sections/Contact";

import AOS from "aos";
import "aos/dist/aos.css";

import { motion, AnimatePresence } from "framer-motion";

import { LanguageProvider } from "./context/LanguageContext";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });

    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  const nameWords = [
    {
      text: "Fathur",
      gold: false,
    },
    {
      text: "Razak",
      gold: true,
    },
    {
      text: "Rastu",
      gold: true,
    },
    {
      text: "Febrian",
      gold: false,
    },
  ];

  return (
    <LanguageProvider>
      <div className="bg-dark min-h-screen">

        {/* =====================================================
            INTRO
        ====================================================== */}

        <AnimatePresence mode="wait">
          {showIntro && (
            <motion.div
              className="
                fixed
                inset-0
                z-[9999]
                bg-dark
                overflow-hidden
              "
              initial={{
                opacity: 1,
              }}
              exit={{
                opacity: 1,
              }}
            >

              {/* =================================================
                  TOP PANEL
              ================================================= */}

              <motion.div
                className="
                  absolute
                  inset-x-0
                  top-0
                  h-1/2
                  bg-dark
                  z-20
                "
                initial={{
                  y: 0,
                }}
                exit={{
                  y: "-100%",
                }}
                transition={{
                  duration: 1,
                  delay: 1.25,
                  ease: [0.76, 0, 0.24, 1],
                }}
              />

              {/* =================================================
                  BOTTOM PANEL
              ================================================= */}

              <motion.div
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  h-1/2
                  bg-dark
                  z-20
                "
                initial={{
                  y: 0,
                }}
                exit={{
                  y: "100%",
                }}
                transition={{
                  duration: 1,
                  delay: 1.25,
                  ease: [0.76, 0, 0.24, 1],
                }}
              />

              {/* =================================================
                  GOLD CENTER LINE
              ================================================= */}

              <motion.div
                className="
                  absolute
                  left-0
                  top-1/2
                  -translate-y-1/2
                  h-px
                  bg-[#d8b45a]
                  z-30
                "
                initial={{
                  width: 0,
                  opacity: 0,
                }}
                animate={{
                  width: "100%",
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  width: {
                    duration: 0.9,
                    delay: 0.2,
                    ease: [0.76, 0, 0.24, 1],
                  },
                  opacity: {
                    duration: 0.3,
                    delay: 0.2,
                  },
                }}
              />

              {/* =================================================
                  TOP BAR
              ================================================= */}

              <motion.div
                className="
                  absolute
                  top-0
                  left-0
                  w-full
                  px-8
                  md:px-12
                  lg:px-16
                  py-7
                  flex
                  items-center
                  justify-between
                  z-40
                "
                initial={{
                  opacity: 0,
                  y: -20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                }}
              >
                <span
                  className="
                    font-serif
                    text-2xl
                    md:text-3xl
                    font-bold
                    text-white
                  "
                >
                  Rastu<span className="text-[#d8b45a]">.</span>
                </span>

                <span
                  className="
                    text-[9px]
                    md:text-[10px]
                    tracking-[0.35em]
                    uppercase
                    text-gray-500
                  "
                >
                  Portfolio
                </span>
              </motion.div>

              {/* =================================================
                  MAIN CONTENT
              ================================================= */}

              <div
                className="
                  absolute
                  inset-0
                  flex
                  items-center
                  px-8
                  md:px-12
                  lg:px-16
                  z-30
                "
              >
                <motion.div
                  className="w-full"
                  initial={{
                    scale: 1,
                  }}
                  exit={{
                    scale: 1.08,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 1,
                    delay: 1.05,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                >

                  {/* =================================================
                      SMALL LABEL
                  ================================================= */}

                  <motion.div
                    className="
                      flex
                      items-center
                      gap-4
                      mb-7
                    "
                    initial={{
                      opacity: 0,
                      x: -35,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.65,
                      delay: 0.2,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <span
                      className="
                        text-[#d8b45a]
                        text-[10px]
                        md:text-xs
                        tracking-[0.4em]
                        uppercase
                      "
                    >
                      Welcome to my portfolio
                    </span>

                    <motion.span
                      className="h-px bg-[#d8b45a]/50"
                      initial={{
                        width: 0,
                      }}
                      animate={{
                        width: 48,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: 0.55,
                      }}
                    />
                  </motion.div>

                  {/* =================================================
                      NAME
                  ================================================= */}

                  <div
                    className="
                      font-serif
                      font-bold
                      leading-[0.88]
                      tracking-[-0.04em]
                      text-white
                      text-[13vw]
                      sm:text-7xl
                      md:text-8xl
                      lg:text-[7.5rem]
                      xl:text-[9rem]
                    "
                  >
                    {nameWords.map((word, index) => (
                      <div
                        key={word.text}
                        className="
                          inline-block
                          mr-[0.18em]
                          overflow-hidden
                        "
                      >
                        <motion.span
                          className={`
                            inline-block
                            ${
                              word.gold
                                ? "text-[#d8b45a]"
                                : "text-white"
                            }
                          `}
                          initial={{
                            y: "110%",
                            opacity: 0,
                            rotateX: 25,
                          }}
                          animate={{
                            y: "0%",
                            opacity: 1,
                            rotateX: 0,
                          }}
                          transition={{
                            duration: 0.85,
                            delay: 0.3 + index * 0.1,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        >
                          {word.text}
                        </motion.span>
                      </div>
                    ))}
                  </div>

                  {/* =================================================
                      BOTTOM INFORMATION
                  ================================================= */}

                  <div
                    className="
                      mt-10
                      flex
                      flex-col
                      md:flex-row
                      md:items-center
                      gap-5
                      md:gap-8
                    "
                  >
                    <motion.div
                      className="
                        h-px
                        bg-[#d8b45a]
                        md:w-28
                      "
                      initial={{
                        width: 0,
                      }}
                      animate={{
                        width: 112,
                      }}
                      transition={{
                        duration: 0.7,
                        delay: 0.8,
                        ease: "easeOut",
                      }}
                    />

                    <motion.span
                      className="
                        text-gray-500
                        text-[10px]
                        md:text-xs
                        tracking-[0.35em]
                        uppercase
                      "
                      initial={{
                        opacity: 0,
                        x: -15,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: 0.85,
                      }}
                    >
                      Software Developer
                    </motion.span>
                  </div>

                </motion.div>
              </div>

              {/* =================================================
                  RIGHT SIDE
              ================================================= */}

              <motion.div
                className="
                  absolute
                  right-8
                  md:right-12
                  lg:right-16
                  bottom-10
                  hidden
                  md:block
                  z-40
                "
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.9,
                }}
              >
                <span
                  className="
                    text-[10px]
                    tracking-[0.35em]
                    text-gray-600
                  "
                >
              
                </span>
              </motion.div>

              {/* =================================================
                  SMALL GOLD DOT
              ================================================= */}

              <motion.div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  -translate-x-1/2
                  -translate-y-1/2
                  w-2
                  h-2
                  rounded-full
                  bg-[#d8b45a]
                  z-50
                "
                initial={{
                  scale: 0,
                  opacity: 0,
                }}
                animate={{
                  scale: [0, 1, 1],
                  opacity: [0, 1, 1],
                }}
                exit={{
                  scale: 0,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  times: [0, 0.35, 1],
                }}
              />

            </motion.div>
          )}
        </AnimatePresence>


        {/* =====================================================
            PORTFOLIO
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: showIntro ? 0 : 1,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
        >
          <Navbar />

          <main>
            <Hero />
            <About />
            <Projects />
            <Certificates />
            <Contact />
          </main>

          <Footer />
        </motion.div>

      </div>
    </LanguageProvider>
  );
}

export default App;

