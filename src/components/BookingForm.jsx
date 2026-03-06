import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import './BookingForm.css';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: '',
    eventDate: '',
    guestCount: '',
    location: '',
    budget: '',
    notes: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const message = `Hello, I want to inquire about:
Event Type: ${formData.eventType}
Event Date: ${formData.eventDate}
Guests: ${formData.guestCount}
Location: ${formData.location}
Estimated Budget: ₹${formData.budget}
Additional Notes: ${formData.notes}

Contact Details:
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}

Please share quotation.`;

    window.open(`https://wa.me/918220136305?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <motion.div
      className="booking-form-section"
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="form-title">Book Your Event</h2>
      <p className="form-subtitle">Fill in the details and we'll get back to you shortly</p>

      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-row">
          <div className="form-group">
            <label>Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your full name"
            />
          </div>

          <div className="form-group">
            <label>Phone *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="+91 98765 43210"
            />
          </div>
        </div>

        <div className="form-group">
          <label>Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="your@email.com"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Event Type *</label>
            <select name="eventType" value={formData.eventType} onChange={handleChange} required>
              <option value="">Select event type</option>
              <option value="Wedding">Wedding</option>
              <option value="Birthday">Birthday</option>
              <option value="Corporate">Corporate Event</option>
              <option value="Engagement">Engagement</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Event Date *</label>
            <input
              type="date"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Guest Count *</label>
            <input
              type="number"
              name="guestCount"
              value={formData.guestCount}
              onChange={handleChange}
              required
              placeholder="100"
            />
          </div>

          <div className="form-group">
            <label>Budget (₹) *</label>
            <input
              type="number"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              required
              placeholder="300000"
            />
          </div>
        </div>

        <div className="form-group">
          <label>Location *</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            placeholder="Event venue location"
          />
        </div>

        <div className="form-group">
          <label>Additional Notes</label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows="4"
            placeholder="Any special requirements or preferences..."
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary submit-btn">
          <Send size={20} />
          Request Quote on WhatsApp
        </button>
      </form>
    </motion.div>
  );
};

export default BookingForm;
