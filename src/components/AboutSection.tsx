// src/components/AboutSection.tsx
'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaDownload, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGraduationCap, FaLaptopCode, FaBrain } from 'react-icons/fa';

export default function AboutSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const stats = [
    { value: '2+', label: 'Years Experience' },
    { value: '15+', label: 'Projects Completed' },
    { value: '10+', label: 'Happy Clients' },
    { value: '7+', label: 'Technologies Mastered' },
  ];

  const keyPoints = [
    { 
      icon: <FaLaptopCode className="text-primary-500" size={20} />,
      title: 'Full Stack Developer',
      description: 'Experience with React, Next.js, Node.js and Python technologies to build complete web solutions.'
    },
    { 
      icon: <FaBrain className="text-primary-500" size={20} />,
      title: 'AI Enthusiast',
      description: 'Studying advanced concepts in AI and machine learning at GIAIC to create intelligent applications.'
    },
    { 
      icon: <FaGraduationCap className="text-primary-500" size={20} />,
      title: 'Continuous Learner',
      description: 'Always expanding my knowledge and skills through online courses, documentation, and hands-on projects.'
    },
  ];

  return (
    <section id="about" className="py-20 bg-dark-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-3 py-1 text-sm font-medium text-primary-500 bg-primary-500/10 rounded-full mb-4"
          >
            About Me
          </motion.span>
          <h2 className="section-heading">Get to Know Me</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover my journey, experience, and passion for creating exceptional digital experiences
          </p>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
          className="flex flex-col md:flex-row items-center gap-16"
        >
          <div className="md:w-2/5 relative">
            <div className="w-full h-96 md:h-[500px] relative rounded-lg overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/50 to-secondary-600/50 z-10 mix-blend-overlay"></div>
              <Image
                src="/about-image.webp"
                alt="Riaz Hussain Saifi"
                fill
                className="object-cover"
                priority
              />
              
              {/* Decoration elements */}
              <div className="absolute top-5 left-5 w-20 h-20 border-t-2 border-l-2 border-primary-500 z-20"></div>
              <div className="absolute bottom-5 right-5 w-20 h-20 border-b-2 border-r-2 border-primary-500 z-20"></div>
            </div>
            
            {/* Stats cards */}
            <div className="absolute -bottom-10 -right-10 grid grid-cols-2 gap-3 max-w-xs">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  className="bg-dark-800 p-4 rounded-lg shadow-lg border border-dark-700 text-center"
                >
                  <p className="text-3xl font-bold text-primary-500">{stat.value}</p>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="md:w-3/5 mt-16 md:mt-0">
            <h3 className="text-3xl font-bold mb-6">Full Stack Developer & AI Enthusiast</h3>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              I am <span className="text-primary-500 font-medium">Riaz Hussain Saifi</span>, a passionate Full Stack Developer with 2 years of experience in building
              modern web applications. My journey in web development began with a fascination for creating interactive and user-friendly interfaces,
              which led me to explore both frontend and backend technologies.
            </p>
            
            <p className="text-gray-300 mb-8 leading-relaxed">
              I specialize in frontend technologies like React, Next.js, and Tailwind CSS, as well as backend technologies including Node.js and Python.
              Currently, I am studying AI and machine learning at GIAIC to expand my skill set and integrate cutting-edge
              technologies into web development.
            </p>
            
            <div className="space-y-6 mb-8">
              {keyPoints.map((point, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 mt-1 w-10 h-10 rounded-full bg-primary-500/10 flex items-center justify-center">
                    {point.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">{point.title}</h4>
                    <p className="text-gray-400">{point.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-primary-500" />
                <p>infosaifideveloper@gmail.com</p>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-primary-500" />
                <p>+92 300 032 1640</p>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-primary-500" />
                <p>Karachi, Pakistan</p>
              </div>
            </div>

            <a 
              href="/Riaz Hussain Resume.pdf" 
              download 
              className="btn-primary inline-flex items-center gap-2"
            >
              <FaDownload /> Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}