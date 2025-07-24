"use client";

import { useLanguage } from "@/context/LanguageContext";

const courses = [
  {
    title: "Digital Literacy",
    description:
      "Learn essential computer and internet skills for academic and professional success.",
  },
  {
    title: "Academic English",
    description:
      "Improve your English for university studies and scholarship applications.",
  },
  {
    title: "Career Mentorship",
    description:
      "Get guidance from experienced mentors to plan your academic and career journey.",
  },
  {
    title: "Scholarship Application Skills",
    description:
      "Master the art of writing winning scholarship applications and personal statements.",
  },
];

export default function CoursesPage() {
  const { t } = useLanguage();

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1e293b 0%, #3b82f6 100%)",
        color: "#f1f5f9",
        padding: "2rem",
      }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
        <h1
          style={{
            fontSize: "2.25rem",
            fontWeight: 800,
            marginBottom: "1rem",
            background: "linear-gradient(90deg, #fff 60%, #8b5cf6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {t("featuredCourses")}
        </h1>
        <p style={{ color: "#cbd5e1", marginBottom: "2.5rem" }}>
          Explore our courses designed to empower refugee students for higher
          education and beyond.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "2rem",
          }}
        >
          {courses.map((course) => (
            <div
              key={course.title}
              style={{
                background: "rgba(30,41,59,0.85)",
                borderRadius: "16px",
                padding: "2rem 1.5rem",
                boxShadow: "0 4px 24px rgba(59,130,246,0.10)",
                border: "1px solid #334155",
                textAlign: "left",
                transition: "transform 0.2s",
              }}
            >
              <h2
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  marginBottom: "0.5rem",
                  color: "#fff",
                }}
              >
                {course.title}
              </h2>
              <p style={{ color: "#cbd5e1" }}>{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
