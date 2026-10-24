import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-col">
            <h3 className="footer-logo">
              <img src="/images/logo.png" alt="Wed Feast Logo" className="footer-logo-img" />
              Wed Feast Event Planners & Caterers
            </h3>
            <p>Creating unforgettable celebrations with elegance and perfection.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="https://www.instagram.com/weadfeasteventplanners?igsh=MTJjb3RkYjNiaWMzMg==" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#services">Services</a></li>
              <li><a href="#packages">Packages</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><a href="#">Destination Weddings</a></li>
              <li><a href="#">Corporate Events</a></li>
              <li><a href="#">Tours & Travels</a></li>
              <li><a href="#">Wedding Planning</a></li>
              <li><a href="#">Catering</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact Us</h4>
            <ul className="contact-info">
              <li>
                <Phone size={18} />
                <a href="tel:+917094281993">+91 70942 81993</a>
              </li>
              <li>
                <Mail size={18} />
                <a href="mailto:wedfesteventplanners@gmail.com">wedfesteventplanners@gmail.com</a>
              </li>
              <li>
                <MapPin size={18} />
                <span>Varadharajapuram, Tamil Nadu 600045</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Google Maps */}
        <div className="footer-map">
          <iframe
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0!2d80.05660526454449!3d12.898672586898853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f0000000001%3A0x0!2sV3X4%2BHVV%2C%20Varadharajapuram%2C%20Tamil%20Nadu%20600045%2C%20India!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="220"
            style={{ border: 0, borderRadius: '12px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Wed Feast Event Planners & Caterers. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
