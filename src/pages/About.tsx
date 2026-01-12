import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      {/* Hero Banner */}
      <section className="py-5 hero-section">
        <div className="container ">
          <div className="row ">
            <div className="col-12 text-center">
              <h1 className="section-title text-gold-gradient">About Me</h1>
              <div className="luxury-divider"></div>
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

      {/* About Content */}
      <section className="section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 mb-5 mb-lg-0">
              <div className="position-relative">
                <div
                  className="ratio ratio-1x1"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--luxury-black-light) 0%, var(--luxury-black) 100%)",
                    border: "2px solid var(--luxury-gold)",
                    maxWidth: "400px",
                    margin: "0 auto",
                  }}
                >
                  <div className="d-flex align-items-center justify-content-center">
                    <span
                      className="text-gold-gradient"
                      style={{
                        fontSize: "8rem",
                        fontFamily: "var(--font-display)",
                      }}
                    >
                      ART
                    </span>
                  </div>
                </div>
                <div
                  className="position-absolute"
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "2px solid var(--luxury-silver)",
                    top: "20px",
                    left: "20px",
                    zIndex: -1,
                    maxWidth: "400px",
                    opacity: 0.5,
                  }}
                />
              </div>
            </div>

            <div className="col-lg-7">
              <h2
                className="text-gold mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Hello, I'm Abdallah Khaled
              </h2>
              <p className="text-silver mb-4" style={{ lineHeight: 1.8 }}>
                I'm a passionate Full Stack Developer with over 3 years of
                experience in creating exceptional digital experiences. My
                journey in web development started with a curiosity about how
                things work on the internet, and it has evolved into a
                fulfilling career where I get to solve complex problems and
                bring ideas to life.
              </p>
              <p className="text-silver mb-4" style={{ lineHeight: 1.8 }}>
                I specialize in building modern web applications using
                cutting-edge technologies like React, Laravel, JavaScript, and
                various databases. My approach combines technical expertise with
                a keen eye for design, ensuring that every project I work on is
                both functional and visually appealing.
              </p>
              <p className="text-silver mb-4" style={{ lineHeight: 1.8 }}>
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community. I believe in continuous learning and
                staying updated with the latest industry trends.
              </p>

              <div className="row g-4 mt-4">
                <div className="col-sm-6">
                  <div className="d-flex align-items-center">
                    <div
                      className="me-3 text-gold"
                      style={{ fontSize: "1.5rem" }}
                    >
                      📍
                    </div>
                    <div>
                      <p className="text-secondary mb-0 small">Location</p>
                      <p className="text-silver mb-0">Egypt</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center">
                    <div
                      className="me-3 text-gold"
                      style={{ fontSize: "1.5rem" }}
                    >
                      📧
                    </div>
                    <div>
                      <p className="text-secondary mb-0 small">Email</p>
                      <p className="text-silver mb-0">
                        abdullahkhaled@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center">
                    <div
                      className="me-3 text-gold"
                      style={{ fontSize: "1.5rem" }}
                    >
                      💼
                    </div>
                    <div>
                      <p className="text-secondary mb-0 small">Experience</p>
                      <p className="text-silver mb-0">3+ Years</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center">
                    <div
                      className="me-3 text-gold"
                      style={{ fontSize: "1.5rem" }}
                    >
                      🎓
                    </div>
                    <div>
                      <p className="text-secondary mb-0 small">Degree</p>
                      <p className="text-silver mb-0">Computer Science</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <Link to="/contact" className="btn btn-luxury-gold me-3">
                  Hire Me
                </Link>
                <Link to="/projects" className="btn btn-luxury-outline">
                  View Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="section-padding bg-luxury-black-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title text-gold-gradient">Experience</h2>
            <div className="luxury-divider"></div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              {[
                {
                  year: "2025 - Present",
                  title: "Junior Full Stack Developer",
                  company: "Tech Solutions Inc.",
                  description:
                    "Leading development of enterprise web applications using React and Laravel.",
                },
                {
                  year: "2023 - 2025",
                  title: "Backend Developer",
                  company: "Digital Agency",
                  description:
                    "Built custom web solutions for clients across various industries.",
                },
                {
                  year: "2022 - 2023",
                  title: "Frontend Developer",
                  company: "Startup Hub",
                  description:
                    "Developed responsive user interfaces and improved user experience.",
                },
              ].map((exp, index) => (
                <div key={index} className="d-flex mb-4">
                  <div className="me-4 text-end" style={{ minWidth: "150px" }}>
                    <span
                      className="text-gold small"
                      style={{ letterSpacing: "1px" }}
                    >
                      {exp.year}
                    </span>
                  </div>
                  <div
                    className="position-relative pe-4"
                    style={{
                      borderLeft: "2px solid var(--luxury-gold)",
                      paddingLeft: "30px",
                    }}
                  >
                    <div
                      className="position-absolute"
                      style={{
                        width: "12px",
                        height: "12px",
                        background: "var(--luxury-gold)",
                        borderRadius: "50%",
                        left: "-7px",
                        top: "5px",
                      }}
                    />
                    <h4 className="text-gold mb-1">{exp.title}</h4>
                    <p className="text-silver mb-2">{exp.company}</p>
                    <p className="text-secondary mb-0">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
// import React from "react";
// import {
//   Code,
//   Palette,
//   Zap,
//   Github,
//   Linkedin,
//   Mail,
//   ExternalLink,
//   ChevronDown,
//   Menu,
//   X,
// } from "lucide-react";
// import LogoLoop from "../LogoLoop";
// import {
//   SiReact,
//   SiNextdotjs,
//   SiTypescript,
//   SiTailwindcss,
// } from "react-icons/si";

// export default function About({ id }) {
//   const techLogos = [
//     { node: <SiReact />, title: "React", href: "https://react.dev" },
//     { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
//     {
//       node: <SiTypescript />,
//       title: "TypeScript",
//       href: "https://www.typescriptlang.org",
//     },
//     {
//       node: <SiTailwindcss />,
//       title: "Tailwind CSS",
//       href: "https://tailwindcss.com",
//     },
//   ];

//   const imageLogos = [
//     {
//       src: "/logos/company1.png",
//       alt: "Company 1",
//       href: "https://company1.com",
//     },
//     {
//       src: "/logos/company2.png",
//       alt: "Company 2",
//       href: "https://company2.com",
//     },
//     {
//       src: "/logos/company3.png",
//       alt: "Company 3",
//       href: "https://company3.com",
//     },
//   ];

//   return (
//     <>
//       <section id="about">
//         <div
//           className="container min-h-screen mx-auto py-1 md:py-5  text-center text-white"
//           id={id}
//         >
//           <div className="my-5 py-5">
//             <h3 className="text-4xl font-bold text-4xl font-bold bg-linear-to-r from-blue-200 to-blue-600 bg-clip-text text-transparent">
//               About Me
//             </h3>
//             <div className="flex justify-center mt-5 gap-4">
//               <a
//                 href="https://github.com/NorhanGamalY"
//                 className="p-3 bg-gray-800 rounded-full hover:bg-purple-500 transition-all hover:scale-110"
//                 target="_blank"
//               >
//                 <Github size={24} />
//               </a>
//               <a
//                 href="https://www.linkedin.com/in/norhan-gamal-yousef/"
//                 className="p-3 bg-gray-800 rounded-full hover:bg-blue-500 transition-all hover:scale-110"
//                 target="_blank"
//               >
//                 <Linkedin size={24} />
//               </a>
//               <a
//                 href="mailto:norha25gamal@gmail.com"
//                 className="p-3 bg-gray-800 rounded-full hover:bg-red-500 transition-all hover:scale-110"
//               >
//                 <Mail size={24} />
//               </a>
//             </div>
//           </div>
//           <div className="container mx-auto p-5 flex flex-col items-center gap-6 md:flex-row md:items-stretch  justify-center ">
//             <div className="w-full md:w-1/3 ">
//               <img
//                 className="mx-auto shadow-xl w-[80%] md:w-full rounded-3 sm:mx-0 sm:shrink-0"
//                 src="about.jpg"
//                 alt="personal-Picture"
//                 style={{ height: "500px" }}
//               />
//             </div>
//             <div className="hidden md:flex md:w-1/6  md:w-1/8 flex-col items-center justify-evenly  bg-transparent">
//               <div
//                 style={{
//                   height: "500px",
//                   position: "relative",
//                   overflow: "hidden",
//                 }}
//               >
//                 <LogoLoop
//                   logos={techLogos}
//                   speed={80}
//                   direction="up"
//                   logoHeight={48}
//                   gap={40}
//                   hoverSpeed={20}
//                   fadeOut
//                 />
//               </div>
//             </div>
//             <div className="w-[80%] md:hidden flex-col items-center justify-evenly  bg-transparent">
//               <div
//                 style={{
//                   height: "50px",
//                   position: "relative",
//                   overflow: "hidden",
//                 }}
//               >
//                 <LogoLoop
//                   logos={techLogos}
//                   speed={80}
//                   direction="left"
//                   logoHeight={48}
//                   gap={40}
//                   hoverSpeed={20}
//                   fadeOut
//                 />
//               </div>
//             </div>
//             <div
//               className="w-[80%] md:w-1/3 p-5 flex flex-col items-center justify-center bg-[#111827]"
//               style={{ height: "500px" }}
//             >
//               <p className="text-start text-xl">
//                 I'm a Front-End Developer, my primary toolkit centers around
//                 React and Next.js, where I leverage their powerful ecosystems to
//                 build everything from single-page applications to full-stack
//                 solutions with server-side rendering and static site generation.
//               </p>
//               <div className="my-5 flex flex-wrap justify-between gap-2">
//                 <div className="rounded-xl w-[48%] font-bold bg-[#242430] mb-1 p-3 hover:bg-[#22D3EE] transition-all hover:scale-110">
//                   <span className="text-[#C084FC]">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="24"
//                       height="24"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       stroke-width="2"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                       class="lucide lucide-code-icon lucide-code"
//                     >
//                       <path d="m16 18 6-6-6-6" />
//                       <path d="m8 6-6 6 6 6" />
//                     </svg>
//                   </span>
//                   <span>Clean Code</span>
//                 </div>

//                 <div className="rounded-xl w-[48%] font-bold bg-[#242430] mb-1 p-3 hover:bg-[#FACC15] transition-all hover:scale-110">
//                   <span className="text-[#F472B6]">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="24"
//                       height="24"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       stroke-width="2"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                       class="lucide lucide-palette-icon lucide-palette"
//                     >
//                       <path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z" />
//                       <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
//                       <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
//                       <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
//                       <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
//                     </svg>
//                   </span>
//                   <span>Beautiful UI</span>
//                 </div>

//                 <div className="rounded-xl w-[48%] font-bold bg-[#242430] p-3 hover:bg-[#F472B6] transition-all hover:scale-110">
//                   <span className="text-[#FACC15]">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="24"
//                       height="24"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       stroke-width="2"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                       class="lucide lucide-zap-icon lucide-zap"
//                     >
//                       <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
//                     </svg>
//                   </span>
//                   <span>Responsive</span>
//                 </div>

//                 <div className="rounded-xl w-[48%] font-bold bg-[#242430] p-3 hover:bg-[#C084FC] transition-all hover:scale-110">
//                   <span className="text-[#22D3EE]">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="24"
//                       height="24"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       stroke-width="2"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                       class="lucide lucide-tablet-smartphone-icon lucide-tablet-smartphone"
//                     >
//                       <rect width="10" height="14" x="3" y="8" rx="2" />
//                       <path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4" />
//                       <path d="M8 18h.01" />
//                     </svg>{" "}
//                   </span>
//                   <span>Responsive</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
