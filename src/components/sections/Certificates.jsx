import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";

const Certificates = () => {
  const { language } = useLanguage();

  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [currentPmrCertificate, setCurrentPmrCertificate] = useState(0);
  const [slideDirection, setSlideDirection] = useState(1);

  // =========================
  // CERTIFICATES DATA
  // =========================

  const certificates = [
    {
      id: "google-digital-marketing",
      title:
        language === "en"
          ? "Google Digital Marketing"
          : "Google Digital Marketing",
      issuer: "Google",
      image: "/img/marketing.jpeg",
      type: "single",
    },

    {
      id: "outing-class",
      title:
        language === "en"
          ? "Outing Class Certificate"
          : "Sertifikat Outing Class",
      issuer: "School Activity",
      image: "/img/oc.jpeg",
      type: "single",
    },

    {
      id: "pmr-certificates",
      title:
        language === "en"
          ? "PMR Certificates"
          : "Sertifikat PMR",
      issuer: "Palang Merah Indonesia",
      image: "/img/pmr3.jpeg",
      type: "multiple",

      images: [
        "/img/pmr3.jpeg",
        "/img/pmr2.jpeg",
        "/img/pmr1.jpeg",
      ],
    },
  ];

  // =========================
  // SLIDE ANIMATION
  // =========================

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 1,
    }),

    center: {
      x: 0,
      opacity: 1,
    },

    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 1,
    }),
  };

  // =========================
  // OPEN CERTIFICATE
  // =========================

  const openCertificate = (certificate) => {
    setSelectedCertificate(certificate);

    if (certificate.type === "multiple") {
      setCurrentPmrCertificate(0);
      setSlideDirection(1);
    }
  };

  // =========================
  // CLOSE CERTIFICATE
  // =========================

  const closeCertificate = () => {
    setSelectedCertificate(null);
    setCurrentPmrCertificate(0);
    setSlideDirection(1);
  };

  // =========================
  // PREVIOUS PMR
  // =========================

  const previousPmrCertificate = () => {
    if (!selectedCertificate?.images?.length) return;

    setSlideDirection(-1);

    setCurrentPmrCertificate((prev) => {
      if (prev === 0) {
        return selectedCertificate.images.length - 1;
      }

      return prev - 1;
    });
  };

  // =========================
  // NEXT PMR
  // =========================

  const nextPmrCertificate = () => {
    if (!selectedCertificate?.images?.length) return;

    setSlideDirection(1);

    setCurrentPmrCertificate((prev) => {
      if (prev === selectedCertificate.images.length - 1) {
        return 0;
      }

      return prev + 1;
    });
  };

  return (
    <section
      id="certificates"
      className="section-padding bg-dark relative overflow-hidden"
    >
      {/* =========================
          BACKGROUND DECORATION
      ========================= */}

      <div className="absolute -top-32 -right-32 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="absolute bottom-0 -left-40 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom mx-auto relative z-10">

        {/* =========================
            SECTION HEADER
        ========================= */}

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
              {language === "en" ? "Achievements" : "Pencapaian"}
            </p>

            <div className="w-10 h-px bg-gold/50" />
          </div>

          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-cream">
            {language === "en" ? (
              <>
                My <span className="gold-text">Certificates</span>
              </>
            ) : (
              <>
                <span className="gold-text">Sertifikat</span> Saya
              </>
            )}
          </h2>

          <p className="text-cream/45 max-w-2xl mx-auto mt-6 leading-relaxed text-sm md:text-base font-inter">
            {language === "en"
              ? "A collection of certificates and achievements from my learning journey and school activities."
              : "Kumpulan sertifikat dan pencapaian dari perjalanan belajar serta kegiatan sekolah saya."}
          </p>
        </motion.div>

        {/* =========================
            CERTIFICATE GRID
        ========================= */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8 max-w-6xl mx-auto">

          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-3xl
                  bg-white/[0.02]
                  border
                  border-white/5
                  transition-all
                  duration-500
                  group-hover:border-gold/25
                  group-hover:bg-white/[0.035]
                  group-hover:shadow-[0_25px_60px_rgba(0,0,0,0.25)]
                "
              >

                {/* =========================
                    CERTIFICATE IMAGE
                ========================= */}

                <button
                  type="button"
                  onClick={() => openCertificate(certificate)}
                  className="
                    block
                    w-full
                    relative
                    aspect-[4/3]
                    overflow-hidden
                    bg-black/20
                    text-left
                    cursor-pointer
                  "
                >
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="
                      w-full
                      h-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-[1.035]
                    "
                  />

                  {/* DARK GRADIENT */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-dark/75
                      via-transparent
                      to-transparent
                      opacity-70
                      pointer-events-none
                    "
                  />

                  {/* HOVER VIEW */}

                  <div
                    className="
                      absolute
                      inset-0
                      flex
                      items-center
                      justify-center
                      bg-dark/20
                      opacity-0
                      group-hover:opacity-100
                      transition-all
                      duration-500
                      pointer-events-none
                    "
                  >
                    <div
                      className="
                        flex
                        items-center
                        gap-2
                        px-5
                        py-3
                        rounded-full
                        bg-dark/80
                        backdrop-blur-md
                        border
                        border-gold/30
                        text-gold
                        text-[10px]
                        uppercase
                        tracking-[0.2em]
                        font-inter
                        transform
                        translate-y-3
                        group-hover:translate-y-0
                        transition-all
                        duration-500
                      "
                    >
                      {language === "en"
                        ? "View Certificate"
                        : "Lihat Sertifikat"}

                      <FaExternalLinkAlt className="text-[8px]" />
                    </div>
                  </div>

                  {/* PMR INDICATOR */}

                  {certificate.type === "multiple" && (
                    <div
                      className="
                        absolute
                        bottom-4
                        right-4
                        px-3
                        py-1.5
                        rounded-full
                        bg-dark/80
                        backdrop-blur-md
                        border
                        border-gold/20
                        text-gold
                        text-[10px]
                        font-inter
                        tracking-wider
                      "
                    >
                      3 Certificates
                    </div>
                  )}
                </button>

                {/* =========================
                    CARD CONTENT
                ========================= */}

                <div className="p-6 md:p-7">

                  <p
                    className="
                      text-gold/60
                      text-[10px]
                      uppercase
                      tracking-[0.25em]
                      font-inter
                      mb-2
                    "
                  >
                    {certificate.issuer}
                  </p>

                  <h3
                    className="
                      font-playfair
                      text-xl
                      md:text-2xl
                      font-bold
                      text-cream
                      leading-snug
                      transition-colors
                      duration-300
                      group-hover:text-gold
                    "
                  >
                    {certificate.title}
                  </h3>

                  <div className="h-px bg-white/5 my-5" />

                  {/* VIEW BUTTON */}

                  <button
                    type="button"
                    onClick={() => openCertificate(certificate)}
                    className="
                      inline-flex
                      items-center
                      gap-2
                      text-cream/40
                      hover:text-gold
                      text-[10px]
                      uppercase
                      tracking-[0.2em]
                      font-inter
                      transition-colors
                      duration-300
                    "
                  >
                    {language === "en"
                      ? "View Certificate"
                      : "Lihat Sertifikat"}

                    <FaExternalLinkAlt className="text-[8px]" />
                  </button>
                </div>

                {/* =========================
                    GOLD BOTTOM LINE
                ========================= */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    w-0
                    h-[2px]
                    bg-gold
                    group-hover:w-full
                    transition-all
                    duration-700
                  "
                />
              </div>
            </motion.div>
          ))}

        </div>

        {/* =========================
            SECTION NUMBER
        ========================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 mt-16"
        />
      </div>

      {/* ==================================================
          CERTIFICATE MODAL
      ================================================== */}

      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="
              fixed
              inset-0
              z-[100]
              bg-black/80
              backdrop-blur-md
              flex
              items-center
              justify-center
              p-4
              md:p-8
            "
            onClick={closeCertificate}
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.94,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.94,
                y: 20,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              className="
                relative
                w-full
                max-w-5xl
                max-h-[90vh]
                bg-dark-secondary
                rounded-2xl
                border
                border-white/10
                shadow-[0_30px_100px_rgba(0,0,0,0.5)]
                overflow-hidden
              "
              onClick={(e) => e.stopPropagation()}
            >

              {/* =========================
                  CLOSE BUTTON
              ========================= */}

              <button
                type="button"
                onClick={closeCertificate}
                className="
                  absolute
                  top-4
                  right-4
                  z-30
                  w-10
                  h-10
                  rounded-full
                  bg-dark/80
                  backdrop-blur-md
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  text-cream/70
                  hover:text-gold
                  hover:border-gold/30
                  hover:bg-dark
                  transition-all
                  duration-300
                "
                aria-label="Close certificate"
              >
                <FaTimes className="text-sm" />
              </button>

              {/* =========================
                  IMAGE CONTAINER
              ========================= */}

              <div
                className="
                  p-3
                  md:p-5
                  max-h-[90vh]
                  overflow-hidden
                  flex
                  items-center
                  justify-center
                "
              >

                {/* ==================================================
                    MULTIPLE CERTIFICATES - PMR
                ================================================== */}

                {selectedCertificate.type === "multiple" ? (
                  <div className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">

                    {/* =========================
                        PREVIOUS BUTTON
                    ========================= */}

                    <button
                      type="button"
                      onClick={previousPmrCertificate}
                      className="
                        absolute
                        left-2
                        md:left-5
                        z-20
                        w-10
                        h-10
                        md:w-12
                        md:h-12
                        rounded-full
                        bg-dark/80
                        backdrop-blur-md
                        border
                        border-white/10
                        flex
                        items-center
                        justify-center
                        text-cream/70
                        hover:text-gold
                        hover:border-gold/30
                        hover:bg-dark
                        transition-all
                        duration-300
                      "
                      aria-label="Previous certificate"
                    >
                      <FaChevronLeft />
                    </button>

                    {/* =========================
                        PMR CERTIFICATE SLIDER
                    ========================= */}

                    <div className="relative w-full h-full overflow-hidden flex items-center justify-center">

                      <AnimatePresence
                        initial={false}
                        custom={slideDirection}
                        mode="sync"
                      >
                        <motion.img
                          key={currentPmrCertificate}
                          custom={slideDirection}
                          variants={slideVariants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          transition={{
                            x: {
                              type: "spring",
                              stiffness: 300,
                              damping: 30,
                            },
                          }}
                          src={
                            selectedCertificate.images[
                              currentPmrCertificate
                            ]
                          }
                          alt={`${selectedCertificate.title} ${
                            currentPmrCertificate + 1
                          }`}
                          className="
                            absolute
                            inset-0
                            w-full
                            h-full
                            object-contain
                            rounded-xl
                            select-none
                          "
                        />
                      </AnimatePresence>

                    </div>

                    {/* =========================
                        NEXT BUTTON
                    ========================= */}

                    <button
                      type="button"
                      onClick={nextPmrCertificate}
                      className="
                        absolute
                        right-2
                        md:right-5
                        z-20
                        w-10
                        h-10
                        md:w-12
                        md:h-12
                        rounded-full
                        bg-dark/80
                        backdrop-blur-md
                        border
                        border-white/10
                        flex
                        items-center
                        justify-center
                        text-cream/70
                        hover:text-gold
                        hover:border-gold/30
                        hover:bg-dark
                        transition-all
                        duration-300
                      "
                      aria-label="Next certificate"
                    >
                      <FaChevronRight />
                    </button>

                    {/* =========================
                        COUNTER
                    ========================= */}

                    <div
                      className="
                        absolute
                        bottom-3
                        left-1/2
                        -translate-x-1/2
                        z-20
                        px-4
                        py-2
                        rounded-full
                        bg-dark/80
                        backdrop-blur-md
                        border
                        border-white/10
                        text-cream/70
                        text-xs
                        font-inter
                      "
                    >
                      {currentPmrCertificate + 1} /{" "}
                      {selectedCertificate.images.length}
                    </div>

                  </div>
                ) : (

                  /* ==================================================
                     SINGLE CERTIFICATE
                  ================================================== */

                  <motion.img
                    initial={{
                      opacity: 0,
                      scale: 0.98,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    src={selectedCertificate.image}
                    alt={selectedCertificate.title}
                    className="
                      w-full
                      h-auto
                      max-h-[82vh]
                      object-contain
                      rounded-xl
                    "
                  />

                )}

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;