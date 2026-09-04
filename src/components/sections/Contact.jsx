
import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaWhatsapp,
  FaTelegram,
  FaTiktok,
} from "react-icons/fa";

import { useLanguage } from "../../context/LanguageContext";

const Contact = () => {
  const { language } = useLanguage();

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: language === "en" ? "Email" : "Email",
      value: "rastu1802@email.com",
      link: "mailto:rastu1802@email.com",
    },
    {
      icon: <FaPhone />,
      label: language === "en" ? "Phone" : "Telepon",
      value: "+62 813 9074 2600",
      link: "tel:+6281390742600",
    },
    {
      icon: <FaMapMarkerAlt />,
      label: language === "en" ? "Location" : "Lokasi",
      value: "Tegal, Indonesia",
      link: "#",
    },
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      href: "https://github.com/rastuuz",
      label: "GitHub",
    },
    {
      icon: <FaInstagram />,
      href: "https://instagram.com/rastuunz",
      label: "Instagram",
    },
    {
      icon: <FaWhatsapp />,
      href: "https://wa.me/6281390742600",
      label: "WhatsApp",
    },
    {
      icon: <FaTelegram />,
      href: "https://t.me/rastu18",
      label: "Telegram",
    },
    {
      icon: <FaTiktok />,
      href: "https://tiktok.com/@tutunezz",
      label: "TikTok",
    },
  ];

  return (
    <section
      id="contact"
      className="section-padding bg-dark-secondary"
    >
      <div className="container-custom mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <p className="text-gold font-inter tracking-[0.3em] uppercase text-sm mb-3">
            {language === "en" ? "Contact" : "Kontak"}
          </p>

          <h2 className="font-playfair text-4xl md:text-5xl font-bold">
            {language === "en" ? "Let's Work" : "Mari Bekerja"}{" "}
            <span className="gold-text">
              {language === "en" ? "Together" : "Bersama"}
            </span>
          </h2>

          <p className="text-cream/50 mt-4 max-w-2xl mx-auto">
            {language === "en"
              ? "Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to learning, collaboration, and new opportunities."
              : "Punya project atau ingin berkolaborasi? Jangan ragu untuk menghubungi saya. Saya selalu terbuka untuk belajar, berkolaborasi, dan mendapatkan kesempatan baru."}
          </p>

        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >

          <h3 className="font-playfair text-2xl font-bold text-cream mb-6 text-center">
            {language === "en"
              ? "Get In Touch"
              : "Hubungi Saya"}
          </h3>

          <div className="space-y-4 mb-10">

            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                className="flex items-center justify-center gap-4 glass-effect p-4 rounded-xl hover:border-gold/30 transition-all duration-300 group"
              >

                <span className="text-gold text-xl group-hover:scale-110 transition-transform">
                  {info.icon}
                </span>

                <div>

                  <p className="text-cream/40 text-xs">
                    {info.label}
                  </p>

                  <p className="text-cream">
                    {info.value}
                  </p>

                </div>

              </a>
            ))}

          </div>

          {/* Social Media */}
          <h4 className="text-cream font-inter text-sm tracking-wider uppercase mb-5 text-center">
            {language === "en"
              ? "Connect With Me"
              : "Terhubung Dengan Saya"}
          </h4>

          <div className="flex flex-wrap gap-5 justify-center">

            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={{
                  y: -5,
                  scale: 1.15,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                className="w-12 h-12 rounded-full glass-effect flex items-center justify-center text-cream/50 hover:text-gold hover:border-gold/30 transition-all duration-300"
              >

                <span className="text-xl">
                  {social.icon}
                </span>

              </motion.a>
            ))}

          </div>

          {/* Bottom Message */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center text-cream/30 text-sm mt-10"
          >
            {language === "en"
              ? "Thank you for visiting my portfolio. I look forward to connecting with you."
              : "Terima kasih telah mengunjungi portfolio saya. Saya berharap dapat terhubung dengan Anda."}
          </motion.p>

        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

