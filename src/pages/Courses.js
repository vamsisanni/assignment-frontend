import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Courses.css";

function Courses() {
    const coursePaths = [
        {
            title: "10th Completed?",
            subtitle: "Intermediate MEC + CA Foundation",
            text: "A planned route for students who want to begin commerce and CA preparation early with strong basics.",
            image: "/images/course-path-1.jpg"
        },
        {
            title: "12th Completed?",
            subtitle: "CA Foundation + CA Intermediate",
            text: "A focused path for students ready to enter the CA stream and build confidence for higher-level preparation.",
            image: "/images/course-path-2.jpg"
        },
        {
            title: "9th & 10th Students",
            subtitle: "Sunday Special CA Coaching",
            text: "Early foundation classes that introduce students to disciplined study, commerce thinking, and problem-solving.",
            image: "/images/course-path-3.jpg"
        }
    ];

    const foundationTopics = [
        "Accounting Fundamentals",
        "Business Laws",
        "Quantitative Aptitude",
        "Business Economics",
        "Regular Practice Sessions",
        "Exam-Focused Revision"
    ];

    const intermediateSubjects = [
        "Advanced Accounting",
        "Corporate Laws",
        "Cost & Management Accounting",
        "Taxation Basics",
        "Auditing Concepts",
        "Strategic Preparation"
    ];

    const methodSteps = [
        {
            number: "01",
            title: "Concept First",
            text: "Every topic starts with clear explanation before moving into problems and practice."
        },
        {
            number: "02",
            title: "Guided Practice",
            text: "Students solve structured exercises with faculty support to improve understanding."
        },
        {
            number: "03",
            title: "Revision Cycle",
            text: "Regular revision helps students retain concepts and stay exam-ready."
        },
        {
            number: "04",
            title: "Performance Focus",
            text: "Tests, feedback, and correction help students improve steadily."
        }
    ];

    const benefits = [
        "Guided by Chartered Accountants",
        "Conceptual clarity",
        "Exam-oriented preparation",
        "Regular doubt clarification",
        "Personal attention",
        "Disciplined study approach",
        "Hostel facility available",
        "3 days free demo classes"
    ];

    const scheduleItems = [
        {
            title: "Weekday Classes",
            text: "Structured sessions for regular CA Foundation, MEC, and CA Intermediate students."
        },
        {
            title: "Sunday Special",
            text: "Special CA foundation learning for 9th and 10th school students."
        },
        {
            title: "Revision Blocks",
            text: "Planned revision periods before major tests and exam preparation cycles."
        }
    ];

    const demoPoints = [
        "Attend classroom sessions",
        "Meet the faculty",
        "Understand the course structure",
        "Discuss hostel support",
        "Choose the right course path"
    ];

    return (
        <>
            <Navbar />

            <main className="courses-page">
                <section className="courses-hero-section">
                    <div className="courses-hero-pattern" />

                    <div className="courses-hero-container">
                        <div className="courses-hero-content">
                            <span className="courses-eyebrow">Courses at Mind Sphere</span>

                            <h1>CA coaching paths designed for every student stage.</h1>

                            <p>
                                Mind Sphere CA CMA Academy offers CA Foundation with MEC, CA Intermediate, and Sunday special CA coaching for school students, all guided by Chartered Accountants.
                            </p>

                            <div className="courses-hero-actions">
                                <Link to="/contact" className="courses-primary-btn">
                                    Book Free Demo
                                </Link>

                                <a href="tel:7092337173" className="courses-secondary-btn">
                                    Call 70923 37173
                                </a>
                            </div>
                        </div>

                        <div className="courses-hero-image-card">
                            <img src="/images/courses-hero.png" alt="Mind Sphere CA CMA Academy courses" />

                            <div className="courses-hero-badge">
                                <span>3 Days</span>
                                <p>Free Demo Classes Available</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="courses-paths-section">
                    <div className="courses-section-heading dark center">
                        <span>Choose Your Path</span>
                        <h2>Start from where you are today</h2>
                        <p>
                            Whether you completed 10th, completed 12th, or are still in school, we have a learning path that helps you begin with clarity.
                        </p>
                    </div>

                    <div className="courses-paths-grid">
                        {coursePaths.map((path) => (
                            <article className="courses-path-card" key={path.title}>
                                <div className="courses-path-image">
                                    <img src={path.image} alt={path.subtitle} />
                                </div>

                                <div className="courses-path-content">
                                    <span>{path.title}</span>
                                    <h3>{path.subtitle}</h3>
                                    <p>{path.text}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="courses-foundation-section">
                    <div className="courses-foundation-content">
                        <span className="courses-eyebrow">CA Foundation</span>
                        <h2>Build your CA journey on strong fundamentals.</h2>

                        <p>
                            Our CA Foundation coaching helps students understand core concepts clearly instead of depending only on memorization. Classes are planned to improve subject clarity, problem-solving ability, and exam confidence.
                        </p>

                        <div className="courses-topic-grid">
                            {foundationTopics.map((topic) => (
                                <div className="courses-topic-pill" key={topic}>
                                    <span>✓</span>
                                    <p>{topic}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="courses-foundation-image">
                        <img src="/images/course-foundation.jpg" alt="CA Foundation coaching" />
                    </div>
                </section>

                <section className="courses-mec-section">
                    <div className="courses-mec-image">
                        <img src="/images/course-mec.jpg" alt="MEC with CA Foundation" />
                    </div>

                    <div className="courses-mec-content">
                        <div className="courses-section-heading dark">
                            <span>MEC + CA Foundation</span>
                            <h2>A smart route after 10th for future CA students</h2>
                            <p>
                                Students who complete 10th can begin with Intermediate MEC and CA Foundation preparation. This path helps them build commerce, accounting, mathematics, and business understanding from an early stage.
                            </p>
                        </div>

                        <div className="courses-mec-highlight">
                            <h3>Best suited for</h3>
                            <p>
                                Students who want to enter the CA stream early and prefer a structured academic plan after 10th.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="courses-inter-section">
                    <div className="courses-section-heading center">
                        <span>CA Intermediate</span>
                        <h2>Move forward with deeper subject preparation</h2>
                        <p>
                            CA Intermediate needs discipline, clarity, and regular practice. Our coaching supports students with structured learning, revision planning, and exam-focused preparation.
                        </p>
                    </div>

                    <div className="courses-inter-grid">
                        <div className="courses-inter-image">
                            <img src="/images/course-intermediate.jpg" alt="CA Intermediate coaching" />
                        </div>

                        <div className="courses-inter-subjects">
                            {intermediateSubjects.map((subject, index) => (
                                <div className="courses-inter-subject" key={subject}>
                                    <span>{String(index + 1).padStart(2, "0")}</span>
                                    <p>{subject}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="courses-school-section">
                    <div className="courses-school-content">
                        <div className="courses-section-heading dark">
                            <span>9th & 10th Students</span>
                            <h2>Sunday special CA coaching for early academic growth</h2>
                            <p>
                                These classes help school students build discipline, confidence, and foundational thinking. Students are introduced to learning habits that support future CA preparation.
                            </p>
                        </div>

                        <Link to="/contact" className="courses-dark-btn">
                            Enquire About Sunday Classes
                        </Link>
                    </div>

                    <div className="courses-school-card">
                        <img src="/images/course-school1.jpg" alt="Sunday CA coaching for school students" />

                        <div>
                            <span>Every Sunday</span>
                            <h3>Early foundation classes</h3>
                        </div>
                    </div>
                </section>

                <section className="courses-method-section">
                    <div className="courses-section-heading center">
                        <span>Teaching Method</span>
                        <h2>Simple, structured, and exam-focused learning</h2>
                        <p>
                            Our teaching process is designed to help students understand, practice, revise, and improve with confidence.
                        </p>
                    </div>

                    <div className="courses-method-grid">
                        {methodSteps.map((step) => (
                            <article className="courses-method-card" key={step.number}>
                                <span>{step.number}</span>
                                <h3>{step.title}</h3>
                                <p>{step.text}</p>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="courses-exam-section">
                    <div className="courses-exam-image">
                        <img src="/images/course-exam.jpg" alt="Exam preparation at Mind Sphere" />
                    </div>

                    <div className="courses-exam-content">
                        <div className="courses-section-heading dark">
                            <span>Exam Preparation</span>
                            <h2>Practice, tests, feedback, and steady improvement</h2>
                            <p>
                                We help students prepare with regular practice sessions, revision plans, doubt clarification, and performance review. The aim is to make every student more confident before exams.
                            </p>
                        </div>

                        <div className="courses-exam-boxes">
                            <div>
                                <h3>Regular Tests</h3>
                                <p>Measure understanding and improve exam readiness.</p>
                            </div>

                            <div>
                                <h3>Doubt Support</h3>
                                <p>Students receive guidance to correct mistakes early.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="courses-benefits-section-final">
                    <div className="courses-section-heading-final center-final">
                        <span>Why Learn With Us</span>
                        <h2>Everything needed for focused CA preparation</h2>
                        <p>
                            Mind Sphere CA CMA Academy gives students a supportive environment with strong academic direction and personal attention.
                        </p>
                    </div>

                    <div className="courses-benefits-grid-final">
                        {benefits.map((benefit) => (
                            <div className="courses-benefit-item-final" key={benefit}>
                                <span>✓</span>
                                <p>{benefit}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="courses-schedule-section">
                    <div className="courses-schedule-content">
                        <div className="courses-section-heading dark">
                            <span>Class Schedule</span>
                            <h2>Learning plans that support consistency</h2>
                            <p>
                                Our schedules are planned to help students attend classes regularly, revise properly, and stay connected with the learning process.
                            </p>
                        </div>

                        <div className="courses-schedule-list">
                            {scheduleItems.map((item) => (
                                <div className="courses-schedule-item" key={item.title}>
                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="courses-schedule-image">
                        <img src="/images/course-schedule.jpg" alt="Mind Sphere class schedule" />
                    </div>
                </section>

                <section className="courses-demo-section">
                    <div className="courses-demo-card">
                        <div className="courses-demo-content">
                            <span>Admissions Open</span>
                            <h2>Attend 3 days of free demo classes before joining</h2>

                            <p>
                                Visit Mind Sphere CA CMA Academy, meet our faculty, understand the course plan, and choose the right path for your CA preparation.
                            </p>

                            <div className="courses-demo-points">
                                {demoPoints.map((point) => (
                                    <div key={point}>
                                        <span>✓</span>
                                        <p>{point}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="courses-demo-actions">
                                <Link to="/contact">Book Free Demo</Link>
                                <a href="tel:9182823051">Call 91828 23051</a>
                            </div>
                        </div>

                        <div className="courses-demo-image">
                            <img src="/images/course-demo.jpg" alt="Free demo classes at Mind Sphere" />
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}

export default Courses;