import React from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Navigation } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Search className="w-10 h-10 text-primary" strokeWidth={1.5} />,
      title: "Find your path",
      desc: "Enter your destination and browse verified drivers heading exactly your way.",
      delay: 0.1
    },
    {
      icon: <MapPin className="w-10 h-10 text-primary" strokeWidth={1.5} />,
      title: "Lock it in",
      desc: "Select your exact seat preference, review driver ratings, and confirm instantly.",
      delay: 0.3
    },
    {
      icon: <Navigation className="w-10 h-10 text-primary" strokeWidth={1.5} />,
      title: "Travel smarter",
      desc: "Meet at the pickup point, ride comfortably in AC, and arrive smoothly.",
      delay: 0.5
    }
  ];

  return (
    <section id="how-it-works" className="py-32 bg-[#FAFAFA] relative overflow-hidden">
      {/* Premium Background Mesh */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-[20%] left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute top-[40%] right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-block bg-white text-primary border border-gray-100 shadow-sm px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
            The Process
          </div>
          <h3 className="text-4xl md:text-5xl font-extrabold text-dark tracking-tight">
            How <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">it works</span>
          </h3>
          <p className="mt-6 text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
            Get from A to B flawlessly. We have stripped away the complexity to make sharing your commute faster than ever.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-16 relative mt-16">
          {/* Elegant Connector Line */}
          <div className="hidden md:block absolute top-[45px] left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent -z-10"></div>

          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: step.delay, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center text-center relative z-10 group"
            >
              {/* Premium Icon Container */}
              <div className="w-24 h-24 rounded-[2rem] bg-white shadow-[0_20px_40px_-15px_rgba(34,45,66,0.1)] flex items-center justify-center mb-10 transform transition-transform duration-500 group-hover:-translate-y-2 border border-gray-50 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]"></div>
                
                {/* Step Number Badge */}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-dark text-white font-bold flex items-center justify-center text-sm shadow-lg border-2 border-white">
                  {idx + 1}
                </div>
                
                <div className="relative z-10">{step.icon}</div>
              </div>
              
              <h4 className="text-2xl font-extrabold text-dark mb-4 tracking-tight group-hover:text-primary transition-colors">{step.title}</h4>
              <p className="text-gray-500 leading-relaxed font-light">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
