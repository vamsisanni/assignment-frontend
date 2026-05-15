import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-glow footer-glow-one" />
      <div className="footer-glow footer-glow-two" />

      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-column footer-brand">
              <Link to="/" className="footer-logo-link">
                <img src="/images/logo.png" alt="Mind Sphere CA CMA Academy" className="footer-brand-logo" />
              </Link>

              <p>
                Mind Sphere CA CMA Academy guides students with Chartered Accountant-led coaching for CA Foundation, CA Intermediate, MEC, and early CA learning for school students.
              </p>

              <div className="footer-socials">
                <a href="https://www.facebook.com" className="footer-social-link" aria-label="Facebook">
                  <svg className="footer-social-svg" width="18" height="18" viewBox="0 0 24 24">
                    <path d="M14 8.5V6.7c0-.9.2-1.4 1.5-1.4H17V2.2c-.8-.1-1.7-.2-2.5-.2-2.6 0-4.4 1.6-4.4 4.5v2H7.2V12h2.9v9.8H14V12h2.9l.4-3.5H14Z" />
                  </svg>
                </a>

                <a href="https://www.instagram.com" className="footer-social-link" aria-label="Instagram">
                  <svg className="footer-social-svg" width="18" height="18" viewBox="0 0 24 24">
                    <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm4.2 3.3A4.7 4.7 0 1 1 7.3 12 4.7 4.7 0 0 1 12 7.3Zm0 2A2.7 2.7 0 1 0 14.7 12 2.7 2.7 0 0 0 12 9.3Zm5-2.2a1.1 1.1 0 1 1-1.1 1.1A1.1 1.1 0 0 1 17 7.1Z" />
                  </svg>
                </a>

                <a href="https://www.youtube.com" className="footer-social-link" aria-label="YouTube">
                  <svg className="footer-social-svg" width="20" height="20" viewBox="0 0 24 24">
                    <path d="M21.6 7.1s-.2-1.5-.9-2.2c-.9-.9-1.9-.9-2.4-1C15 3.7 12 3.7 12 3.7s-3 0-6.3.2c-.5.1-1.5.1-2.4 1-.7.7-.9 2.2-.9 2.2S2.2 8.9 2.2 10.8v1.7c0 1.9.2 3.7.2 3.7s.2 1.5.9 2.2c.9.9 2.1.9 2.6 1 1.9.2 6.1.2 6.1.2s3 0 6.3-.2c.5-.1 1.5-.1 2.4-1 .7-.7.9-2.2.9-2.2s.2-1.9.2-3.7v-1.7c0-1.9-.2-3.7-.2-3.7ZM9.9 14.7V8.4l5.6 3.2-5.6 3.1Z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="footer-column footer-links">
              <h2>Quick Links</h2>

              <ul className="footer-link-list">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/courses">Courses</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>

            <div className="footer-column footer-links">
              <h2>Courses</h2>

              <ul className="footer-link-list">
                <li>
                  <Link to="/courses">CA Foundation with MEC</Link>
                </li>
                <li>
                  <Link to="/courses">CA Foundation</Link>
                </li>
                <li>
                  <Link to="/courses">CA Intermediate</Link>
                </li>
                <li>
                  <Link to="/courses">Sunday Special CA Coaching</Link>
                </li>
              </ul>
            </div>

            <div className="footer-column footer-support">
              <h2>Contact Us</h2>

              <ul className="footer-support-list">
                <li className="footer-support-item">
                  <span className="footer-icon">
                    <svg width="19" height="19" viewBox="0 0 24 24">
                      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.3 1.3.4 2.6.6 4 .6.7 0 1.2.5 1.2 1.2v3.5c0 .7-.5 1.2-1.2 1.2C10.4 22 2 13.6 2 3.4 2 2.7 2.5 2.2 3.2 2.2h3.5c.7 0 1.2.5 1.2 1.2 0 1.4.2 2.8.6 4 .1.4 0 .9-.3 1.2l-1.6 2.2Z" />
                    </svg>
                  </span>

                  <a href="tel:7092337173" className="footer-contact-link">
                    70923 37173
                  </a>
                </li>

                <li className="footer-support-item">
                  <span className="footer-icon">
                    <svg width="19" height="19" viewBox="0 0 24 24">
                      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.3 1.3.4 2.6.6 4 .6.7 0 1.2.5 1.2 1.2v3.5c0 .7-.5 1.2-1.2 1.2C10.4 22 2 13.6 2 3.4 2 2.7 2.5 2.2 3.2 2.2h3.5c.7 0 1.2.5 1.2 1.2 0 1.4.2 2.8.6 4 .1.4 0 .9-.3 1.2l-1.6 2.2Z" />
                    </svg>
                  </span>

                  <a href="tel:9182823051" className="footer-contact-link">
                    91828 23051
                  </a>
                </li>

                <li className="footer-support-item">
                  <span className="footer-icon">
                    <svg width="19" height="19" viewBox="0 0 24 24">
                      <path d="M12 2a7.5 7.5 0 0 0-7.5 7.5c0 5.4 7.5 12.5 7.5 12.5s7.5-7.1 7.5-12.5A7.5 7.5 0 0 0 12 2Zm0 10.2a2.7 2.7 0 1 1 2.7-2.7 2.7 2.7 0 0 1-2.7 2.7Z" />
                    </svg>
                  </span>

                  <span>Mind Sphere CA CMA Academy</span>
                </li>

                <li className="footer-support-item">
                  <span className="footer-icon">
                    <svg width="19" height="19" viewBox="0 0 24 24">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2Zm8 8.7L20 7.8V6l-8 4.9L4 6v1.8l8 4.9Z" />
                    </svg>
                  </span>

                  <span>3 Days Free Demo Classes Available</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-feature-row">
            <div className="footer-feature-card">
              <span>Guided By</span>
              <p>Chartered Accountants</p>
            </div>

            <div className="footer-feature-card">
              <span>Facility</span>
              <p>Hostel Available</p>
            </div>

            <div className="footer-feature-card">
              <span>For Students</span>
              <p>9th, 10th, 10th Completed, 12th Completed</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-bottom-row">
            <p className="footer-copyright">
              © {currentYear} Mind Sphere CA CMA Academy. All Rights Reserved.
            </p>

            <p className="footer-made-text">
              Built for focused learning, clear concepts, and confident CA preparation.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;