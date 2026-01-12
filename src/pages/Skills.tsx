import { useEffect, useState } from "react";

interface Skill {
  name: string;
  level: number;
  category: string;
}

const Skills = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const skills: Skill[] = [
    // Frondend
    { name: "HTML5 & CSS3", level: 100, category: "Frontend" },
    { name: "Bootstrap", level: 100, category: "Frontend" },
    { name: "JavaScript (ES6+)", level: 90, category: "Frontend" },
    { name: "React.js", level: 95, category: "Frontend" },
    // { name: 'TypeScript', level: 90, category: 'Frontend' },

    // Backend
    { name: "JavaScript", level: 90, category: "Backend" },
    { name: "PHP", level: 90 , category: "Backend" },
    { name: "MySQL", level: 90, category: "Backend" },
    { name: "SQL", level: 75, category: "Backend" },
    { name: "Laravel", level: 85, category: "Backend" },
    { name: "MVC Architecture", level: 90, category: "Backend" },
    { name: "Authentication", level: 85, category: "Backend" },
    { name: "Node.js", level: 20, category: "Backend" },
    { name: "REST APIs", level: 80, category: "Backend" },

    // TOOLS
    { name: "VS Code", level: 100, category: "Tools" },
    { name: "XAMPP", level: 95, category: "Tools" },
    { name: "Figma", level: 75, category: "Tools" },
    { name: "Git & GitHub", level: 90, category: "Tools" },
    { name: "Composer", level: 85, category: "Tools" },
    { name: "npm", level: 82, category: "Tools" },
    { name: "Postman", level: 88, category: "Tools" },
    { name: "AWS", level: 65, category: "Tools" },
  ];

  const categories = ["Frontend", "Backend", "Tools"];

  return (
    <>
      {/* Hero Banner */}
      <section className="py-5 hero-section">
        <div className="container ">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="section-title text-gold-gradient">
                Skills & Expertise
              </h1>
              <div className="luxury-divider"></div>
              <p className="section-subtitle mt-4">Technologies I work with</p>
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

      {/* Skills Progress */}
      <section className="section-padding">
        <div className="container">
          {categories.map((category) => (
            <div key={category} className="mb-5">
              <h3
                className="text-gold mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {category} Development
              </h3>
              <div className="row g-4">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, index) => (
                    <div key={index} className="col-md-6">
                      <div className="luxury-card p-4">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <span className="text-silver">{skill.name}</span>
                          <span className="text-gold">{skill.level}%</span>
                        </div>
                        <div className="skill-progress">
                          <div
                            className="skill-progress-bar"
                            style={{
                              width: animated ? `${skill.level}%` : "0%",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What I Offer */}
      <section className="section-padding bg-luxury-black-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title text-gold-gradient">What I Offer</h2>
            <div className="luxury-divider"></div>
          </div>

          <div className="row g-4">
            {[
              {
                icon: "🎨",
                title: "Frontend Development",
                description:
                  "Building responsive and interactive user interfaces using modern frameworks like React, ensuring seamless user experiences across all devices.",
              },
              {
                icon: "⚙️",
                title: "Backend Development",
                description:
                  "Creating robust server-side applications with Node.js and Laravel, implementing secure APIs and efficient database solutions.",
              },
              {
                icon: "📱",
                title: "Responsive Design",
                description:
                  "Crafting pixel-perfect designs that adapt flawlessly to any screen size, from mobile devices to large desktop displays.",
              },
              {
                icon: "🚀",
                title: "Performance Optimization",
                description:
                  "Optimizing web applications for speed and efficiency, ensuring fast load times and smooth performance.",
              },
              {
                icon: "🔧",
                title: "API Integration",
                description:
                  "Seamlessly integrating third-party services and APIs to extend functionality and enhance user experience.",
              },
              {
                icon: "📊",
                title: "Database Design",
                description:
                  "Designing and implementing efficient database schemas using both SQL and MySQL databases for optimal data management.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="project-card position-relative col-md-6 col-lg-4"
              >
                <div className="luxury-card p-4 h-100 text-center">
                  <div className="mb-3" style={{ fontSize: "3rem" }}>
                    {service.icon}
                  </div>
                  <h4 className="title text-gold mb-3">{service.title}</h4>
                  <div className="project-overlay">
                    <div className="overlay-text">
                      <p className="mb-0">{service.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
