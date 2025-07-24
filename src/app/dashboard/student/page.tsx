"use client";

import { useState } from "react";
import {
  BookOpen,
  FileText,
  Star,
  Calendar,
  Clock,
  Trophy,
  TrendingUp,
  CheckCircle,
  AlertCircle,
  Play,
  Download,
  MessageCircle,
  Target,
  Award,
  Users,
  Bell,
  Settings,
} from "lucide-react";

const enrolledCourses = [
  {
    id: 1,
    title: "Academic English",
    description: "Improve your academic writing and reading skills.",
    progress: 70,
    teacher: "Ms. Jane Doe",
    nextDeadline: "2025-08-05",
    totalModules: 12,
    completedModules: 8,
    status: "active",
    difficulty: "Intermediate",
  },
  {
    id: 2,
    title: "Digital Literacy",
    description: "Learn essential computer and internet skills.",
    progress: 45,
    teacher: "Mr. John Smith",
    nextDeadline: "2025-08-08",
    totalModules: 10,
    completedModules: 4,
    status: "active",
    difficulty: "Beginner",
  },
  {
    id: 3,
    title: "Mathematics Fundamentals",
    description: "Build strong mathematical foundations.",
    progress: 85,
    teacher: "Dr. Sarah Wilson",
    nextDeadline: "2025-08-12",
    totalModules: 15,
    completedModules: 13,
    status: "almost-complete",
    difficulty: "Intermediate",
  },
];

const upcomingExams = [
  {
    id: 1,
    title: "English Midterm",
    date: "2025-08-10",
    time: "14:00",
    course: "Academic English",
    duration: "2 hours",
    type: "Major Exam",
    status: "scheduled",
  },
  {
    id: 2,
    title: "Digital Skills Quiz",
    date: "2025-08-15",
    time: "10:30",
    course: "Digital Literacy",
    duration: "45 minutes",
    type: "Quiz",
    status: "available",
  },
  {
    id: 3,
    title: "Math Practice Test",
    date: "2025-08-07",
    time: "16:00",
    course: "Mathematics Fundamentals",
    duration: "1.5 hours",
    type: "Practice",
    status: "available",
  },
];

const recentGrades = [
  {
    id: 1,
    course: "Academic English",
    exam: "Essay Assignment",
    grade: "A-",
    score: 87,
    maxScore: 100,
    feedback: "Great improvement in structure and argumentation!",
    date: "2025-07-20",
    teacher: "Ms. Jane Doe",
  },
  {
    id: 2,
    course: "Digital Literacy",
    exam: "Module 1 Quiz",
    grade: "B+",
    score: 82,
    maxScore: 100,
    feedback: "Good work, but review internet safety protocols.",
    date: "2025-07-18",
    teacher: "Mr. John Smith",
  },
  {
    id: 3,
    course: "Mathematics Fundamentals",
    exam: "Algebra Test",
    grade: "A",
    score: 94,
    maxScore: 100,
    feedback: "Excellent understanding of quadratic equations!",
    date: "2025-07-15",
    teacher: "Dr. Sarah Wilson",
  },
];

const achievements = [
  { id: 1, title: "First Course Completed", icon: "🎯", unlocked: true },
  { id: 2, title: "Perfect Attendance", icon: "📅", unlocked: true },
  { id: 3, title: "Quick Learner", icon: "⚡", unlocked: false },
  { id: 4, title: "Academic Excellence", icon: "🏆", unlocked: false },
];

const studyResources = [
  {
    id: 1,
    title: "English Grammar Guide",
    type: "PDF",
    course: "Academic English",
    downloads: 245,
  },
  {
    id: 2,
    title: "Digital Safety Checklist",
    type: "Document",
    course: "Digital Literacy",
    downloads: 189,
  },
  {
    id: 3,
    title: "Math Formula Sheet",
    type: "PDF",
    course: "Mathematics Fundamentals",
    downloads: 567,
  },
];

export default function StudentDashboard() {
  const [tab, setTab] = useState<
    "dashboard" | "courses" | "exams" | "grades" | "resources"
  >("dashboard");
  const [selectedExam, setSelectedExam] = useState(null);

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Beginner":
        return "#10b981";
      case "Intermediate":
        return "#f59e0b";
      case "Advanced":
        return "#ef4444";
      default:
        return "#6b7280";
    }
  };

  const getGradeColor = (grade) => {
    if (grade.startsWith("A")) return "#10b981";
    if (grade.startsWith("B")) return "#3b82f6";
    if (grade.startsWith("C")) return "#f59e0b";
    return "#ef4444";
  };

  const overallProgress = Math.round(
    enrolledCourses.reduce((acc, course) => acc + course.progress, 0) /
      enrolledCourses.length
  );
  const totalCredits = enrolledCourses.length * 3;
  const earnedCredits = Math.round(totalCredits * (overallProgress / 100));

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
            transform: translateY(-10px);
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
        @keyframes slideIn {
          from {
            transform: translateX(-20px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .card-hover:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }
        .stat-card {
          animation: slideIn 0.6s ease-out;
        }
        .notification-dot {
          animation: pulse 2s infinite;
        }
      `}</style>

      {/* Floating Background Elements */}
      <div
        style={{
          position: "absolute",
          top: "8%",
          left: "3%",
          width: "300px",
          height: "300px",
          background:
            "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
          borderRadius: "50%",
          animation: "float 8s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          right: "8%",
          width: "200px",
          height: "200px",
          background:
            "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)",
          borderRadius: "50%",
          animation: "float 12s ease-in-out infinite reverse",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "40%",
          right: "15%",
          width: "150px",
          height: "150px",
          background:
            "radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%)",
          borderRadius: "50%",
          animation: "float 10s ease-in-out infinite",
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
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: 900,
              background: "linear-gradient(90deg, #fff 40%, #8b5cf6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: "-0.03em",
            }}
          >
            Student Portal
          </h1>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div style={{ position: "relative" }}>
              <Bell size={24} style={{ cursor: "pointer" }} />
              <div
                className="notification-dot"
                style={{
                  position: "absolute",
                  top: "-2px",
                  right: "-2px",
                  width: "8px",
                  height: "8px",
                  background: "#ef4444",
                  borderRadius: "50%",
                }}
              />
            </div>
            <Settings size={24} style={{ cursor: "pointer" }} />
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
            { key: "dashboard", label: "Dashboard", icon: TrendingUp },
            { key: "courses", label: "My Courses", icon: BookOpen },
            { key: "exams", label: "Exams & Tests", icon: FileText },
            { key: "grades", label: "Grades", icon: Star },
            { key: "resources", label: "Resources", icon: Download },
          ].map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              style={{
                padding: "0.75rem 1.5rem",
                borderRadius: "8px",
                border: "none",
                background: tab === key ? "#3b82f6" : "transparent",
                color: "#fff",
                fontWeight: 600,
                fontSize: "0.95rem",
                cursor: "pointer",
                boxShadow: tab === key ? "0 4px 16px #3b82f655" : "none",
                transition: "all 0.2s",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <Icon size={18} />
              {label}
            </button>
          ))}
        </div>

        {/* DASHBOARD */}
        {tab === "dashboard" && (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
          >
            {/* Stats Overview */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "1.5rem",
              }}
            >
              <div
                className="stat-card card-hover"
                style={{
                  background: "rgba(30,41,59,0.85)",
                  borderRadius: "16px",
                  padding: "2rem",
                  border: "1px solid #334155",
                  boxShadow: "0 4px 20px rgba(59,130,246,0.1)",
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
                    <TrendingUp size={24} />
                  </div>
                  <div>
                    <h3
                      style={{ fontSize: "2rem", fontWeight: 900, margin: 0 }}
                    >
                      {overallProgress}%
                    </h3>
                    <p style={{ color: "#cbd5e1", margin: 0 }}>
                      Overall Progress
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="stat-card card-hover"
                style={{
                  background: "rgba(30,41,59,0.85)",
                  borderRadius: "16px",
                  padding: "2rem",
                  border: "1px solid #334155",
                  boxShadow: "0 4px 20px rgba(139,92,246,0.1)",
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
                      background: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
                    }}
                  >
                    <Award size={24} />
                  </div>
                  <div>
                    <h3
                      style={{ fontSize: "2rem", fontWeight: 900, margin: 0 }}
                    >
                      {earnedCredits}/{totalCredits}
                    </h3>
                    <p style={{ color: "#cbd5e1", margin: 0 }}>
                      Credits Earned
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="stat-card card-hover"
                style={{
                  background: "rgba(30,41,59,0.85)",
                  borderRadius: "16px",
                  padding: "2rem",
                  border: "1px solid #334155",
                  boxShadow: "0 4px 20px rgba(16,185,129,0.1)",
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
                    <Target size={24} />
                  </div>
                  <div>
                    <h3
                      style={{ fontSize: "2rem", fontWeight: 900, margin: 0 }}
                    >
                      {upcomingExams.length}
                    </h3>
                    <p style={{ color: "#cbd5e1", margin: 0 }}>
                      Upcoming Tests
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="stat-card card-hover"
                style={{
                  background: "rgba(30,41,59,0.85)",
                  borderRadius: "16px",
                  padding: "2rem",
                  border: "1px solid #334155",
                  boxShadow: "0 4px 20px rgba(245,158,11,0.1)",
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
                    <Trophy size={24} />
                  </div>
                  <div>
                    <h3
                      style={{ fontSize: "2rem", fontWeight: 900, margin: 0 }}
                    >
                      {achievements.filter((a) => a.unlocked).length}
                    </h3>
                    <p style={{ color: "#cbd5e1", margin: 0 }}>Achievements</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions & Recent Activity */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "2rem",
              }}
            >
              <div
                style={{
                  background: "rgba(30,41,59,0.85)",
                  borderRadius: "16px",
                  padding: "2rem",
                  border: "1px solid #334155",
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
                  Quick Actions
                </h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  {upcomingExams.slice(0, 2).map((exam) => (
                    <button
                      key={exam.id}
                      style={{
                        background:
                          exam.status === "available" ? "#10b981" : "#6b7280",
                        color: "#fff",
                        border: "none",
                        padding: "1rem",
                        borderRadius: "8px",
                        cursor:
                          exam.status === "available"
                            ? "pointer"
                            : "not-allowed",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        transition: "all 0.2s",
                        opacity: exam.status === "available" ? 1 : 0.6,
                      }}
                      disabled={exam.status !== "available"}
                    >
                      <Play size={18} />
                      {exam.status === "available"
                        ? `Start ${exam.title}`
                        : `${exam.title} - ${exam.date}`}
                    </button>
                  ))}
                </div>
              </div>

              <div
                style={{
                  background: "rgba(30,41,59,0.85)",
                  borderRadius: "16px",
                  padding: "2rem",
                  border: "1px solid #334155",
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
                  <Trophy size={20} />
                  Achievements
                </h3>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1rem",
                  }}
                >
                  {achievements.map((achievement) => (
                    <div
                      key={achievement.id}
                      style={{
                        padding: "1rem",
                        borderRadius: "8px",
                        background: achievement.unlocked
                          ? "linear-gradient(135deg, #f59e0b22, #d9770622)"
                          : "#374151",
                        border: achievement.unlocked
                          ? "1px solid #f59e0b"
                          : "1px solid #4b5563",
                        textAlign: "center",
                        opacity: achievement.unlocked ? 1 : 0.5,
                      }}
                    >
                      <div
                        style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}
                      >
                        {achievement.icon}
                      </div>
                      <div style={{ fontSize: "0.85rem", fontWeight: 600 }}>
                        {achievement.title}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* COURSES */}
        {tab === "courses" && (
          <section>
            <h2
              style={{
                fontSize: "1.8rem",
                fontWeight: 800,
                marginBottom: "2rem",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
              }}
            >
              <BookOpen size={28} />
              My Courses
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
                gap: "2rem",
              }}
            >
              {enrolledCourses.map((course) => (
                <div
                  key={course.id}
                  className="card-hover"
                  style={{
                    background: "rgba(30,41,59,0.85)",
                    borderRadius: "16px",
                    padding: "2rem",
                    boxShadow: "0 4px 20px rgba(59,130,246,0.1)",
                    border: "1px solid #334155",
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
                      <BookOpen size={24} />
                      <h4
                        style={{
                          fontSize: "1.3rem",
                          fontWeight: 700,
                          color: "#fff",
                          margin: 0,
                        }}
                      >
                        {course.title}
                      </h4>
                    </div>
                    <div
                      style={{
                        padding: "0.25rem 0.75rem",
                        borderRadius: "20px",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        background:
                          getDifficultyColor(course.difficulty) + "22",
                        color: getDifficultyColor(course.difficulty),
                        border: `1px solid ${getDifficultyColor(
                          course.difficulty
                        )}`,
                      }}
                    >
                      {course.difficulty}
                    </div>
                  </div>

                  <p
                    style={{
                      color: "#cbd5e1",
                      marginBottom: "1rem",
                      lineHeight: 1.5,
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
                    <div style={{ color: "#a5b4fc", fontSize: "0.9rem" }}>
                      <strong>Teacher:</strong> {course.teacher}
                    </div>
                    <div style={{ color: "#a5b4fc", fontSize: "0.9rem" }}>
                      <strong>Next Deadline:</strong> {course.nextDeadline}
                    </div>
                  </div>

                  <div style={{ marginBottom: "1rem" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "0.5rem",
                      }}
                    >
                      <span style={{ fontSize: "0.9rem", color: "#cbd5e1" }}>
                        Progress
                      </span>
                      <span style={{ fontSize: "0.9rem", color: "#cbd5e1" }}>
                        {course.completedModules}/{course.totalModules} modules
                      </span>
                    </div>
                    <div
                      style={{
                        background: "#334155",
                        borderRadius: "8px",
                        overflow: "hidden",
                        height: "10px",
                      }}
                    >
                      <div
                        style={{
                          width: `${course.progress}%`,
                          background:
                            "linear-gradient(90deg, #3b82f6, #8b5cf6)",
                          height: "100%",
                          borderRadius: "8px",
                          transition: "width 0.3s",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        fontSize: "1rem",
                        color: "#fff",
                        fontWeight: 600,
                        marginTop: "0.5rem",
                      }}
                    >
                      {course.progress}% Complete
                    </div>
                  </div>

                  <button
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      borderRadius: "8px",
                      border: "none",
                      background: "linear-gradient(90deg, #3b82f6, #1d4ed8)",
                      color: "#fff",
                      fontWeight: 600,
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                  >
                    Continue Learning
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* EXAMS */}
        {tab === "exams" && (
          <section>
            <h2
              style={{
                fontSize: "1.8rem",
                fontWeight: 800,
                marginBottom: "2rem",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
              }}
            >
              <FileText size={28} />
              Exams & Tests
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
                gap: "2rem",
              }}
            >
              {upcomingExams.map((exam) => (
                <div
                  key={exam.id}
                  className="card-hover"
                  style={{
                    background: "rgba(30,41,59,0.85)",
                    borderRadius: "16px",
                    padding: "2rem",
                    boxShadow: "0 4px 20px rgba(59,130,246,0.1)",
                    border: "1px solid #334155",
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
                      <FileText size={24} />
                      <h4
                        style={{
                          fontSize: "1.3rem",
                          fontWeight: 700,
                          color: "#fff",
                          margin: 0,
                        }}
                      >
                        {exam.title}
                      </h4>
                    </div>
                    <div
                      style={{
                        padding: "0.25rem 0.75rem",
                        borderRadius: "20px",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        background:
                          exam.status === "available"
                            ? "#10b98122"
                            : "#6b728022",
                        color:
                          exam.status === "available" ? "#10b981" : "#6b7280",
                        border: `1px solid ${
                          exam.status === "available" ? "#10b981" : "#6b7280"
                        }`,
                      }}
                    >
                      {exam.status === "available"
                        ? "Available Now"
                        : "Scheduled"}
                    </div>
                  </div>

                  <div
                    style={{
                      color: "#a5b4fc",
                      fontSize: "1rem",
                      marginBottom: "1rem",
                    }}
                  >
                    <strong>Course:</strong> {exam.course}
                  </div>

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
                      <span>{exam.date}</span>
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
                      <span>{exam.time}</span>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "1rem",
                      marginBottom: "1.5rem",
                    }}
                  >
                    <div style={{ color: "#a5b4fc", fontSize: "0.9rem" }}>
                      <strong>Duration:</strong> {exam.duration}
                    </div>
                    <div style={{ color: "#a5b4fc", fontSize: "0.9rem" }}>
                      <strong>Type:</strong> {exam.type}
                    </div>
                  </div>

                  <button
                    style={{
                      width: "100%",
                      padding: "1rem",
                      borderRadius: "8px",
                      border: "none",
                      background:
                        exam.status === "available"
                          ? "linear-gradient(90deg, #10b981, #059669)"
                          : "#6b7280",
                      color: "#fff",
                      fontWeight: 600,
                      cursor:
                        exam.status === "available" ? "pointer" : "not-allowed",
                      transition: "all 0.2s",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.5rem",
                      opacity: exam.status === "available" ? 1 : 0.6,
                    }}
                    disabled={exam.status !== "available"}
                  >
                    <Play size={18} />
                    {exam.status === "available"
                      ? "Start Exam"
                      : "Not Available Yet"}
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* GRADES */}
        {tab === "grades" && (
          <section>
            <h2
              style={{
                fontSize: "1.8rem",
                fontWeight: 800,
                marginBottom: "2rem",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
              }}
            >
              <Star size={28} />
              Grades & Feedback
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
                gap: "2rem",
              }}
            >
              {recentGrades.map((grade) => (
                <div
                  key={grade.id}
                  className="card-hover"
                  style={{
                    background: "rgba(30,41,59,0.85)",
                    borderRadius: "16px",
                    padding: "2rem",
                    boxShadow: "0 4px 20px rgba(59,130,246,0.1)",
                    border: "1px solid #334155",
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
                      <Star size={24} />
                      <h4
                        style={{
                          fontSize: "1.3rem",
                          fontWeight: 700,
                          color: "#fff",
                          margin: 0,
                        }}
                      >
                        {grade.exam}
                      </h4>
                    </div>
                    <div
                      style={{
                        padding: "0.5rem 1rem",
                        borderRadius: "8px",
                        fontSize: "1.2rem",
                        fontWeight: 800,
                        background: getGradeColor(grade.grade) + "22",
                        color: getGradeColor(grade.grade),
                        border: `2px solid ${getGradeColor(grade.grade)}`,
                      }}
                    >
                      {grade.grade}
                    </div>
                  </div>

                  <div
                    style={{
                      color: "#a5b4fc",
                      fontSize: "1rem",
                      marginBottom: "1rem",
                    }}
                  >
                    <strong>Course:</strong> {grade.course}
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "1rem",
                      marginBottom: "1rem",
                    }}
                  >
                    <div style={{ color: "#cbd5e1" }}>
                      <strong>Score:</strong> {grade.score}/{grade.maxScore}
                    </div>
                    <div style={{ color: "#cbd5e1" }}>
                      <strong>Date:</strong> {grade.date}
                    </div>
                  </div>

                  <div
                    style={{
                      color: "#cbd5e1",
                      fontSize: "0.95rem",
                      marginBottom: "1rem",
                    }}
                  >
                    <strong>Teacher:</strong> {grade.teacher}
                  </div>

                  <div
                    style={{
                      background: "rgba(59,130,246,0.1)",
                      borderRadius: "8px",
                      padding: "1rem",
                      border: "1px solid rgba(59,130,246,0.3)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        marginBottom: "0.5rem",
                      }}
                    >
                      <MessageCircle size={16} />
                      <strong style={{ color: "#93c5fd" }}>Feedback:</strong>
                    </div>
                    <p style={{ color: "#cbd5e1", margin: 0, lineHeight: 1.4 }}>
                      {grade.feedback}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* RESOURCES */}
        {tab === "resources" && (
          <section>
            <h2
              style={{
                fontSize: "1.8rem",
                fontWeight: 800,
                marginBottom: "2rem",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
              }}
            >
              <Download size={28} />
              Study Resources
            </h2>

            {/* Resource Categories */}
            <div style={{ marginBottom: "2rem" }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                  gap: "2rem",
                }}
              >
                {studyResources.map((resource) => (
                  <div
                    key={resource.id}
                    className="card-hover"
                    style={{
                      background: "rgba(30,41,59,0.85)",
                      borderRadius: "16px",
                      padding: "2rem",
                      boxShadow: "0 4px 20px rgba(59,130,246,0.1)",
                      border: "1px solid #334155",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        marginBottom: "1rem",
                      }}
                    >
                      <div
                        style={{
                          padding: "0.75rem",
                          borderRadius: "8px",
                          background:
                            "linear-gradient(135deg, #3b82f6, #1d4ed8)",
                        }}
                      >
                        <Download size={20} />
                      </div>
                      <div>
                        <h4
                          style={{
                            fontSize: "1.1rem",
                            fontWeight: 700,
                            color: "#fff",
                            margin: 0,
                          }}
                        >
                          {resource.title}
                        </h4>
                        <p
                          style={{
                            color: "#a5b4fc",
                            fontSize: "0.9rem",
                            margin: 0,
                          }}
                        >
                          {resource.course}
                        </p>
                      </div>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "1rem",
                      }}
                    >
                      <div
                        style={{
                          padding: "0.25rem 0.75rem",
                          borderRadius: "20px",
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          background: "#f59e0b22",
                          color: "#f59e0b",
                          border: "1px solid #f59e0b",
                        }}
                      >
                        {resource.type}
                      </div>
                      <div style={{ color: "#cbd5e1", fontSize: "0.9rem" }}>
                        {resource.downloads} downloads
                      </div>
                    </div>

                    <button
                      style={{
                        width: "100%",
                        padding: "0.75rem",
                        borderRadius: "8px",
                        border: "none",
                        background: "linear-gradient(90deg, #10b981, #059669)",
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
                      <Download size={18} />
                      Download Resource
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Resources Section */}
            <div
              style={{
                background: "rgba(30,41,59,0.85)",
                borderRadius: "16px",
                padding: "2rem",
                border: "1px solid #334155",
                marginTop: "2rem",
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
                <Users size={20} />
                Study Groups & Forums
              </h3>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                  gap: "1.5rem",
                }}
              >
                <div
                  style={{
                    background: "rgba(59,130,246,0.1)",
                    borderRadius: "12px",
                    padding: "1.5rem",
                    border: "1px solid rgba(59,130,246,0.3)",
                  }}
                >
                  <h4
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      marginBottom: "0.5rem",
                    }}
                  >
                    English Study Group
                  </h4>
                  <p
                    style={{
                      color: "#cbd5e1",
                      fontSize: "0.9rem",
                      marginBottom: "1rem",
                    }}
                  >
                    Join discussions about academic writing and grammar
                  </p>
                  <button
                    style={{
                      padding: "0.5rem 1rem",
                      borderRadius: "6px",
                      border: "none",
                      background: "#3b82f6",
                      color: "#fff",
                      fontWeight: 600,
                      cursor: "pointer",
                    }}
                  >
                    Join Group
                  </button>
                </div>

                <div
                  style={{
                    background: "rgba(139,92,246,0.1)",
                    borderRadius: "12px",
                    padding: "1.5rem",
                    border: "1px solid rgba(139,92,246,0.3)",
                  }}
                >
                  <h4
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      marginBottom: "0.5rem",
                    }}
                  >
                    Tech Help Forum
                  </h4>
                  <p
                    style={{
                      color: "#cbd5e1",
                      fontSize: "0.9rem",
                      marginBottom: "1rem",
                    }}
                  >
                    Get help with digital literacy assignments
                  </p>
                  <button
                    style={{
                      padding: "0.5rem 1rem",
                      borderRadius: "6px",
                      border: "none",
                      background: "#8b5cf6",
                      color: "#fff",
                      fontWeight: 600,
                      cursor: "pointer",
                    }}
                  >
                    Visit Forum
                  </button>
                </div>

                <div
                  style={{
                    background: "rgba(16,185,129,0.1)",
                    borderRadius: "12px",
                    padding: "1.5rem",
                    border: "1px solid rgba(16,185,129,0.3)",
                  }}
                >
                  <h4
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      marginBottom: "0.5rem",
                    }}
                  >
                    Math Tutoring
                  </h4>
                  <p
                    style={{
                      color: "#cbd5e1",
                      fontSize: "0.9rem",
                      marginBottom: "1rem",
                    }}
                  >
                    One-on-one help with mathematics concepts
                  </p>
                  <button
                    style={{
                      padding: "0.5rem 1rem",
                      borderRadius: "6px",
                      border: "none",
                      background: "#10b981",
                      color: "#fff",
                      fontWeight: 600,
                      cursor: "pointer",
                    }}
                  >
                    Book Session
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div
              style={{
                background: "rgba(30,41,59,0.85)",
                borderRadius: "16px",
                padding: "2rem",
                border: "1px solid #334155",
                marginTop: "2rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 800,
                  marginBottom: "1.5rem",
                }}
              >
                Quick Links
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "1rem",
                }}
              >
                {[
                  {
                    title: "Library Catalog",
                    desc: "Search books and resources",
                  },
                  {
                    title: "Academic Calendar",
                    desc: "Important dates and deadlines",
                  },
                  { title: "Student Support", desc: "Get help and guidance" },
                  {
                    title: "Career Services",
                    desc: "Job placement assistance",
                  },
                ].map((link, index) => (
                  <button
                    key={index}
                    style={{
                      background: "rgba(59,130,246,0.1)",
                      borderRadius: "8px",
                      padding: "1rem",
                      border: "1px solid rgba(59,130,246,0.3)",
                      color: "#fff",
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "all 0.2s",
                    }}
                  >
                    <div style={{ fontWeight: 600, marginBottom: "0.25rem" }}>
                      {link.title}
                    </div>
                    <div style={{ fontSize: "0.85rem", color: "#cbd5e1" }}>
                      {link.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Footer */}
        <div
          style={{
            marginTop: "3rem",
            padding: "2rem",
            textAlign: "center",
            borderTop: "1px solid #334155",
            color: "#94a3b8",
          }}
        >
          <p style={{ margin: 0, fontSize: "0.9rem" }}>
            Need help? Contact your academic advisor or visit the student
            support center.
          </p>
        </div>
      </div>
    </main>
  );
}
