import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <section 
      className="min-vh-100 d-flex align-items-center justify-content-center"
      style={{ 
        background: 'radial-gradient(ellipse at center, var(--luxury-black-light) 0%, var(--luxury-black) 70%)'
      }}
    >
      <div className="container text-center">
        <h1 
          className="text-gold-gradient mb-4"
          style={{ fontSize: '10rem', fontFamily: 'var(--font-display)', lineHeight: 1 }}
        >
          404
        </h1>
        <h2 className="text-silver mb-4" style={{ fontFamily: 'var(--font-display)' }}>
          Page Not Found
        </h2>
        <p className="text-secondary mb-5">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn btn-luxury-gold">
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;