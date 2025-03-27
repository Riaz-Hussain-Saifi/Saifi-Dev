// src/components/Footer.tsx
import Link from 'next/link';
import { 
  FaEnvelope, 
  FaGithub, 
  FaLinkedin, 
  FaYoutube, 
  FaInstagram, 
  FaArrowUp, 
  FaWhatsapp, 
  FaFacebook,
  FaDiscord,
  FaNpm
} from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/riaz-hussains-saifi', label: 'GitHub' },
    { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/riaz-hussain-saifi', label: 'LinkedIn' },
    { icon: <FaYoutube />, href: 'https://www.youtube.com/@Saifi_Developer', label: 'YouTube' },
    { icon: <FaInstagram />, href: 'https://www.instagram.com/saifi_developer/', label: 'Instagram' },
    { icon: <FaWhatsapp />, href: 'https://wa.me/+923000321640', label: 'WhatsApp' },
    { icon: <FaDiscord />, href: 'https://discord.com/channels/@riaz_hussain_saifi', label: 'Discord' },
    { icon: <FaFacebook />, href: 'https://www.facebook.com/RiazSaifiDeveloper', label: 'Facebook' },
    { icon: <FaNpm />, href: 'https://www.npmjs.com/~saifi_developer', label: 'NPM' },
    { icon: <FaEnvelope />, href: 'mailto:contact@saifidev.com', label: 'Email' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  const servicesLinks = [
    { name: 'Frontend Development', href: '#services' },
    { name: 'Backend Development', href: '#services' },
    { name: 'Full Stack Development', href: '#services' },
    { name: 'UI/UX Design', href: '#services' },
    { name: 'AI & ML Integration', href: '#services' },
  ];

  const toolsLinks = [
    { name: 'Resume Builder', href: '/resume-builder' },
    { name: 'AI Chat', href: '/ai-chat' },
  ];

  return (
    <footer className="bg-dark-950 pt-16 border-t border-dark-800 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-secondary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Link
              href="/"
              className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-600 mb-4 inline-block"
            >
              Saifi<span className="text-white">Dev</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Crafting exceptional digital experiences with modern web technologies. 
              Specializing in frontend, backend, and AI integration to bring your ideas to life.
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-dark-800 text-gray-400 hover:text-white hover:bg-primary-600 transition-colors duration-300"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary-500"></span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <svg className="w-3 h-3 mr-2 text-primary-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Services
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary-500"></span>
            </h3>
            <ul className="space-y-3">
              {servicesLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <svg className="w-3 h-3 mr-2 text-primary-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Tools
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary-500"></span>
            </h3>
            <ul className="space-y-3 mb-6">
              {toolsLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <svg className="w-3 h-3 mr-2 text-primary-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Contact
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary-500"></span>
            </h3>
            <p className="text-gray-400 flex items-start mb-2">
              <FaEnvelope className="mr-2 mt-1 text-primary-500" />
              contact@saifidev.com
            </p>
            <p className="text-gray-400 flex items-start">
              <FaWhatsapp className="mr-2 mt-1 text-primary-500" />
              +92 300 032 1640
            </p>
          </div>
        </div>

        <div className="py-6 border-t border-dark-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} SaifiDev. All rights reserved. Designed and developed by Riaz Hussain Saifi.
          </p>
          <a
            href="#home"
            className="p-3 rounded-full bg-primary-600/20 hover:bg-primary-600 transition-colors duration-300"
            aria-label="Back to top"
          >
            <FaArrowUp className="text-primary-500 hover:text-white transition-colors duration-300" />
          </a>
        </div>
      </div>
    </footer>
  );
}