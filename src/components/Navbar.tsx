// src/components/Navbar.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaGithub, 
  FaLinkedin, 
  FaBars, 
  FaTimes, 
  FaYoutube, 
  FaInstagram,
} from 'react-icons/fa';
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'services', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-dark-900/95 backdrop-blur-md shadow-md shadow-primary-600/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link 
              href="/" 
              className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-600"
            >
              Saifi<span className="text-white">Dev</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-300 relative ${
                  activeSection === link.id
                    ? 'text-primary-500'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="navIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            ))}

            <div className="flex items-center space-x-2 ml-4">
              <Link 
                href="https://github.com/riaz-hussains-saifi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-dark-800 hover:bg-primary-600 transition-colors duration-300"
              >
                <FaGithub className="text-gray-300 hover:text-white" size={18} />
              </Link>
              <Link 
                href="https://www.linkedin.com/in/riaz-hussain-saifi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-dark-800 hover:bg-primary-600 transition-colors duration-300"
              >
                <FaLinkedin className="text-gray-300 hover:text-white" size={18} />
              </Link>
              <Link 
                href="https://www.youtube.com/@Saifi_Developer" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-dark-800 hover:bg-primary-600 transition-colors duration-300"
              >
                <FaYoutube className="text-gray-300 hover:text-white" size={18} />
              </Link>
              <Link 
                href="https://www.instagram.com/saifi_developer/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-dark-800 hover:bg-primary-600 transition-colors duration-300"
              >
                <FaInstagram className="text-gray-300 hover:text-white" size={18} />
              </Link>
            </div>
          </nav>

          {/* Mobile menu Button */}
          <Button
            className="md:hidden p-2 rounded-md text-gray-300 hover:text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </Button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav 
              className="md:hidden mt-4 py-4 space-y-2 bg-dark-800 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block px-4 py-2 hover:bg-dark-700 transition-colors duration-300 ${
                    activeSection === link.id ? 'text-primary-500 font-medium' : 'text-gray-300'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
                       
              <div className="flex px-4 pt-4 border-t border-dark-700 mt-3 space-x-3">
                <Link 
                  href="https://github.com/riaz-hussains-saifi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-dark-700 hover:bg-primary-600 transition-colors duration-300"
                >
                  <FaGithub className="text-gray-300" size={18} />
                </Link>
                <Link 
                  href="https://www.linkedin.com/in/riaz-hussain-saifi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-dark-700 hover:bg-primary-600 transition-colors duration-300"
                >
                  <FaLinkedin className="text-gray-300" size={18} />
                </Link>
                <Link 
                  href="https://www.youtube.com/@Saifi_Developer" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-dark-700 hover:bg-primary-600 transition-colors duration-300"
                >
                  <FaYoutube className="text-gray-300" size={18} />
                </Link>
                <Link 
                  href="https://www.instagram.com/saifi_developer/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-dark-700 hover:bg-primary-600 transition-colors duration-300"
                >
                  <FaInstagram className="text-gray-300" size={18} />
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}