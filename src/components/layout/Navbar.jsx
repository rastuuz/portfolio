import React, { useEffect, useState } from "react";
import { FaBars, FaTimes, FaGlobe } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";

const Navbar = () => {
  const { language, setLanguage } = useLanguage();

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      name: language === "en" ? "Contact" : "Kontak",
      href: "#contact",
    },
  ];

  // Ganti bahasa ketika tombol ditekan
  const toggleLanguage = () => {
    setLanguage(language === "en" ? "id" : "en");
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "glass-effect-premium py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom mx-auto px-5 md:px-8">

        <div className="flex items-center justify-between">

          {/* ================= LOGO ================= */}

          <a
            href="#home"
            onClick={closeMenu}
            className="text-2xl md:text-3xl font-playfair font-bold"
          >
            <span className="gold-text">R</span>astu
            <span className="gold-text">.</span>
          </a>

          {/* ================= DESKTOP ================= */}

          <div className="hidden md:flex items-center gap-8 lg:gap-10">

            {/* Navigation */}

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative text-cream/60 hover:text-gold text-sm uppercase tracking-widest transition duration-300 py-2"
              >
                {link.name}

                <span className="absolute bottom-0 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-500" />
              </a>
            ))}

            {/* ================= LANGUAGE ================= */}

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
                glass-effect
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
              title={
                language === "en"
                  ? "Switch to Indonesian"
                  : "Switch to English"
              }
            >
              <FaGlobe className="text-xs" />

              <span className="text-xs font-semibold tracking-wider">
                {language === "en" ? "EN" : "ID"}
              </span>
            </button>

          </div>

          {/* ================= MOBILE RIGHT ================= */}

          <div className="md:hidden flex items-center gap-2">

            {/* Language */}

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
                glass-effect
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

              <span className="text-[10px] font-semibold tracking-wider">
                {language === "en" ? "EN" : "ID"}
              </span>
            </button>

            {/* Hamburger */}

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="
                w-10
                h-10
                rounded-full
                glass-effect
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

        {/* ================= MOBILE MENU ================= */}

        {isOpen && (
          <div className="md:hidden mt-4 rounded-2xl glass-effect-premium p-5">

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
                    transition
                    py-3
                  "
                >
                  {link.name}

                  <span className="absolute bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-500" />
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