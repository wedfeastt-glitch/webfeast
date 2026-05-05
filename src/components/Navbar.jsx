import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import './Navbar.css';

const HOW_TO_BOOK = [
  'Browse our Services or Packages',
  'Choose the package that suits you',
  'Click "Select Package" or "Book on WhatsApp"',
  'Our team will contact you within 24 hours',
  'Confirm date, venue & finalize details',
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showHowToBook, setShowHowToBook] = useState(false);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking/touching outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        mobileMenu &&
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(e.target)
      ) {
        setMobileMenu(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, [mobileMenu]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="logo">
            <img src="/images/logo.png" alt="Wed Feast Logo" className="logo-img" />
            <div className="logo-text-group">
              <span className="logo-text">Wed Feast</span>
              <span className="logo-tagline">Events & Caterings</span>
            </div>
          </Link>

          <div ref={menuRef} className={`nav-links ${mobileMenu ? 'active' : ''}`}>
            <Link to="/" onClick={() => setMobileMenu(false)}>Home</Link>
            <a href="#services" onClick={() => setMobileMenu(false)}>Services</a>
            <a href="#packages" onClick={() => setMobileMenu(false)}>Packages</a>
            <a href="#gallery" onClick={() => setMobileMenu(false)}>Gallery</a>
            <a href="#testimonials" onClick={() => setMobileMenu(false)}>Testimonials</a>
            <a href="#contact" onClick={() => setMobileMenu(false)}>Contact</a>

            <div className="how-to-book-mobile">
              <button
                className="how-to-book-toggle"
                onClick={() => setShowHowToBook(!showHowToBook)}
              >
                How to Book {showHowToBook ? '▲' : '▼'}
              </button>
              {showHowToBook && (
                <ol className="how-to-book-steps">
                  {HOW_TO_BOOK.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              )}
              <a
                href="https://wa.me/917094281993?text=Hello, I want to book an event with Wed Feast!"
                target="_blank"
                rel="noopener noreferrer"
                className="book-now-btn"
                onClick={() => setMobileMenu(false)}
              >
                <MessageCircle size={16} />
                Book Now
              </a>
            </div>
          </div>

          <a href="tel:+917094281993" className="nav-phone">
            <Phone size={20} />
            <span>+91 70942 81993</span>
          </a>

          <button ref={toggleRef} className="mobile-toggle" onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
