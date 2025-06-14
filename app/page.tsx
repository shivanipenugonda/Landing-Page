"use client"
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  GraduationCap, 
  Users, 
  Globe, 
  BookOpen, 
  Zap, 
  Heart,
  ChevronRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Target,
  Lightbulb,
  Award
} from 'lucide-react';

// Custom Hook for Animated Counter
const useAnimatedCounter = (end: number, duration = 2) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      let startTime = Date.now();
      let animationFrame: number;

      const updateCount = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / (duration * 1000), 1);
        const currentCount = Math.floor(progress * end);
        
        setCount(currentCount);
        
        if (progress < 1) {
          animationFrame = requestAnimationFrame(updateCount);
        }
      };

      animationFrame = requestAnimationFrame(updateCount);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, end, duration]);

  return { count, ref };
};

// HeroSection Component
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Welcome to{' '}
            <span className="bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent">
              MITS
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Empowering Future Innovators Across Campuses
          </motion.p>
          
          <motion.p 
            className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Micro Information Technology Services - Your gateway to cutting-edge digital solutions, 
            academic partnerships, and transformative technology services.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Join Now</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
            
            <motion.button
              className="group px-8 py-4 border-2 border-emerald-500 text-emerald-400 font-semibold rounded-xl hover:bg-emerald-500 hover:text-white transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <BookOpen className="w-5 h-5" />
              <span>Explore Programs</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// MissionSection Component
const MissionSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });

  const missionCards = [
    {
      icon: Target,
      title: "Technology Excellence",
      description: "Delivering cutting-edge solutions that transform how students and institutions interact with technology."
    },
    {
      icon: Heart,
      title: "Academic Partnership",
      description: "Building strong relationships with universities to create meaningful educational opportunities."
    },
    {
      icon: Lightbulb,
      title: "Innovation Focus",
      description: "Pioneering new approaches to digital education and student empowerment through technology."
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Our <span className="text-indigo-600">Mission</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            At Micro Information Technology Services, we are committed to empowering students and institutions 
            through cutting-edge digital solutions, fostering academic partnerships, and delivering transformative 
            technology services that shape the future of education.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {missionCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 h-full">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  <card.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">{card.title}</h3>
                <p className="text-slate-600 leading-relaxed">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// AffiliatedUniversities Component
const AffiliatedUniversities = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });

  const universities = [
    { name: "Harvard University", logo: "🏛️" },
    { name: "Stanford University", logo: "🌲" },
    { name: "MIT", logo: "🔬" },
    { name: "Oxford University", logo: "📚" },
    { name: "Cambridge University", logo: "🎓" },
    { name: "Yale University", logo: "🦅" },
    { name: "Princeton University", logo: "🐅" },
    { name: "Columbia University", logo: "🗽" },
    { name: "University of Chicago", logo: "🏙️" },
    { name: "California Institute of Technology", logo: "🚀" },
    { name: "University of Pennsylvania", logo: "🔔" },
    { name: "Cornell University", logo: "🌿" }
  ];

  return (
    <section ref={ref} className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Affiliated <span className="text-emerald-400">Universities</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Partnering with leading institutions worldwide to deliver exceptional educational experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {universities.map((university, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 border border-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-indigo-500/20">
                <motion.div
                  className="text-4xl mb-3"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {university.logo}
                </motion.div>
                <h3 className="text-sm font-medium text-white group-hover:text-emerald-400 transition-colors">
                  {university.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// SocialMediaStats Component
const SocialMediaStats = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    {
      icon: Users,
      label: "Students",
      value: 25000,
      suffix: "+",
      color: "from-indigo-500 to-purple-600"
    },
    {
      icon: GraduationCap,
      label: "Universities",
      value: 100,
      suffix: "+",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: Globe,
      label: "Network Reach",
      value: 300,
      suffix: "k+",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: Award,
      label: "Active Projects",
      value: 150,
      suffix: "+",
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Our Growing <span className="text-indigo-600">Network</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Join thousands of students and hundreds of institutions in our thriving community
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const { count, ref: counterRef } = useAnimatedCounter(stat.value, 2.5);
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 hover:border-indigo-200">
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 10 }}
                  >
                    <stat.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <div ref={counterRef} className="text-4xl font-bold text-slate-800 mb-2">
                    {count.toLocaleString()}{stat.suffix}
                  </div>
                  
                  <p className="text-slate-600 font-medium">{stat.label}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  const quickLinks = [
    { name: "About", href: "#" },
    { name: "Programs", href: "#" },
    { name: "Universities", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-indigo-400">MITS</span>
              </h3>
              <p className="text-slate-300 mb-6 max-w-md">
                Micro Information Technology Services - Empowering students and institutions 
                through cutting-edge digital solutions and academic partnerships.
              </p>
              
              <div className="flex items-center gap-4 mb-4">
                <Mail className="w-5 h-5 text-indigo-400" />
                <span className="text-slate-300">contact@mits.edu</span>
              </div>
              
              <div className="flex items-center gap-4 mb-4">
                <Phone className="w-5 h-5 text-indigo-400" />
                <span className="text-slate-300">+1 (555) 123-4567</span>
              </div>
              
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-indigo-400" />
                <span className="text-slate-300">Innovation Campus, Tech Valley</span>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-slate-300 hover:text-indigo-400 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Social Media */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="text-lg font-semibold mb-6 text-white">Connect With Us</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-slate-800 mt-12 pt-8 text-center"
        >
          <p className="text-slate-400">
            © 2025 Micro Information Technology Services (MITS). All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

// Main Homepage Component
const MITSHomepage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <MissionSection />
      <AffiliatedUniversities />
      <SocialMediaStats />
      <Footer />
    </div>
  );
};

export default MITSHomepage;