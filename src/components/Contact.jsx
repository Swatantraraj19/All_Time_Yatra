import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-[#FAFAFA] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">Get in Touch</h2>
        <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight text-dark mb-16">We'd love to hear from you.</h3>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white p-10 md:p-16 rounded-[3rem] shadow-[0_30px_80px_-20px_rgba(34,45,66,0.15)] border border-gray-100 flex flex-col items-center group relative overflow-hidden"
        >
          {/* Subtle gradient hover effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-8 border border-primary/20 shadow-inner">
            <Mail size={36} className="text-primary group-hover:scale-110 transition-transform duration-300" />
          </div>
          
          <h4 className="text-2xl font-bold text-dark mb-4">Email Support</h4>
          <p className="text-gray-500 mb-8 max-w-md mx-auto text-lg leading-relaxed">
            Have questions about our upcoming launch, need technical support, or interested in becoming a partner? Reach out directly.
          </p>
          
          <a href="mailto:alltimeyatrapvtltd@gmail.com" className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary hover:scale-[1.02] transition-transform inline-block break-all">
            alltimeyatrapvtltd@gmail.com
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
