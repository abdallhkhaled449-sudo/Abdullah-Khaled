import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import TextType from "../TextType";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-8">
              <div
                className={`${isVisible ? "animate-fade-in-up" : ""}`}
                style={{ opacity: isVisible ? 1 : 0 }}
              >
                {/* <p
                  className="text-silver mb-2"
                  style={{ letterSpacing: "4px", fontSize: "0.875rem" }}
                >
                  WELCOME TO MY PORTFOLIO
                  </p> */}
                <h1 className="hero-name text-gold-gradient mb-3">
                  Abdallah Khaled
                </h1>
                <h3>
                  <TextType
                    text={[
                      "Full-Stack Developer | Laravel & React",
                      "Full-Stack Developer | Laravel & React",
                    ]}
                    typingSpeed={100}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="|"
                    className="text-2xl text-gold"
                  />
                </h3>
                <p
                  className="lead text-secondary mb-5"
                  style={{ maxWidth: "600px", fontSize: "1.1rem" }}
                >
                  Crafting elegant digital experiences with modern technologies.
                  Specializing in React, Laravel, and creating seamless user
                  interfaces that blend form with function.
                </p>
                <div className="d-flex gap-3 flex-wrap">
                  <Link to="/projects" className="btn btn-luxury-gold">
                    View Projects
                  </Link>
                  <Link to="/contact" className="btn btn-luxury-outline">
                    Contact Me
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div
          className="position-absolute"
          style={{
            top: "20%",
            right: "10%",
            width: "300px",
            height: "300px",
            border: "1px solid var(--luxury-gold)",
            opacity: 0.1,
            transform: "rotate(45deg)",
          }}
        />
        <div
          className="position-absolute"
          style={{
            bottom: "20%",
            right: "15%",
            width: "200px",
            height: "200px",
            border: "1px solid var(--luxury-silver)",
            opacity: 0.1,
            transform: "rotate(45deg)",
          }}
        />
      </section>

      {/* Quick About Section */}
      <section className="section-padding bg-luxury-black-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div
                className="p-5"
                style={{
                  border: "1px solid var(--luxury-gold)",
                  borderLeft: "4px solid var(--luxury-gold)",
                }}
              >
                <h3 className="text-gold mb-3">What I Do ?</h3>
                <p className="text-silver mb-2">
                  I’m a Full-Stack Web Developer with a strong passion for
                  building complete, scalable, and high-quality web
                  applications. I work on both front-end and back-end, turning
                  ideas into fully functional digital products. I focus on clean
                  code, performance, and user experience, and I’m always eager
                  to learn new technologies and take on new challenges.
                  {/* I transform ideas into reality through code. With expertise in
                  both frontend and backend development, I create complete web
                  solutions that are not just functional, but exceptional. */}
                </p>
                <p className="text-silver mb-0">
                  When I'm not coding, you can find me exploring new
                  technologies, contributing to open-source projects, or sharing
                  knowledge with the developer community. I believe in
                  continuous learning and staying updated with the latest
                  industry trends.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row g-4">
                <div className="col-6">
                  <div className="text-center p-4 luxury-card">
                    <h2
                      className="text-gold-gradient mb-2"
                      style={{ fontSize: "3rem", fontWeight: 700 }}
                    >
                      3+
                    </h2>
                    <p
                      className="text-silver mb-0 small text-uppercase"
                      style={{ letterSpacing: "2px" }}
                    >
                      Years Experience
                    </p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="text-center p-4 luxury-card">
                    <h2
                      className="text-gold-gradient mb-2"
                      style={{ fontSize: "3rem", fontWeight: 700 }}
                    >
                      20+
                    </h2>
                    <p
                      className="text-silver mb-0 small text-uppercase"
                      style={{ letterSpacing: "2px" }}
                    >
                      Projects Done
                    </p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="text-center p-4 luxury-card">
                    <h2
                      className="text-gold-gradient mb-2"
                      style={{ fontSize: "3rem", fontWeight: 700 }}
                    >
                      10+
                    </h2>
                    <p
                      className="text-silver mb-0 small text-uppercase"
                      style={{ letterSpacing: "2px" }}
                    >
                      Happy Clients
                    </p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="text-center p-4 luxury-card">
                    <h2
                      className="text-gold-gradient mb-2"
                      style={{ fontSize: "3rem", fontWeight: 700 }}
                    >
                      15+
                    </h2>
                    <p
                      className="text-silver mb-0 small text-uppercase"
                      style={{ letterSpacing: "2px" }}
                    >
                      Technologies
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title text-gold-gradient">Featured Work</h2>
            <div className="luxury-divider"></div>
            <p className="section-subtitle mt-4">
              A glimpse of my latest projects
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <Link to="/projects/todo" className="text-decoration-none">
                <div className="luxury-card p-4 h-100">
                  <div
                    className="mb-3 text-gold"
                    style={{ fontSize: "2.5rem" }}
                  >
                    ✓
                  </div>
                  <h4 className="text-gold mb-2">Todo App</h4>
                  <p className="text-silver mb-0 small">
                    A feature-rich task management application with React state
                    management.
                  </p>
                </div>
              </Link>
            </div>
            <div className="col-md-4">
              <Link to="/projects/weather" className="text-decoration-none">
                <div className="luxury-card p-4 h-100">
                  <div
                    className="mb-3 text-gold"
                    style={{ fontSize: "2.5rem" }}
                  >
                    ☀
                  </div>
                  <h4 className="text-gold mb-2">Weather App</h4>
                  <p className="text-silver mb-0 small">
                    Real-time weather information with beautiful UI and location
                    search.
                  </p>
                </div>
              </Link>
            </div>
            <div className="col-md-4">
              <Link to="/projects/ecommerce" className="text-decoration-none">
                <div className="luxury-card p-4 h-100">
                  <div
                    className="mb-3 text-gold"
                    style={{ fontSize: "2.5rem" }}
                  >
                    🛒
                  </div>
                  <h4 className="text-gold mb-2">E-Commerce</h4>
                  <p className="text-silver mb-0 small">
                    Complete shopping experience with cart functionality and
                    product catalog.
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="row g-4"></div>

          {/* <div className="my-8 flex gap-3 justify-center">
            <a
              href={project.demoLink}
              target="_blank"
              rel="noreferrer"
              className="flex gap-3 justify-center rounded-xl bg-[#0F182B] p-3 hover:bg-pink-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5 inline-block"
              >
                <path d="M18 13a1 1 0 0 0-1 1v4H6V7h4a1 1 0 1 0 0-2H6a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-4a1 1 0 0 0-1-1Zm3-11h-6a1 1 0 0 0 0 2h3.59l-9.3 9.3a1 1 0 1 0 1.42 1.4L20 5.41V9a1 1 0 0 0 2 0V3a1 1 0 0 0-1-1Z" />
              </svg>
              <p>Demo</p>
            </a>

            <a
              href={project.codeLink}
              target="_blank"
              rel="noreferrer"
              className="flex gap-3 justify-center rounded-xl bg-[#0F182B] p-3 hover:bg-purple-700"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.11.8-.25.8-.57v-2c-3.26.71-3.95-1.39-3.95-1.39a3.1 3.1 0 0 0-1.3-1.71c-1.06-.73.08-.72.08-.72a2.45 2.45 0 0 1 1.79 1.2 2.5 2.5 0 0 0 3.42 1 2.5 2.5 0 0 1 .75-1.57c-2.6-.3-5.33-1.3-5.33-5.8a4.55 4.55 0 0 1 1.21-3.16 4.23 4.23 0 0 1 .12-3.12s.98-.31 3.2 1.2a11.06 11.06 0 0 1 5.82 0c2.22-1.51 3.2-1.2 3.2-1.2.43 1 .47 2.1.12 3.12a4.55 4.55 0 0 1 1.21 3.16c0 4.52-2.73 5.49-5.34 5.78a2.8 2.8 0 0 1 .8 2.17v3.22c0 .32.21.69.81.57A11.5 11.5 0 0 0 12 .5Z" />
              </svg>
              <p>Code</p>
            </a>
          </div> */}
          <div className="text-center mt-5">
            <Link to="/projects" className="btn btn-luxury-outline">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-luxury-black-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="section-title text-gold-gradient mb-4">
                Let's Work Together
              </h2>
              <p className="text-silver mb-4" style={{ fontSize: "1.125rem" }}>
                Have a project in mind? I'd love to hear about it. Let's create
                something extraordinary together.
              </p>
              <Link to="/contact" className="btn btn-luxury-gold">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
