// src/components/Experience.tsx
'use client';

import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

export default function Experience() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const workExperience = [
    {
      title: 'Full Stack Developer',
      company: 'Tech Solutions',
      period: '2024 - Present',
      description: 'Leading the development of web applications using Next.js, React, and Node.js. Implemented responsive designs using Tailwind CSS and optimized application performance.',
      responsibilities: [
        'Developed and maintained multiple client websites and web applications',
        'Implemented responsive UI designs using Tailwind CSS and Framer Motion',
        'Created RESTful APIs using Node.js and Express',
        'Optimized application performance and page load speeds'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Creations',
      period: '2024 - 2025',
      description: 'Developed and maintained responsive websites using React.js. Collaborated with the design team to implement UI/UX designs and ensure cross-browser compatibility.',
      responsibilities: [
        'Built responsive user interfaces using React.js',
        'Collaborated with UI/UX designers to implement designs',
        'Ensured cross-browser compatibility and responsive layouts',
        'Integrated third-party APIs and services'
      ]
    },
    {
      title: 'Web Development Intern',
      company: 'WebCraft Agency',
      period: '2024',
      description: 'Assisted in building websites using HTML, CSS, and JavaScript. Learned modern web development practices and contributed to client projects.',
      responsibilities: [
        'Assisted senior developers in building websites',
        'Created responsive layouts using HTML, CSS, and JavaScript',
        'Participated in code reviews and team discussions',
        'Learned modern web development practices and workflows'
      ]
    }
  ];

  const education = [
    {
      degree: 'Certification in AI & Machine Learning',
      institution: 'GIAIC',
      period: '2024 - Present',
      description: 'Currently studying advanced concepts in AI and machine learning, focusing on practical applications in web development.',
      subjects: [
        'Artificial Intelligence Fundamentals',
        'Machine Learning Algorithms',
        'Neural Networks and Deep Learning',
        'AI Integration in Web Applications'
      ]
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Technology',
      period: '2018 - 2022',
      description: 'Graduated with honors. Focused on software development, web technologies, and database management.',
      subjects: [
        'Data Structures and Algorithms',
        'Web Development Technologies',
        'Database Management Systems',
        'Software Engineering Principles'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-dark-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-secondary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-3 py-1 text-sm font-medium text-primary-500 bg-primary-500/10 rounded-full mb-4"
          >
            Journey
          </motion.span>
          <h2 className="section-heading">Experience & Education</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey and educational background that have shaped my career
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center">
                <FaBriefcase className="text-primary-500 text-xl" />
              </div>
              <h3 className="text-2xl font-bold ml-4">Work Experience</h3>
            </div>

            <motion.div
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={controls}
              className="relative pl-8 border-l-2 border-primary-600/30 space-y-12"
            >
              {workExperience.map((job, index) => (
                <motion.div key={index} variants={itemVariants} className="relative">
                  <div className="absolute -left-[41px] w-5 h-5 rounded-full bg-primary-600"></div>
                  <div className="glass p-6 rounded-xl relative border border-dark-700 hover:border-primary-500 transition-colors duration-300">
                    <span className="absolute -top-3 right-4 text-sm font-medium bg-primary-600 text-white py-1 px-3 rounded-full">
                      {job.period}
                    </span>
                    <h4 className="text-xl font-bold mb-1">{job.title}</h4>
                    <p className="text-primary-400 mb-4">{job.company}</p>
                    <p className="text-gray-300 mb-4">{job.description}</p>
                    
                    <h5 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-2">Key Responsibilities</h5>
                    <ul className="space-y-2">
                      {job.responsibilities.map((responsibility, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2 text-primary-500">•</span>
                          <span className="text-gray-300 text-sm">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div>
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center">
                <FaGraduationCap className="text-primary-500 text-xl" />
              </div>
              <h3 className="text-2xl font-bold ml-4">Education</h3>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={controls}
              className="relative pl-8 border-l-2 border-primary-600/30 space-y-12"
            >
              {education.map((edu, index) => (
                <motion.div key={index} variants={itemVariants} className="relative">
                  <div className="absolute -left-[41px] w-5 h-5 rounded-full bg-primary-600"></div>
                  <div className="glass p-6 rounded-xl relative border border-dark-700 hover:border-primary-500 transition-colors duration-300">
                    <span className="absolute -top-3 right-4 text-sm font-medium bg-primary-600 text-white py-1 px-3 rounded-full">
                      {edu.period}
                    </span>
                    <h4 className="text-xl font-bold mb-1">{edu.degree}</h4>
                    <p className="text-primary-400 mb-4">{edu.institution}</p>
                    <p className="text-gray-300 mb-4">{edu.description}</p>
                    
                    <h5 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-2">Core Subjects</h5>
                    <ul className="space-y-2">
                      {edu.subjects.map((subject, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2 text-primary-500">•</span>
                          <span className="text-gray-300 text-sm">{subject}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}