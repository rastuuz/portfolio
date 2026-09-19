import React, { useEffect, useState } from "react";
import { FaBars, FaTimes, FaGlobe } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";

const Navbar = () => {
  const { language, setLanguage } = useLanguage();

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // =========================
  // SCROLL DETECTION
  // =========================
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // =========================
  // NAVIGATION LINKS
  // =========================
  const navLinks = [
    {
      name: language === "en" ? "Home" : "Beranda",
      href: "#home",
    },
    {
      name: language === "en" ? "About" : "Tentang",
      href: "#about",
    },
    {
      name: language === "en" ? "Projects" : "Project",
      href: "#projects",
    },
    {
      name: language === "en" ? "Certificates" : "Sertifikat",
      href: "#certificates",
    },
    {
      name: language === "en" ? "Contact" : "Kontak",
      href: "#contact",
    },
  ];

  // =========================
  // LANGUAGE
  // =========================
  const toggleLanguage = () => {
    setLanguage(language === "en" ? "id" : "en");
  };

  // =========================
  // CLOSE MOBILE MENU
  // =========================
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`
        fixed
        top-0
        left-0
        w-full
        z-50
        transition-all
        duration-500
        ${
          scrolled
            ? `
              bg-dark/50
              backdrop-blur-lg
              py-3
              border-b
              border-white/[0.08]
              shadow-[0_8px_30px_rgba(0,0,0,0.12)]
            `
            : `
              bg-transparent
              py-5
              border-b
              border-transparent
            `
        }
      `}
    >
      <div className="container-custom mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between">

          {/* =========================
              LOGO
          ========================= */}
          <a
            href="#home"
            onClick={closeMenu}
            className="
              text-2xl
              md:text-3xl
              font-playfair
              font-bold
              tracking-tight
              transition-all
              duration-300
              hover:opacity-80
            "
          >
            <span className="gold-text">R</span>
            astu
            <span className="gold-text">.</span>
          </a>

          {/* =========================
              DESKTOP NAVIGATION
          ========================= */}
          <div className="hidden md:flex items-center gap-7 lg:gap-9">

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="
                  group
                  relative
                  text-cream/60
                  hover:text-gold
                  text-sm
                  uppercase
                  tracking-widest
                  transition-all
                  duration-300
                  py-2
                "
              >
                {link.name}

                <span
                  className="
                    absolute
                    bottom-0
                    left-0
                    w-0
                    h-px
                    bg-gold
                    group-hover:w-full
                    transition-all
                    duration-500
                  "
                />
              </a>
            ))}

            {/* =========================
                LANGUAGE SWITCHER
            ========================= */}
            <button
              type="button"
              onClick={toggleLanguage}
              className="
                flex
                items-center
                gap-2
                px-3
                py-2
                rounded-full
                bg-white/[0.03]
                backdrop-blur-sm
                border
                border-white/10
                text-cream/60
                hover:text-gold
                hover:border-gold/30
                transition-all
                duration-300
                ml-1
              "
              aria-label="Change language"
            >
              <FaGlobe className="text-xs" />

              <span
                className="
                  text-xs
                  font-semibold
                  tracking-wider
                "
              >
                {language === "en" ? "EN" : "ID"}
              </span>
            </button>
          </div>

          {/* =========================
              MOBILE RIGHT
          ========================= */}
          <div className="md:hidden flex items-center gap-2">

            {/* LANGUAGE */}
            <button
              type="button"
              onClick={toggleLanguage}
              className="
                flex
                items-center
                gap-1.5
                px-3
                py-2
                rounded-full
                bg-white/[0.03]
                backdrop-blur-sm
                border
                border-white/10
                text-cream/60
                hover:text-gold
                hover:border-gold/30
                transition-all
                duration-300
              "
              aria-label="Change language"
            >
              <FaGlobe className="text-[11px]" />

              <span
                className="
                  text-[10px]
                  font-semibold
                  tracking-wider
                "
              >
                {language === "en" ? "EN" : "ID"}
              </span>
            </button>

            {/* MENU BUTTON */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="
                w-10
                h-10
                rounded-full
                bg-white/[0.03]
                backdrop-blur-sm
                border
                border-white/10
                flex
                items-center
                justify-center
                text-cream/70
                hover:text-gold
                hover:border-gold/30
                transition-all
                duration-300
              "
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <FaTimes className="text-sm" />
              ) : (
                <FaBars className="text-sm" />
              )}
            </button>
          </div>
        </div>

        {/* =========================
            MOBILE MENU
        ========================= */}
        {isOpen && (
          <div
            className="
              md:hidden
              mt-4
              rounded-2xl
              bg-dark/60
              backdrop-blur-lg
              border
              border-white/[0.08]
              p-5
              shadow-[0_15px_40px_rgba(0,0,0,0.2)]
            "
          >
            <div className="flex flex-col gap-1">

              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="
                    group
                    relative
                    w-fit
                    text-cream/70
                    hover:text-gold
                    uppercase
                    tracking-widest
                    text-sm
                    transition-all
                    duration-300
                    py-3
                  "
                >
                  {link.name}

                  <span
                    className="
                      absolute
                      bottom-1
                      left-0
                      w-0
                      h-px
                      bg-gold
                      group-hover:w-full
                      transition-all
                      duration-500
                    "
                  />
                </a>
              ))}

            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;