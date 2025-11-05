'use client';

import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `New Inquiry from ${formData.name}%0APhone: ${formData.phone}%0AEmail: ${formData.email}`;
    window.open(`https://wa.me/917013806196?text=${message}`, '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+917013806196';
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/917013806196?text=Hi, I am interested in Bhogapuram plots. Please share more details.', '_blank');
  };

  return (
    <div style={styles.container}>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
          background: #0a0a0a;
          color: #ffffff;
        }
      `}</style>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay}></div>
        <div style={styles.heroContent}>
          <div style={styles.badge}>🏆 LIMITED TIME OFFER</div>
          <h1 style={styles.heroTitle}>
            Bhogapuram<br />
            <span style={styles.heroTitleAccent}>Your Gateway to Smart Investment</span>
          </h1>
          <p style={styles.heroSubtitle}>
            Premium Gated Community Plots on NH-16 Highway<br />
            Near Greenfield International Airport
          </p>
          <div style={styles.priceBox}>
            <div style={styles.priceLabel}>Starting From</div>
            <div style={styles.price}>₹18,500<span style={styles.priceUnit}>/Sq. Yard</span></div>
            <div style={styles.plotSizes}>Plot Sizes: 200 - 600 Sq. Yards</div>
          </div>
          <div style={styles.heroCTA}>
            <button onClick={handleCall} style={styles.primaryButton}>
              📞 Call Now
            </button>
            <button onClick={handleWhatsApp} style={styles.secondaryButton}>
              💬 WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Project Highlights</h2>
        <div style={styles.grid}>
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>✅</div>
            <h3 style={styles.featureTitle}>VMRDA Approved</h3>
            <p style={styles.featureDesc}>Fully approved layout ensuring legal security</p>
          </div>
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>🛣️</div>
            <h3 style={styles.featureTitle}>Prime Highway Location</h3>
            <p style={styles.featureDesc}>Direct access to 6-Lane NH-16 (AH-45)</p>
          </div>
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>🌳</div>
            <h3 style={styles.featureTitle}>Avenue Plantations</h3>
            <p style={styles.featureDesc}>Beautiful greenery on all internal roads</p>
          </div>
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>⚡</div>
            <h3 style={styles.featureTitle}>24x7 Electricity</h3>
            <p style={styles.featureDesc}>Uninterrupted power supply</p>
          </div>
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>🔒</div>
            <h3 style={styles.featureTitle}>Fully Secured</h3>
            <p style={styles.featureDesc}>Complete compound wall security</p>
          </div>
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>🏘️</div>
            <h3 style={styles.featureTitle}>Gated Community</h3>
            <p style={styles.featureDesc}>Premium lifestyle living</p>
          </div>
        </div>
      </section>

      {/* Location Advantages */}
      <section style={styles.sectionDark}>
        <h2 style={styles.sectionTitle}>Location Advantages</h2>
        <div style={styles.locationGrid}>
          <div style={styles.locationCard}>
            <div style={styles.locationIcon}>✈️</div>
            <div>
              <h4 style={styles.locationTitle}>Greenfield International Airport</h4>
              <p style={styles.locationDesc}>Adjacent to Bhogapuram Airport</p>
            </div>
          </div>
          <div style={styles.locationCard}>
            <div style={styles.locationIcon}>🏢</div>
            <div>
              <h4 style={styles.locationTitle}>IT Hub Proximity</h4>
              <p style={styles.locationDesc}>Close to 900-Acre Miracle Software Park & Gum City</p>
            </div>
          </div>
          <div style={styles.locationCard}>
            <div style={styles.locationIcon}>🚗</div>
            <div>
              <h4 style={styles.locationTitle}>40 Minutes to Visakhapatnam</h4>
              <p style={styles.locationDesc}>Direct highway connectivity to the city</p>
            </div>
          </div>
          <div style={styles.locationCard}>
            <div style={styles.locationIcon}>🏙️</div>
            <div>
              <h4 style={styles.locationTitle}>25 Minutes to Madhurawada</h4>
              <p style={styles.locationDesc}>Easy access to major commercial hub</p>
            </div>
          </div>
          <div style={styles.locationCard}>
            <div style={styles.locationIcon}>🛣️</div>
            <div>
              <h4 style={styles.locationTitle}>On NH-16 (AH-45)</h4>
              <p style={styles.locationDesc}>Prime national highway frontage</p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Benefits */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Why Invest Now?</h2>
        <div style={styles.benefitsGrid}>
          <div style={styles.benefitCard}>
            <div style={styles.benefitNumber}>01</div>
            <h3 style={styles.benefitTitle}>Airport Development</h3>
            <p style={styles.benefitDesc}>Greenfield International Airport will drive massive appreciation</p>
          </div>
          <div style={styles.benefitCard}>
            <div style={styles.benefitNumber}>02</div>
            <h3 style={styles.benefitTitle}>IT Hub Growth</h3>
            <p style={styles.benefitDesc}>900-Acre software park ensures constant demand</p>
          </div>
          <div style={styles.benefitCard}>
            <div style={styles.benefitNumber}>03</div>
            <h3 style={styles.benefitTitle}>Infrastructure Boom</h3>
            <p style={styles.benefitDesc}>6-Lane highway upgrade enhances connectivity</p>
          </div>
          <div style={styles.benefitCard}>
            <div style={styles.benefitNumber}>04</div>
            <h3 style={styles.benefitTitle}>Limited Inventory</h3>
            <p style={styles.benefitDesc}>Exclusive opportunity with limited plots available</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.ctaSection}>
        <div style={styles.ctaContent}>
          <h2 style={styles.ctaTitle}>Don't Miss This Investment Opportunity</h2>
          <p style={styles.ctaSubtitle}>Book your plot today and secure your future</p>
          <div style={styles.ctaButtons}>
            <button onClick={handleCall} style={styles.ctaPrimary}>
              📞 Call: +91 7013806196
            </button>
            <button onClick={handleWhatsApp} style={styles.ctaSecondary}>
              💬 WhatsApp Now
            </button>
          </div>
          <button onClick={() => setShowForm(!showForm)} style={styles.ctaTertiary}>
            📝 Request Call Back
          </button>

          {showForm && (
            <form onSubmit={handleSubmit} style={styles.form}>
              <input
                type="text"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                style={styles.input}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                style={styles.input}
              />
              <input
                type="email"
                placeholder="Email (Optional)"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                style={styles.input}
              />
              <button type="submit" style={styles.submitButton}>
                Send via WhatsApp
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>📍 Bhogapuram, Near Greenfield International Airport, NH-16</p>
        <p>📞 +91 7013806196</p>
        <p style={styles.footerSmall}>VMRDA Approved Layout | Premium Gated Community Plots</p>
      </footer>

      {/* Floating WhatsApp Button */}
      <button onClick={handleWhatsApp} style={styles.floatingButton}>
        💬
      </button>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    background: '#0a0a0a',
  },
  hero: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    textAlign: 'center',
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0,0,0,0.3)',
  },
  heroContent: {
    position: 'relative',
    zIndex: 1,
    maxWidth: '900px',
  },
  badge: {
    display: 'inline-block',
    background: 'rgba(255,255,255,0.2)',
    backdropFilter: 'blur(10px)',
    padding: '8px 24px',
    borderRadius: '50px',
    fontSize: '14px',
    fontWeight: '600',
    marginBottom: '24px',
    border: '1px solid rgba(255,255,255,0.3)',
  },
  heroTitle: {
    fontSize: 'clamp(36px, 8vw, 72px)',
    fontWeight: '800',
    marginBottom: '16px',
    lineHeight: '1.1',
  },
  heroTitleAccent: {
    background: 'linear-gradient(135deg, #ffd89b 0%, #19547b 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  heroSubtitle: {
    fontSize: 'clamp(16px, 3vw, 20px)',
    marginBottom: '40px',
    opacity: 0.95,
    lineHeight: '1.6',
  },
  priceBox: {
    background: 'rgba(255,255,255,0.15)',
    backdropFilter: 'blur(20px)',
    padding: '32px',
    borderRadius: '20px',
    marginBottom: '32px',
    border: '1px solid rgba(255,255,255,0.2)',
  },
  priceLabel: {
    fontSize: '14px',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    opacity: 0.9,
    marginBottom: '8px',
  },
  price: {
    fontSize: 'clamp(40px, 8vw, 64px)',
    fontWeight: '800',
    marginBottom: '8px',
  },
  priceUnit: {
    fontSize: '24px',
    fontWeight: '400',
    opacity: 0.8,
  },
  plotSizes: {
    fontSize: '16px',
    opacity: 0.9,
  },
  heroCTA: {
    display: 'flex',
    gap: '16px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  primaryButton: {
    background: '#ffffff',
    color: '#667eea',
    border: 'none',
    padding: '16px 48px',
    fontSize: '18px',
    fontWeight: '700',
    borderRadius: '50px',
    cursor: 'pointer',
    transition: 'transform 0.2s, box-shadow 0.2s',
    boxShadow: '0 8px 30px rgba(255,255,255,0.3)',
  },
  secondaryButton: {
    background: 'rgba(255,255,255,0.1)',
    color: '#ffffff',
    border: '2px solid rgba(255,255,255,0.5)',
    padding: '16px 48px',
    fontSize: '18px',
    fontWeight: '700',
    borderRadius: '50px',
    cursor: 'pointer',
    backdropFilter: 'blur(10px)',
    transition: 'all 0.2s',
  },
  section: {
    padding: '80px 20px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  sectionDark: {
    padding: '80px 20px',
    maxWidth: '1200px',
    margin: '0 auto',
    background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
    borderRadius: '30px',
    marginTop: '40px',
    marginBottom: '40px',
  },
  sectionTitle: {
    fontSize: 'clamp(32px, 6vw, 48px)',
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: '60px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '24px',
  },
  featureCard: {
    background: 'rgba(255,255,255,0.05)',
    padding: '32px',
    borderRadius: '20px',
    border: '1px solid rgba(255,255,255,0.1)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    cursor: 'pointer',
  },
  featureIcon: {
    fontSize: '48px',
    marginBottom: '16px',
  },
  featureTitle: {
    fontSize: '20px',
    fontWeight: '700',
    marginBottom: '8px',
  },
  featureDesc: {
    fontSize: '14px',
    opacity: 0.8,
    lineHeight: '1.6',
  },
  locationGrid: {
    display: 'grid',
    gap: '20px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  },
  locationCard: {
    background: 'rgba(255,255,255,0.1)',
    padding: '24px',
    borderRadius: '16px',
    display: 'flex',
    gap: '16px',
    alignItems: 'flex-start',
    border: '1px solid rgba(255,255,255,0.2)',
  },
  locationIcon: {
    fontSize: '32px',
  },
  locationTitle: {
    fontSize: '18px',
    fontWeight: '700',
    marginBottom: '4px',
  },
  locationDesc: {
    fontSize: '14px',
    opacity: 0.9,
  },
  benefitsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '32px',
  },
  benefitCard: {
    background: 'rgba(255,255,255,0.05)',
    padding: '32px',
    borderRadius: '20px',
    border: '1px solid rgba(255,255,255,0.1)',
  },
  benefitNumber: {
    fontSize: '48px',
    fontWeight: '800',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginBottom: '16px',
  },
  benefitTitle: {
    fontSize: '22px',
    fontWeight: '700',
    marginBottom: '12px',
  },
  benefitDesc: {
    fontSize: '14px',
    opacity: 0.8,
    lineHeight: '1.6',
  },
  ctaSection: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '80px 20px',
    textAlign: 'center',
  },
  ctaContent: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  ctaTitle: {
    fontSize: 'clamp(28px, 6vw, 42px)',
    fontWeight: '800',
    marginBottom: '16px',
  },
  ctaSubtitle: {
    fontSize: '18px',
    marginBottom: '32px',
    opacity: 0.95,
  },
  ctaButtons: {
    display: 'flex',
    gap: '16px',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: '16px',
  },
  ctaPrimary: {
    background: '#ffffff',
    color: '#667eea',
    border: 'none',
    padding: '16px 40px',
    fontSize: '18px',
    fontWeight: '700',
    borderRadius: '50px',
    cursor: 'pointer',
    boxShadow: '0 8px 30px rgba(255,255,255,0.3)',
  },
  ctaSecondary: {
    background: '#25D366',
    color: '#ffffff',
    border: 'none',
    padding: '16px 40px',
    fontSize: '18px',
    fontWeight: '700',
    borderRadius: '50px',
    cursor: 'pointer',
  },
  ctaTertiary: {
    background: 'transparent',
    color: '#ffffff',
    border: '2px solid rgba(255,255,255,0.5)',
    padding: '14px 40px',
    fontSize: '16px',
    fontWeight: '600',
    borderRadius: '50px',
    cursor: 'pointer',
    marginTop: '8px',
  },
  form: {
    marginTop: '32px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    maxWidth: '400px',
    margin: '32px auto 0',
  },
  input: {
    padding: '16px',
    fontSize: '16px',
    borderRadius: '12px',
    border: '2px solid rgba(255,255,255,0.3)',
    background: 'rgba(255,255,255,0.9)',
    color: '#333',
  },
  submitButton: {
    background: '#25D366',
    color: '#ffffff',
    border: 'none',
    padding: '16px',
    fontSize: '18px',
    fontWeight: '700',
    borderRadius: '12px',
    cursor: 'pointer',
  },
  footer: {
    background: '#000000',
    padding: '40px 20px',
    textAlign: 'center',
    borderTop: '1px solid rgba(255,255,255,0.1)',
  },
  footerSmall: {
    fontSize: '14px',
    opacity: 0.7,
    marginTop: '8px',
  },
  floatingButton: {
    position: 'fixed',
    bottom: '24px',
    right: '24px',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    background: '#25D366',
    border: 'none',
    fontSize: '28px',
    cursor: 'pointer',
    boxShadow: '0 4px 20px rgba(37, 211, 102, 0.5)',
    zIndex: 1000,
    transition: 'transform 0.2s',
  },
};
