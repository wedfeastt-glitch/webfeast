import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './Hero.css';

const slides = [
  '/images/destination-wedding.jpg',
  '/images/destination.webp',
  '/images/destination1.jpg',
  '/images/beach.jpg',
  '/images/beach3.jpg',
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handleWhatsApp = () => {
    window.open('https://wa.me/917094281993?text=Hello, I want to inquire about your event services', '_blank');
  };

  return (
    <section className="hero">
      {/* Sliding backgrounds */}
      <AnimatePresence>
        <motion.div
          key={current}
          className="hero-bg"
          style={{ backgroundImage: `url('${slides[current]}')` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
        />
      </AnimatePresence>

      <div className="hero-overlay"></div>

      {/* Slide dots */}
      <div className="hero-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero-dot${i === current ? ' active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      <div className="hero-content container">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-title"
        >
          Crafting Unforgettable Celebrations
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-subtitle"
        >
          From Dream Weddings to Grand Corporate Events
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hero-buttons"
        >
          <a href="#services" className="btn btn-primary">Explore Services</a>
          <button onClick={handleWhatsApp} className="btn btn-outline">Get Quote on WhatsApp</button>
        </motion.div>
      </div>

      <motion.a
        href="#services"
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <ChevronDown size={32} />
      </motion.a>
    </section>
  );
};

export default Hero;
