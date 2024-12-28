import React from "react";
import "./Contact.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Contact = () => {
  return (
    <div className="contactus-container">
      <h1 className="contactus-title">Contact Us</h1>
      <p className="contactus-subtitle">
        Any question or remarks? Just write us a message!
      </p>
      <div className="contactus-content">
        <div className="contactus-info">
          <h2 className="info-title">Contact Information</h2>
          <p className="info-description">Say something to start a live chat!</p>
          <div className="info-item">
            <i className="fa fa-phone info-icon"></i>
            <p>91+6380853637</p>
          </div>
          <div className="info-item">
            <i className="fa fa-envelope info-icon"></i>
            <p>lexiontechsolution@gmail.com</p>
          </div>
          <div className="info-item">
            <i className="fa fa-map-marker info-icon"></i>
            <p>Coimbatore</p>
          </div>
          <div className="social-icons">
            <span className="social-icon">
              <i className="fab fa-twitter"></i> 
            </span>
            <span className="social-icon">
              <i className="fab fa-instagram"></i>
            </span>
          </div>
        </div>
        <form className="contactus-form">
          <div className="form-group">
            <input type="text" placeholder="First Name" className="form-input" />
            <input type="text" placeholder="Last Name" className="form-input" />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email" className="form-input" />
            <input type="text" placeholder="Phone Number" className="form-input" />
          </div>
          <div className="form-group">
            <label className="form-label">Select Subject?</label>
            <div className="form-options">
              <label>
                <input type="radio" name="subject" /> General Inquiry
              </label>
              <label>
                <input type="radio" name="subject" /> General Inquiry
              </label>
              <label>
                <input type="radio" name="subject" /> General Inquiry
              </label>
              <label>
                <input type="radio" name="subject" /> General Inquiry
              </label>
            </div>
          </div>
          <div className="form-group">
            <textarea
              placeholder="Write your message.."
              className="form-textarea"
            ></textarea>
          </div>
          <button type="submit" className="form-button">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
