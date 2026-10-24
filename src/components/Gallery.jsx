import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import './Gallery.css';

const categoryImages = [
  { name: 'Wedding', icon: '💍', thumb: '/images/bridegroomsitting.webp', images: ['/images/bridegroomsitting.webp', '/images/destination-wedding.jpg', '/images/beach.jpg', '/images/beach2.jpeg', '/images/haldi.webp', '/images/bridemakeup.jpeg', '/images/destination1.jpg', '/images/beach3.jpg', '/images/wedfeasttt1.jpg', '/images/wedfeasttt2.jpg', '/images/wedfeasttt3.jpg', '/images/wedfeasttt4.jpg', '/images/wedfeasttt5.jpg', '/images/wedfeasttt6.jpg', '/images/wedfeasttt7.jpg', '/images/wedfeasttt8.jpg'] },
  { name: 'Birthday', icon: '🎂', thumb: '/images/bd1.jpeg', images: ['/images/bd1.jpeg', '/images/BD3.jpg', '/images/BD4.jpg', '/images/BD5.jpg', '/images/BD6.jpg', '/images/BD7.jpg', '/images/BD8.jpg', '/images/BD9.jpg', '/images/BD10.jpg', '/images/bd11.jpg', '/images/BD12.jpg', '/images/Bd13.jpg', '/images/Bd new2.webp', '/images/Bd new3.webp', '/images/Bd new5.webp', '/images/Bd new6.webp', '/images/Bd new7.webp', '/images/Bd new8.webp'] },
  { name: 'Decoration', icon: '🎨', thumb: '/images/stagedecoration1.jpg', images: ['/images/stagedecoration1.jpg', '/images/stagedecoration2.jpg', '/images/stagedecoration3.jpg', '/images/stagedecoration4.jpg', '/images/stagedecoration5.jpg', '/images/stagedecoration6.jpg', '/images/stagedecoration7.jpg', '/images/stagedecoration8.jpg', '/images/stagedecoration9.jpg', '/images/stagedecoration10.jpg.jpg', '/images/stagedecoration11.jpg', '/images/church_decorations1.jpg', '/images/decoration.jpg'] },
  { name: 'Entertainment', icon: '🎵', thumb: '/images/dj.jpg', images: ['/images/dj.jpg'] },
  { name: 'Catering', icon: '🍽', thumb: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=800', images: ['https://images.unsplash.com/photo-1555244162-803834f70033?w=800', 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800', 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800', 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800'] },
];

const Gallery = () => {
  const [lightbox, setLightbox] = useState(null); // { images, index }

  const openLightbox = (images, index) => setLightbox({ images, index });
  const closeLightbox = () => setLightbox(null);
  const prev = () => setLightbox(l => ({ ...l, index: (l.index - 1 + l.images.length) % l.images.length }));
  const next = () => setLightbox(l => ({ ...l, index: (l.index + 1) % l.images.length }));

  return (
    <section className="gallery-section" id="gallery">
      <div className="container">
        <h2 className="section-title">Our Portfolio</h2>
        <p className="gallery-subtitle">Click a category to explore our work</p>

        <div className="gallery-categories">
          {categoryImages.map((cat, i) => (
            <motion.div
              key={cat.name}
              className="gallery-cat-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              onClick={() => openLightbox(cat.images, 0)}
            >
              <img src={cat.thumb} alt={cat.name} className="gallery-cat-thumb" />
              <div className="gallery-cat-overlay">
                <span className="cat-icon">{cat.icon}</span>
                <span className="cat-name">{cat.name}</span>
                <span className="cat-count">{cat.images.length} photos</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button className="lightbox-close" onClick={closeLightbox}><X size={28} /></button>
            <button className="lightbox-nav prev" onClick={(e) => { e.stopPropagation(); prev(); }}>&#8249;</button>
            <motion.img
              key={lightbox.index}
              src={lightbox.images[lightbox.index]}
              alt="portfolio"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            />
            <button className="lightbox-nav next" onClick={(e) => { e.stopPropagation(); next(); }}>&#8250;</button>
            <div className="lightbox-counter">{lightbox.index + 1} / {lightbox.images.length}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
