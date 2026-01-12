import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import TextType from '../../TextType';
import '../../TextType.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`navbar navbar-expand-lg navbar-luxury fixed-top ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <NavLink className="navbar-brand text-gold-gradient" to="/" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700 }}>
          
          <TextType
          text={["</ART >", '</ART >']}
          typingSpeed={500}
          pauseDuration={1500}
          showCursor={false}
          cursorCharacter="|"
          className="text-2xl text-white"
      />
         
        </NavLink>
        
        <button 
          className="navbar-toggler border-0" 
          type="button" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
        </button>
        
        <div className={`collapse navbar-collapse ${mobileMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.path}>
                <NavLink 
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  to={link.path}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
