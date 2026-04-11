import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send } from 'lucide-react';
import { keralaMenus } from '../data/keralaMenus';
import './KeralaMenu.css';

const KeralaMenu = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [guests, setGuests] = useState(100);

  const handleEnquire = (menu) => {
    const lines = [`*Kerala Menu Enquiry*`, `Package: ${menu.label}`, `Guests: ${guests}`, ''];
    menu.sections.forEach(sec => {
      lines.push(`*${sec.title}*`);
      sec.items.forEach(item => lines.push(`  • ${item}`));
      lines.push('');
    });
    const msg = encodeURIComponent(lines.join('\n'));
    window.open(`https://wa.me/918220136305?text=${msg}`, '_blank');
  };

  return (
    <section className="kerala-menu-section section" id="kerala-menu">
      <div className="container">
        <h2 className="section-title">🌴 Kerala Special Menus</h2>
        <p className="kerala-menu-subtitle">Authentic Kerala cuisine packages for your special occasion</p>

        <div className="kerala-guest-row">
          <label>Number of Guests: <span className="kerala-guest-val">{guests}</span></label>
          <input
            type="range" min="50" max="1000" step="10"
            value={guests}
            onChange={e => setGuests(Number(e.target.value))}
            className="guest-slider"
          />
        </div>

        <div className="kerala-menu-grid">
          {keralaMenus.map((menu, index) => (
            <motion.div
              key={menu.id}
              className={`kerala-menu-card${activeItem === menu.id ? ' active' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <button
                className="kerala-card-header"
                onClick={() => setActiveItem(activeItem === menu.id ? null : menu.id)}
              >
                <span className="kerala-item-label">{menu.label}</span>
                <span className="kerala-arrow">{activeItem === menu.id ? '▲' : '▼'}</span>
              </button>

              <AnimatePresence>
                {activeItem === menu.id && (
                  <motion.div
                    className="kerala-card-body"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {menu.sections.map((sec, i) => (
                      <div key={i} className="kerala-section">
                        <h4 className="kerala-section-title">{sec.title}</h4>
                        <ul className="kerala-items-list">
                          {sec.items.map((item, j) => (
                            <li key={j}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <button
                      className="btn btn-primary kerala-enquire-btn"
                      onClick={() => handleEnquire(menu)}
                    >
                      <Send size={16} />
                      Enquire on WhatsApp
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeralaMenu;
