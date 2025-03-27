// src/components/ServicesSection.tsx
'use client';

import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaLaptopCode, 
  FaMobileAlt, 
  FaServer, 
  FaPalette, 
  FaSearch, 
  FaBrain,
  FaCode,
  FaDatabase,
  FaChartLine,
  FaStar,
  FaCheck
} from 'react-icons/fa';
import { JSX } from 'react/jsx-runtime';

interface Service {
  id: number;
  icon: JSX.Element;
  title: string;
  description: string;
  skills: string[];
  features: string[];
  price: {
    basic: string;
    standard: string;
    premium: string;
  };
}

export default function ServicesSection() {
  const [activeService, setActiveService] = useState<number | null>(null);
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const services: Service[] = [
    {
      id: 1,
      icon: <FaLaptopCode size={36} className="text-primary-500" />,
      title: 'Frontend Development',
      description: 'Creating responsive and interactive user interfaces using modern frameworks like React and Next.js.',
      skills: ['React.js', 'Next.js 15', 'Tailwind CSS', 'JavaScript', 'TypeScript'],
      features: [
        'Custom web application development',
        'Responsive design for all devices',
        'Interactive UI/UX implementation',
        'Performance optimization',
        'Cross-browser compatibility',
      ],
      price: {
        basic: '$400 - $800',
        standard: '$800 - $1500',
        premium: '$1500+'
      }
    },
    {
      id: 2,
      icon: <FaServer size={36} className="text-primary-500" />,
      title: 'Backend Development',
      description: 'Building robust server-side applications and RESTful APIs with Node.js and Python.',
      skills: ['Node.js', 'Express.js', 'Python', 'MongoDB', 'PostgreSQL'],
      features: [
        'RESTful API development',
        'Database design and implementation',
        'Authentication systems',
        'Payment gateway integration',
        'Performance optimization',
      ],
      price: {
        basic: '$500 - $900',
        standard: '$900 - $1700',
        premium: '$1700+'
      }
    },
    {
      id: 3,
      icon: <FaCode size={36} className="text-primary-500" />,
      title: 'Full Stack Development',
      description: 'End-to-end web application development combining frontend and backend technologies.',
      skills: ['MERN Stack', 'Next.js', 'Express', 'Python', 'PostgreSQL'],
      features: [
        'Complete web application development',
        'Frontend and backend integration',
        'Database design and management',
        'Authentication and authorization',
        'Third-party API integration',
      ],
      price: {
        basic: '$800 - $1500',
        standard: '$1500 - $3000',
        premium: '$3000+'
      }
    },
    {
      id: 4,
      icon: <FaMobileAlt size={36} className="text-primary-500" />,
      title: 'Responsive Web Design',
      description: 'Developing mobile-first websites that work seamlessly across all devices and screen sizes.',
      skills: ['CSS3', 'Flexbox', 'Grid', 'Media Queries', 'Bootstrap'],
      features: [
        'Mobile-first design approach',
        'Cross-device compatibility',
        'Responsive layouts',
        'Optimized for touch interfaces',
        'Fast loading times',
      ],
      price: {
        basic: '$300 - $600',
        standard: '$600 - $1200',
        premium: '$1200+'
      }
    },
    {
      id: 5,
      icon: <FaPalette size={36} className="text-primary-500" />,
      title: 'UI/UX Design',
      description: 'Creating intuitive user interfaces and experiences with a focus on usability and accessibility.',
      skills: ['Wireframing', 'Prototyping', 'User Research', 'Figma', 'Adobe XD'],
      features: [
        'User interface design',
        'User experience optimization',
        'Wireframing and prototyping',
        'Usability testing',
        'Design system creation',
      ],
      price: {
        basic: '$400 - $800',
        standard: '$800 - $1500',
        premium: '$1500+'
      }
    },
    {
      id: 6,
      icon: <FaSearch size={36} className="text-primary-500" />,
      title: 'SEO Optimization',
      description: 'Improving website visibility in search engines to drive organic traffic and increase rankings.',
      skills: ['On-page SEO', 'Performance Optimization', 'Schema Markup', 'Analytics'],
      features: [
        'On-page SEO optimization',
        'Technical SEO audit',
        'Performance optimization',
        'Schema markup implementation',
        'Analytics and reporting',
      ],
      price: {
        basic: '$300 - $500',
        standard: '$500 - $1000',
        premium: '$1000+'
      }
    },
    {
      id: 7,
      icon: <FaBrain size={36} className="text-primary-500" />,
      title: 'AI & ML Integration',
      description: 'Incorporating artificial intelligence and machine learning solutions into web applications.',
      skills: ['Python', 'TensorFlow', 'Data Analysis', 'API Integration'],
      features: [
        'AI-powered feature development',
        'ML model integration',
        'Chatbot implementation',
        'Data analysis and visualization',
        'Personalization algorithms',
      ],
      price: {
        basic: '$600 - $1200',
        standard: '$1200 - $2500',
        premium: '$2500+'
      }
    },
    {
      id: 8,
      icon: <FaDatabase size={36} className="text-primary-500" />,
      title: 'Database Development',
      description: 'Designing and implementing efficient database solutions for web applications.',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Database Optimization', 'Data Modeling'],
      features: [
        'Database architecture design',
        'Schema development',
        'Query optimization',
        'Data migration',
        'Database maintenance',
      ],
      price: {
        basic: '$400 - $800',
        standard: '$800 - $1500',
        premium: '$1500+'
      }
    },
    {
      id: 9,
      icon: <FaChartLine size={36} className="text-primary-500" />,
      title: 'Web Analytics',
      description: 'Setting up and analyzing web analytics to track user behavior and improve website performance.',
      skills: ['Google Analytics', 'Data Visualization', 'Conversion Tracking', 'User Behavior'],
      features: [
        'Analytics setup and configuration',
        'Custom report creation',
        'User behavior analysis',
        'Conversion tracking',
        'Performance recommendations',
      ],
      price: {
        basic: '$300 - $600',
        standard: '$600 - $1200',
        premium: '$1200+'
      }
    },
  ];

  const ServiceDetails = ({ service }: { service: Service }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
        className="mt-8 glass p-6 rounded-xl border border-dark-700"
      >
        <h3 className="text-2xl font-bold mb-4 flex items-center">
          {service.icon}
          <span className="ml-3">{service.title}</span>
        </h3>
        
        <p className="text-gray-300 mb-6">{service.description}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="glass p-4 rounded-lg border border-dark-700">
            <div className="text-center mb-2">
              <span className="inline-block px-3 py-1 bg-dark-800 rounded-full text-sm font-medium text-primary-400">Basic</span>
            </div>
            <div className="text-center text-2xl font-bold mb-3">{service.price.basic}</div>
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-gray-400">
                <FaCheck className="text-primary-500 mr-2" size={12} />
                Essential features
              </li>
              <li className="flex items-center text-sm text-gray-400">
                <FaCheck className="text-primary-500 mr-2" size={12} />
                Basic support
              </li>
              <li className="flex items-center text-sm text-gray-400">
                <FaCheck className="text-primary-500 mr-2" size={12} />
                Standard delivery
              </li>
            </ul>
          </div>
          
          <div className="glass p-4 rounded-lg border border-primary-500 relative">
            <div className="absolute -top-3 right-4 bg-primary-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              POPULAR
            </div>
            <div className="text-center mb-2">
              <span className="inline-block px-3 py-1 bg-primary-500/20 rounded-full text-sm font-medium text-primary-400">Standard</span>
            </div>
            <div className="text-center text-2xl font-bold mb-3">{service.price.standard}</div>
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-gray-400">
                <FaCheck className="text-primary-500 mr-2" size={12} />
                All Basic features
              </li>
              <li className="flex items-center text-sm text-gray-400">
                <FaCheck className="text-primary-500 mr-2" size={12} />
                Priority support
              </li>
              <li className="flex items-center text-sm text-gray-400">
                <FaCheck className="text-primary-500 mr-2" size={12} />
                Faster delivery
              </li>
              <li className="flex items-center text-sm text-gray-400">
                <FaCheck className="text-primary-500 mr-2" size={12} />
                Custom requests
              </li>
            </ul>
          </div>
          
          <div className="glass p-4 rounded-lg border border-dark-700">
            <div className="text-center mb-2">
              <span className="inline-block px-3 py-1 bg-dark-800 rounded-full text-sm font-medium text-primary-400">Premium</span>
            </div>
            <div className="text-center text-2xl font-bold mb-3">{service.price.premium}</div>
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-gray-400">
                <FaCheck className="text-primary-500 mr-2" size={12} />
                All Standard features
              </li>
              <li className="flex items-center text-sm text-gray-400">
                <FaCheck className="text-primary-500 mr-2" size={12} />
                24/7 dedicated support
              </li>
              <li className="flex items-center text-sm text-gray-400">
                <FaCheck className="text-primary-500 mr-2" size={12} />
                Express delivery
              </li>
              <li className="flex items-center text-sm text-gray-400">
                <FaCheck className="text-primary-500 mr-2" size={12} />
                Advanced customization
              </li>
              <li className="flex items-center text-sm text-gray-400">
                <FaCheck className="text-primary-500 mr-2" size={12} />
                Ongoing maintenance
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-3">Key Features</h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {service.features.map((feature, i) => (
              <li key={i} className="flex items-start">
                <FaStar className="text-primary-500 mt-1 mr-2" size={14} />
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-3">Technologies Used</h4>
          <div className="flex flex-wrap gap-2">
            {service.skills.map((skill, i) => (
              <span key={i} className="bg-dark-700 py-1 px-3 rounded-full text-sm font-medium text-gray-300">
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mt-8">
          <a href="#contact" className="px-4 py-3 bg-primary-600 text-white font-semibold rounded-lg shadow-md hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center">
            Get a Quote
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </a>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="services" className="py-20 bg-dark-900 relative overflow-hidden">
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
            Services
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-600">What I Offer</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional development services to help businesses and individuals bring their ideas to life
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className={`glass p-6 rounded-xl border ${
                activeService === service.id 
                  ? 'border-primary-500 shadow-lg shadow-primary-500/10' 
                  : 'border-dark-700 hover:border-primary-500/50'
              } transition-all duration-300 cursor-pointer`}
              onClick={() => setActiveService(activeService === service.id ? null : service.id)}
            >
              <div className="p-4 rounded-lg bg-dark-800 w-16 h-16 flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
              {service.skills.slice(0, 3).map((skill, skillIndex) => (
                  <span key={skillIndex} className="bg-dark-700 py-1 px-3 rounded-full text-sm font-medium text-gray-300">
                    {skill}
                  </span>
                ))}
                {service.skills.length > 3 && (
                  <span className="bg-dark-700 py-1 px-3 rounded-full text-sm font-medium text-gray-300">
                    +{service.skills.length - 3} more
                  </span>
                )}
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-dark-700">
                <span className="text-primary-500 font-medium">Starting at {service.price.basic.split('-')[0]}</span>
                <span className="text-sm text-gray-400 flex items-center">
                  {activeService === service.id ? 'Hide Details' : 'View Details'}
                  <svg 
                    className={`ml-1 w-4 h-4 transition-transform duration-300 ${activeService === service.id ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {activeService && <ServiceDetails service={services.find(s => s.id === activeService)!} />}

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">Need a Custom Solution?</h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            I provide tailored development solutions to meet your specific needs and requirements.
            Let us discuss your project and bring your vision to life.
          </p>
          <a href="#contact" className="px-4 py-3 bg-primary-600 text-white font-semibold rounded-lg shadow-md hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center">
            Get in Touch
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}