import React from "react";
import { motion } from "framer-motion";
import { FaGlobe } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-5 right-5 z-[999]">
      <div className="glass-effect rounded-full p-1 flex items-center gap-1 shadow-xl">
        
        <FaGlobe className="text-gold text-sm ml-3 mr-1" />

        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setLanguage("id")}
          className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
            language === "id"
              ? "bg-gold text-dark"
              : "text-cream/50 hover:text-cream"
          }`}
        >
          ID
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setLanguage("en")}
          className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
            language === "en"
              ? "bg-gold text-dark"
              : "text-cream/50 hover:text-cream"
          }`}
        >
          EN
        </motion.button>

      </div>
    </div>
  );
};

export default LanguageSwitcher;