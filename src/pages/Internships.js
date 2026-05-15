import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./Internships.css";

const trainingPrograms = [
  {
    title: "Gaming Training",
    text: "Learn game logic, level design, gameplay flow, player interaction, and gaming UI concepts."
  },
  {
    title: "UI/UX Design",
    text: "Master wireframes, visual design, user journeys, app layouts, website layouts, and design systems."
  },
  {
    title: "Android Development",
    text: "Build Android apps with clean screens, navigation, API integration, and mobile-first thinking."
  },
  {
    title: "Web Development",
    text: "Create modern websites using HTML, CSS, JavaScript, React, responsive design, and deployment basics."
  },
  {
    title: "Digital Marketing",
    text: "Learn branding, social media growth, campaign planning, SEO basics, content strategy, and analytics."
  },
  {
    title: "Artificial Intelligence",
    text: "Understand AI tools, prompt engineering, automation workflows, chatbot concepts, and AI-powered apps."
  }
];

const gamingInternships = [
  "Game UI Designer",
  "Gameplay Tester",
  "Game Website Developer",
  "Game Content Creator",
  "Unity Game Developer",
  "Gaming Community Manager"
];

function Internships() {
  return (
    <div className="internships-page">
      <Navbar />

      <main className="internships-main">
        <section className="internships-hero-section">
          <div className="internships-hero-bg">
            <span />
            <span />
            <span />
            <span />
          </div>

          <div className="internships-hero-content">
            <span className="internships-kicker">Internships at Games Soft</span>
            <h1>Learn, Build, Play, and Grow With Us</h1>
            <p>
              Start your career with hands-on training in gaming, design, development, marketing,
              Android apps, web platforms, and artificial intelligence.
            </p>

            <div className="internships-hero-actions">
              <Link to="/contact" className="internships-primary-btn">
                Apply Now
              </Link>
              <a href="#programs" className="internships-secondary-btn">
                View Programs
              </a>
            </div>
          </div>
        </section>

        <section className="internships-intro-section">
          <div className="internships-intro-card">
            <span>Why Join Us</span>
            <h2>Internships Designed for Real Skills</h2>
          </div>

          <div className="internships-intro-text">
            <p>
              Our internship programs are designed for students and freshers who want practical experience.
              You will work on real tasks, improve your creative thinking, and understand how gaming websites,
              apps, and digital products are planned and built.
            </p>
            <p>
              We focus on learning by doing. Every program gives you project exposure, guided practice,
              portfolio-ready work, and a better understanding of professional workflows.
            </p>
          </div>
        </section>

        <section className="internships-programs-section" id="programs">
          <div className="internships-section-header">
            <span>Training Programs</span>
            <h2>Choose Your Skill Track</h2>
          </div>

          <div className="internships-programs-grid">
            {trainingPrograms.map((item, index) => (
              <div className="internships-program-card" key={item.title}>
                <div className="internships-program-number">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="internships-gaming-section">
          <div className="internships-gaming-image">
            <img src="/images/internship.avif" alt="Gaming internships" />
          </div>

          <div className="internships-gaming-content">
            <span>Gaming Internships</span>
            <h2>For Students Who Love Games</h2>
            <p>
              Gaming is more than playing. It includes design, testing, storytelling, development,
              community building, and user experience. Our gaming internships help you understand
              how games and gaming platforms are created from idea to launch.
            </p>

            <div className="internships-gaming-list">
              {gamingInternships.map((item) => (
                <div className="internships-gaming-item" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="internships-process-section">
          <div className="internships-section-header">
            <span>How It Works</span>
            <h2>Simple Learning Journey</h2>
          </div>

          <div className="internships-process-grid">
            <div className="internships-process-card">
              <strong>01</strong>
              <h3>Choose Track</h3>
              <p>Select your preferred internship area based on your interest and career goal.</p>
            </div>

            <div className="internships-process-card">
              <strong>02</strong>
              <h3>Learn Basics</h3>
              <p>Start with guided learning, tools, concepts, workflows, and beginner-friendly tasks.</p>
            </div>

            <div className="internships-process-card">
              <strong>03</strong>
              <h3>Build Projects</h3>
              <p>Work on mini projects, practical assignments, and portfolio-focused activities.</p>
            </div>

            <div className="internships-process-card">
              <strong>04</strong>
              <h3>Grow Career</h3>
              <p>Improve confidence, build your profile, and prepare for real industry opportunities.</p>
            </div>
          </div>
        </section>

        <section className="internships-benefits-section">
          <div className="internships-benefits-content">
            <span>What You Get</span>
            <h2>More Than Just Training</h2>
            <p>
              We help interns understand how digital work happens in a practical environment.
              You will learn technical skills, communication, design thinking, problem solving,
              and project discipline.
            </p>
          </div>

          <div className="internships-benefits-grid">
            <div>Practical Projects</div>
            <div>Portfolio Work</div>
            <div>Skill Guidance</div>
            <div>Task-Based Learning</div>
            <div>Career Direction</div>
            <div>Gaming Exposure</div>
          </div>
        </section>

        <section className="internships-final-section">
          <div className="internships-final-card">
            <span>Start Your Journey</span>
            <h2>Ready to Join Our Internship Program?</h2>
            <p>
              Explore your interest, build your skills, and take your first step into gaming,
              technology, design, marketing, or artificial intelligence.
            </p>
            <Link to="/contact" className="internships-final-btn">
              Contact Us
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Internships;