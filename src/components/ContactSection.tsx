// src/components/ContactSection.tsx
'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  FaEnvelope, 
  FaPhoneAlt, 
  FaMapMarkerAlt, 
  FaGithub, 
  FaLinkedin, 
  FaYoutube, 
  FaInstagram,
  FaWhatsapp,
  FaDiscord,
  FaFacebook,
  FaJsSquare,
  FaPython,
  FaReact,
  FaNodeJs
} from 'react-icons/fa';
import { Button } from "@/components/ui/button";

// Add TypeScript interfaces
interface FormData {
  name: string;
  email: string;
  subject: string;
  service: string;
  message: string;
  budget: string;
}

interface SubmitStatus {
  type: 'success' | 'error' | null;
  message?: string;
}

function ContactSection() {
  // Update state definitions with proper types
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    service: '',
    message: '',
    budget: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus['type']>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // Add proper type for event handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Add proper type for form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        service: '',
        message: '',
        budget: '',
      });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      setIsSubmitting(false);
      setSubmitStatus('error');
    }
  };

  const services = [
    'Frontend Development',
    'Backend Development',
    'Full Stack Development',
    'UI/UX Design',
    'Responsive Web Design',
    'SEO Optimization',
    'AI & ML Integration',
    'Database Development',
    'Web Analytics',
    'Other / Custom',
  ];

  const budgetRanges = [
    '$500 - $1000',
    '$1000 - $2500',
    '$2500 - $5000',
    '$5000 - $10000',
    '$10000+',
    'Not sure yet',
  ];

  const socialLinks = [
    { icon: <FaGithub />, link: 'https://github.com/Riaz-Hussain-Saifi', name: 'GitHub' },
    { icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/riaz-hussain-saifi', name: 'LinkedIn' },
    { icon: <FaYoutube />, link: 'https://www.youtube.com/@Saifi_Developer', name: 'YouTube' },
    { icon: <FaInstagram />, link: 'https://www.instagram.com/saifi_developer/', name: 'Instagram' },
    { icon: <FaWhatsapp />, link: 'https://wa.me/+923000321640', name: 'WhatsApp' },
    { icon: <FaDiscord />, link: 'https://discord.com/channels/@riaz_hussain_saifi', name: 'Discord' },
    { icon: <FaFacebook />, link: 'https://www.facebook.com/RiazSaifiDeveloper', name: 'Facebook' },
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-full h-64 bg-gradient-radial from-primary-500/5 to-transparent"></div>
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
            Contact
          </motion.span>
          <h2 className="section-heading">Get In Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's work together to bring your ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-6">Let's Discuss Your Project</h3>
            <p className="text-gray-300 mb-8">
              I'm always open to new opportunities and collaborations. Whether you have a project
              inquiry, a question about my services, or just want to say hello, I'd love to hear from you.
            </p>

            <div className="space-y-6 mb-8">
              <motion.div 
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <div className="p-3 rounded-full bg-primary-500/10 mr-4">
                  <FaEnvelope className="text-primary-500" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a 
                    href="mailto:infosaifideveloper@gmail.com" 
                    className="text-gray-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    infosaifideveloper@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <div className="p-3 rounded-full bg-primary-500/10 mr-4">
                  <FaPhoneAlt className="text-primary-500" />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <a 
                    href="tel:+923000321640" 
                    className="text-gray-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    +92 300 032 1640
                  </a>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <div className="p-3 rounded-full bg-primary-500/10 mr-4">
                  <FaMapMarkerAlt className="text-primary-500" />
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-gray-400">Karachi, Pakistan</p>
                </div>
              </motion.div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect with me</h4>
              <div className="grid grid-cols-4 gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 flex flex-col items-center justify-center rounded-lg bg-dark-800 hover:bg-primary-600 transition-colors duration-300 gap-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
                    title={social.name}
                  >
                    {social.icon}
                    <span className="text-xs">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="font-semibold mb-4">Expertise In</h4>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 px-3 py-2 bg-dark-800 rounded-lg">
                  <FaJsSquare className="text-yellow-400" />
                  <span>JavaScript</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 bg-dark-800 rounded-lg">
                  <FaReact className="text-blue-400" />
                  <span>React.js</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 bg-dark-800 rounded-lg">
                  <FaNodeJs className="text-green-500" />
                  <span>Node.js</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 bg-dark-800 rounded-lg">
                  <FaPython className="text-blue-500" />
                  <span>Python</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="glass p-8 rounded-xl border border-dark-700 hover:border-primary-500/50 transition-all duration-500">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

              {submitStatus === 'success' && (
                <motion.div 
                  className="bg-green-500/20 border border-green-500 rounded-lg p-4 mb-6 text-green-500"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Your message has been sent successfully! I'll get back to you soon.
                  </div>
                </motion.div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-gray-300">
                      Your Name <span className="text-primary-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-3 bg-dark-800 border border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2 text-gray-300">
                      Your Email <span className="text-primary-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 bg-dark-800 border border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="subject" className="block mb-2 text-gray-300">
                      Subject <span className="text-primary-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full p-3 bg-dark-800 border border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block mb-2 text-gray-300">
                      Service You're Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full p-3 bg-dark-800 border border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="budget" className="block mb-2 text-gray-300">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full p-3 bg-dark-800 border border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select a budget range</option>
                    {budgetRanges.map((range, index) => (
                      <option key={index} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-gray-300">
                    Your Message <span className="text-primary-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full p-3 bg-dark-800 border border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex justify-center items-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                      </svg>
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;