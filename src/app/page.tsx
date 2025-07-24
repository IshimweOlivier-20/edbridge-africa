/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <main
      style={{
        minHeight: "100vh", // <-- changed from 80vh to 100vh
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #1e293b 0%, #3b82f6 100%)",
        color: "#f1f5f9",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <img
        src="/globe.svg"
        alt="EdBridge Africa"
        width={80}
        height={80}
        style={{
          marginBottom: "1.5rem",
          filter: "brightness(0) invert(1)",
        }}
      />
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: 800,
          marginBottom: "1rem",
          background: "linear-gradient(90deg, #fff 60%, #8b5cf6 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {t("welcome")}
      </h1>
      <p
        style={{
          fontSize: "1.25rem",
          maxWidth: "600px",
          margin: "0 auto 2rem auto",
          color: "#cbd5e1",
        }}
      >
        {t("subtitle")}
      </p>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <a
          href="/courses"
          style={{
            background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
            color: "#fff",
            padding: "0.75rem 1.5rem",
            borderRadius: "8px",
            fontWeight: 600,
            textDecoration: "none",
            fontSize: "1rem",
            boxShadow: "0 2px 8px rgba(59,130,246,0.15)",
            transition: "transform 0.2s",
          }}
        >
          {t("viewAllCourses")}
        </a>
        <a
          href="/scholarships"
          style={{
            background: "rgba(30,41,59,0.8)",
            color: "#e2e8f0",
            padding: "0.75rem 1.5rem",
            borderRadius: "8px",
            fontWeight: 600,
            textDecoration: "none",
            fontSize: "1rem",
            border: "1px solid #3b82f6",
            transition: "transform 0.2s",
          }}
        >
          {t("seeAllScholarships")}
        </a>
      </div>
      <nav className="flex flex-col md:flex-row ...">
        {/* Navigation content here */}
      </nav>
      <style jsx>{`
        @media (min-width: 768px) {
          nav {
            display: flex;
          }
        }
      `}</style>
    </main>
  );
}
