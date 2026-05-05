import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import './PackageCard.css';

const PackageCard = ({ pkg, index }) => {
  const handleWhatsApp = () => {
    const message = `Hello, I want to inquire about the ${pkg.name} (₹${pkg.price.toLocaleString('en-IN')})`;
    window.open(`https://wa.me/917094281993?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <motion.div
      className={`package-card ${pkg.popular ? 'popular' : ''}`}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      style={{ backgroundImage: `url(${pkg.image})` }}
    >
      {pkg.popular && <div className="popular-badge">Most Popular</div>}
      <div className="package-card-overlay" />
      <div className="package-card-content">
        <div className="package-icon">{pkg.icon}</div>
        <h3 className="package-name">{pkg.name}</h3>
        <div className="package-price">
          <span className="starts-from">Starts from</span>
          <div>
            <span className="currency">₹</span>
            <span className="amount">{pkg.price.toLocaleString('en-IN')}</span>
          </div>
        </div>

        <ul className="package-features">
          {pkg.features.map((feature, idx) => (
            <li key={idx}>
              <Check size={20} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <button onClick={handleWhatsApp} className="btn btn-primary package-btn">
          Select Package
        </button>
      </div>
    </motion.div>
  );
};

export default PackageCard;
