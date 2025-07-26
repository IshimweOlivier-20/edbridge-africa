"use client";

import { useState } from "react";
import {
  Plus,
  BookOpen,
  FileText,
  GraduationCap,
  Calendar,
  Users,
  Clock,
  Star,
  Edit,
  Trash2,
  Eye,
} from "lucide-react";

export default function TeacherDashboard() {
  const [tab, setTab] = useState<"courses" | "exams" | "tests">("courses");
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "Advanced Mathematics",
      description:
        "Comprehensive calculus and linear algebra course for advanced students",
      students: 42,
      duration: "16 weeks",
      status: "Active",
      rating: 4.8,
      category: "Mathematics",
    },
    {
      id: 2,
      title: "Introduction to Physics",
      description:
        "Fundamental concepts of mechanics, thermodynamics, and electromagnetism",
      students: 38,
      duration: "12 weeks",
      status: "Active",
      rating: 4.6,
      category: "Science",
    },
    {
      id: 3,
      title: "Modern Literature Analysis",
      description: "Critical analysis of 20th and 21st century literary works",
      students: 29,
      duration: "14 weeks",
      status: "Draft",
      rating: 4.9,
      category: "Literature",
    },
  ]);

  const [exams, setExams] = useState([
    {
      id: 1,
      title: "Calculus Midterm Examination",
      course: "Advanced Mathematics",
      date: "2025-08-15",
      duration: "2 hours",
      questions: 25,
      status: "Scheduled",
      participants: 42,
    },
    {
      id: 2,
      title: "Physics Final Assessment",
      course: "Introduction to Physics",
      date: "2025-08-20",
      duration: "3 hours",
      questions: 40,
      status: "Draft",
      participants: 38,
    },
    {
      id: 3,
      title: "Literature Comprehensive Exam",
      course: "Modern Literature Analysis",
      date: "2025-08-10",
      duration: "2.5 hours",
      questions: 15,
      status: "Completed",
      participants: 29,
    },
  ]);

  const [tests, setTests] = useState([
    {
      id: 1,
      title: "Derivatives Quick Quiz",
      course: "Advanced Mathematics",
      date: "2025-07-30",
      duration: "30 minutes",
      questions: 10,
      status: "Active",
      participants: 42,
    },
    {
      id: 2,
      title: "Newton's Laws Assessment",
      course: "Introduction to Physics",
      date: "2025-08-02",
      duration: "45 minutes",
      questions: 15,
      status: "Scheduled",
      participants: 38,
    },
    {
      id: 3,
      title: "Poetry Analysis Test",
      course: "Modern Literature Analysis",
      date: "2025-07-28",
      duration: "1 hour",
      questions: 8,
      status: "Completed",
      participants: 29,
    },
  ]);

  const [showForm, setShowForm] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "#10b981";
      case "Scheduled":
        return "#3b82f6";
      case "Draft":
        return "#f59e0b";
      case "Completed":
        return "#6b7280";
      default:
        return "#6b7280";
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    setShowForm(false);
  };

  return (
    <main
      style={{
        width: "100vw",
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #3730a3 75%, #1d4ed8 100%)",
        color: "#f8fafc",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Animated background elements */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "300px",
          height: "300px",
          background:
            "radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)",
          borderRadius: "50%",
          animation: "float 6s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "5%",
          width: "200px",
          height: "200px",
          background:
            "radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)",
          borderRadius: "50%",
          animation: "float 8s ease-in-out infinite reverse",
        }}
      />

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .card-hover:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }
      `}</style>

      <div
        style={{
          flex: 1,
          width: "100%",
          padding: "2rem 2vw",
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "3rem",
            animation: "slideUp 0.8s ease-out",
          }}
        >
          <h1
            style={{
              fontSize: "3.5rem",
              fontWeight: 900,
              marginBottom: "1rem",
              background:
                "linear-gradient(90deg, #ffffff 0%, #a855f7 50%, #3b82f6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "0 0 30px rgba(168, 85, 247, 0.3)",
            }}
          >
            ✨ Teacher Dashboard
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#cbd5e1",
              fontWeight: 300,
              letterSpacing: "0.5px",
            }}
          >
            Manage your courses, exams, and tests with unprecedented ease
          </p>
        </div>

        {/* Navigation Tabs */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            marginBottom: "3rem",
            flexWrap: "wrap",
          }}
        >
          {[
            { key: "courses", label: "Courses", icon: BookOpen },
            { key: "exams", label: "Exams", icon: GraduationCap },
            { key: "tests", label: "Tests", icon: FileText },
          ].map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setTab(key as any)}
              style={{
                padding: "1rem 2rem",
                borderRadius: "16px",
                border: "none",
                background:
                  tab === key
                    ? "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)"
                    : "rgba(51, 65, 85, 0.6)",
                color: "#fff",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "1rem",
                backdropFilter: "blur(10px)",
                boxShadow:
                  tab === key
                    ? "0 10px 30px rgba(59, 130, 246, 0.3)"
                    : "0 4px 15px rgba(0, 0, 0, 0.1)",
                transform: tab === key ? "scale(1.05)" : "scale(1)",
              }}
            >
              <Icon size={20} />
              {label}
            </button>
          ))}
        </div>

        {/* Create Button */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "2rem",
          }}
        >
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: 700,
              background: "linear-gradient(90deg, #fff 0%, #a855f7 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {tab === "courses"
              ? "📚 My Courses"
              : tab === "exams"
              ? "🎓 Examinations"
              : "📝 Quick Tests"}
          </h2>
          <button
            onClick={() => setShowForm(!showForm)}
            style={{
              background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
              color: "#fff",
              padding: "1rem 1.5rem",
              borderRadius: "12px",
              border: "none",
              fontWeight: 600,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              transition: "all 0.3s ease",
              boxShadow: "0 8px 25px rgba(16, 185, 129, 0.3)",
              transform: "scale(1)",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <Plus size={20} />
            Create New {tab.slice(0, -1)}
          </button>
        </div>

        {/* Create Form */}
        {showForm && (
          <div
            style={{
              background: "rgba(30, 41, 59, 0.95)",
              padding: "2rem",
              borderRadius: "20px",
              marginBottom: "2rem",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(148, 163, 184, 0.1)",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
              animation: "slideUp 0.5s ease-out",
            }}
          >
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: 700,
                marginBottom: "1.5rem",
                color: "#a855f7",
              }}
            >
              Create New{" "}
              {tab === "courses" ? "Course" : tab === "exams" ? "Exam" : "Test"}
            </h3>
            <div style={{ display: "grid", gap: "1.5rem" }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                }}
              >
                <input
                  type="text"
                  placeholder={`${
                    tab === "courses"
                      ? "Course"
                      : tab === "exams"
                      ? "Exam"
                      : "Test"
                  } Title`}
                  style={{
                    padding: "1rem",
                    borderRadius: "12px",
                    border: "1px solid rgba(148, 163, 184, 0.2)",
                    background: "rgba(51, 65, 85, 0.6)",
                    color: "#fff",
                    fontSize: "1rem",
                    backdropFilter: "blur(10px)",
                  }}
                />
                {tab !== "courses" && (
                  <select
                    style={{
                      padding: "1rem",
                      borderRadius: "12px",
                      border: "1px solid rgba(148, 163, 184, 0.2)",
                      background: "rgba(51, 65, 85, 0.6)",
                      color: "#fff",
                      fontSize: "1rem",
                    }}
                  >
                    <option>Select Course</option>
                    {courses.map((course) => (
                      <option key={course.id} value={course.title}>
                        {course.title}
                      </option>
                    ))}
                  </select>
                )}
              </div>

              {tab !== "courses" && (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    gap: "1rem",
                  }}
                >
                  <input
                    type="date"
                    style={{
                      padding: "1rem",
                      borderRadius: "12px",
                      border: "1px solid rgba(148, 163, 184, 0.2)",
                      background: "rgba(51, 65, 85, 0.6)",
                      color: "#fff",
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Duration (e.g., 2 hours)"
                    style={{
                      padding: "1rem",
                      borderRadius: "12px",
                      border: "1px solid rgba(148, 163, 184, 0.2)",
                      background: "rgba(51, 65, 85, 0.6)",
                      color: "#fff",
                    }}
                  />
                  <input
                    type="number"
                    placeholder="Number of Questions"
                    style={{
                      padding: "1rem",
                      borderRadius: "12px",
                      border: "1px solid rgba(148, 163, 184, 0.2)",
                      background: "rgba(51, 65, 85, 0.6)",
                      color: "#fff",
                    }}
                  />
                </div>
              )}

              <textarea
                placeholder={`${
                  tab === "courses"
                    ? "Course Description"
                    : "Instructions and Guidelines"
                }`}
                rows={4}
                style={{
                  padding: "1rem",
                  borderRadius: "12px",
                  border: "1px solid rgba(148, 163, 184, 0.2)",
                  background: "rgba(51, 65, 85, 0.6)",
                  color: "#fff",
                  fontSize: "1rem",
                  resize: "vertical",
                }}
              />

              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  justifyContent: "flex-end",
                }}
              >
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  style={{
                    background: "rgba(107, 114, 128, 0.6)",
                    color: "#fff",
                    padding: "1rem 1.5rem",
                    borderRadius: "12px",
                    border: "none",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  style={{
                    background:
                      "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
                    color: "#fff",
                    padding: "1rem 1.5rem",
                    borderRadius: "12px",
                    border: "none",
                    fontWeight: 600,
                    cursor: "pointer",
                    boxShadow: "0 8px 25px rgba(59, 130, 246, 0.3)",
                    transition: "all 0.3s ease",
                  }}
                >
                  Create{" "}
                  {tab === "courses"
                    ? "Course"
                    : tab === "exams"
                    ? "Exam"
                    : "Test"}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Content Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
            gap: "2rem",
          }}
        >
          {tab === "courses" &&
            courses.map((course, index) => (
              <div
                key={course.id}
                className="card-hover"
                style={{
                  background: "rgba(30, 41, 59, 0.8)",
                  padding: "2rem",
                  borderRadius: "20px",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(148, 163, 184, 0.1)",
                  boxShadow: "0 15px 35px rgba(0, 0, 0, 0.3)",
                  animation: `slideUp 0.6s ease-out ${index * 0.1}s both`,
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
                  <div>
                    <span
                      style={{
                        background:
                          course.status === "Active"
                            ? "linear-gradient(90deg, #10b981, #059669)"
                            : "linear-gradient(90deg, #f59e0b, #d97706)",
                        color: "#fff",
                        padding: "0.25rem 0.75rem",
                        borderRadius: "20px",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                      }}
                    >
                      {course.status}
                    </span>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        marginTop: "0.5rem",
                        color: "#fbbf24",
                      }}
                    >
                      <Star size={16} fill="currentColor" />
                      <span style={{ fontWeight: 600 }}>{course.rating}</span>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    <button
                      style={{
                        background: "rgba(59, 130, 246, 0.2)",
                        border: "none",
                        padding: "0.5rem",
                        borderRadius: "8px",
                        color: "#3b82f6",
                        cursor: "pointer",
                      }}
                    >
                      <Eye size={16} />
                    </button>
                    <button
                      style={{
                        background: "rgba(139, 92, 246, 0.2)",
                        border: "none",
                        padding: "0.5rem",
                        borderRadius: "8px",
                        color: "#8b5cf6",
                        cursor: "pointer",
                      }}
                    >
                      <Edit size={16} />
                    </button>
                    <button
                      style={{
                        background: "rgba(239, 68, 68, 0.2)",
                        border: "none",
                        padding: "0.5rem",
                        borderRadius: "8px",
                        color: "#ef4444",
                        cursor: "pointer",
                      }}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>

                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    marginBottom: "0.5rem",
                    color: "#a855f7",
                  }}
                >
                  {course.title}
                </h3>
                <p
                  style={{
                    color: "#cbd5e1",
                    marginBottom: "1.5rem",
                    lineHeight: 1.6,
                  }}
                >
                  {course.description}
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
                    <Users size={16} />
                    <span>{course.students} students</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      color: "#94a3b8",
                    }}
                  >
                    <Clock size={16} />
                    <span>{course.duration}</span>
                  </div>
                </div>

                <div
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))",
                    padding: "0.75rem",
                    borderRadius: "12px",
                    border: "1px solid rgba(148, 163, 184, 0.1)",
                  }}
                >
                  <span
                    style={{
                      color: "#a855f7",
                      fontWeight: 600,
                      fontSize: "0.875rem",
                    }}
                  >
                    Category: {course.category}
                  </span>
                </div>
              </div>
            ))}

          {tab === "exams" &&
            exams.map((exam, index) => (
              <div
                key={exam.id}
                className="card-hover"
                style={{
                  background: "rgba(30, 41, 59, 0.8)",
                  padding: "2rem",
                  borderRadius: "20px",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(148, 163, 184, 0.1)",
                  boxShadow: "0 15px 35px rgba(0, 0, 0, 0.3)",
                  animation: `slideUp 0.6s ease-out ${index * 0.1}s both`,
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
                  <span
                    style={{
                      background: `linear-gradient(90deg, ${getStatusColor(
                        exam.status
                      )}, ${getStatusColor(exam.status)}dd)`,
                      color: "#fff",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "20px",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                    }}
                  >
                    {exam.status}
                  </span>
                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    <button
                      style={{
                        background: "rgba(59, 130, 246, 0.2)",
                        border: "none",
                        padding: "0.5rem",
                        borderRadius: "8px",
                        color: "#3b82f6",
                        cursor: "pointer",
                      }}
                    >
                      <Eye size={16} />
                    </button>
                    <button
                      style={{
                        background: "rgba(139, 92, 246, 0.2)",
                        border: "none",
                        padding: "0.5rem",
                        borderRadius: "8px",
                        color: "#8b5cf6",
                        cursor: "pointer",
                      }}
                    >
                      <Edit size={16} />
                    </button>
                    <button
                      style={{
                        background: "rgba(239, 68, 68, 0.2)",
                        border: "none",
                        padding: "0.5rem",
                        borderRadius: "8px",
                        color: "#ef4444",
                        cursor: "pointer",
                      }}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>

                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    marginBottom: "0.5rem",
                    color: "#3b82f6",
                  }}
                >
                  {exam.title}
                </h3>
                <p
                  style={{
                    color: "#94a3b8",
                    marginBottom: "1.5rem",
                    fontSize: "0.875rem",
                  }}
                >
                  Course: {exam.course}
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
                      color: "#cbd5e1",
                    }}
                  >
                    <Calendar size={16} />
                    <span>{new Date(exam.date).toLocaleDateString()}</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      color: "#cbd5e1",
                    }}
                  >
                    <Clock size={16} />
                    <span>{exam.duration}</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      color: "#cbd5e1",
                    }}
                  >
                    <FileText size={16} />
                    <span>{exam.questions} questions</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      color: "#cbd5e1",
                    }}
                  >
                    <Users size={16} />
                    <span>{exam.participants} students</span>
                  </div>
                </div>
              </div>
            ))}

          {tab === "tests" &&
            tests.map((test, index) => (
              <div
                key={test.id}
                className="card-hover"
                style={{
                  background: "rgba(30, 41, 59, 0.8)",
                  padding: "2rem",
                  borderRadius: "20px",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(148, 163, 184, 0.1)",
                  boxShadow: "0 15px 35px rgba(0, 0, 0, 0.3)",
                  animation: `slideUp 0.6s ease-out ${index * 0.1}s both`,
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
                  <span
                    style={{
                      background: `linear-gradient(90deg, ${getStatusColor(
                        test.status
                      )}, ${getStatusColor(test.status)}dd)`,
                      color: "#fff",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "20px",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                    }}
                  >
                    {test.status}
                  </span>
                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    <button
                      style={{
                        background: "rgba(59, 130, 246, 0.2)",
                        border: "none",
                        padding: "0.5rem",
                        borderRadius: "8px",
                        color: "#3b82f6",
                        cursor: "pointer",
                      }}
                    >
                      <Eye size={16} />
                    </button>
                    <button
                      style={{
                        background: "rgba(139, 92, 246, 0.2)",
                        border: "none",
                        padding: "0.5rem",
                        borderRadius: "8px",
                        color: "#8b5cf6",
                        cursor: "pointer",
                      }}
                    >
                      <Edit size={16} />
                    </button>
                    <button
                      style={{
                        background: "rgba(239, 68, 68, 0.2)",
                        border: "none",
                        padding: "0.5rem",
                        borderRadius: "8px",
                        color: "#ef4444",
                        cursor: "pointer",
                      }}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>

                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    marginBottom: "0.5rem",
                    color: "#10b981",
                  }}
                >
                  {test.title}
                </h3>
                <p
                  style={{
                    color: "#94a3b8",
                    marginBottom: "1.5rem",
                    fontSize: "0.875rem",
                  }}
                >
                  Course: {test.course}
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
                      color: "#cbd5e1",
                    }}
                  >
                    <Calendar size={16} />
                    <span>{new Date(test.date).toLocaleDateString()}</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      color: "#cbd5e1",
                    }}
                  >
                    <Clock size={16} />
                    <span>{test.duration}</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      color: "#cbd5e1",
                    }}
                  >
                    <FileText size={16} />
                    <span>{test.questions} questions</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      color: "#cbd5e1",
                    }}
                  >
                    <Users size={16} />
                    <span>{test.participants} students</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
}
