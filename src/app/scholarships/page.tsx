"use client";

import { useState } from "react";
import {
  Search,
  Filter,
  DollarSign,
  Calendar,
  Users,
  Award,
  FileText,
  Clock,
  CheckCircle,
  AlertCircle,
  Star,
  TrendingUp,
  Download,
  Upload,
  Eye,
  Edit,
  Trash2,
  Plus,
  Send,
  BookOpen,
  Target,
  Globe,
  MapPin,
  GraduationCap,
  Heart,
  Briefcase,
  Zap,
} from "lucide-react";

const scholarships = [
  {
    id: 1,
    title: "Academic Excellence Scholarship",
    provider: "Education Foundation",
    amount: 5000,
    currency: "USD",
    deadline: "2025-09-15",
    category: "Academic Merit",
    description:
      "Awarded to students with outstanding academic performance and leadership potential.",
    requirements: [
      "GPA 3.5 or higher",
      "Community service experience",
      "Leadership roles",
    ],
    applicants: 245,
    recipients: 10,
    status: "open",
    type: "Merit-based",
    level: "Undergraduate",
    renewable: true,
    location: "Global",
    field: "All Fields",
  },
  {
    id: 2,
    title: "STEM Innovation Grant",
    provider: "Tech Future Fund",
    amount: 7500,
    currency: "USD",
    deadline: "2025-08-30",
    category: "STEM",
    description:
      "Supporting the next generation of STEM innovators and researchers.",
    requirements: [
      "STEM major",
      "Research project proposal",
      "Faculty recommendation",
    ],
    applicants: 189,
    recipients: 15,
    status: "open",
    type: "Field-specific",
    level: "Graduate",
    renewable: false,
    location: "North America",
    field: "STEM Fields",
  },
  {
    id: 3,
    title: "Community Leadership Award",
    provider: "Social Impact Alliance",
    amount: 3000,
    currency: "USD",
    deadline: "2025-10-01",
    category: "Leadership",
    description:
      "Recognizing students who have made significant contributions to their communities.",
    requirements: [
      "Volunteer work 100+ hours",
      "Leadership experience",
      "Community impact essay",
    ],
    applicants: 156,
    recipients: 8,
    status: "open",
    type: "Service-based",
    level: "All Levels",
    renewable: true,
    location: "Local",
    field: "All Fields",
  },
  {
    id: 4,
    title: "First-Generation Student Support",
    provider: "Educational Equity Fund",
    amount: 4000,
    currency: "USD",
    deadline: "2025-11-15",
    category: "Need-based",
    description:
      "Supporting first-generation college students in achieving their educational goals.",
    requirements: [
      "First-generation college student",
      "Financial need demonstration",
      "Academic goals essay",
    ],
    applicants: 312,
    recipients: 25,
    status: "open",
    type: "Need-based",
    level: "Undergraduate",
    renewable: true,
    location: "National",
    field: "All Fields",
  },
  {
    id: 5,
    title: "Creative Arts Excellence",
    provider: "Arts & Culture Foundation",
    amount: 2500,
    currency: "USD",
    deadline: "2025-09-30",
    category: "Arts",
    description:
      "Celebrating creativity and artistic excellence in various disciplines.",
    requirements: [
      "Arts portfolio submission",
      "Creative project",
      "Artist statement",
    ],
    applicants: 98,
    recipients: 12,
    status: "open",
    type: "Portfolio-based",
    level: "All Levels",
    renewable: false,
    location: "Regional",
    field: "Creative Arts",
  },
];

const myApplications = [
  {
    id: 1,
    scholarshipId: 1,
    title: "Academic Excellence Scholarship",
    appliedDate: "2025-07-10",
    status: "under_review",
    completedSections: 4,
    totalSections: 5,
    lastUpdated: "2025-07-20",
    nextDeadline: "2025-09-15",
  },
  {
    id: 2,
    scholarshipId: 2,
    title: "STEM Innovation Grant",
    appliedDate: "2025-07-15",
    status: "draft",
    completedSections: 2,
    totalSections: 4,
    lastUpdated: "2025-07-22",
    nextDeadline: "2025-08-30",
  },
  {
    id: 3,
    scholarshipId: 4,
    title: "First-Generation Student Support",
    appliedDate: "2025-06-30",
    status: "accepted",
    completedSections: 3,
    totalSections: 3,
    lastUpdated: "2025-07-18",
    nextDeadline: "N/A",
  },
];

const recentActivity = [
  {
    id: 1,
    type: "application",
    message: "Application submitted for Academic Excellence Scholarship",
    date: "2025-07-20",
    status: "success",
  },
  {
    id: 2,
    type: "reminder",
    message: "STEM Innovation Grant deadline approaching in 5 days",
    date: "2025-07-19",
    status: "warning",
  },
  {
    id: 3,
    type: "award",
    message:
      "Congratulations! You've been selected for First-Generation Student Support",
    date: "2025-07-18",
    status: "success",
  },
  {
    id: 4,
    type: "update",
    message: "New scholarship matching your profile: Creative Arts Excellence",
    date: "2025-07-17",
    status: "info",
  },
];

export default function ScholarshipSystem() {
  const [activeTab, setActiveTab] = useState("discover");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedScholarship, setSelectedScholarship] = useState(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  const categories = [
    "all",
    "Academic Merit",
    "STEM",
    "Leadership",
    "Need-based",
    "Arts",
  ];

  const filteredScholarships = scholarships.filter((scholarship) => {
    const matchesSearch =
      scholarship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scholarship.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scholarship.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || scholarship.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "open":
        return "#10b981";
      case "closing_soon":
        return "#f59e0b";
      case "closed":
        return "#ef4444";
      case "under_review":
        return "#3b82f6";
      case "draft":
        return "#6b7280";
      case "accepted":
        return "#10b981";
      case "rejected":
        return "#ef4444";
      default:
        return "#6b7280";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "under_review":
        return <Clock size={16} />;
      case "accepted":
        return <CheckCircle size={16} />;
      case "rejected":
        return <AlertCircle size={16} />;
      case "draft":
        return <Edit size={16} />;
      default:
        return <FileText size={16} />;
    }
  };

  const totalAwarded = myApplications.filter(
    (app) => app.status === "accepted"
  ).length;
  const totalApplied = myApplications.length;
  const inProgress = myApplications.filter(
    (app) => app.status === "draft" || app.status === "under_review"
  ).length;

  return (
    <main
      style={{
        width: "100vw",
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #3730a3 75%, #1d4ed8 100%)",
        color: "#f8fafc",
        position: "relative",
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }
        @keyframes shimmer {
          0% {
            background-position: -200px 0;
          }
          100% {
            background-position: calc(200px + 100%) 0;
          }
        }
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
        .card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .card-hover:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }
        .scholarship-card {
          background: linear-gradient(
            135deg,
            rgba(30, 41, 59, 0.9) 0%,
            rgba(51, 65, 85, 0.8) 100%
          );
          backdrop-filter: blur(10px);
          border: 1px solid rgba(59, 130, 246, 0.2);
        }
        .award-shine {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          background-size: 200px 100%;
          animation: shimmer 2s infinite;
        }
        .notification-dot {
          animation: pulse 2s infinite;
        }
      `}</style>

      {/* Floating Background Elements */}
      <div
        style={{
          position: "absolute",
          top: "5%",
          left: "2%",
          width: "350px",
          height: "350px",
          background:
            "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)",
          borderRadius: "50%",
          animation: "float 9s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "5%",
          width: "250px",
          height: "250px",
          background:
            "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)",
          borderRadius: "50%",
          animation: "float 11s ease-in-out infinite reverse",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "30%",
          right: "10%",
          width: "180px",
          height: "180px",
          background:
            "radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%)",
          borderRadius: "50%",
          animation: "float 7s ease-in-out infinite",
        }}
      />

      <div
        style={{
          flex: 1,
          width: "100%",
          padding: "2rem 2vw",
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "2rem",
          }}
        >
          <div>
            <h1
              style={{
                fontSize: "2.8rem",
                fontWeight: 900,
                background:
                  "linear-gradient(90deg, #fff 30%, #fbbf24 70%, #f59e0b 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                letterSpacing: "-0.03em",
                marginBottom: "0.5rem",
              }}
            >
              Scholarship Portal
            </h1>
            <p style={{ color: "#cbd5e1", fontSize: "1.1rem", margin: 0 }}>
              Discover opportunities, track applications, and unlock your future
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div
              style={{
                background: "rgba(30,41,59,0.8)",
                padding: "1rem",
                borderRadius: "12px",
                border: "1px solid rgba(59,130,246,0.3)",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 800,
                  color: "#fbbf24",
                }}
              >
                $
                {myApplications
                  .filter((app) => app.status === "accepted")
                  .reduce((sum, app) => {
                    const scholarship = scholarships.find(
                      (s) => s.id === app.scholarshipId
                    );
                    return sum + (scholarship ? scholarship.amount : 0);
                  }, 0)
                  .toLocaleString()}
              </div>
              <div style={{ fontSize: "0.8rem", color: "#94a3b8" }}>
                Total Awarded
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            marginBottom: "2.5rem",
            flexWrap: "wrap",
            background: "rgba(30,41,59,0.5)",
            padding: "0.5rem",
            borderRadius: "12px",
          }}
        >
          {[
            { key: "discover", label: "Discover", icon: Search },
            {
              key: "my_applications",
              label: "My Applications",
              icon: FileText,
            },
            { key: "dashboard", label: "Dashboard", icon: TrendingUp },
            { key: "resources", label: "Resources", icon: BookOpen },
          ].map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              style={{
                padding: "0.75rem 1.5rem",
                borderRadius: "8px",
                border: "none",
                background: activeTab === key ? "#3b82f6" : "transparent",
                color: "#fff",
                fontWeight: 600,
                fontSize: "0.95rem",
                cursor: "pointer",
                boxShadow: activeTab === key ? "0 4px 16px #3b82f655" : "none",
                transition: "all 0.2s",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <Icon size={18} />
              {label}
              {key === "my_applications" && inProgress > 0 && (
                <div
                  className="notification-dot"
                  style={{
                    width: "6px",
                    height: "6px",
                    background: "#ef4444",
                    borderRadius: "50%",
                  }}
                />
              )}
            </button>
          ))}
        </div>

        {/* DISCOVER TAB */}
        {activeTab === "discover" && (
          <div>
            {/* Search and Filter Section */}
            <div
              style={{
                background: "rgba(30,41,59,0.8)",
                borderRadius: "16px",
                padding: "2rem",
                border: "1px solid rgba(59,130,246,0.2)",
                marginBottom: "2rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  alignItems: "center",
                }}
              >
                <div
                  style={{ position: "relative", flex: "1", minWidth: "300px" }}
                >
                  <Search
                    size={20}
                    style={{
                      position: "absolute",
                      left: "1rem",
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "#94a3b8",
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Search scholarships by title, provider, or keywords..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "1rem 1rem 1rem 3rem",
                      borderRadius: "8px",
                      border: "1px solid #374151",
                      background: "#1f2937",
                      color: "#fff",
                      fontSize: "1rem",
                      outline: "none",
                    }}
                  />
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  style={{
                    padding: "1rem",
                    borderRadius: "8px",
                    border: "1px solid #374151",
                    background: "#1f2937",
                    color: "#fff",
                    fontSize: "1rem",
                    cursor: "pointer",
                  }}
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category === "all" ? "All Categories" : category}
                    </option>
                  ))}
                </select>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  marginTop: "1rem",
                  color: "#94a3b8",
                  fontSize: "0.9rem",
                }}
              >
                <span>Found {filteredScholarships.length} scholarships</span>
                <span>•</span>
                <span>
                  Total value: $
                  {filteredScholarships
                    .reduce((sum, s) => sum + s.amount, 0)
                    .toLocaleString()}
                </span>
              </div>
            </div>

            {/* Scholarship Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
                gap: "2rem",
              }}
            >
              {filteredScholarships.map((scholarship) => (
                <div
                  key={scholarship.id}
                  className="card-hover scholarship-card"
                  style={{
                    borderRadius: "16px",
                    padding: "2rem",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: "1rem",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                      }}
                    >
                      <div
                        style={{
                          padding: "0.75rem",
                          borderRadius: "10px",
                          background:
                            "linear-gradient(135deg, #fbbf24, #f59e0b)",
                        }}
                      >
                        <Award size={24} />
                      </div>
                      <div>
                        <h3
                          style={{
                            fontSize: "1.3rem",
                            fontWeight: 700,
                            margin: 0,
                            color: "#fff",
                          }}
                        >
                          {scholarship.title}
                        </h3>
                        <p
                          style={{
                            color: "#94a3b8",
                            fontSize: "0.9rem",
                            margin: 0,
                          }}
                        >
                          {scholarship.provider}
                        </p>
                      </div>
                    </div>
                    <div
                      style={{
                        padding: "0.5rem 1rem",
                        borderRadius: "20px",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        background: scholarship.renewable
                          ? "#10b98122"
                          : "#6b728022",
                        color: scholarship.renewable ? "#10b981" : "#94a3b8",
                        border: `1px solid ${
                          scholarship.renewable ? "#10b981" : "#6b7280"
                        }`,
                      }}
                    >
                      {scholarship.renewable ? "Renewable" : "One-time"}
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      marginBottom: "1rem",
                      padding: "1rem",
                      borderRadius: "8px",
                      background: "rgba(59,130,246,0.1)",
                    }}
                  >
                    <DollarSign size={20} style={{ color: "#fbbf24" }} />
                    <div>
                      <div
                        style={{
                          fontSize: "1.8rem",
                          fontWeight: 900,
                          color: "#fbbf24",
                        }}
                      >
                        ${scholarship.amount.toLocaleString()}
                      </div>
                      <div style={{ fontSize: "0.8rem", color: "#94a3b8" }}>
                        Award Amount
                      </div>
                    </div>
                  </div>

                  <p
                    style={{
                      color: "#cbd5e1",
                      lineHeight: 1.5,
                      marginBottom: "1rem",
                    }}
                  >
                    {scholarship.description}
                  </p>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "1rem",
                      marginBottom: "1rem",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        color: "#94a3b8",
                      }}
                    >
                      <Calendar size={16} />
                      <span style={{ fontSize: "0.85rem" }}>
                        Due: {scholarship.deadline}
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        color: "#94a3b8",
                      }}
                    >
                      <Users size={16} />
                      <span style={{ fontSize: "0.85rem" }}>
                        {scholarship.applicants} applicants
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        color: "#94a3b8",
                      }}
                    >
                      <Target size={16} />
                      <span style={{ fontSize: "0.85rem" }}>
                        {scholarship.recipients} recipients
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        color: "#94a3b8",
                      }}
                    >
                      <GraduationCap size={16} />
                      <span style={{ fontSize: "0.85rem" }}>
                        {scholarship.level}
                      </span>
                    </div>
                  </div>

                  <div style={{ marginBottom: "1.5rem" }}>
                    <div
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: 600,
                        marginBottom: "0.5rem",
                        color: "#e2e8f0",
                      }}
                    >
                      Key Requirements:
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "0.5rem",
                      }}
                    >
                      {scholarship.requirements
                        .slice(0, 2)
                        .map((req, index) => (
                          <div
                            key={index}
                            style={{
                              padding: "0.25rem 0.75rem",
                              borderRadius: "12px",
                              fontSize: "0.75rem",
                              background: "#374151",
                              color: "#d1d5db",
                              border: "1px solid #4b5563",
                            }}
                          >
                            {req}
                          </div>
                        ))}
                      {scholarship.requirements.length > 2 && (
                        <div
                          style={{
                            padding: "0.25rem 0.75rem",
                            borderRadius: "12px",
                            fontSize: "0.75rem",
                            background: "#3b82f622",
                            color: "#93c5fd",
                            border: "1px solid #3b82f6",
                          }}
                        >
                          +{scholarship.requirements.length - 2} more
                        </div>
                      )}
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "0.75rem" }}>
                    <button
                      onClick={() => setSelectedScholarship(scholarship)}
                      style={{
                        flex: 1,
                        padding: "0.75rem",
                        borderRadius: "8px",
                        border: "none",
                        background: "linear-gradient(90deg, #3b82f6, #1d4ed8)",
                        color: "#fff",
                        fontWeight: 600,
                        cursor: "pointer",
                        transition: "all 0.2s",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <Eye size={16} />
                      View Details
                    </button>
                    <button
                      onClick={() => setShowApplicationForm(scholarship)}
                      style={{
                        padding: "0.75rem 1rem",
                        borderRadius: "8px",
                        border: "1px solid #10b981",
                        background: "#10b98122",
                        color: "#10b981",
                        fontWeight: 600,
                        cursor: "pointer",
                        transition: "all 0.2s",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <Send size={16} />
                      Apply
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* MY APPLICATIONS TAB */}
        {activeTab === "my_applications" && (
          <div>
            {/* Application Stats */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "1.5rem",
                marginBottom: "2rem",
              }}
            >
              <div
                className="card-hover"
                style={{
                  background: "rgba(30,41,59,0.8)",
                  borderRadius: "12px",
                  padding: "1.5rem",
                  border: "1px solid rgba(59,130,246,0.3)",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "2rem",
                    fontWeight: 900,
                    color: "#3b82f6",
                    marginBottom: "0.25rem",
                  }}
                >
                  {totalApplied}
                </div>
                <div style={{ color: "#94a3b8", fontSize: "0.9rem" }}>
                  Total Applications
                </div>
              </div>
              <div
                className="card-hover"
                style={{
                  background: "rgba(30,41,59,0.8)",
                  borderRadius: "12px",
                  padding: "1.5rem",
                  border: "1px solid rgba(245,158,11,0.3)",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "2rem",
                    fontWeight: 900,
                    color: "#f59e0b",
                    marginBottom: "0.25rem",
                  }}
                >
                  {inProgress}
                </div>
                <div style={{ color: "#94a3b8", fontSize: "0.9rem" }}>
                  In Progress
                </div>
              </div>
              <div
                className="card-hover"
                style={{
                  background: "rgba(30,41,59,0.8)",
                  borderRadius: "12px",
                  padding: "1.5rem",
                  border: "1px solid rgba(16,185,129,0.3)",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "2rem",
                    fontWeight: 900,
                    color: "#10b981",
                    marginBottom: "0.25rem",
                  }}
                >
                  {totalAwarded}
                </div>
                <div style={{ color: "#94a3b8", fontSize: "0.9rem" }}>
                  Awards Received
                </div>
              </div>
            </div>

            {/* Applications List */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              {myApplications.map((application) => {
                const scholarship = scholarships.find(
                  (s) => s.id === application.scholarshipId
                );
                const progressPercentage =
                  (application.completedSections / application.totalSections) *
                  100;

                return (
                  <div
                    key={application.id}
                    className="card-hover"
                    style={{
                      background: "rgba(30,41,59,0.8)",
                      borderRadius: "16px",
                      padding: "2rem",
                      border: "1px solid rgba(59,130,246,0.2)",
                      boxShadow:
                        application.status === "accepted"
                          ? "0 0 20px rgba(16,185,129,0.3)"
                          : "none",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        marginBottom: "1.5rem",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "1rem",
                        }}
                      >
                        {application.status === "accepted" && (
                          <div
                            className="award-shine"
                            style={{
                              padding: "0.75rem",
                              borderRadius: "10px",
                              background:
                                "linear-gradient(135deg, #fbbf24, #f59e0b)",
                            }}
                          >
                            <Trophy size={24} />
                          </div>
                        )}
                        {application.status !== "accepted" && (
                          <div
                            style={{
                              padding: "0.75rem",
                              borderRadius: "10px",
                              background: `linear-gradient(135deg, ${getStatusColor(
                                application.status
                              )}22, ${getStatusColor(application.status)}44)`,
                            }}
                          >
                            {getStatusIcon(application.status)}
                          </div>
                        )}
                        <div>
                          <h3
                            style={{
                              fontSize: "1.4rem",
                              fontWeight: 700,
                              margin: 0,
                              color: "#fff",
                            }}
                          >
                            {application.title}
                          </h3>
                          <p
                            style={{
                              color: "#94a3b8",
                              fontSize: "0.9rem",
                              margin: "0.25rem 0",
                            }}
                          >
                            Applied: {application.appliedDate}
                          </p>
                          {scholarship && (
                            <p
                              style={{
                                color: "#fbbf24",
                                fontSize: "1rem",
                                fontWeight: 600,
                                margin: 0,
                              }}
                            >
                              ${scholarship.amount.toLocaleString()} Award
                            </p>
                          )}
                        </div>
                      </div>

                      <div
                        style={{
                          padding: "0.5rem 1rem",
                          borderRadius: "20px",
                          fontSize: "0.8rem",
                          fontWeight: 600,
                          background: getStatusColor(application.status) + "22",
                          color: getStatusColor(application.status),
                          border: `1px solid ${getStatusColor(
                            application.status
                          )}`,
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                        }}
                      >
                        {getStatusIcon(application.status)}
                        {application.status.replace("_", " ").toUpperCase()}
                      </div>
                    </div>

                    {application.status !== "accepted" && (
                      <div style={{ marginBottom: "1.5rem" }}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginBottom: "0.5rem",
                          }}
                        >
                          <span
                            style={{ fontSize: "0.9rem", color: "#cbd5e1" }}
                          >
                            Application Progress
                          </span>
                          <span
                            style={{ fontSize: "0.9rem", color: "#cbd5e1" }}
                          >
                            {application.completedSections}/
                            {application.totalSections} sections
                          </span>
                        </div>
                        <div
                          style={{
                            background: "#374151",
                            borderRadius: "8px",
                            overflow: "hidden",
                            height: "8px",
                          }}
                        >
                          <div
                            style={{
                              width: `${progressPercentage}%`,
                              background:
                                "linear-gradient(90deg, #3b82f6, #8b5cf6)",
                              height: "100%",
                              borderRadius: "8px",
                              transition: "width 0.3s",
                            }}
                          />
                        </div>
                      </div>
                    )}

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div style={{ color: "#94a3b8", fontSize: "0.9rem" }}>
                        Last updated: {application.lastUpdated}
                        {application.nextDeadline !== "N/A" && (
                          <span> • Deadline: {application.nextDeadline}</span>
                        )}
                      </div>

                      <div style={{ display: "flex", gap: "0.75rem" }}>
                        {application.status === "draft" && (
                          <button
                            style={{
                              padding: "0.5rem 1rem",
                              borderRadius: "6px",
                              border: "none",
                              background: "#3b82f6",
                              color: "#fff",
                              fontWeight: 600,
                              cursor: "pointer",
                              display: "flex",
                              alignItems: "center",
                              gap: "0.5rem",
                            }}
                          >
                            <Edit size={16} />
                            Continue
                          </button>
                        )}
                        <button
                          style={{
                            padding: "0.5rem 1rem",
                            borderRadius: "6px",
                            border: "1px solid #6b7280",
                            background: "transparent",
                            color: "#d1d5db",
                            fontWeight: 600,
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                          }}
                        >
                          <Eye size={16} />
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* DASHBOARD TAB */}
        {activeTab === "dashboard" && (
          <div>
            {/* Personal Stats */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "2rem",
                marginBottom: "3rem",
              }}
            >
              <div
                className="card-hover"
                style={{
                  background: "rgba(30,41,59,0.8)",
                  borderRadius: "16px",
                  padding: "2rem",
                  border: "1px solid rgba(16,185,129,0.3)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  <div
                    style={{
                      padding: "1rem",
                      borderRadius: "12px",
                      background: "linear-gradient(135deg, #10b981, #059669)",
                    }}
                  >
                    <Trophy size={24} />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: "1.8rem",
                        fontWeight: 900,
                        margin: 0,
                        color: "#10b981",
                      }}
                    >
                      $
                      {myApplications
                        .filter((app) => app.status === "accepted")
                        .reduce((sum, app) => {
                          const scholarship = scholarships.find(
                            (s) => s.id === app.scholarshipId
                          );
                          return sum + (scholarship ? scholarship.amount : 0);
                        }, 0)
                        .toLocaleString()}
                    </h3>
                    <p style={{ color: "#94a3b8", margin: 0 }}>
                      Total Scholarships Won
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="card-hover"
                style={{
                  background: "rgba(30,41,59,0.8)",
                  borderRadius: "16px",
                  padding: "2rem",
                  border: "1px solid rgba(59,130,246,0.3)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  <div
                    style={{
                      padding: "1rem",
                      borderRadius: "12px",
                      background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
                    }}
                  >
                    <Target size={24} />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: "1.8rem",
                        fontWeight: 900,
                        margin: 0,
                        color: "#3b82f6",
                      }}
                    >
                      {Math.round((totalAwarded / totalApplied) * 100) || 0}%
                    </h3>
                    <p style={{ color: "#94a3b8", margin: 0 }}>Success Rate</p>
                  </div>
                </div>
              </div>

              <div
                className="card-hover"
                style={{
                  background: "rgba(30,41,59,0.8)",
                  borderRadius: "16px",
                  padding: "2rem",
                  border: "1px solid rgba(245,158,11,0.3)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  <div
                    style={{
                      padding: "1rem",
                      borderRadius: "12px",
                      background: "linear-gradient(135deg, #f59e0b, #d97706)",
                    }}
                  >
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: "1.8rem",
                        fontWeight: 900,
                        margin: 0,
                        color: "#f59e0b",
                      }}
                    >
                      {
                        myApplications.filter(
                          (app) => app.status === "under_review"
                        ).length
                      }
                    </h3>
                    <p style={{ color: "#94a3b8", margin: 0 }}>Under Review</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "2fr 1fr",
                gap: "2rem",
              }}
            >
              <div
                style={{
                  background: "rgba(30,41,59,0.8)",
                  borderRadius: "16px",
                  padding: "2rem",
                  border: "1px solid rgba(59,130,246,0.2)",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 800,
                    marginBottom: "1.5rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <Clock size={20} />
                  Recent Activity
                </h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  {recentActivity.map((activity) => (
                    <div
                      key={activity.id}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        padding: "1rem",
                        borderRadius: "8px",
                        background: "rgba(59,130,246,0.05)",
                        border: "1px solid rgba(59,130,246,0.1)",
                      }}
                    >
                      <div
                        style={{
                          padding: "0.5rem",
                          borderRadius: "6px",
                          background:
                            activity.status === "success"
                              ? "#10b98122"
                              : activity.status === "warning"
                              ? "#f59e0b22"
                              : "#3b82f622",
                          color:
                            activity.status === "success"
                              ? "#10b981"
                              : activity.status === "warning"
                              ? "#f59e0b"
                              : "#3b82f6",
                        }}
                      >
                        {activity.status === "success" && (
                          <CheckCircle size={16} />
                        )}
                        {activity.status === "warning" && (
                          <AlertCircle size={16} />
                        )}
                        {activity.status === "info" && <Star size={16} />}
                      </div>
                      <div style={{ flex: 1 }}>
                        <p
                          style={{
                            color: "#e2e8f0",
                            margin: 0,
                            fontSize: "0.95rem",
                          }}
                        >
                          {activity.message}
                        </p>
                        <p
                          style={{
                            color: "#94a3b8",
                            margin: 0,
                            fontSize: "0.8rem",
                          }}
                        >
                          {activity.date}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming Deadlines */}
              <div
                style={{
                  background: "rgba(30,41,59,0.8)",
                  borderRadius: "16px",
                  padding: "2rem",
                  border: "1px solid rgba(245,158,11,0.2)",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 800,
                    marginBottom: "1.5rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <Calendar size={20} />
                  Upcoming Deadlines
                </h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  {scholarships.slice(0, 4).map((scholarship) => {
                    const daysUntilDeadline = Math.ceil(
                      (new Date(scholarship.deadline) - new Date()) /
                        (1000 * 60 * 60 * 24)
                    );
                    return (
                      <div
                        key={scholarship.id}
                        style={{
                          padding: "1rem",
                          borderRadius: "8px",
                          background:
                            daysUntilDeadline <= 7
                              ? "rgba(239,68,68,0.1)"
                              : "rgba(59,130,246,0.05)",
                          border: `1px solid ${
                            daysUntilDeadline <= 7
                              ? "rgba(239,68,68,0.3)"
                              : "rgba(59,130,246,0.1)"
                          }`,
                        }}
                      >
                        <h4
                          style={{
                            fontSize: "0.95rem",
                            fontWeight: 600,
                            margin: "0 0 0.25rem 0",
                            color: "#e2e8f0",
                          }}
                        >
                          {scholarship.title}
                        </h4>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            marginBottom: "0.25rem",
                          }}
                        >
                          <Calendar size={14} />
                          <span
                            style={{ fontSize: "0.8rem", color: "#94a3b8" }}
                          >
                            {scholarship.deadline}
                          </span>
                        </div>
                        <div
                          style={{
                            fontSize: "0.75rem",
                            color:
                              daysUntilDeadline <= 7 ? "#fca5a5" : "#93c5fd",
                            fontWeight: 600,
                          }}
                        >
                          {daysUntilDeadline} days remaining
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* RESOURCES TAB */}
        {activeTab === "resources" && (
          <div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "2rem",
                marginBottom: "3rem",
              }}
            >
              {/* Application Tips */}
              <div
                className="card-hover"
                style={{
                  background: "rgba(30,41,59,0.8)",
                  borderRadius: "16px",
                  padding: "2rem",
                  border: "1px solid rgba(59,130,246,0.2)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  <div
                    style={{
                      padding: "0.75rem",
                      borderRadius: "8px",
                      background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
                    }}
                  >
                    <Zap size={20} />
                  </div>
                  <h3
                    style={{ fontSize: "1.3rem", fontWeight: 700, margin: 0 }}
                  >
                    Application Tips
                  </h3>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                  }}
                >
                  {[
                    "Start applications early to avoid deadline rush",
                    "Tailor essays to each scholarship's mission",
                    "Get letters of recommendation in advance",
                    "Keep all documents organized and backed up",
                  ].map((tip, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.5rem",
                      }}
                    >
                      <CheckCircle
                        size={16}
                        style={{
                          color: "#10b981",
                          marginTop: "0.125rem",
                          flexShrink: 0,
                        }}
                      />
                      <span
                        style={{
                          color: "#cbd5e1",
                          fontSize: "0.9rem",
                          lineHeight: 1.4,
                        }}
                      >
                        {tip}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Document Templates */}
              <div
                className="card-hover"
                style={{
                  background: "rgba(30,41,59,0.8)",
                  borderRadius: "16px",
                  padding: "2rem",
                  border: "1px solid rgba(16,185,129,0.2)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  <div
                    style={{
                      padding: "0.75rem",
                      borderRadius: "8px",
                      background: "linear-gradient(135deg, #10b981, #059669)",
                    }}
                  >
                    <Download size={20} />
                  </div>
                  <h3
                    style={{ fontSize: "1.3rem", fontWeight: 700, margin: 0 }}
                  >
                    Document Templates
                  </h3>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                  }}
                >
                  {[
                    "Personal Statement Template",
                    "Letter of Recommendation Request",
                    "Financial Aid Worksheet",
                    "Scholarship Application Tracker",
                  ].map((template, index) => (
                    <button
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        padding: "0.75rem",
                        borderRadius: "6px",
                        border: "1px solid #374151",
                        background: "#1f2937",
                        color: "#d1d5db",
                        cursor: "pointer",
                        transition: "all 0.2s",
                        textAlign: "left",
                      }}
                    >
                      <Download size={14} />
                      <span style={{ fontSize: "0.9rem" }}>{template}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Scholarship Calendar */}
              <div
                className="card-hover"
                style={{
                  background: "rgba(30,41,59,0.8)",
                  borderRadius: "16px",
                  padding: "2rem",
                  border: "1px solid rgba(245,158,11,0.2)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  <div
                    style={{
                      padding: "0.75rem",
                      borderRadius: "8px",
                      background: "linear-gradient(135deg, #f59e0b, #d97706)",
                    }}
                  >
                    <Calendar size={20} />
                  </div>
                  <h3
                    style={{ fontSize: "1.3rem", fontWeight: 700, margin: 0 }}
                  >
                    Important Dates
                  </h3>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                  }}
                >
                  {[
                    { date: "Aug 15", event: "Early Application Period Opens" },
                    { date: "Sep 1", event: "FAFSA Available" },
                    { date: "Oct 15", event: "Priority Deadline Season" },
                    { date: "Nov 30", event: "Final Application Reviews" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                      }}
                    >
                      <div
                        style={{
                          padding: "0.5rem",
                          borderRadius: "4px",
                          background: "#f59e0b22",
                          color: "#f59e0b",
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          minWidth: "fit-content",
                        }}
                      >
                        {item.date}
                      </div>
                      <span style={{ color: "#cbd5e1", fontSize: "0.9rem" }}>
                        {item.event}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div
              style={{
                background: "rgba(30,41,59,0.8)",
                borderRadius: "16px",
                padding: "2rem",
                border: "1px solid rgba(59,130,246,0.2)",
              }}
            >
              <h3
                style={{
                  fontSize: "1.6rem",
                  fontWeight: 800,
                  marginBottom: "2rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
              >
                <Heart size={24} />
                Frequently Asked Questions
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
                  gap: "2rem",
                }}
              >
                {[
                  {
                    question: "How many scholarships can I apply for?",
                    answer:
                      "There's no limit! We encourage applying to as many relevant scholarships as possible to maximize your chances.",
                  },
                  {
                    question: "When should I start applying?",
                    answer:
                      "Start as early as possible. Many scholarships have deadlines 6-12 months before the academic year begins.",
                  },
                  {
                    question: "Can I reuse application materials?",
                    answer:
                      "Yes, but always customize essays and materials for each scholarship's specific requirements and mission.",
                  },
                  {
                    question: "What if I don't meet all requirements?",
                    answer:
                      "Don't let that stop you! If you meet most requirements and have a compelling story, you should still apply.",
                  },
                ].map((faq, index) => (
                  <div
                    key={index}
                    style={{
                      padding: "1.5rem",
                      borderRadius: "12px",
                      background: "rgba(59,130,246,0.05)",
                      border: "1px solid rgba(59,130,246,0.1)",
                    }}
                  >
                    <h4
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: 600,
                        marginBottom: "0.75rem",
                        color: "#e2e8f0",
                      }}
                    >
                      {faq.question}
                    </h4>
                    <p
                      style={{
                        color: "#cbd5e1",
                        fontSize: "0.95rem",
                        lineHeight: 1.5,
                        margin: 0,
                      }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Scholarship Detail Modal */}
        {selectedScholarship && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(0,0,0,0.7)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1000,
              padding: "2rem",
            }}
          >
            <div
              style={{
                background: "linear-gradient(135deg, #1e293b 0%, #334155 100%)",
                borderRadius: "20px",
                padding: "3rem",
                maxWidth: "800px",
                width: "100%",
                maxHeight: "90vh",
                overflowY: "auto",
                border: "1px solid rgba(59,130,246,0.3)",
                boxShadow: "0 25px 50px -12px rgba(0,0,0,0.8)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "2rem",
                }}
              >
                <div>
                  <h2
                    style={{
                      fontSize: "2rem",
                      fontWeight: 900,
                      margin: "0 0 0.5rem 0",
                      color: "#fff",
                    }}
                  >
                    {selectedScholarship.title}
                  </h2>
                  <p
                    style={{ color: "#94a3b8", fontSize: "1.1rem", margin: 0 }}
                  >
                    {selectedScholarship.provider}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedScholarship(null)}
                  style={{
                    padding: "0.5rem",
                    borderRadius: "6px",
                    border: "none",
                    background: "#374151",
                    color: "#d1d5db",
                    cursor: "pointer",
                  }}
                >
                  ✕
                </button>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "2rem",
                  marginBottom: "2rem",
                }}
              >
                <div
                  style={{
                    padding: "1.5rem",
                    borderRadius: "12px",
                    background: "linear-gradient(135deg, #fbbf24, #f59e0b)",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: "2.5rem",
                      fontWeight: 900,
                      marginBottom: "0.25rem",
                    }}
                  >
                    ${selectedScholarship.amount.toLocaleString()}
                  </div>
                  <div style={{ fontSize: "0.9rem", opacity: 0.9 }}>
                    Award Amount
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      color: "#cbd5e1",
                    }}
                  >
                    <Calendar size={16} />
                    <span>Deadline: {selectedScholarship.deadline}</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      color: "#cbd5e1",
                    }}
                  >
                    <GraduationCap size={16} />
                    <span>Level: {selectedScholarship.level}</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      color: "#cbd5e1",
                    }}
                  >
                    <MapPin size={16} />
                    <span>Location: {selectedScholarship.location}</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      color: "#cbd5e1",
                    }}
                  >
                    <BookOpen size={16} />
                    <span>Field: {selectedScholarship.field}</span>
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: "2rem" }}>
                <h3
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    marginBottom: "1rem",
                    color: "#e2e8f0",
                  }}
                >
                  Description
                </h3>
                <p
                  style={{
                    color: "#cbd5e1",
                    lineHeight: 1.6,
                    fontSize: "1rem",
                  }}
                >
                  {selectedScholarship.description}
                </p>
              </div>

              <div style={{ marginBottom: "2rem" }}>
                <h3
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    marginBottom: "1rem",
                    color: "#e2e8f0",
                  }}
                >
                  Requirements
                </h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                  }}
                >
                  {selectedScholarship.requirements.map((req, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.75rem",
                      }}
                    >
                      <CheckCircle
                        size={16}
                        style={{
                          color: "#10b981",
                          marginTop: "0.125rem",
                          flexShrink: 0,
                        }}
                      />
                      <span
                        style={{
                          color: "#cbd5e1",
                          fontSize: "0.95rem",
                          lineHeight: 1.4,
                        }}
                      >
                        {req}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: "flex", gap: "1rem" }}>
                <button
                  onClick={() => {
                    setShowApplicationForm(selectedScholarship);
                    setSelectedScholarship(null);
                  }}
                  style={{
                    flex: 1,
                    padding: "1rem",
                    borderRadius: "8px",
                    border: "none",
                    background: "linear-gradient(90deg, #10b981, #059669)",
                    color: "#fff",
                    fontWeight: 600,
                    cursor: "pointer",
                    fontSize: "1rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                  }}
                >
                  <Send size={18} />
                  Apply Now
                </button>
                <button
                  onClick={() => setSelectedScholarship(null)}
                  style={{
                    padding: "1rem 2rem",
                    borderRadius: "8px",
                    border: "1px solid #6b7280",
                    background: "transparent",
                    color: "#d1d5db",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Application Form Modal */}
        {showApplicationForm && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(0,0,0,0.7)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1000,
              padding: "2rem",
            }}
          >
            <div
              style={{
                background: "linear-gradient(135deg, #1e293b 0%, #334155 100%)",
                borderRadius: "20px",
                padding: "3rem",
                maxWidth: "600px",
                width: "100%",
                maxHeight: "90vh",
                overflowY: "auto",
                border: "1px solid rgba(59,130,246,0.3)",
                boxShadow: "0 25px 50px -12px rgba(0,0,0,0.8)",
              }}
            >
              <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                <h2
                  style={{
                    fontSize: "2rem",
                    fontWeight: 900,
                    margin: "0 0 0.5rem 0",
                    color: "#fff",
                  }}
                >
                  Apply for Scholarship
                </h2>
                <p style={{ color: "#94a3b8", fontSize: "1.1rem", margin: 0 }}>
                  {showApplicationForm.title}
                </p>
              </div>

              <div style={{ marginBottom: "2rem", textAlign: "center" }}>
                <div
                  style={{
                    fontSize: "0.9rem",
                    color: "#94a3b8",
                    marginBottom: "1rem",
                  }}
                >
                  Application will be submitted to your dashboard
                </div>
                <div
                  style={{
                    padding: "1.5rem",
                    borderRadius: "12px",
                    background: "rgba(16,185,129,0.1)",
                    border: "1px solid rgba(16,185,129,0.3)",
                  }}
                >
                  <CheckCircle
                    size={24}
                    style={{ color: "#10b981", marginBottom: "0.5rem" }}
                  />
                  <div
                    style={{
                      color: "#10b981",
                      fontWeight: 600,
                      marginBottom: "0.25rem",
                    }}
                  >
                    Ready to Apply!
                  </div>
                  <div style={{ color: "#cbd5e1", fontSize: "0.9rem" }}>
                    Your application will be saved as a draft and you can
                    complete it from the "My Applications" section.
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", gap: "1rem" }}>
                <button
                  onClick={() => {
                    // Simulate adding application to drafts
                    setShowApplicationForm(false);
                    setActiveTab("my_applications");
                  }}
                  style={{
                    flex: 1,
                    padding: "1rem",
                    borderRadius: "8px",
                    border: "none",
                    background: "linear-gradient(90deg, #10b981, #059669)",
                    color: "#fff",
                    fontWeight: 600,
                    cursor: "pointer",
                    fontSize: "1rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                  }}
                >
                  <Plus size={18} />
                  Start Application
                </button>
                <button
                  onClick={() => setShowApplicationForm(false)}
                  style={{
                    padding: "1rem 2rem",
                    borderRadius: "8px",
                    border: "1px solid #6b7280",
                    background: "transparent",
                    color: "#d1d5db",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div
          style={{
            marginTop: "4rem",
            padding: "2rem",
            textAlign: "center",
            borderTop: "1px solid #334155",
            color: "#94a3b8",
          }}
        >
          <p style={{ margin: 0, fontSize: "0.9rem" }}>
            Questions about scholarships? Contact our financial aid office or
            visit the help center.
          </p>
        </div>
      </div>
    </main>
  );
}
