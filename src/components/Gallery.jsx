import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const images = [
    {
      src: '/gallery_1.png',
      alt: 'Scenic Drive',
      title: 'Scenic Journeys',
      description: 'Experience the beauty of the roads less traveled.'
    },
    {
      src: '/gallery_2.png',
      alt: 'Luxury Ride',
      title: 'Comfort First',
      description: 'Travel in style with our premium vehicle options.'
    },
    {
      src: '/gallery_3.png',
      alt: 'Happy Travelers',
      title: 'Social Connections',
      description: 'Meet new people and share memorable experiences.'
    },
    {
      src: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      alt: 'Road Trip',
      title: 'Adventure Awaits',
      description: 'Life is a journey, make it an unforgettable one.'
    },
    {
      src: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      alt: 'Coastal Road',
      title: 'Reliable Rides',
      description: 'Verified drivers and safe travel protocols.'
    },
    {
      src: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      alt: 'City Skyline',
      title: 'Urban Mobility',
      description: 'Seamlessly navigate city-to-city commutes.'
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-primary/10 text-primary border border-primary/20 inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            Travel Showcase
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark tracking-tight leading-tight mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Travel Gallery</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 font-light">
            Glimpses into the journeys, connections, and beautiful moments shared by our thriving community of travelers.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-xl aspect-[4/5]"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {image.title}
                </h3>
                <p className="text-gray-300 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {image.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
