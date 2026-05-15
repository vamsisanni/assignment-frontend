import React from "react";
import "./About.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

function About() {
  const learningPaths = [
    {
      number: "01",
      title: "10th Completed?",
      subtitle: "Intermediate MEC + CA Foundation",
      text: "A focused academic path for students who want to start their CA journey early with strong commerce fundamentals."
    },
    {
      number: "02",
      title: "12th Completed?",
      subtitle: "CA Foundation + CA Intermediate",
      text: "Structured coaching that helps students move confidently from CA Foundation preparation into CA Intermediate."
    },
    {
      number: "03",
      title: "9th & 10th Students",
      subtitle: "Sunday Special CA Coaching",
      text: "Early foundation classes designed to build discipline, clarity, confidence, and interest in commerce and accounting."
    }
  ];

  const strengths = [
    "Guided by Chartered Accountants",
    "Concept-based classroom teaching",
    "Exam-oriented preparation",
    "Personal attention for every student",
    "Regular practice and revision",
    "Doubt clarification support",
    "Hostel facility available",
    "3 days free demo classes"
  ];

  const founders = [
    {
      name: "CA Ranga Swamy",
      role: "Founder & Faculty",
      image: "/images/home-mentor-1.jpeg",
      text: "Brings professional CA experience and practical teaching methods to help students understand concepts with clarity."
    },
    {
      name: "CA Nanda Divya",
      role: "Founder & Faculty",
      image: "/images/home-mentor-2.jpeg",
      text: "Focuses on disciplined learning, exam preparation, and personal guidance so students can perform with confidence."
    }
  ];

  const facilities = [
    {
      title: "Comfortable Learning Environment",
      text: "Well-planned classrooms designed to help students stay focused and actively participate in every session.",
      image: "/images/about-classroom.jpg"
    },
    {
      title: "Hostel Facility",
      text: "Hostel support is available for students who need a convenient and safe stay while attending regular coaching.",
      image: "/images/about-hostel.jpg"
    },
    {
      title: "Focused Study Culture",
      text: "A disciplined atmosphere that encourages regular study, revision, doubt clearing, and consistent improvement.",
      image: "/images/about-study.jpg"
    }
  ];

  return (
    <>
      <Navbar />
      <main className="about-page">
        <section className="about-hero-section">
          <div className="about-hero-bg" />

          <div className="about-hero-container">
            <div className="about-hero-content">
              <span className="about-eyebrow">Mind Sphere CA CMA Academy</span>

              <h1>
                Building strong CA foundations with expert Chartered Accountant guidance.
              </h1>

              <p>
                Mind Sphere CA Academy is an educational institution founded in 2025 by Chartered Accountants Ranga Swamy and Nanda Divya. We provide focused coaching for CA Foundation with MEC, CA Intermediate, and special Sunday CA coaching for school students.
              </p>

              <div className="about-hero-actions">
                <a href="tel:7092337173" className="about-primary-btn">
                  Call 70923 37173
                </a>

                <a href="/contact" className="about-secondary-btn">
                  Book Free Demo
                </a>
              </div>
            </div>

            <div className="about-hero-card">
              <div className="about-hero-image-wrap">
                <img src="/images/about-hero.jpg" alt="Mind Sphere Academy students" />
              </div>

              <div className="about-demo-card">
                <span>3 Days</span>
                <p>Free Demo Classes Available</p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-highlights-section">
          <div className="about-highlight-card">
            <span>2025</span>
            <p>Established</p>
          </div>

          <div className="about-highlight-card">
            <span>10+ Years</span>
            <p>Professional Experience</p>
          </div>

          <div className="about-highlight-card">
            <span>CA Experts</span>
            <p>Guided by Chartered Accountants</p>
          </div>

          <div className="about-highlight-card">
            <span>Hostel</span>
            <p>Facility Available</p>
          </div>
        </section>

        <section className="about-intro-section">
          <div className="about-section-heading">
            <span>About Us</span>
            <h2>Mind Sphere CA Academy</h2>
          </div>

          <div className="about-intro-grid">
            <div className="about-intro-image">
              <img src="/images/about-academy.jpg" alt="About Mind Sphere Academy" />
            </div>

            <div className="about-intro-content">
              <p>
                Mind Sphere CA Academy was created with a clear purpose: to guide students through their CA journey with strong conceptual clarity, disciplined preparation, and individual attention. Our coaching is designed for students who want more than memorization. We help them understand subjects deeply and prepare confidently for exams.
              </p>

              <p>
                Founded by Chartered Accountants Ranga Swamy and Nanda Divya, the academy combines professional knowledge with student-friendly teaching. From CA Foundation with MEC to CA Intermediate, every course is planned to help students build a strong academic and professional base.
              </p>

              <div className="about-intro-note">
                <strong>Our belief:</strong>
                <span>Clear understanding, regular practice, and the right guidance can shape every student into a confident achiever.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="about-founders-section-final">
          <div className="about-section-heading-final center-final">
            <span>Our Mentors</span>
            <h2>Founded and guided by Chartered Accountants</h2>
          </div>

          <div className="about-founders-grid-final">
            <article className="about-founder-card-final">
              <div className="about-founder-image-final">
                <img src={founders[0].image} alt={founders[0].name} />
              </div>

              <div className="about-founder-content-final">
                <span>{founders[0].role}</span>
                <h3>{founders[0].name}</h3>
                <p>{founders[0].text}</p>
              </div>
            </article>

            <article className="about-institution-card-final">
              <span>Mind Sphere CA Academy</span>
              <h3>Building strong foundations for CA aspirants</h3>
              <p>
                Established in 2025, Mind Sphere CA Academy offers focused coaching for CA Foundation with MEC and CA Intermediate. Our teaching approach is built around conceptual clarity, disciplined learning, regular practice, and personal attention.
              </p>

              <div className="about-institution-points-final">
                <div>
                  <strong>2025</strong>
                  <p>Established</p>
                </div>

                <div>
                  <strong>10+</strong>
                  <p>Years Experience</p>
                </div>

                <div>
                  <strong>3 Days</strong>
                  <p>Free Demo</p>
                </div>
              </div>
            </article>

            <article className="about-founder-card-final">
              <div className="about-founder-image-final">
                <img src={founders[1].image} alt={founders[1].name} />
              </div>

              <div className="about-founder-content-final">
                <span>{founders[1].role}</span>
                <h3>{founders[1].name}</h3>
                <p>{founders[1].text}</p>
              </div>
            </article>
          </div>
        </section>

        <section className="about-paths-section">
          <div className="about-section-heading">
            <span>Courses & Student Paths</span>
            <h2>Choose the right starting point for your CA journey</h2>
          </div>

          <div className="about-paths-grid">
            {learningPaths.map((path) => (
              <article className="about-path-card" key={path.number}>
                <div className="about-path-number">{path.number}</div>
                <h3>{path.title}</h3>
                <h4>{path.subtitle}</h4>
                <p>{path.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about-method-section">
          <div className="about-method-content">
            <div className="about-section-heading">
              <span>Our Teaching Method</span>
              <h2>Conceptual clarity with exam-focused preparation</h2>
            </div>

            <p>
              We follow a balanced learning model where every student first understands the concept, then practices the topic, revises regularly, and finally prepares with an exam-oriented approach. This makes learning more meaningful and improves confidence before exams.
            </p>

            <div className="about-method-list">
              <div>
                <span>01</span>
                <p>Understand the concept clearly</p>
              </div>

              <div>
                <span>02</span>
                <p>Practice with structured classroom tasks</p>
              </div>

              <div>
                <span>03</span>
                <p>Revise regularly with faculty support</p>
              </div>

              <div>
                <span>04</span>
                <p>Prepare through exam-oriented guidance</p>
              </div>
            </div>
          </div>

          <div className="about-method-image">
            <img src="/images/about-teaching1.jpg" alt="Teaching method at Mind Sphere Academy" />
          </div>
        </section>

        <section className="about-school-section">
          <div className="about-school-image">
            <img src="/images/about-school-students.jpg" alt="Sunday CA coaching for school students" />
          </div>

          <div className="about-school-content">
            <span className="about-eyebrow">For 9th & 10th Students</span>
            <h2>Sunday special CA coaching for early learners</h2>

            <p>
              Our Sunday special coaching helps 9th and 10th students build a strong academic foundation at an early stage. Students are introduced to disciplined learning, basic commerce thinking, and problem-solving habits that support their future CA journey.
            </p>

            <a href="/contact" className="about-inline-btn">
              Enquire About Sunday Classes
            </a>
          </div>
        </section>

        <section className="about-strengths-section">
          <div className="about-section-heading center">
            <span>Why Choose Us</span>
            <h2>A student-focused academy built for serious CA preparation</h2>
          </div>

          <div className="about-strengths-grid">
            {strengths.map((item) => (
              <div className="about-strength-item" key={item}>
                <span>✓</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="about-facilities-section">
          <div className="about-section-heading">
            <span>Facilities</span>
            <h2>Learning support that helps students stay consistent</h2>
          </div>

          <div className="about-facilities-grid">
            {facilities.map((facility) => (
              <article className="about-facility-card" key={facility.title}>
                <img src={facility.image} alt={facility.title} />

                <div>
                  <h3>{facility.title}</h3>
                  <p>{facility.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about-contact-section">
          <div className="about-contact-content">
            <span>Admissions Open</span>
            <h2>Start with 3 days of free demo classes</h2>

            <p>
              Speak with our team, understand the course structure, visit the academy, and choose the right learning path for your CA preparation.
            </p>

            <div className="about-contact-buttons">
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

export default About;