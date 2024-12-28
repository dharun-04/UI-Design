import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
// import "./Services.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>
            Transforming <span className="highlight">Your</span>
          </h1>
          <h1>
            Vision into <span className="highlight">Reality</span>
          </h1>
          <p>
            We help build and manage a team of world-class developers to bring your vision to life.
          </p>
          <p>
            to bring your vision to life.
          </p>
          <div>
            <Link to="/services" className="hero-btn">
              Let's get started!
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img src="https://via.placeholder.com/600x400" alt="Team Collaboration" />
        </div>
      </section>
    </div>
  );
};

const services = [
  {
    id: 1,
    title: "UI/UX Design",
    description: "Crafting intuitive and user-friendly designs that resonate with your audience.",
    icon: "📱",
  },
  {
    id: 2,
    title: "Web Development",
    description: "Building responsive and dynamic websites that drive engagement and growth.",
    icon: "💻",
  },
  {
    id: 3,
    title: "Logo Branding",
    description: "Creating memorable logos that define your brand identity.",
    icon: "🎨",
  },
];

const Services = () => {
  return (
    <div className="services">
      <h2 className="services-title">Services we offer</h2>
      <div className="services-cards">
        {services.map((service) => (
          <div className="service-card" key={service.id}>
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
      <div className="pagination">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        {/* <span className="dot"></span>
        <span className="dot"></span> */}
      </div>
    </div>
  );
};

const CombinedPage = () => {
  return (
    <div>
      <LandingPage />
      <Services />
    </div>
  );
};

export default CombinedPage;
