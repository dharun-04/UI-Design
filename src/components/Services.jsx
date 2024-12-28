import React from "react";
import "./Services.css";

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
      </div>
    </div>
  );
};

export default Services;
