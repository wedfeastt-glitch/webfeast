import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Check } from 'lucide-react';
import { services } from '../data/services';
import './ServiceDetails.css';

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = services.find(s => s.id === id);

  if (!service) {
    return (
      <div className="service-not-found">
        <h2>Service not found</h2>
        <button onClick={() => navigate('/')} className="btn btn-primary">
          Go Back Home
        </button>
      </div>
    );
  }

  const handleWhatsApp = () => {
    const message = `Hello, I want to inquire about ${service.title} service`;
    window.open(`https://wa.me/918220136305?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="service-details">
      <div className="service-banner" style={{ backgroundImage: `url(${service.images[0]})` }}>
        <div className="banner-overlay"></div>
        <div className="container">
          <button onClick={() => navigate('/')} className="back-btn">
            <ArrowLeft size={20} />
            Back to Home
          </button>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {service.icon} {service.title}
          </motion.h1>
        </div>
      </div>

      <div className="container">
        <div className="service-content">
          <motion.div
            className="service-info"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2>About This Service</h2>
            <p>{service.fullDescription}</p>

            <h3>What's Included</h3>
            <ul className="inclusions-list">
              {service.inclusions.map((item, index) => (
                <li key={index}>
                  <Check size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button onClick={handleWhatsApp} className="btn btn-primary">
              Book This Service
            </button>
          </motion.div>

          <motion.div
            className="service-gallery"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3>Gallery</h3>
            <div className="gallery-images">
              {service.images.map((image, index) => (
                <div key={index} className="gallery-image">
                  <img src={image} alt={`${service.title} ${index + 1}`} />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
