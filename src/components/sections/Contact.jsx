import React from 'react'
import { motion } from 'framer-motion'
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaWhatsapp,
  FaTelegram,
  FaTiktok
} from 'react-icons/fa'

const Contact = () => {

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'rastu1802@email.com',
      link: 'mailto:rastu1802@email.com'
    },
    {
      icon: <FaPhone />,
      label: 'Phone',
      value: '+62 813 9074 2600',
      link: 'tel:+6281390742600'
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Location',
      value: 'Tegal, Indonesia',
      link: '#'
    },
  ]

  const socialLinks = [
    {
      icon: <FaGithub />,
      href: 'https://github.com/rastuuz',
      label: 'GitHub'
    },
    {
      icon: <FaInstagram />,
      href: 'https://instagram.com/rastuunz',
      label: 'Instagram'
    },
    {
      icon: <FaWhatsapp />,
      href: 'https://wa.me/6281390742600',
      label: 'WhatsApp'
    },
    {
      icon: <FaTelegram />,
      href: 'https://t.me/rastu18',
      label: 'Telegram'
    },
    {
      icon: <FaTiktok />,
      href: 'https://tiktok.com/@tutunezz',
      label: 'TikTok'
    },
  ]

  return (
    <section id="contact" className="section-padding bg-dark-secondary">
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
            Contact
          </p>

          <h2 className="font-playfair text-4xl md:text-5xl font-bold">
            Let's Work <span className="gold-text">Together</span>
          </h2>

          <p className="text-cream/50 mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out. I'm always open to learning, collaboration, and new
            opportunities.
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
            Get In Touch
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
            Connect With Me
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
                  scale: 1.15
                }}
                whileTap={{
                  scale: 0.9
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
            Thank you for visiting my portfolio. I look forward to connecting
            with you.
          </motion.p>

        </motion.div>
      </div>
    </section>
  )
}

export default Contact
