import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Map, CreditCard, Clock, Star, Zap } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Map strokeWidth={1.5} />,
      title: "Seamless Seat Selection",
      desc: "Our visual app interface lets you pick your exact preferred seat in seconds."
    },
    {
      icon: <ShieldCheck strokeWidth={1.5} />,
      title: "Government Verified",
      desc: "Every single driver is rigorously authenticated with Aadhar and Driving records."
    },
    {
      icon: <Star strokeWidth={1.5} />,
      title: "Premium Community",
      desc: "Transparent 5-star rating system ensures you travel only with the best."
    },
    {
      icon: <CreditCard strokeWidth={1.5} />,
      title: "Transparent Pricing",
      desc: "No hidden fees, no surge pricing. Just fair share covering fuel costs."
    },
    {
      icon: <Clock strokeWidth={1.5} />,
      title: "Real-time Tracking",
      desc: "Share your live location string with your family via WhatsApp instantly."
    },
    {
      icon: <Zap strokeWidth={1.5} />,
      title: "Instant Ride Matching",
      desc: "Our smart algorithm connects you with the perfect co-traveler in seconds."
    }
  ];

  return (
    <section id="features" className="py-32 bg-dark relative overflow-hidden">
      {/* Deep Space Premium Glowing Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDQwIEwgNDAgNDAgTCA0MCAwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-50"></div>
      <div className="absolute top-0 right-[10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/20 rounded-full blur-[100px] md:blur-[150px] pointer-events-none opacity-60"></div>
      <div className="absolute bottom-0 left-[10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-secondary/10 rounded-full blur-[100px] md:blur-[150px] pointer-events-none opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24 flex flex-col items-center">
          <div className="bg-primary/10 text-primary border border-primary/20 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
            Exclusive Features
          </div>
          <h3 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-2xl">
            Designed for the <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">modern commuter.</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
            >
              {/* Animated hover gradient border behind the card */}
              <div className="absolute -inset-[1px] bg-gradient-to-br from-primary/50 via-secondary/10 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              
              <div className="relative h-full bg-[#182133]/80 backdrop-blur-2xl p-10 rounded-[2rem] border border-white/10 group-hover:border-white/20 transition-colors shadow-2xl">
                <div className="w-16 h-16 bg-white/5 text-primary rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-secondary group-hover:text-dark transition-all duration-500 shadow-[0_0_20px_rgba(239,185,134,0.05)] group-hover:shadow-[0_0_30px_rgba(239,185,134,0.4)]">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{feature.title}</h4>
                <p className="text-gray-400 leading-relaxed font-light">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
