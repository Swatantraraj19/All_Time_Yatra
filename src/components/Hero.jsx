import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Apple } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[85vh] flex items-center pt-24 pb-16 overflow-hidden bg-[#FAFAFA]">
      {/* Hyper-Premium Background Mesh Gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[5%] -left-[5%] w-[40vw] h-[40vw] rounded-full bg-primary/10 mix-blend-multiply filter blur-[120px] opacity-70 animate-blob"></div>
        <div className="absolute top-[20%] -right-[5%] w-[35vw] h-[35vw] rounded-full bg-secondary/10 mix-blend-multiply filter blur-[120px] opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-[10%] left-[15%] w-[50vw] h-[50vw] rounded-full bg-accent/5 mix-blend-multiply filter blur-[130px] opacity-60 animate-blob animation-delay-4000"></div>

        {/* Subtle grid overlay for structure */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDQwIEwgNDAgNDAgTCA0MCAwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMCwwLDAsMC4wMikiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-[0.03]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full -mt-4 lg:-mt-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col space-y-10"
          >
            <div>
              <h1 className="text-[3.5rem] md:text-6xl lg:text-7xl font-extrabold text-dark leading-[1.1] tracking-[-0.02em] mb-8">
                Travel Together, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
                  Save More.
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-500 leading-relaxed max-w-xl font-light">
                Why travel alone? Book comfortable rides at low prices, or offer your empty seats to split fuel costs. Friendly, safe, and super easy.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5 pt-2">
              <button className="group relative bg-[#0B1120] text-white rounded-[2rem] py-4 px-8 font-semibold flex justify-center items-center gap-4 transition-transform duration-300 hover:scale-[1.03] overflow-hidden shadow-2xl">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-gray-700 to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Apple size={30} className="relative z-10 text-white" />
                <div className="flex flex-col items-start relative z-10 text-left">
                  <span className="text-[10px] text-gray-400 font-medium uppercase tracking-widest leading-none mb-1">Download on the</span>
                  <span className="text-xl leading-none font-bold">App Store</span>
                </div>
              </button>

              <button className="group relative rounded-[2rem] p-[2px] transition-transform duration-300 hover:scale-[1.03] shadow-[0_0_30px_rgba(239,185,134,0.3)] hover:shadow-[0_0_40px_rgba(206,133,75,0.4)]">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-[2rem] opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-[2rem] py-[14px] px-8 flex justify-center items-center gap-4 w-full h-full">
                  <Smartphone size={30} className="text-primary group-hover:text-secondary transition-colors duration-500" />
                  <div className="flex flex-col items-start text-left">
                    <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest leading-none mb-1">GET IT ON</span>
                    <span className="text-xl leading-none font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Google Play</span>
                  </div>
                </div>
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, filter: "blur(15px)", scale: 0.95 }}
            animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:ml-10 mt-16 lg:mt-10"
          >
            {/* Extremely Premium Image Frame */}
            <div className="relative animate-float rounded-[3rem] p-3 bg-gradient-to-br from-white/60 to-white/10 border border-white/60 shadow-[0_30px_80px_-20px_rgba(34,45,66,0.15)] backdrop-blur-3xl mx-auto max-w-[90%]">
              {/* Outer Glowing Halo */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 via-secondary/20 to-accent/30 rounded-[4rem] blur-3xl -z-10 opacity-70"></div>

              <img
                src="/hero1.jpeg"
                alt="All Time Yatra Hero"
                className="w-full h-[350px] lg:h-[450px] object-cover rounded-[2.5rem] shadow-inner"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
