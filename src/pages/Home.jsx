import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import PackageCard from '../components/PackageCard';
import CateringCalculator from '../components/CateringCalculator';
import AddonSection from '../components/AddonSection';
import KeralaMenu from '../components/KeralaMenu';
import BookingForm from '../components/BookingForm';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Stats from '../components/Stats';
import { services } from '../data/services';
import { packages } from '../data/packages';
import './Home.css';

const Wave = ({ fill }) => (
  <div className="wave-divider">
    <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z" fill={fill} />
    </svg>
  </div>
);

const Home = () => {
  return (
    <div className="home">
      <Hero />

      {/* bg: #2d0010 → next: #1a0008 */}
      <section className="services-section section" id="services">
        <div className="container">
          <h2 className="section-title">Our Premium Services</h2>
          <p className="section-subtitle">Comprehensive event solutions tailored to perfection</p>
          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
        <Wave fill="#1a0008" />
      </section>

      {/* bg: #1a0008 → next: #3b0015 */}
      <section className="packages-section section" id="packages">
        <div className="container">
          <h2 className="section-title">Wedding Packages</h2>
          <p className="section-subtitle">Choose the perfect package for your special day</p>
          <div className="packages-grid">
            {packages.map((pkg, index) => (
              <PackageCard key={pkg.id} pkg={pkg} index={index} />
            ))}
          </div>
        </div>
        <Wave fill="#3b0015" />
      </section>

      {/* bg: #3b0015 → next: #2d0010 (kerala menu) */}
      <section className="calculator-section section">
        <div className="container">
          <CateringCalculator />
        </div>
        <Wave fill="#2d0010" />
      </section>

      {/* Kerala Special Menus */}
      <div className="kerala-menu-wrapper">
        <KeralaMenu />
        <Wave fill="#1a0008" />
      </div>

      {/* bg: #1a0008 → next: #4a1020 (stats) */}
      <section className="addons-section section">
        <div className="container">
          <AddonSection />
        </div>
        <Wave fill="#4a1020" />
      </section>

      {/* bg: #4a1020 → next: #2d0010 (gallery) */}
      <div className="stats-wrapper">
        <Stats />
        <Wave fill="#2d0010" />
      </div>

      {/* bg: #2d0010 → next: #1a0008 (testimonials) */}
      <div className="gallery-wrapper">
        <Gallery />
        <Wave fill="#1a0008" />
      </div>

      {/* bg: #1a0008 → next: #2d0010 (booking) */}
      <div className="testimonials-wrapper">
        <Testimonials />
        <Wave fill="#2d0010" />
      </div>

      <section className="booking-section section">
        <div className="container">
          <BookingForm />
        </div>
      </section>
    </div>
  );
};

export default Home;
