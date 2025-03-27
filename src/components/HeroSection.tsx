// src/components/HeroSection.tsx
'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { FaArrowDown, FaGithub, FaLinkedin, FaYoutube, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import * as THREE from 'three';

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Three.js background animation
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 3000;

    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: '#3b82f6',
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    camera.position.z = 2;

    // Handle resize
    window.addEventListener('resize', () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    });

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      particlesMesh.rotation.y += 0.0008;
      particlesMesh.rotation.x += 0.0002;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      scene.remove(particlesMesh);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  const socialLinks = [
    { icon: <FaGithub size={20} />, href: 'https://github.com/Riaz-Hussain-Saifi', color: 'hover:bg-gray-700' },
    { icon: <FaLinkedin size={20} />, href: 'https://www.linkedin.com/in/riaz-hussain-saifi', color: 'hover:bg-blue-700' },
    { icon: <FaYoutube size={20} />, href: 'https://www.youtube.com/@Saifi_Developer', color: 'hover:bg-red-700' },
    { icon: <FaInstagram size={20} />, href: 'https://www.instagram.com/saifi_developer/', color: 'hover:bg-pink-700' },
    { icon: <FaWhatsapp size={20} />, href: 'https://wa.me/+923000321640', color: 'hover:bg-green-700' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      <canvas ref={canvasRef} className="absolute inset-0 -z-10" />

      <div className="absolute inset-0 bg-gradient-to-b from-dark-950/50 via-dark-950/70 to-dark-950 -z-10"></div>

      <div className="container mx-auto px-4 py-16 md:py-32">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="inline-block px-4 py-1 mb-6 bg-primary-500/10 text-primary-500 rounded-full border border-primary-500/20 font-medium text-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Full Stack Developer & AI Specialist
            </motion.span>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hello, I am <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-600">Riaz Hussain Saifi</span>
            </h1>

            <h2 className="text-2xl md:text-4xl font-bold mb-6 flex">
              I build
              <span className="ml-3 text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-500">
                <TypeAnimation
                  sequence={[
                    'websites',
                    1500,
                    'web apps',
                    1500,
                    'AI solutions',
                    1500,
                    'user experiences',
                    1500,
                    'Python apps',
                    1500,
                    'APIs',
                    1500,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </h2>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              I create exceptional digital experiences with cutting-edge technologies.
              Specializing in frontend, backend, AI integration, and everything in between.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="#contact"
                className="px-4 py-3 bg-primary-600 text-white font-semibold rounded-lg shadow-md hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                Let us work together
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>
              <a
                href="#projects"
                className="px-4 py-3 bg-transparent text-white font-semibold rounded-lg border border-primary-600 hover:bg-primary-600/20 transition-all duration-300"
              >
                View Projects
              </a>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-400">Follow me:</span>
              <div className="flex gap-2">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full bg-dark-800 text-gray-300 hover:text-white transition-all duration-300 ${social.color}`}
                    whileHover={{ y: -3 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2 flex justify-center relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Background shapes */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
              <div className="absolute top-0 left-20 w-72 h-72 bg-secondary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

              {/* Simplified hexagon frame with improved image display */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-72 h-72 md:w-80 md:h-80">
                  {/* Outer hexagon border */}
                  <div className="absolute inset-0">
                    <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <polygon 
                        points="50 0, 93.3 25, 93.3 75, 50 100, 6.7 75, 6.7 25" 
                        fill="rgba(59, 130, 246, 0.1)" 
                        stroke="#3b82f6" 
                        strokeWidth="0.5"
                      />
                    </svg>
                  </div>
                  
                  {/* Inner hexagon with clipped image */}
                  <div className="absolute inset-8">
                    <div className="w-full h-full overflow-hidden" style={{ 
                      clipPath: "polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)",
                      backgroundColor: "#111827"
                    }}>
                      <div className="relative w-full h-full">
                        <Image
                          src="/Profile.jpg"
                          alt="Riaz Hussain Saifi"
                          fill
                          style={{ objectFit: 'cover', objectPosition: 'center' }}
                          sizes="(max-width: 768px) 288px, 320px"
                          priority
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating tech icons */}
              <div className="absolute -top-4 -left-4 p-3 bg-dark-800 rounded-full shadow-lg animate-float">
                <Image src="/React-JS.png" alt="React" width={30} height={30} />
              </div>
              <div className="absolute top-1/4 -right-4 p-3 bg-dark-800 rounded-full shadow-lg animate-float animation-delay-1000">
                <Image src="/Python.png" alt="Python" width={30} height={30} />
              </div>
              <div className="absolute bottom-1/4 -left-4 p-3 bg-dark-800 rounded-full shadow-lg animate-float animation-delay-2000">
                <Image src="/Next-JS.png" alt="Next.js" width={30} height={30} />
              </div>
              <div className="absolute -bottom-4 -right-4 p-3 bg-dark-800 rounded-full shadow-lg animate-float animation-delay-3000">
                <Image src="/AI.png" alt="AI" width={30} height={30} />
            </div>
          </div>
      </motion.div>
    </div>
        
    <motion.a
      href="#about"
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-400 hover:text-white transition-colors duration-300"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
    >
        <span className="mb-2">Scroll Down</span>
        <FaArrowDown className="animate-bounce" />
      </motion.a>
    </div>
</section>
  );
}