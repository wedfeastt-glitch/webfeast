import { useState } from 'react';
import { motion } from 'framer-motion';
import { addons } from '../data/packages';
import './AddonSection.css';

const AddonSection = () => {
  const [selectedAddons, setSelectedAddons] = useState([]);

  const toggleAddon = (addonId) => {
    setSelectedAddons(prev =>
      prev.includes(addonId)
        ? prev.filter(id => id !== addonId)
        : [...prev, addonId]
    );
  };

  const total = addons
    .filter(addon => selectedAddons.includes(addon.id))
    .reduce((sum, addon) => sum + addon.price, 0);

  const handleWhatsApp = () => {
    const selectedItems = addons
      .filter(addon => selectedAddons.includes(addon.id))
      .map(addon => addon.name)
      .join(', ');
    
    const message = `Hello, I want to inquire about these add-ons:\n${selectedItems}\nTotal: ₹${total.toLocaleString('en-IN')}`;
    window.open(`https://wa.me/918220136305?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <motion.div
      className="addon-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="addon-title">Enhance Your Event</h3>
      <p className="addon-subtitle">Add premium services to make your event extraordinary</p>

      <div className="addon-grid">
        {addons.map((addon, index) => (
          <motion.div
            key={addon.id}
            className={`addon-card ${selectedAddons.includes(addon.id) ? 'selected' : ''}`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onClick={() => toggleAddon(addon.id)}
          >
            <input
              type="checkbox"
              checked={selectedAddons.includes(addon.id)}
              onChange={() => toggleAddon(addon.id)}
              className="addon-checkbox"
            />
            <h4>{addon.name}</h4>
            <p className="addon-price">₹{addon.price.toLocaleString('en-IN')}</p>
          </motion.div>
        ))}
      </div>

      {selectedAddons.length > 0 && (
        <motion.div
          className="addon-total"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="total-info">
            <span>Total Add-ons:</span>
            <span className="total-amount">₹{total.toLocaleString('en-IN')}</span>
          </div>
          <button onClick={handleWhatsApp} className="btn btn-primary">
            Request Quote on WhatsApp
          </button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default AddonSection;
