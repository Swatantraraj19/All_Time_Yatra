import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-primary/10 text-primary border border-primary/20 inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
              Our Mission
            </div>
            <h3 className="text-4xl md:text-5xl font-extrabold text-dark tracking-tight leading-tight mb-6">
              Making travel <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                sustainable & social.
              </span>
            </h3>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed font-light">
              All Time Yatra began with a simple belief: empty car seats are a massive waste of resources, money, and missed connections. Millions of people travel the same routes every day, yet our roads are congested and carbon emissions are hitting records.
            </p>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed font-light">
              We built this platform to build a trusted community network. By connecting verified drivers with passengers heading the same way, we are reshaping inter-city commuting to be not only affordable, but highly eco-friendly and deeply social.
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-8 border-t border-gray-100 pt-8">
              <div>
                <p className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-dark to-gray-500 mb-2">5M+</p>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">Km Shared</p>
              </div>
              <div>
                <p className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-dark to-gray-500 mb-2">120+</p>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">Active Cities</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4 md:gap-6 relative z-10"
          >
            {/* Back glowing orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-[100px] -z-10"></div>
            
            <img 
              src="/about_1.png" 
              alt="Community" 
              className="w-full h-auto object-contain rounded-2xl shadow-2xl mt-12 hover:scale-[1.02] transition-transform duration-300"
            />
            
            <img 
              src="/about_2.png" 
              alt="Traveling together" 
              className="w-full h-auto object-contain rounded-2xl shadow-2xl mb-12 hover:scale-[1.02] transition-transform duration-300"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
