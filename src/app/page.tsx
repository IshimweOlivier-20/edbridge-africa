import Link from "next/link";

const featuredCourses = [
  {
    id: 1,
    title: "Digital Literacy Basics",
    description: "Learn essential computer and internet skills for academic and daily life.",
    href: "/courses/1",
  },
  {
    id: 2,
    title: "English Proficiency",
    description: "Improve your English for university applications and study.",
    href: "/courses/2",
  },
];

const scholarships = [
  {
    id: 1,
    title: "UNHCR Refugee Scholarship",
    country: "Multiple",
    deadline: "2024-09-01",
    href: "/scholarships/1",
  },
  {
    id: 2,
    title: "DAFI Scholarship",
    country: "Rwanda",
    deadline: "2024-08-15",
    href: "/scholarships/2",
  },
];

export default function Home() {
  return (
    <section className="home-section world-class-bg">
      <div className="home-hero world-class-hero">
        <h2 className="home-title world-class-title">Welcome to EdBridge Africa</h2>
        <p className="home-subtitle world-class-subtitle">
          Empowering refugee students to access higher education through digital skills, academic support, and application guidance.
        </p>
        <div className="home-auth-links">
          <Link href="/login" className="btn btn-primary">Login</Link>
          <Link href="/register" className="btn btn-outline">Register</Link>
        </div>
      </div>

      <div className="home-content-grid world-class-grid">
        {/* Featured Courses */}
        <div className="home-card home-courses world-class-card">
          <h3 className="home-card-title world-class-card-title">Featured Courses</h3>
          <ul className="home-list">
            {featuredCourses.map(course => (
              <li key={course.id} className="home-list-item">
                <Link href={course.href} className="home-list-link">
                  <span className="home-list-title">{course.title}</span>
                  <p className="home-list-desc">{course.description}</p>
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/courses" className="home-link">View all courses →</Link>
        </div>

        {/* Scholarship Highlights */}
        <div className="home-card home-scholarships world-class-card">
          <h3 className="home-card-title world-class-card-title">Scholarship Highlights</h3>
          <ul className="home-list">
            {scholarships.map(sch => (
              <li key={sch.id} className="home-list-item">
                <Link href={sch.href} className="home-list-link">
                  <span className="home-list-title">{sch.title}</span>
                  <p className="home-list-desc">{sch.country} • Deadline: {sch.deadline}</p>
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/scholarships" className="home-link">See all scholarships →</Link>
        </div>
      </div>

      {/* Quick Links */}
      <div className="home-quick-links world-class-quick-links">
        <Link href="/toolkit" className="btn btn-toolkit">Application Toolkit</Link>
        <Link href="/mentorship" className="btn btn-mentorship">Mentorship</Link>
        <Link href="/dashboard" className="btn btn-dashboard">My Dashboard</Link>
      </div>

      {/* About/Mission */}
      <div className="home-mission world-class-mission">
        <h4 className="home-mission-title world-class-mission-title">Our Mission</h4>
        <p className="home-mission-desc world-class-mission-desc">
          EdBridge Africa is dedicated to bridging the gap for refugee students by providing access to quality education, mentorship, and resources needed to succeed in higher education and beyond.
        </p>
      </div>
    </section>
  );
}
