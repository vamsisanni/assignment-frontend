import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Contact.css";

function Contact() {
  const contactCards = [
    {
      title: "Call Us",
      value: "70923 37173",
      link: "tel:7092337173",
      text: "Speak with our academy team for course details, admissions, and free demo class information."
    },
    {
      title: "Alternate Number",
      value: "91828 23051",
      link: "tel:9182823051",
      text: "Reach us for hostel facility details, class timings, and student counselling support."
    },
    {
      title: "Free Demo",
      value: "3 Days Available",
      link: "tel:7092337173",
      text: "Attend free demo classes and understand our teaching method before joining."
    }
  ];

  const visitInfo = [
    {
      number: "01",
      title: "Visit the Academy",
      text: "Meet our faculty, understand the course structure, and explore the learning environment."
    },
    {
      number: "02",
      title: "Discuss the Right Path",
      text: "Whether you completed 10th, 12th, or are studying in 9th and 10th, we guide you toward the right program."
    },
    {
      number: "03",
      title: "Start With Demo Classes",
      text: "Join our 3 days free demo classes to experience concept-based CA coaching."
    }
  ];

  const quickDetails = [
    "Guided by Chartered Accountants",
    "CA Foundation with MEC",
    "CA Intermediate Coaching",
    "Sunday Special CA Coaching",
    "3 Days Free Demo Classes",
    "Hostel Facility Available"
  ];

  return (
    <>
      <Navbar />

      <main className="contact-page">
        <section className="contact-hero-section">
          <div className="contact-hero-pattern" />

          <div className="contact-hero-container">
            <div className="contact-hero-content">
              <span className="contact-eyebrow">Contact Mind Sphere CA CMA Academy</span>

              <h1>Start your CA journey with the right guidance.</h1>

              <p>
                Connect with Mind Sphere CA CMA Academy for admissions, demo classes, course counselling, Sunday special coaching, and hostel facility details.
              </p>

              <div className="contact-hero-actions">
                <a href="tel:7092337173" className="contact-primary-btn">
                  Call 70923 37173
                </a>

                <a href="tel:9182823051" className="contact-secondary-btn">
                  Call 91828 23051
                </a>
              </div>
            </div>

            <div className="contact-hero-image-card">
              <img src="/images/contact-hero1.jpg" alt="Mind Sphere CA CMA Academy contact" />

              <div className="contact-hero-floating-card">
                <span>3 Days</span>
                <p>Free Demo Classes Available</p>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-info-section">
          <div className="contact-section-heading dark">
            <span>Reach Us</span>
            <h2>Talk to our academy team</h2>
            <p>
              We are here to help students and parents choose the right CA learning path with clarity and confidence.
            </p>
          </div>

          <div className="contact-cards-grid">
            {contactCards.map((card) => (
              <a href={card.link} className="contact-card" key={card.title}>
                <span>{card.title}</span>
                <h3>{card.value}</h3>
                <p>{card.text}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="contact-visit-section">
          <div className="contact-visit-image">
            <img src="/images/contact-visit.jpg" alt="Visit Mind Sphere Academy" />
          </div>

          <div className="contact-visit-content">
            <span className="contact-eyebrow">Plan Your Visit</span>
            <h2>Visit, discuss, and begin with free demo classes.</h2>

            <p>
              Visit our academy to understand the teaching approach, class structure, student support, hostel facility, and available course options for CA Foundation, CA Intermediate, and school students.
            </p>

            <div className="contact-visit-list">
              {visitInfo.map((item) => (
                <div className="contact-visit-item" key={item.number}>
                  <span>{item.number}</span>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-map-section">
          <div className="contact-section-heading dark center">
            <span>Find Us</span>
            <h2>Locate Mind Sphere CA CMA Academy</h2>
            <p>
              Use the map below to find the academy location. You can replace the map link later with the exact Google Maps embed link.
            </p>
          </div>

          <div className="contact-map-wrapper">
            <iframe
              title="Mind Sphere CA CMA Academy Map"
              src="https://www.google.com/maps?q=Mind%20Sphere%20CA%20CMA%20Academy&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

        <section className="contact-academy-section">
          <div className="contact-academy-content">
            <span className="contact-eyebrow">Academy Details</span>
            <h2>Everything students need to begin confidently</h2>

            <p>
              Mind Sphere CA CMA Academy provides a focused learning environment guided by Chartered Accountants. Students receive concept-based teaching, exam-focused preparation, and personal attention.
            </p>

            <div className="contact-details-grid">
              {quickDetails.map((item) => (
                <div className="contact-detail-pill" key={item}>
                  <span>✓</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-academy-image">
            <img src="/images/contact-academy.jpg" alt="Mind Sphere Academy details" />
          </div>
        </section>

        <section className="contact-final-section">
          <div className="contact-final-card">
            <span>Admissions Open</span>
            <h2>Ready to join Mind Sphere CA CMA Academy?</h2>

            <p>
              Call us today to enquire about CA Foundation, CA Intermediate, Sunday special CA coaching, hostel facility, and 3 days free demo classes.
            </p>

            <div className="contact-final-actions">
              <a href="tel:7092337173">70923 37173</a>
              <a href="tel:9182823051">91828 23051</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Contact;