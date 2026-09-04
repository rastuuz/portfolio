
import React from "react";
import { useLanguage } from "../../context/LanguageContext";

const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer className="border-t border-white/5 py-8">
      <div className="container-custom mx-auto px-4 md:px-8">

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          {/* Copyright */}
          <p className="text-cream/30 text-sm font-inter text-center md:text-left">
            © {new Date().getFullYear()} Fathur Razak Rastu Febrian
          </p>

          {/* Built With */}
          <p className="text-cream/30 text-sm font-inter text-center">

            {language === "en"
              ? "Built with"
              : "Dibuat dengan"}

            {" "}

            <span className="text-gold">
              {"</>"}
            </span>

            {" "}

            {language === "en"
              ? "& curiosity"
              : "& rasa ingin tahu"}

          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;

