import React from 'react'
import { motion } from 'framer-motion'
import {
  FaCode,
  FaPalette,
  FaRocket,
  FaUserGraduate,
  FaBriefcase
} from 'react-icons/fa'

const About = () => {
  const stats = [
    { number: '2+', label: 'Years Learning & Coding' },
    { number: '6+', label: 'Projects Completed' },
  ]

  const skills = [
    {
      icon: <FaCode />,
      title: 'Frontend Development',
      desc: 'HTML, CSS, JavaScript, React, Tailwind CSS'
    },
    {
      icon: <FaPalette />,
      title: 'UI/UX Design',
      desc: 'Figma, Canva, Responsive Design'
    },
    {
      icon: <FaRocket />,
      title: 'Backend & Application Development',
      desc: 'PHP, Laravel, Node.js, MySQL, Python'
    },
  ]

  return (
    <section id="about" className="section-padding bg-dark-secondary">
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
            About Me
          </p>

          <h2 className="font-playfair text-4xl md:text-5xl font-bold">
            Software Developer{' '}
            <span className="gold-text">
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Who I Am */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass-effect p-8 rounded-2xl">

              <div className="flex items-center gap-3 mb-6">
                <FaUserGraduate className="text-gold text-2xl" />

                <h3 className="text-2xl font-playfair font-bold text-cream">
                  Who I Am
                </h3>
              </div>

              <p className="text-cream/70 leading-relaxed text-lg mb-4">
                I'm a Software Developer passionate about building
                useful, functional, and user-friendly digital solutions.
                I enjoy turning ideas into real projects through
                programming, creative problem-solving, and continuous learning.
              </p>

              <p className="text-cream/70 leading-relaxed text-lg">
                I work with technologies such as React, JavaScript,
                PHP, Laravel, Node.js, MySQL, Python, and IoT platforms.
                I enjoy exploring different areas of technology through
                web development, application development, automation,
                and hardware-based projects.
              </p>

            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="glass-effect p-4 rounded-xl text-center"
                >
                  <div className="text-2xl font-playfair font-bold text-gold">
                    {stat.number}
                  </div>

                  <div className="text-xs text-cream/50 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </motion.div>

          {/* Right Side */}
          <div className="space-y-6">

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="glass-effect p-6 rounded-xl"
            >
              <div className="flex items-center gap-3 mb-2">
                <FaBriefcase className="text-gold text-xl" />

                <h4 className="text-cream font-semibold">
                  My Mission
                </h4>
              </div>

              <p className="text-cream/60 text-sm leading-relaxed">
                To create useful and reliable digital solutions by
                combining programming, creativity, and technology
                to solve real-world problems and continuously improve my skills.
              </p>
            </motion.div>

            {/* Skills */}
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1
                }}
                viewport={{ once: true }}
                className="glass-effect p-6 rounded-xl hover:border-gold/30 transition-all duration-300"
              >
                <div className="flex items-center gap-4">

                  <div className="text-gold text-2xl">
                    {skill.icon}
                  </div>

                  <div>
                    <h3 className="text-cream font-semibold">
                      {skill.title}
                    </h3>

                    <p className="text-cream/50 text-sm">
                      {skill.desc}
                    </p>
                  </div>

                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  )
}

export default About