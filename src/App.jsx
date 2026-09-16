import { useRef, useState } from "react";
import "./App.css";
/* 3D PROFILE COMPONENT */
function Profile3D() {
  const cardRef = useRef(null);
  const [rotation, setRotation] = useState({
    x: 0,
    y: 0,
  });
  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateY = ((x - centerX) / centerX) * 10;
    const rotateX = ((centerY - y) / centerY) * 10;
    setRotation({
      x: rotateX,
      y: rotateY,
    });
  };
  const handleMouseLeave = () => {
    setRotation({
      x: 0,
      y: 0,
    });
  };
  return (
    <div className="profile-3d-wrapper">
      <div
        ref={cardRef}
        className="profile-3d-card"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `
            rotateX(${rotation.x}deg)
            rotateY(${rotation.y}deg)
            translateY(-8px)
          `,
        }}
      >
        <img
          src="/images/profile.jpg"
          alt="Yogesh"
          className="profile-3d-image"
        />
        <div className="profile-3d-shine"></div>
      </div>
      <div className="profile-platform"></div>
    </div>
  );
}
/* PROJECTS*/
const projects = [
  {
    title: "Weather Application",
    icon: "bi-cloud-sun",
    description:
      "A responsive weather application that displays weather information, AQI and environmental data through a clean interface.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "React", "API", "Netlify"],
    link: "https://weatherwithyogesh.netlify.app/",
  },
  {
    title: "AI Image and Video Classification",
    icon: "bi-camera",
    description:
      "An AI/ML project focused on image classification and practical computer vision workflows.",
    tech: ["Python", "OpenCV", "Machine Learning"],
    link: "#",
  },
];
/* SKILLS*/
const skills = [
  {
    name: "Python",
    icon: "bi-filetype-py",
    certificate:
      "/certificates/python_basic certificate-(14-10-25).pdf",
  },
  {
    name: "Java",
    icon: "bi-cup-hot",
    certificate:
      "/certificates/java[basic] (20-11-2025).pdf",
  },
  {
    name: "HTML & CSS",
    icon: "bi-filetype-html",
    certificate: null,
  },
  {
    name: "JavaScript",
    icon: "bi-filetype-js",
    certificate:
      "/certificates/javascript IBM(26-04-26).pdf",
  },
  {
    name: "React.js",
    icon: "bi-react",
    certificate: null,
  },
  {
    name: "Bootstrap",
    icon: "bi-bootstrap",
    certificate: null,
  },
  {
    name: "MongoDB",
    icon: "bi-database-fill",
    certificate:
      "/certificates/MongoDB Foundations Course For Beginners( 19-02-26).pdf",
  },
  {
    name: "Machine Learning",
    icon: "bi-cpu",
    certificate:
      "/certificates/Machine Learning with Python(25-09-2025).pdf",
  },
  {
    name: "Computer Vision",
    icon: "bi-eye",
    certificate: null,
  },
  {
    name: "Git & GitHub",
    icon: "bi-github",
    certificate: null,
  },
];
/* CERTIFICATIONS*/
const certifications = [
  {
    title: "AI & Machine Learning",
    text:
      "Courses and hands-on learning in AI/ML concepts and applications.",
    icon: "bi-patch-check",
    certs: [
      {
        name: "Data Science",
        file:
          "/certificates/Data Science(26-08-25).pdf",
      },
      {
        name: "Artificial Intelligence",
        file:
          "/certificates/Artificial Intelligence(26-09-2025).pdf",
      },
      {
        name: "Machine Learning with Python",
        file:
          "/certificates/Machine Learning with Python(25-09-2025).pdf",
      },
      
    ],
  },
  {
    title: "Web Development",
    text:
      "Practice with HTML, CSS, JavaScript, React and responsive design.",
    icon: "bi-patch-check",
    certs: [
      {
        name: "HTML and CSS",
        file:
          "/certificates/HTMLandCSS.pdf",
      },
      {
        name: "JavaScript",
        file:
          "/certificates/javascript IBM(26-04-26).pdf",
      },
      {
        name: "MongoDB Foundations",
        file:
          "/certificates/MongoDB Foundations Course For Beginners( 19-02-26).pdf",
      },
      {
        name: "SQL Server Foundations",
        file:
          "/certificates/SQL Server Foundations Course( 19-02-26).pdf",
      },
    ],
  },

  {
    title: "Programming",
    text:
      "Continuous practice with C, C++, Java, Python and problem solving.",
    icon: "bi-patch-check",
    certs: [
      {
        name: "Python Basic",
        file:
          "/certificates/python_basic certificate-(14-10-25).pdf",
      },
      {
        name: "Java Basic",
        file:
          "/certificates/java[basic] (20-11-2025).pdf",
      },
    ],
  },
  
  {
    title: "other",
    text:
      "Continuous praticipation on College events and NSS events.",
    icon: "bi-patch-check",
    certs: [
      {
        name: "MY Bharat",
        file:
          "/certificates/MY Bharat.pdf",
      },
      {
        name: "VBYLD",
        file:
          "/certificates/VBYLD -(2026)- (15-10-25).png",
      },
      {
        name: "Safety Riding Training honda",
        file:
          "/certificates/Safety Riding Training honda (25-07-25).pdf",
      },
      {
        name: "Isha Mahashivaratri",
        file:
          "/certificates/Isha Mahashivaratri(26-02-25).pdf",
      },
    ],
  },
];
/* MAIN APP*/
function App() {
  const [dark, setDark] = useState(true);
  return (
    <div className={dark ? "site dark" : "site light"}>
      {/* NAVBAR  */}
      <nav className="navbar navbar-expand-lg fixed-top portfolio-nav">
        <div className="container">
          <a
            className="navbar-brand fw-bold"
            href="#home"
          >
            Yogesh<span>.P</span>
          </a>
          <div
            className="collapse navbar-collapse"
            id="mainNav"
          >
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
              {[
                "Home",
                "About",
                "Skills",
                "Projects",
                "Education",
                "Experience",
                "Contact",
              ].map((item) => (
                <li
                  className="nav-item"
                  key={item}
                >
                  <a
                    className="nav-link"
                    href={`#${item.toLowerCase()}`}
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li className="nav-item ms-lg-2">
                <button
                  className="theme-btn"
                  onClick={() => setDark(!dark)}
                  aria-label="Toggle theme"
                >
                  <i
                    className={
                      dark
                        ? "bi bi-sun"
                        : "bi bi-moon-stars"
                    }
                  ></i>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main>
        {/*  HOME */}
        <section
          id="home"
          className="hero-section"
        >
          <div className="container">
            <div className="row align-items-center min-vh-100 g-5">
              {/* LEFT SIDE */}
              <div className="col-lg-7">
                <div className="hero-copy reveal">
                  <p className="eyebrow">
                    HELLO, I'M
                  </p>
                  <h1>
                    Yogesh <span>P.</span>
                  </h1>
                  <h2>
                    AI & ML Student <span>•</span> Developer
                  </h2>
                  <p className="lead">
                    I’m a 3rd year B.E. CSE (AI & ML)
                    student who enjoys building practical
                    projects with Artificial Intelligence,
                    Machine Learning and modern web
                    technologies.
                  </p>
                  <div className="d-flex flex-wrap gap-3 mt-4">
                    <a
                      href="#projects"
                      className="btn btn-accent"
                    >
                      Explore Projects{" "}
                      <i className="bi bi-arrow-right ms-1"></i>
                    </a>
                    <a
                      href="#contact"
                      className="btn btn-outline-accent"
                    >
                      Contact Me
                    </a>
                  </div>
                  <div className="social-row mt-4">
                    <a
                      href="https://github.com/Yogesh-Palanichamy"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bi bi-github"></i>{" "}
                      GitHub
                    </a>
                    <a
                      href="https://www.linkedin.com/in/yogesh-p-1b7127389/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bi bi-linkedin"></i>{" "}
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
              {/* RIGHT SIDE - 3D PROFILE */}
              <div className="col-lg-5">
                <div className="hero-visual reveal">
                  <Profile3D />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ABOUT */}
        <section
          id="about"
          className="section-padding"
        >
          <div className="container">
            <SectionHeading
              label="ABOUT ME"
              title="A Developer Who Learns by Building"
            />
            <div className="row g-4 align-items-stretch">
              <div className="col-lg-7">
                <div className="glass-card h-100">
                  <big>
                    <p>
                      I’m Yogesh, a Computer Science
                      Engineering student specializing in
                      Artificial Intelligence and Machine
                      Learning.
                    </p>
                    <p>
                      I like turning ideas into working
                      projects. My interests include AI/ML,
                      computer vision, web development and
                      solving real-world problems with
                      technology.
                    </p>
                    <p>
                      I’m continuously improving my
                      programming and development skills
                      through hands-on projects, courses
                      and experimentation.
                    </p>
                  </big>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="info-grid">
                  <Info
                    label="Degree"
                    value="B.E. Computer Science Engineering (AI & ML)"
                  />
                  <Info
                    label="Year"
                    value="3rd Year"
                  />
                  <Info
                    label="College"
                    value="Coimbatore Institute of Engineering and Technology"
                  />
                  <Info
                    label="Focus"
                    value="AI | ML | Web Development"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* SKILLS */}
        <section
          id="skills"
          className="section-padding section-muted"
        >
          <div className="container">
            <SectionHeading
              label="TECH STACK"
              title="Skills & Technologies"
            />
            <div className="row g-3">
              {skills.map((skill) => (
                <div
                  className="col-6 col-md-4 col-lg-3"
                  key={skill.name}
                >
                  <div className="skill-card">
                    <i
                      className={`bi ${skill.icon}`}
                    ></i>
                    <h4>
                      {skill.name}
                    </h4>
            </div>
            </div>
            ))}
            </div>
          </div>
        </section>
        {/* EXPERIENCE */}
        <section
          id="experience"
          className="section-padding"
        >
          <div className="container">
            <SectionHeading
              label="EXPERIENCE"
              title="Internship Experience"
            />
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="glass-card internship-card">
                  <div className="d-flex align-items-start gap-3">
                    <div className="project-icon">
                      <i className="bi bi-briefcase-fill"></i>
                    </div>
                    <div>
                      <span className="timeline-label">
                        INTERNSHIP
                      </span>
                      <h3 className="mt-2">
                        Front-End Development Intern
                      </h3>
                      <h5>
                        Smartweb Technologies
                      </h5>
                      <p>
                        Worked on front-end development
                        using React, RESTful APIs and
                        MongoDB while gaining practical
                        experience in building web
                        applications.
                      </p>
                      <p className="mb-3">
                        <i className="bi bi-calendar3 me-2"></i>
                        June 2026
                      </p>
                      <a
                        href="/certificates/71052410044-Yogesh%20P(internship).pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-accent"
                      >
                        <i className="bi bi-patch-check-fill me-2"></i>
                        View Internship Certificate
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* PROJECTS */}
        <section
          id="projects"
          className="section-padding"
        >
          <div className="container">
            <SectionHeading
              label="MY WORK"
              title="Projects"
            />
            <div className="row g-4">
              {projects.map((project, index) => (
                <div
                  className="col-md-6 col-lg-4"
                  key={project.title}
                >
                  <article className="project-card h-100">
                    <div className="project-top">
                      <div className="project-icon">
                        <i
                          className={`bi ${project.icon}`}
                        ></i>
                      </div>
                      <span>
                        0{index + 1}
                      </span>
                    </div>
                    <h3>
                      {project.title}
                    </h3>
                    <p>
                      {project.description}
                    </p>
                    <div className="tech-list">
                      {project.tech.map((tech) => (
                        <span key={tech}>
                          {tech}
                        </span>
                      ))}
                    </div>
                    {project.link !== "#" ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="project-link"
                      >
                        Live Project{" "}
                        <i className="bi bi-arrow-up-right"></i>
                      </a>
                    ) : (
                      <span className="project-link muted-link">
                        Coming Soon
                      </span>
                    )}
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* EDUCATION */}
        <section
          id="education"
          className="section-padding section-muted"
        >
          <div className="container">
            <SectionHeading
              label="MY JOURNEY"
              title="Education & Learning"
            />
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content glass-card">
                  <span className="timeline-label">
                    CURRENT
                  </span>
                  <h3>
                    B.E. Computer Science & Engineering
                  </h3>
                  <p className="mb-1">
                    Specialization: Artificial Intelligence
                    & Machine Learning
                  </p>
                  <p className="mb-0">
                    Coimbatore Institute of Engineering
                    and Technology • 3rd Year
                  </p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content glass-card">
                  <span className="timeline-label">
                    FOCUS
                  </span>
                  <h3>
                    Practical Project Development
                  </h3>
                  <p className="mb-0">
                    Building projects in AI/ML, computer
                    vision and web development while
                    strengthening programming fundamentals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CERTIFICATIONS */}
        <section
          id="certifications"
          className="section-padding"
        >
          <div className="container">
            <SectionHeading
              label="LEARNING"
              title="Certifications & Achievements"
            />
            <div className="row g-4">
              {certifications.map(
                ({ title, text, icon, certs }) => (
                  <div
                    className="col-md-4"
                    key={title}
                  >
                    <div className="certificate-card h-100">
                      <i
                        className={`bi ${icon}`}
                      ></i>
                      <h3>
                        {title}
                      </h3>
                      <p>
                        {text}
                      </p>
                      <div className="d-flex flex-column gap-2 mt-3">
                        {certs.map((cert) => (
                          <a
                            key={cert.file}
                            href={cert.file}
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-sm btn-outline-accent"
                          >
                            <i className="bi bi-patch-check-fill me-1"></i>
                            {cert.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </section>
        {/* CONTACT */}
        <section
          id="contact"
          className="contact-section"
        >
          <div className="container text-center">
            <p className="eyebrow">
              GET IN TOUCH
            </p>
            <h2>
              Let’s Build Something <span>Useful.</span>
            </h2>
            <p className="contact-text">
              Open to learning opportunities,
              internships, collaborations and
              interesting software or AI/ML projects.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <a
                href="mailto:yogesh.p.ciet@gmail.com"
                className="btn btn-accent"
              >
                <i className="bi bi-envelope me-2"></i>
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/yogesh-p-1b7127389/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-accent"
              >
                LinkedIn
              </a>
            </div>
            <div className="contact-socials">
              <a
                href="https://github.com/Yogesh-Palanichamy"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/yogesh-p-1b7127389/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="mailto:yogesh.p.ciet@gmail.com">
                <i className="bi bi-envelope"></i>
              </a>
            </div>
          </div>
        </section>
      </main>
      {/* FOOTER */}
      <footer className="footer">
        <div className="container d-flex flex-wrap justify-content-between gap-2">
          <span>
            © {new Date().getFullYear()} Yogesh P.
          </span>
          <span>
            #YogeshDevJourney
          </span>
          <span>
            yogesh.p.ciet@gmail.com
          </span>
        </div>
      </footer>
    </div>
  );
}
/*SECTION HEADING*/
function SectionHeading({ label, title }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">
        {label}
      </p>
      <h2>
        {title}
      </h2>
    </div>
  );
}
/* INFO BOX*/
function Info({ label, value }) {
  return (
    <div className="info-box">
      <small>
        {label}
      </small>
      <strong>
        {value}
      </strong>
    </div>
  );
}
export default App;