import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="container-custom mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream/30 text-sm font-inter">
            © {new Date().getFullYear()} Fathur Razak Rastu Febrian
          </p>
          
          <p className="text-cream/30 text-sm font-inter">
            Built with <span className="text-gold">{"</>"}</span> & curiosity
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
