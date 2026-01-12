import { Link } from 'react-router-dom';

interface Project {
  id: string;
  title: string;
  description: string;
  icon: string;
  tech: string[];
  route: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 'todo',
      title: 'Todo App',
      description: 'A feature-rich task management application with full CRUD operations, filters, and local storage persistence. Built with React hooks and state management.',
      icon: '✓',
      tech: ['React', 'TypeScript', 'Hooks', 'LocalStorage'],
      route: '/projects/todo'
    },
    {
      id: 'weather',
      title: 'Weather App',
      description: 'Real-time weather information display with city search functionality. Features current weather data, temperature, humidity, and weather conditions.',
      icon: '☀',
      tech: ['React', 'API Integration', 'TypeScript', 'CSS'],
      route: '/projects/weather'
    },
    {
      id: 'ecommerce',
      title: 'E-Commerce Store',
      description: 'Complete shopping experience with product catalog, cart functionality, quantity management, and checkout flow. Demonstrates complex state management.',
      icon: '🛒',
      tech: ['React', 'Context API', 'TypeScript', 'Bootstrap'],
      route: '/projects/ecommerce'
    }
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="py-5 hero-section">
        <div className="container ">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="section-title text-gold-gradient">My Projects</h1>
              <div className="luxury-divider"></div>
              <p className="section-subtitle mt-4">Interactive demos showcasing my work</p>
            </div>
          </div>
        </div>
        <div
          className="position-absolute"
          style={{
            top: "25%",
            right: "10%",
            width: "300px",
            height: "300px",
            border: "1px solid var(--luxury-gold)",
            opacity: 0.2,
            transform: "rotate(45deg)",
          }}
        />
        <div
          className="position-absolute"
          style={{
            bottom: "15%",
            right: "15%",
            width: "200px",
            height: "200px",
            border: "1px solid var(--luxury-silver)",
            opacity: 0.2,
            transform: "rotate(45deg)",
          }}
        />
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="row g-4">
            {projects.map((project) => (
              <div key={project.id} className="col-lg-4">
                <div className="luxury-card h-100 d-flex flex-column">
                  <div 
                    className="p-4 text-center"
                    style={{ 
                      background: 'linear-gradient(135deg, var(--luxury-black-lighter) 0%, var(--luxury-black-light) 100%)',
                      borderBottom: '1px solid var(--luxury-black-lighter)'
                    }}
                  >
                    <span style={{ fontSize: '4rem' }}>{project.icon}</span>
                  </div>
                  <div className="p-4 flex-grow-1 d-flex flex-column">
                    <h3 className="text-gold mb-3">{project.title}</h3>
                    <p className="text-silver mb-4 flex-grow-1">{project.description}</p>
                    <div className="mb-4">
                      {project.tech.map((tech, index) => (
                        <span 
                          key={index}
                          className="badge me-2 mb-2"
                          style={{ 
                            background: 'transparent',
                            border: '1px solid var(--luxury-silver)',
                            color: 'var(--luxury-silver)',
                            fontWeight: 400
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Link to={project.route} className="btn btn-luxury-gold mt-auto">
                      View Demo
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Projects Info */}
      <section className="section-padding bg-luxury-black-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="text-gold-gradient mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                Want to See More?
              </h2>
              <p className="text-silver mb-4">
                These are just a few examples of my work. I've worked on various other projects 
                including full-stack applications, API integrations, and responsive web designs. 
                Feel free to reach out to discuss your specific requirements.
              </p>
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-luxury-outline"
                >
                  View GitHub
                </a>
                <Link to="/contact" className="btn btn-luxury-gold">
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
