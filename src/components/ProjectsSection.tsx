// src/app/components/ProjectsSection.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaSearch, FaCode, FaShoppingCart, FaBook, FaQuran, FaTools, FaBrain, FaFileAlt } from 'react-icons/fa';
import { Button } from "@/components/ui/button";

export default function ProjectsSection() {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleProjects, setVisibleProjects] = useState(6); // Initial 6 projects
  
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  // Optimized animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.03, // Even faster stagger
        duration: 0.2 // Very quick transition
      },
    },
  };

  const itemVariants = {
    hidden: { y: 5, opacity: 0 }, // Minimal y movement
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.2 }, // Faster item transition
    },
  };

  const projects = [
    // Python Projects
    {
      id: 1,
      title: 'Password Strength Checker',
      description: 'A Streamlit app that analyzes password strength using machine learning algorithms and provides security recommendations based on industry standards.',
      image: '/projects/Password-Strength-Meter.jpg',
      category: 'python',
      technologies: ['Python', 'Streamlit', 'Security'],
      demoLink: 'https://password-strength-project.streamlit.app/',
      githubLink: 'https://github.com/Riaz-Hussain-Saifi/Python-Password-Strength-Project',
      icon: <FaSearch className="text-primary-500" />
    },
    {
      id: 2,
      title: 'Islamic Resource',
      description: 'Interactive Streamlit app for Quran recitations with verse-by-verse navigation and multiple reciter options. Features chapter selection and beautiful UI.',
      image: '/projects/Islamic-Resouce.jpg',
      category: 'python',
      technologies: ['Python', 'Streamlit', 'Audio'],
      demoLink: 'https://islamic-resource.streamlit.app/',
      githubLink: 'https://github.com/Riaz-Hussain-Saifi/Python-Quran-App',
      icon: <FaQuran className="text-primary-500" />
    },
    {
      id: 3,
      title: 'Multi-Unit Converter',
      description: 'Comprehensive tool for converting between various units of measurement including length, weight, temperature, and more with instant results and conversion history.',
      image: '/projects/Multi-Unit Converter.jpg',
      category: 'python',
      technologies: ['Python', 'Streamlit', 'Math'],
      demoLink: 'https://multi-unit--converter.streamlit.app/',
      githubLink: 'https://github.com/Riaz-Hussain-Saifi/Python-Multi-unit-converter',
      icon: <FaTools className="text-primary-500" />
    },
    {
      id: 4,
      title: 'Resume Builder',
      description: 'Professional resume generator with customizable templates, sections, and formatting options. Export to PDF with industry-standard layouts for job applications.',
      image: '/projects/Resume-Builder.jpg',
      category: 'python',
      technologies: ['Python', 'Streamlit', 'PDF'],
      demoLink: 'https://resume-builder-app.streamlit.app/',
      githubLink: 'https://github.com/Riaz-Hussain-Saifi/Python-Resume-Builder-app',
      icon: <FaFileAlt className="text-primary-500" />
    },
    {
      id: 5,
      title: 'MindScope AI',
      description: 'AI-driven mental health support tool offering mood tracking, personalized recommendations, and cognitive behavioral therapy exercises through natural language processing.',
      image: '/projects/MindScope-AI.jpg',
      category: 'ai',
      technologies: ['Python', 'Streamlit', 'AI', 'ML'],
      demoLink: 'https://mindscope-ai.streamlit.app/',
      githubLink: 'https://github.com/Riaz-Hussain-Saifi/Python-Chat-Bot',
      icon: <FaBrain className="text-primary-500" />
    },
    {
      id: 6,
      title: 'Birthday Age Calculator',
      description: 'Precise age calculator that computes years, months, days, hours, and minutes since birth with beautiful visualization and option to save results as images.',
      image: '/projects/Birthday-Age-Calculator.jpg',
      category: 'python',
      technologies: ['Python', 'Streamlit'],
      demoLink: 'https://birthday-age-calculator.streamlit.app/',
      githubLink: 'https://github.com/Riaz-Hussain-Saifi/python-birthday-age-calculator',
      icon: <FaTools className="text-primary-500" />
    },
    {
      id: 15,
      title: 'Python Quiz App',
      description: 'Interactive quiz platform with multiple categories, difficulty levels, and score tracking. Features timed questions and performance analytics for educational purposes.',
      image: '/projects/Python-Quiz-App.jpg',
      category: 'python',
      technologies: ['Python', 'Streamlit', 'Education'],
      demoLink: 'https://quizzes.streamlit.app/',
      githubLink: 'https://github.com/Riaz-Hussain-Saifi/Python-Quiz-app',
      icon: <FaCode className="text-primary-500" />
    },
    {
      id: 16,
      title: 'Python Growth Mindset',
      description: 'Document converter application promoting growth mindset principles through content transformation, visualization, and personalized learning resources.',
      image: '/projects/Growth-Mindset.jpg',
      category: 'python',
      technologies: ['Python', 'Streamlit', 'Document Processing'],
      demoLink: 'https://convert-doc.streamlit.app/',
      githubLink: 'https://github.com/Riaz-Hussain-Saifi/Python-Growth-Mindset',
      icon: <FaFileAlt className="text-primary-500" />
    },

    // Web Projects
    {
      id: 7,
      title: 'Fruit Store',
      description: 'Modern e-commerce platform for fresh fruits featuring responsive design, shopping cart functionality, payment processing, and order tracking with seasonal promotions.',
      image: '/projects/Fruit-Store.jpg',
      category: 'web',
      technologies: ['Next.js', 'React', 'Tailwind'],
      demoLink: 'https://fruit-store-bice.vercel.app/',
      githubLink: 'https://github.com/Riaz-Hussain-Saifi/Fruit-Store',
      icon: <FaShoppingCart className="text-primary-500" />
    },
    {
      id: 8,
      title: 'Governor Sindh Website',
      description: 'Official-style government website with comprehensive resources, news updates, public information portal, and document repository with advanced search functionality.',
      image: '/projects/Governor-Sindh.jpg',
      category: 'web',
      technologies: ['Next.js', 'React', 'Tailwind'],
      demoLink: 'https://governor-sindh-pi.vercel.app/',
      githubLink: 'https://github.com/Riaz-Hussain-Saifi/Governor-Sindh',
      icon: <FaCode className="text-primary-500" />
    },
    {
      id: 9,
      title: 'My Blog',
      description: 'Personal blog platform with content management system, category filtering, comment functionality, and newsletter subscription built with modern web technologies.',
      image: '/projects/My-Blog.jpg',
      category: 'web',
      technologies: ['Next.js', 'React', 'Markdown'],
      demoLink: 'https://my-blog-topaz-two.vercel.app/',
      githubLink: 'https://github.com/Riaz-Hussain-Saifi/my-blog',
      icon: <FaBook className="text-primary-500" />
    },
    {
      id: 10,
      title: 'API Fetched Store',
      description: 'Dynamic e-commerce store using external product APIs for real-time inventory, pricing, and product information with filtering, sorting, and search capabilities.',
      image: '/projects/API-Store.jpg',
      category: 'web',
      technologies: ['React', 'API', 'CSS'],
      demoLink: 'https://api-fetched-store.vercel.app/',
      githubLink: 'https://github.com/Riaz-Hussain-Saifi/API-fetched-store',
      icon: <FaShoppingCart className="text-primary-500" />
    },
    {
      id: 11,
      title: 'Editable Resume',
      description: 'Interactive resume builder with real-time previews, customizable sections, and export options. Features multiple templates and professional formatting suggestions.',
      image: '/projects/Editable-Resume.jpg',
      category: 'web',
      technologies: ['React', 'PDF', 'CSS'],
      demoLink: 'https://editable-resume-wine.vercel.app/',
      githubLink: 'https://github.com/Riaz-Hussain-Saifi/Editable-Resume',
      icon: <FaFileAlt className="text-primary-500" />
    },
    {
      id: 12,
      title: 'Simple Book API',
      description: 'RESTful API for managing book collections with CRUD operations, search functionality, and user authentication. Includes documentation and testing suite.',
      image: '/projects/Book-API.jpg',
      category: 'web',
      technologies: ['Node.js', 'Express', 'MongoDB'],
      demoLink: 'https://simple-book-api-beta.vercel.app/',
      githubLink: 'https://github.com/Riaz-Hussain-Saifi/Simple-Book-API',
      icon: <FaBook className="text-primary-500" />
    },
    {
      id: 13,
      title: 'Next.js Portfolio',
      description: 'Sleek portfolio showcasing projects with animations, dark mode, responsive design, and contact form integration. Features optimized performance and SEO.',
      image: '/projects/Portfolio.jpg',
      category: 'web',
      technologies: ['Next.js', 'React', 'Tailwind'],
      demoLink: 'https://next-js-portfolio-delta-tan.vercel.app/',
      githubLink: 'https://github.com/Riaz-Hussain-Saifi/Next.js-portfolio',
      icon: <FaCode className="text-primary-500" />
    },
    {
      id: 14,
      title: 'Task App',
      description: 'Minimalist task management application with drag-and-drop functionality, priority levels, due dates, and local storage for persistence across sessions.',
      image: '/projects/Task-App.jpg',
      category: 'web',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      demoLink: 'https://riaz-hussain-saifi.github.io/task-app/',
      githubLink: 'https://github.com/Riaz-Hussain-Saifi/task-app',
      icon: <FaCode className="text-primary-500" />
    },
  ];

  const filterCategories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'python', name: 'Python Apps' },
    { id: 'ai', name: 'AI Projects' },
  ];

  const filteredProjects = projects
    .filter(project => 
      (filter === 'all' || project.category === filter) && 
      (searchQuery === '' || 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    )
    .slice(0, visibleProjects);

  const handleLoadMore = () => {
    setVisibleProjects(prev => Math.min(prev + 3, projects.length)); // Load 3 more
  };

  const handleFilterOrSearch = (newFilter: string, newQuery: string) => {
    setFilter(newFilter);
    setSearchQuery(newQuery);
    setVisibleProjects(6); // Reset to 6
    controls.start('visible'); // Trigger animation immediately
  };

  const hasMoreProjects = visibleProjects < projects.filter(project => 
    (filter === 'all' || project.category === filter) &&
    (searchQuery === '' || 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()))
    )
  ).length;

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute top-40 right-0 w-80 h-80 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      <div className="absolute bottom-40 left-0 w-80 h-80 bg-secondary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="inline-block px-3 py-1 text-sm font-medium text-primary-500 bg-primary-500/10 rounded-full mb-4"
          >
            Portfolio
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">My Latest Work</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my projects in web development, Python apps, and AI solutions.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {filterCategories.map((category) => (
              <Button
                key={category.id}
                onClick={() => handleFilterOrSearch(category.id, searchQuery)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-dark-800 text-gray-300 hover:bg-dark-700'
                }`}
              >
                {category.name}
              </Button>
            ))}
          </div>
          
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => handleFilterOrSearch(filter, e.target.value)}
              className="w-full px-4 py-2 bg-dark-800 border border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent pr-10 text-white"
            />
            <FaSearch className="absolute right-3 top-3 text-gray-400" />
          </div>
        </div>

        {filteredProjects.length === 0 ? (
          <div className="text-center py-16">
            <FaSearch className="mx-auto text-gray-500 text-5xl mb-4" />
            <h3 className="text-xl font-medium text-gray-300">No projects found</h3>
            <p className="text-gray-400 mt-2">Try a different search term or category</p>
          </div>
        ) : (
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            key={filter + searchQuery + visibleProjects} // Better key for re-rendering
          >
            {filteredProjects.map((project) => (
              <motion.div 
                key={project.id} 
                variants={itemVariants}
                className="glass p-6 rounded-xl border border-dark-700 hover:border-primary-500 transition-all duration-500 hover:shadow-lg hover:shadow-primary-500/10 group"
              >
                <div className="relative w-full h-48 mb-6 overflow-hidden rounded-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback for missing images
                      const target = e.target as HTMLImageElement;
                      target.src = '/projects/project-placeholder.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-900/70 to-transparent opacity-80"></div>
                  <div className="absolute bottom-3 left-3 bg-dark-900/80 backdrop-blur-sm p-2 rounded-full">
                    {project.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4 line-clamp-3 h-18">{project.description}</p>
                
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="bg-dark-700 py-1 px-3 rounded-full text-sm font-medium text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between mt-auto pt-4 border-t border-dark-700">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <FaGithub className="mr-2" /> Code
                  </a>
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-primary-500 hover:text-primary-400 transition-colors duration-300"
                  >
                    <FaExternalLinkAlt className="mr-2" /> Live Demo
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {hasMoreProjects && (
          <div className="text-center mt-12">
            <Button
              onClick={handleLoadMore}
              className="px-6 py-3 bg-dark-800 text-white font-semibold rounded-lg border border-dark-700 hover:bg-dark-700 transition-all duration-300"
            >
              Load More Projects
            </Button>
          </div>
        )}

        <div className="text-center mt-12">
          <a
            href="https://github.com/Riaz-Hussain-Saifi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg shadow-md hover:bg-primary-700 transition-all duration-300"
          >
            <FaGithub className="mr-2" /> View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}