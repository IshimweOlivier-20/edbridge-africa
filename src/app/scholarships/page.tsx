/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useLanguage } from "@/context/LanguageContext";

const scholarships = [
  {
    name: "EdBridge Opportunity Scholarship",
    description:
      "Covers tuition and living expenses for outstanding refugee students pursuing higher education.",
  },
  {
    name: "Women in STEM Grant",
    description:
      "Supports female refugee students enrolling in science, technology, engineering, or mathematics programs.",
  },
  {
    name: "Global Leaders Fellowship",
    description:
      "Provides mentorship and funding for students showing exceptional leadership in their communities.",
  },
  {
    name: "Language Excellence Award",
    description:
      "For students who demonstrate strong language skills and academic promise.",
  },
];

export default function ScholarshipsPage() {
  const { t } = useLanguage();
  const [scholarshipData, setScholarshipData] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchScholarships() {
      const { data, error } = await supabase
        .from("scholarships")
        .select("id, title, country, deadline");
      if (error) setError("Failed to load scholarships.");
      else setScholarshipData(data || []);
    }
    fetchScholarships();
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1e293b 0%, #3b82f6 100%)",
        color: "#f1f5f9",
        padding: "2rem",
      }}
    >
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
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
          {t("scholarshipHighlights")}
        </h1>
        <p style={{ color: "#cbd5e1", marginBottom: "2.5rem" }}>
          Discover scholarships that can help you achieve your academic dreams.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "2rem",
          }}
        >
          {scholarships.map((scholarship) => (
            <div
              key={scholarship.name}
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
                {scholarship.name}
              </h2>
              <p style={{ color: "#cbd5e1" }}>{scholarship.description}</p>
            </div>
          ))}
        </div>
        <h2 className="text-3xl font-bold mb-6 text-yellow-700 mt-12">
          Available Scholarships
        </h2>
        {error && <p className="text-red-600 mb-4">{error}</p>}
        {!scholarshipData || scholarshipData.length === 0 ? (
          <p className="text-gray-600">No scholarships available yet.</p>
        ) : (
          <ul className="space-y-6">
            {scholarshipData.map((sch: any) => (
              <li
                key={sch.id}
                className="bg-white rounded shadow p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
              >
                <div>
                  <h3 className="text-xl font-semibold text-blue-900">
                    {sch.title}
                  </h3>
                  <p className="text-gray-700">
                    {sch.country} • Deadline: {sch.deadline}
                  </p>
                </div>
                <Link
                  href={`/scholarships/${sch.id}`}
                  className="px-5 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition"
                >
                  View Details
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
