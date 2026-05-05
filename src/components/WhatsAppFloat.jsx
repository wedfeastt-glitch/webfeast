import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import './WhatsAppFloat.css';

const WhatsAppFloat = () => {
  const handleClick = () => {
    window.open('https://wa.me/917094281993?text=Hello, I want to inquire about your event services', '_blank');
  };

  return (
    <motion.button
      className="whatsapp-float"
      onClick={handleClick}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <MessageCircle size={28} />
    </motion.button>
  );
};

export default WhatsAppFloat;
