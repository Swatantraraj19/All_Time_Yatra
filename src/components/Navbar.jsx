import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { Menu, X, Car, Mail } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'How it Works', to: 'how-it-works' },
    { name: 'Features', to: 'features' },
    { name: 'Why Us', to: 'why-us' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center cursor-pointer -ml-2 transition-transform hover:scale-105">
            <img 
              src="/logo.png" 
              alt="All Time Yatra Logo" 
              className="h-10 md:h-12 lg:h-14 w-auto object-contain drop-shadow-md" 
            />
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                className="text-gray-600 hover:text-primary font-medium cursor-pointer transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="bg-gradient-to-r from-primary to-secondary text-dark px-6 py-2.5 rounded-full font-bold transition-all shadow-[0_0_15px_rgba(239,185,134,0.4)] hover:shadow-[0_0_25px_rgba(239,185,134,0.6)] transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
            >
              <Mail size={18} />
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-dark focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden glass absolute top-full left-0 w-full flex flex-col items-center py-6 space-y-4 shadow-xl"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-primary font-medium cursor-pointer text-lg"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="contact"
            smooth={true}
            duration={500}
            onClick={() => setIsOpen(false)}
            className="w-11/12 bg-gradient-to-r from-primary to-secondary text-dark px-6 py-3 rounded-full font-bold shadow-md flex justify-center items-center gap-2 cursor-pointer"
          >
            <Mail size={18} />
            Contact Us
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
