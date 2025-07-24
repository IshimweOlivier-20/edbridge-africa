"use client";

import { useState, useEffect } from "react";
import {
  BookOpen,
  Search,
  Filter,
  Clock,
  Users,
  Star,
  Play,
  CheckCircle,
  Award,
  Calendar,
  Video,
  FileText,
  Download,
  MessageCircle,
  TrendingUp,
  Target,
  Globe,
  Monitor,
  Headphones,
  PenTool,
  Code,
  Palette,
  Calculator,
  Microscope,
  Languages,
  Music,
  Camera,
  Briefcase,
  Heart,
  Zap,
  Eye,
  Edit,
  Plus,
  ArrowRight,
  BarChart3,
  GraduationCap,
  Medal,
  Timer,
  BookmarkPlus,
  Share2,
  ThumbsUp,
  AlertCircle,
  Lock,
  Unlock,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

// Sample data (unchanged from original)
const courses = [
  {
    id: 1,
    title: "Advanced Web Development",
    instructor: "Sarah Chen",
    instructorAvatar: "👩‍💻",
    category: "Technology",
    level: "Advanced",
    duration: "12 weeks",
    lessons: 48,
    students: 1247,
    rating: 4.9,
    reviews: 312,
    price: 299,
    originalPrice: 399,
    thumbnail: "🌐",
    description:
      "Master modern web development with React, Node.js, and cutting-edge technologies. Build real-world applications and deploy them to production.",
    skills: ["React", "Node.js", "MongoDB", "TypeScript", "AWS"],
    prerequisites: ["Basic JavaScript", "HTML/CSS", "Programming fundamentals"],
    certification: true,
    language: "English",
    lastUpdated: "2025-07-20",
    status: "active",
    difficulty: "Advanced",
    completionRate: 87,
    jobPlacement: 94,
    features: [
      "Live coding sessions",
      "1-on-1 mentoring",
      "Career support",
      "Project portfolio",
    ],
  },
  // ... (other courses remain unchanged)
];

const myEnrollments = [
  {
    id: 1,
    courseId: 1,
    title: "Advanced Web Development",
    instructor: "Sarah Chen",
    progress: 65,
    completedLessons: 31,
    totalLessons: 48,
    enrolledDate: "2025-06-15",
    estimatedCompletion: "2025-09-15",
    lastAccessed: "2025-07-22",
    status: "in_progress",
    grade: "A",
    certificateEligible: false,
    timeSpent: "47 hours",
    streak: 12,
    nextLesson: "Advanced React Patterns",
  },
  // ... (other enrollments remain unchanged)
];

const categories = [
  { id: "all", name: "All Courses", icon: BookOpen, count: 847 },
  { id: "technology", name: "Technology", icon: Code, count: 234 },
  { id: "design", name: "Design", icon: Palette, count: 156 },
  { id: "marketing", name: "Marketing", icon: TrendingUp, count: 189 },
  { id: "data_science", name: "Data Science", icon: BarChart3, count: 98 },
  { id: "finance", name: "Finance", icon: Calculator, count: 123 },
  { id: "languages", name: "Languages", icon: Languages, count: 67 },
];

const achievements = [
  {
    id: 1,
    title: "First Course Completed",
    icon: "🎯",
    description: "Complete your first course",
    unlocked: true,
    date: "2025-05-22",
  },
  {
    id: 2,
    title: "Speed Learner",
    icon: "⚡",
    description: "Complete a course in under 4 weeks",
    unlocked: true,
    date: "2025-06-10",
  },
  {
    id: 3,
    title: "Consistent Learner",
    icon: "🔥",
    description: "Maintain a 30-day learning streak",
    unlocked: false,
    progress: 12,
  },
  {
    id: 4,
    title: "Knowledge Seeker",
    icon: "📚",
    description: "Enroll in 5 different courses",
    unlocked: false,
    progress: 3,
  },
];

const recentActivity = [
  {
    id: 1,
    type: "lesson_completed",
    message: "Completed 'Advanced React Patterns' in Web Development",
    date: "2025-07-22",
    course: "Advanced Web Development",
  },
  {
    id: 2,
    type: "achievement",
    message: "Earned 'Speed Learner' achievement",
    date: "2025-07-21",
    course: null,
  },
  {
    id: 3,
    type: "assignment_submitted",
    message: "Submitted final project for Data Science Fundamentals",
    date: "2025-07-20",
    course: "Data Science Fundamentals",
  },
  {
    id: 4,
    type: "discussion",
    message: "Posted in 'React Best Practices' discussion",
    date: "2025-07-19",
    course: "Advanced Web Development",
  },
];

export default function CourseManagementSystem() {
  const [activeTab, setActiveTab] = useState("browse");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showEnrollmentModal, setShowEnrollmentModal] = useState(false);
  const [sortBy, setSortBy] = useState("popular");
  const [isMobile, setIsMobile] = useState(false);
  const [showFilters, setShowFilters] = useState(true);

  const levels = ["all", "Beginner", "Intermediate", "Advanced"];
  const sortOptions = [
    { value: "popular", label: "Most Popular" },
    { value: "rating", label: "Highest Rated" },
    { value: "price_low", label: "Price: Low to High" },
    { value: "price_high", label: "Price: High to Low" },
    { value: "newest", label: "Newest First" },
  ];

  // Handle responsive design
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setShowFilters(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.skills.some((skill) =>
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      );
    const matchesCategory =
      selectedCategory === "all" ||
      course.category.toLowerCase() === selectedCategory;
    const matchesLevel =
      selectedLevel === "all" || course.level === selectedLevel;
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sortBy) {
      case "rating":
        return b.rating - a.rating;
      case "price_low":
        return a.price - b.price;
      case "price_high":
        return b.price - a.price;
      case "newest":
        return new Date(b.lastUpdated) - new Date(a.lastUpdated);
      default:
        return b.students - a.students;
    }
  });

  const getDifficultyColor = (level) => {
    switch (level) {
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

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "#10b981";
      case "in_progress":
        return "#3b82f6";
      case "near_completion":
        return "#f59e0b";
      default:
        return "#6b7280";
    }
  };

  const totalHoursLearned = myEnrollments.reduce((sum, enrollment) => {
    return sum + parseInt(enrollment.timeSpent.split(" ")[0]);
  }, 0);

  const completedCourses = myEnrollments.filter(
    (e) => e.status === "completed"
  ).length;
  const currentStreak = Math.max(...myEnrollments.map((e) => e.streak));

  const handleEnroll = (course) => {
    setSelectedCourse(course);
    setShowEnrollmentModal(true);
  };

  const handleContinueCourse = (enrollment) => {
    // Navigate to course learning page
    console.log(`Continuing course: ${enrollment.title}`);
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
        @keyframes glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.5);
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
        .course-card {
          background: linear-gradient(
            135deg,
            rgba(30, 41, 59, 0.9) 0%,
            rgba(51, 65, 85, 0.8) 100%
          );
          backdrop-filter: blur(10px);
          border: 1px solid rgba(59, 130, 246, 0.2);
        }
        .progress-glow {
          animation: glow 3s ease-in-out infinite;
        }
        .achievement-unlock {
          animation: slideIn 0.6s ease-out;
        }
        .streak-fire {
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
          padding: isMobile ? "1rem" : "2rem 2vw",
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
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? "1rem" : "0",
          }}
        >
          <div>
            <h1
              style={{
                fontSize: isMobile ? "2rem" : "2.8rem",
                fontWeight: 900,
                background:
                  "linear-gradient(90deg, #fff 30%, #3b82f6 70%, #8b5cf6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                letterSpacing: "-0.03em",
                marginBottom: "0.5rem",
              }}
            >
              Course Hub
            </h1>
            <p
              style={{
                color: "#cbd5e1",
                fontSize: isMobile ? "0.9rem" : "1.1rem",
                margin: 0,
              }}
            >
              Discover, learn, and master new skills with world-class courses
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              flexWrap: "wrap",
              justifyContent: isMobile ? "center" : "flex-end",
            }}
          >
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
                  color: "#3b82f6",
                }}
              >
                {totalHoursLearned}h
              </div>
              <div style={{ fontSize: "0.8rem", color: "#94a3b8" }}>
                Learning Time
              </div>
            </div>
            <div
              style={{
                background: "rgba(30,41,59,0.8)",
                padding: "1rem",
                borderRadius: "12px",
                border: "1px solid rgba(16,185,129,0.3)",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 800,
                  color: "#10b981",
                }}
              >
                {completedCourses}
              </div>
              <div style={{ fontSize: "0.8rem", color: "#94a3b8" }}>
                Completed
              </div>
            </div>
            <div
              style={{
                background: "rgba(30,41,59,0.8)",
                padding: "1rem",
                borderRadius: "12px",
                border: "1px solid rgba(234,179,8,0.3)",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 800,
                  color: "#eab308",
                }}
              >
                {currentStreak}d
              </div>
              <div style={{ fontSize: "0.8rem", color: "#94a3b8" }}>Streak</div>
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
            { key: "browse", label: "Browse Courses", icon: Search },
            { key: "my_courses", label: "My Courses", icon: BookOpen },
            { key: "dashboard", label: "Learning Dashboard", icon: TrendingUp },
            { key: "achievements", label: "Achievements", icon: Award },
          ].map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              style={{
                padding: isMobile ? "0.5rem 1rem" : "0.75rem 1.5rem",
                borderRadius: "8px",
                border: "none",
                background: activeTab === key ? "#3b82f6" : "transparent",
                color: "#fff",
                fontWeight: 600,
                fontSize: isMobile ? "0.85rem" : "0.95rem",
                cursor: "pointer",
                boxShadow: activeTab === key ? "0 4px 16px #3b82f655" : "none",
                transition: "all 0.2s",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <Icon size={isMobile ? 16 : 18} />
              {label}
            </button>
          ))}
        </div>

        {/* BROWSE COURSES TAB */}
        {activeTab === "browse" && (
          <div>
            {/* Search and Filter Section */}
            <div
              style={{
                background: "rgba(30,41,59,0.8)",
                borderRadius: "16px",
                padding: isMobile ? "1rem" : "2rem",
                border: "1px solid rgba(59,130,246,0.2)",
                marginBottom: "2rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: isMobile ? "1rem" : "1.5rem",
                }}
              >
                <h2 style={{ fontSize: "1.5rem", fontWeight: 700, margin: 0 }}>
                  Find Your Course
                </h2>
                {isMobile && (
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    style={{
                      padding: "0.5rem",
                      background: "#374151",
                      borderRadius: "8px",
                      border: "none",
                      color: "#fff",
                      cursor: "pointer",
                    }}
                  >
                    <Filter size={20} />
                  </button>
                )}
              </div>
              {showFilters && (
                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    flexWrap: "wrap",
                    alignItems: "center",
                    marginBottom: "1.5rem",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      flex: "1",
                      minWidth: isMobile ? "100%" : "300px",
                    }}
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
                      placeholder="Search courses, instructors, or skills..."
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
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                    style={{
                      padding: "1rem",
                      borderRadius: "8px",
                      border: "1px solid #374151",
                      background: "#1f2937",
                      color: "#fff",
                      fontSize: "1rem",
                      cursor: "pointer",
                      minWidth: isMobile ? "100%" : "150px",
                    }}
                  >
                    {levels.map((level) => (
                      <option key={level} value={level}>
                        {level === "all" ? "All Levels" : level}
                      </option>
                    ))}
                  </select>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    style={{
                      padding: "1rem",
                      borderRadius: "8px",
                      border: "1px solid #374151",
                      background: "#1f2937",
                      color: "#fff",
                      fontSize: "1rem",
                      cursor: "pointer",
                      minWidth: isMobile ? "100%" : "150px",
                    }}
                  >
                    {sortOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Category Pills */}
              <div
                style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}
              >
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    style={{
                      padding: "0.5rem 1rem",
                      borderRadius: "20px",
                      border: "none",
                      background:
                        selectedCategory === category.id
                          ? "#3b82f6"
                          : "#374151",
                      color: "#fff",
                      fontSize: "0.9rem",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      transition: "all 0.2s",
                    }}
                  >
                    <category.icon size={16} />
                    {category.name}
                    <span
                      style={{
                        padding: "0.125rem 0.5rem",
                        borderRadius: "10px",
                        background:
                          selectedCategory === category.id
                            ? "#1d4ed8"
                            : "#4b5563",
                        fontSize: "0.75rem",
                      }}
                    >
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  marginTop: "1rem",
                  color: "#94a3b8",
                  fontSize: "0.9rem",
                  flexWrap: "wrap",
                }}
              >
                <span>Found {sortedCourses.length} courses</span>
                <span>•</span>
                <span>
                  Total value: $
                  {sortedCourses
                    .reduce((sum, c) => sum + c.price, 0)
                    .toLocaleString()}
                </span>
              </div>
            </div>

            {/* Course Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile
                  ? "1fr"
                  : "repeat(auto-fit, minmax(400px, 1fr))",
                gap: "2rem",
              }}
            >
              {sortedCourses.map((course) => (
                <div
                  key={course.id}
                  className="card-hover course-card"
                  style={{
                    borderRadius: "16px",
                    padding: "2rem",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                    position: "relative",
                  }}
                >
                  {/* Discount Badge */}
                  {course.price < course.originalPrice && (
                    <div
                      style={{
                        position: "absolute",
                        top: "1rem",
                        right: "1rem",
                        padding: "0.25rem 0.75rem",
                        background: "#ef4444",
                        color: "#fff",
                        borderRadius: "12px",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                      }}
                    >
                      Save ${course.originalPrice - course.price}
                    </div>
                  )}

                  {/* Course Header */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "1rem",
                      marginBottom: "1rem",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "3rem",
                        width: "80px",
                        height: "80px",
                        background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                        borderRadius: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {course.thumbnail}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                          marginBottom: "0.5rem",
                        }}
                      >
                        <h3
                          style={{
                            fontSize: "1.3rem",
                            fontWeight: 700,
                            margin: 0,
                            color: "#fff",
                          }}
                        >
                          {course.title}
                        </h3>
                        <div
                          style={{
                            padding: "0.25rem 0.75rem",
                            borderRadius: "20px",
                            fontSize: "0.75rem",
                            fontWeight: 600,
                            background: getDifficultyColor(course.level) + "22",
                            color: getDifficultyColor(course.level),
                            border: `1px solid ${getDifficultyColor(
                              course.level
                            )}`,
                          }}
                        >
                          {course.level}
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          marginBottom: "0.5rem",
                        }}
                      >
                        <span style={{ fontSize: "1.5rem" }}>
                          {course.instructorAvatar}
                        </span>
                        <span style={{ color: "#94a3b8", fontSize: "0.9rem" }}>
                          {course.instructor}
                        </span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "1rem",
                          color: "#94a3b8",
                          fontSize: "0.85rem",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.25rem",
                          }}
                        >
                          <Star
                            size={14}
                            style={{ color: "#fbbf24", fill: "#fbbf24" }}
                          />
                          <span>{course.rating}</span>
                          <span>({course.reviews})</span>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.25rem",
                          }}
                        >
                          <Users size={14} />
                          <span>{course.students.toLocaleString()}</span>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.25rem",
                          }}
                        >
                          <Clock size={14} />
                          <span>{course.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Course Description */}
                  <p
                    style={{
                      color: "#cbd5e1",
                      lineHeight: 1.5,
                      marginBottom: "1rem",
                      fontSize: "0.95rem",
                    }}
                  >
                    {course.description}
                  </p>

                  {/* Skills Tags */}
                  <div style={{ marginBottom: "1rem" }}>
                    <div
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: 600,
                        marginBottom: "0.5rem",
                        color: "#e2e8f0",
                      }}
                    >
                      Skills you'll learn:
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "0.5rem",
                      }}
                    >
                      {course.skills.slice(0, 4).map((skill, index) => (
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
                          {skill}
                        </div>
                      ))}
                      {course.skills.length > 4 && (
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
                          +{course.skills.length - 4} more
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Course Features */}
                  <div style={{ marginBottom: "1rem" }}>
                    <div
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: 600,
                        marginBottom: "0.5rem",
                        color: "#e2e8f0",
                      }}
                    >
                      Features:
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "0.5rem",
                      }}
                    >
                      {course.features.map((feature, index) => (
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
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing and Action */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: "1rem",
                    }}
                  >
                    <div>
                      <span
                        style={{
                          fontSize: "1.5rem",
                          fontWeight: 700,
                          color: "#10b981",
                        }}
                      >
                        ${course.price}
                      </span>
                      {course.price < course.originalPrice && (
                        <span
                          style={{
                            fontSize: "0.9rem",
                            color: "#94a3b8",
                            textDecoration: "line-through",
                            marginLeft: "0.5rem",
                          }}
                        >
                          ${course.originalPrice}
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => handleEnroll(course)}
                      style={{
                        padding: "0.75rem 1.5rem",
                        borderRadius: "8px",
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
                      <Plus size={16} />
                      Enroll Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* MY COURSES TAB */}
        {activeTab === "my_courses" && (
          <div>
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: 700,
                marginBottom: "2rem",
              }}
            >
              My Enrolled Courses
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile
                  ? "1fr"
                  : "repeat(auto-fit, minmax(400px, 1fr))",
                gap: "2rem",
              }}
            >
              {myEnrollments.map((enrollment) => (
                <div
                  key={enrollment.id}
                  className="card-hover course-card progress-glow"
                  style={{
                    borderRadius: "16px",
                    padding: "2rem",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "1rem",
                      marginBottom: "1rem",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "3rem",
                        width: "80px",
                        height: "80px",
                        background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                        borderRadius: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {
                        courses.find((c) => c.id === enrollment.courseId)
                          ?.thumbnail
                      }
                    </div>
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                          marginBottom: "0.5rem",
                        }}
                      >
                        <h3
                          style={{
                            fontSize: "1.3rem",
                            fontWeight: 700,
                            margin: 0,
                            color: "#fff",
                          }}
                        >
                          {enrollment.title}
                        </h3>
                        <div
                          style={{
                            padding: "0.25rem 0.75rem",
                            borderRadius: "20px",
                            fontSize: "0.75rem",
                            fontWeight: 600,
                            background:
                              getStatusColor(enrollment.status) + "22",
                            color: getStatusColor(enrollment.status),
                            border: `1px solid ${getStatusColor(
                              enrollment.status
                            )}`,
                          }}
                        >
                          {enrollment.status.replace("_", " ").toUpperCase()}
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          marginBottom: "0.5rem",
                        }}
                      >
                        <span style={{ fontSize: "1.5rem" }}>
                          {
                            courses.find((c) => c.id === enrollment.courseId)
                              ?.instructorAvatar
                          }
                        </span>
                        <span style={{ color: "#94a3b8", fontSize: "0.9rem" }}>
                          {enrollment.instructor}
                        </span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "1rem",
                          color: "#94a3b8",
                          fontSize: "0.85rem",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.25rem",
                          }}
                        >
                          <GraduationCap size={14} />
                          <span>{enrollment.grade}</span>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.25rem",
                          }}
                        >
                          <Clock size={14} />
                          <span>{enrollment.timeSpent}</span>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.25rem",
                          }}
                        >
                          <Zap size={14} className="streak-fire" />
                          <span>{enrollment.streak} days</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div style={{ marginBottom: "1rem" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "0.5rem",
                      }}
                    >
                      <span style={{ fontSize: "0.9rem", color: "#e2e8f0" }}>
                        Progress: {enrollment.progress}%
                      </span>
                      <span style={{ fontSize: "0.9rem", color: "#94a3b8" }}>
                        {enrollment.completedLessons}/{enrollment.totalLessons}{" "}
                        lessons
                      </span>
                    </div>
                    <div
                      style={{
                        height: "8px",
                        background: "#374151",
                        borderRadius: "4px",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          width: `${enrollment.progress}%`,
                          height: "100%",
                          background: "#3b82f6",
                          transition: "width 0.3s ease",
                        }}
                      />
                    </div>
                  </div>

                  {/* Next Lesson */}
                  {enrollment.nextLesson && (
                    <div style={{ marginBottom: "1rem" }}>
                      <div
                        style={{
                          fontSize: "0.9rem",
                          fontWeight: 600,
                          marginBottom: "0.5rem",
                          color: "#e2e8f0",
                        }}
                      >
                        Next Lesson:
                      </div>
                      <div
                        style={{
                          padding: "0.5rem 1rem",
                          borderRadius: "8px",
                          background: "#374151",
                          color: "#d1d5db",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                        }}
                      >
                        <Play size={16} />
                        {enrollment.nextLesson}
                      </div>
                    </div>
                  )}

                  {/* Actions */}
                  <div
                    style={{
                      display: "flex",
                      gap: "1rem",
                      justifyContent: "flex-end",
                    }}
                  >
                    {enrollment.certificateIssued && (
                      <button
                        style={{
                          padding: "0.5rem 1rem",
                          borderRadius: "8px",
                          border: "none",
                          background: "#10b981",
                          color: "#fff",
                          fontWeight: 600,
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                        }}
                      >
                        <Download size={16} />
                        Download Certificate
                      </button>
                    )}
                    <button
                      onClick={() => handleContinueCourse(enrollment)}
                      style={{
                        padding: "0.5rem 1rem",
                        borderRadius: "8px",
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
                      <ArrowRight size={16} />
                      {enrollment.status === "completed"
                        ? "Review Course"
                        : "Continue Learning"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* LEARNING DASHBOARD TAB */}
        {activeTab === "dashboard" && (
          <div>
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: 700,
                marginBottom: "2rem",
              }}
            >
              Learning Dashboard
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "2fr 1fr",
                gap: "2rem",
              }}
            >
              {/* Progress Overview */}
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
                    fontSize: "1.2rem",
                    fontWeight: 600,
                    marginBottom: "1.5rem",
                  }}
                >
                  Your Progress
                </h3>
                {myEnrollments.map((enrollment) => (
                  <div key={enrollment.id} style={{ marginBottom: "1.5rem" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "0.5rem",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "1rem",
                          fontWeight: 600,
                          color: "#fff",
                        }}
                      >
                        {enrollment.title}
                      </span>
                      <span style={{ fontSize: "0.9rem", color: "#94a3b8" }}>
                        {enrollment.progress}%
                      </span>
                    </div>
                    <div
                      style={{
                        height: "8px",
                        background: "#374151",
                        borderRadius: "4px",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          width: `${enrollment.progress}%`,
                          height: "100%",
                          background: getStatusColor(enrollment.status),
                          transition: "width 0.3s ease",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Recent Activity */}
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
                    fontSize: "1.2rem",
                    fontWeight: 600,
                    marginBottom: "1.5rem",
                  }}
                >
                  Recent Activity
                </h3>
                {recentActivity.map((activity) => (
                  <div
                    key={activity.id}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      marginBottom: "1rem",
                      padding: "0.5rem",
                      borderRadius: "8px",
                      background: "#374151",
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "8px",
                        background: "#3b82f622",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {activity.type === "lesson_completed" && (
                        <CheckCircle size={20} />
                      )}
                      {activity.type === "achievement" && <Award size={20} />}
                      {activity.type === "assignment_submitted" && (
                        <FileText size={20} />
                      )}
                      {activity.type === "discussion" && (
                        <MessageCircle size={20} />
                      )}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: "0.9rem", color: "#fff" }}>
                        {activity.message}
                      </div>
                      <div style={{ fontSize: "0.8rem", color: "#94a3b8" }}>
                        {new Date(activity.date).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ACHIEVEMENTS TAB */}
        {activeTab === "achievements" && (
          <div>
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: 700,
                marginBottom: "2rem",
              }}
            >
              Your Achievements
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile
                  ? "1fr"
                  : "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "2rem",
              }}
            >
              {achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className={`card-hover achievement-unlock ${
                    !achievement.unlocked ? "opacity-50" : ""
                  }`}
                  style={{
                    borderRadius: "16px",
                    padding: "1.5rem",
                    background: achievement.unlocked
                      ? "linear-gradient(135deg, rgba(30,41,59,0.9) 0%, rgba(51,65,85,0.8) 100%)"
                      : "#374151",
                    border: `1px solid ${
                      achievement.unlocked ? "rgba(59,130,246,0.2)" : "#4b5563"
                    }`,
                    boxShadow: achievement.unlocked
                      ? "0 4px 20px rgba(0,0,0,0.2)"
                      : "none",
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
                        width: "60px",
                        height: "60px",
                        borderRadius: "12px",
                        background: achievement.unlocked
                          ? "#3b82f6"
                          : "#4b5563",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "2rem",
                      }}
                    >
                      {achievement.icon}
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: "1.1rem",
                          fontWeight: 600,
                          color: "#fff",
                        }}
                      >
                        {achievement.title}
                      </div>
                      <div style={{ fontSize: "0.9rem", color: "#94a3b8" }}>
                        {achievement.description}
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ fontSize: "0.8rem", color: "#94a3b8" }}>
                      {achievement.unlocked
                        ? `Unlocked: ${new Date(
                            achievement.date
                          ).toLocaleDateString()}`
                        : `Progress: ${achievement.progress || 0}/${
                            achievement.title === "Consistent Learner" ? 30 : 5
                          }`}
                    </div>
                    {achievement.unlocked ? (
                      <CheckCircle size={20} style={{ color: "#10b981" }} />
                    ) : (
                      <Lock size={20} style={{ color: "#94a3b8" }} />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Enrollment Modal */}
        {showEnrollmentModal && selectedCourse && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0,0,0,0.7)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1000,
            }}
          >
            <div
              style={{
                background: "rgba(30,41,59,0.95)",
                borderRadius: "16px",
                padding: "2rem",
                width: isMobile ? "90%" : "500px",
                maxHeight: "90vh",
                overflowY: "auto",
                border: "1px solid rgba(59,130,246,0.2)",
              }}
            >
              <h2
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  marginBottom: "1rem",
                }}
              >
                Enroll in {selectedCourse.title}
              </h2>
              <p style={{ color: "#cbd5e1", marginBottom: "1rem" }}>
                {selectedCourse.description}
              </p>
              <div style={{ marginBottom: "1rem" }}>
                <div
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    marginBottom: "0.5rem",
                  }}
                >
                  Price: ${selectedCourse.price}
                </div>
                <div style={{ fontSize: "0.9rem", color: "#94a3b8" }}>
                  Includes {selectedCourse.lessons} lessons,{" "}
                  {selectedCourse.duration} duration
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  justifyContent: "flex-end",
                }}
              >
                <button
                  onClick={() => setShowEnrollmentModal(false)}
                  style={{
                    padding: "0.75rem 1.5rem",
                    borderRadius: "8px",
                    border: "1px solid #4b5563",
                    background: "transparent",
                    color: "#fff",
                    cursor: "pointer",
                  }}
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    console.log(`Enrolling in ${selectedCourse.title}`);
                    setShowEnrollmentModal(false);
                  }}
                  style={{
                    padding: "0.75rem 1.5rem",
                    borderRadius: "8px",
                    border: "none",
                    background: "#3b82f6",
                    color: "#fff",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  Confirm Enrollment
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
