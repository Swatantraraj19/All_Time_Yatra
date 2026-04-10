import React from 'react';
import { Car, MessageCircle, Share2, Camera, Heart, Smartphone, Apple } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-20 pb-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Call to Action */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-10 mb-16 text-center transform -translate-y-32 absolute left-4 right-4 sm:static sm:translate-y-0 sm:mx-0 shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">Your journey starts here.</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">The All Time Yatra app is launching soon. Get ready to join thousands of travelers and drivers commuting smartly and affordably.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-dark px-8 py-4 rounded-full font-bold shadow-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition">
              <Apple size={20} />
              Coming Soon to iOS
            </button>
            <button className="bg-dark text-white px-8 py-4 rounded-full font-bold shadow-lg border border-white/20 flex items-center justify-center gap-2 hover:bg-black transition">
              <Smartphone size={20} />
              Coming Soon to Android
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center mb-6">
              <img 
                src="/logo.png" 
                alt="All Time Yatra Logo" 
                className="h-24 w-24 object-contain bg-white rounded-3xl p-2 shadow-[0_0_20px_rgba(255,255,255,0.1)]" 
              />
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Making travel smart, affordable, and sustainable through our community-driven mobile application.
            </p>
            <div className="flex gap-4">
              <a href="#!" onClick={(e) => e.preventDefault()} className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors">
                <MessageCircle size={18} />
              </a>
              <a href="#!" onClick={(e) => e.preventDefault()} className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors">
                <Share2 size={18} />
              </a>
              <a href="#!" onClick={(e) => e.preventDefault()} className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors">
                <Camera size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Company</h4>
            <ul className="space-y-3">
              <li><a href="#!" onClick={(e) => e.preventDefault()} className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#!" onClick={(e) => e.preventDefault()} className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#!" onClick={(e) => e.preventDefault()} className="text-gray-400 hover:text-white transition-colors">Press</a></li>
              <li><a href="#!" onClick={(e) => e.preventDefault()} className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#!" onClick={(e) => e.preventDefault()} className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#!" onClick={(e) => e.preventDefault()} className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#!" onClick={(e) => e.preventDefault()} className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="#!" onClick={(e) => e.preventDefault()} className="text-gray-400 hover:text-white transition-colors">Cancellation Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Support</h4>
            <ul className="space-y-3">
              <li><a href="#!" onClick={(e) => e.preventDefault()} className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#!" onClick={(e) => e.preventDefault()} className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#!" onClick={(e) => e.preventDefault()} className="text-gray-400 hover:text-white transition-colors">Trust & Safety</a></li>
              <li><a href="#!" onClick={(e) => e.preventDefault()} className="text-gray-400 hover:text-white transition-colors">Driver Guidelines</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} All Time Yatra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
