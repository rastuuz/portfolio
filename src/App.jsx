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
    }, 1850);

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
        <AnimatePresence>
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
                y: 0,
              }}
              exit={{
                y: "-100%",
              }}
              transition={{
                duration: 0.85,
                ease: [0.76, 0, 0.24, 1],
              }}
            >

              {/* =============================================
                  TOP BAR
              ============================================== */}
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
                "
                initial={{
                  opacity: 0,
                  y: -15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.05,
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


              {/* =============================================
                  MAIN CONTENT
              ============================================== */}
              <div
                className="
                  absolute
                  inset-0
                  flex
                  items-center
                  px-8
                  md:px-12
                  lg:px-16
                "
              >

                <div className="w-full">

                  {/* Small label */}
                  <motion.div
                    className="
                      flex
                      items-center
                      gap-4
                      mb-7
                    "
                    initial={{
                      opacity: 0,
                      x: -25,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.55,
                      delay: 0.15,
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

                    <span className="h-px w-12 bg-[#d8b45a]/50" />
                  </motion.div>


                  {/* =========================================
                      NAME
                  ========================================== */}
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
                          }}
                          animate={{
                            y: "0%",
                            opacity: 1,
                          }}
                          transition={{
                            duration: 0.8,
                            delay: 0.3 + index * 0.1,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        >
                          {word.text}
                        </motion.span>
                      </div>
                    ))}

                  </div>


                  {/* =========================================
                      BOTTOM INFORMATION
                  ========================================== */}
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
                        w-20
                        md:w-28
                      "
                      initial={{
                        width: 0,
                      }}
                      animate={{
                        width: 112,
                      }}
                      transition={{
                        duration: 0.6,
                        delay: 0.75,
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
                        x: -10,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: 0.8,
                      }}
                    >
                      Software Developer
                    </motion.span>

                  </div>

                </div>
              </div>


              {/* =============================================
                  RIGHT SIDE NUMBER
              ============================================== */}
              <motion.div
                className="
                  absolute
                  right-8
                  md:right-12
                  lg:right-16
                  bottom-10
                  hidden
                  md:block
                "
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


              {/* =============================================
                  BOTTOM LINE
              ============================================== */}
              <motion.div
                className="
                  absolute
                  bottom-0
                  left-0
                  h-px
                  bg-[#d8b45a]/40
                "
                initial={{
                  width: 0,
                }}
                animate={{
                  width: "100%",
                }}
                transition={{
                  duration: 1.2,
                  delay: 0.1,
                  ease: "easeInOut",
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
            opacity: showIntro ? 1 : 1,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          <Navbar />

          <main>
            <Hero />
            <About />
            <Projects />
            <Certificates/>
            <Contact />
          </main>

          <Footer />
        </motion.div>

      </div>
    </LanguageProvider>
  );
}

export default App;