// src/components/SkillsSection.tsx
'use client';

import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaHtml5, FaCss3Alt, FaReact, FaNode, FaPython, FaServer, FaDesktop
} from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiNextdotjs, SiJavascript, SiMongodb, SiExpress } from 'react-icons/si';
import Image from "next/image"

export default function SkillsSection() {
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
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const skillCategories = [
    {
      category: 'Frontend',
      icon: <FaDesktop size={28} className="text-primary-500" />,
      skills: [
        { name: 'HTML5', icon: <FaHtml5 size={30} className="text-orange-500" />, level: 90 },
        { name: 'CSS3', icon: <FaCss3Alt size={30} className="text-blue-500" />, level: 85 },
        { name: 'JavaScript', icon: <SiJavascript size={30} className="text-yellow-400" />, level: 85 },
        { name: 'TypeScript', icon: <SiTypescript size={30} className="text-blue-600" />, level: 75 },
        { name: 'React.js', icon: <FaReact size={30} className="text-cyan-400" />, level: 88 },
        { name: 'Next.js', icon: <SiNextdotjs size={30} className="text-white" />, level: 82 },
        { name: 'Tailwind CSS', icon: <SiTailwindcss size={30} className="text-teal-400" />, level: 90 },
      ]
    },
    {
      category: 'Backend',
      icon: <FaServer size={28} className="text-primary-500" />,
      skills: [
        { name: 'Node.js', icon: <FaNode size={30} className="text-green-500" />, level: 80 },
        { name: 'Express.js', icon: <SiExpress size={30} className="text-gray-400" />, level: 75 },
        { name: 'Python', icon: <FaPython size={30} className="text-yellow-500" />, level: 78 },
        { name: 'MongoDB', icon: <SiMongodb size={30} className="text-green-600" />, level: 70 }
      ]
    }
  ];

  const toolsFrameworks = [
    { name: 'Git', icon: '/Tools/git.png', category: 'Version Control' },
    { name: 'Docker', icon: '/Tools/docker.png', category: 'DevOps' },
    { name: 'Figma', icon: '/Tools/figma.png', category: 'Design' },
    { name: 'VS Code', icon: '/Tools/vscode.png', category: 'IDE' },
    { name: 'Streamlit', icon: '/Tools/streamlit.png', category: 'Python Framework' },
    { name: 'Redux', icon: '/Tools/redux.png', category: 'State Management' },
    { name: 'Vercel', icon: '/Tools/vercel.png', category: 'Deployment' },
    { name: 'Firebase', icon: '/Tools/firebase.png', category: 'Backend as a Service' },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-radial from-primary-500/5 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-3 py-1 text-sm font-medium text-primary-500 bg-primary-500/10 rounded-full mb-4"
          >
            My Skills
          </motion.span>
          <h2 className="section-heading">Technical Expertise</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of the technologies, tools and frameworks I work with to build modern web applications
          </p>
        </div>

        <div className="mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="mb-12">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center mr-4">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold">{category.category} Technologies</h3>
              </div>
              
              <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={controls}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={itemVariants}
                    className="glass p-6 rounded-xl flex items-center"
                  >
                    <div className="mr-4 p-3 rounded-lg bg-dark-800">
                      {skill.icon}
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between mb-2">
                        <h4 className="font-medium">{skill.name}</h4>
                        <span className="text-primary-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-dark-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                          className="h-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-600"
                        ></motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Tools & Frameworks</h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
          >
            {toolsFrameworks.map((tool, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass p-4 rounded-xl text-center transition-all duration-300 hover:border-primary-500 hover:shadow-primary-500/20 hover:scale-105"
              >
                <div className="w-16 h-16 mx-auto mb-4 p-3 rounded-full bg-dark-800 flex items-center justify-center">
                  <Image 
                    src={tool.icon} 
                    alt={tool.name}
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain" 
                  />
                </div>
                <h4 className="font-medium mb-2">{tool.name}</h4>
                <p className="text-sm text-gray-400">{tool.category}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}