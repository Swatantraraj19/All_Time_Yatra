import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-24 bg-dark text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full mix-blend-screen filter blur-[100px] opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/20 rounded-full mix-blend-screen filter blur-[100px] opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">Comparison</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight">The Smarter Choice</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Traditional Way */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-dark rounded-3xl p-8 lg:p-12 relative"
          >
            <div className="absolute -top-5 left-8 bg-gray-700 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
              Traditional Travel
            </div>
            <ul className="space-y-6 mt-6">
              {[
                "Expensive last-minute tickets",
                "Crowded and uncomfortable seats",
                "Randomly assigned seating",
                "Fixed, rigid schedules",
                "Multiple transfers needed",
                "High carbon footprint"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <XCircle className="text-red-400 mr-4 flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-300 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* All Time Yatra */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30 rounded-3xl p-8 lg:p-12 relative shadow-[0_0_40px_rgba(14,165,233,0.15)]"
          >
            <div className="absolute -top-5 left-8 bg-gradient-to-r from-primary to-secondary text-white px-6 py-1 rounded-full text-sm font-bold shadow-lg">
              All Time Yatra
            </div>
            <ul className="space-y-6 mt-6">
              {[
                "Affordable flat rates",
                "Comfortable cars with AC",
                "Choose your exact preferred seat",
                "Flexible timing & pickups",
                "Direct point-to-point drop",
                "Eco-friendly shared rides"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 className="text-primary mr-4 flex-shrink-0 mt-1" size={24} />
                  <span className="text-white font-medium text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
