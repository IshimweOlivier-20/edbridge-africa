/* eslint-disable @next/next/no-img-element */
"use client";
import { useUser } from "@/context/UserContext";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { usePathname } from "next/navigation";
import { useState, MouseEvent } from "react";

const navLinks = [
  { href: "/", key: "home" },
  { href: "/courses", key: "courses" },
  { href: "/scholarships", key: "scholarships" },
];

const languages = [
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "rw", label: "Kinyarwanda" },
  { code: "sw", label: "Kiswahili" },
];

export default function Header() {
  const { user, profile, loading } = useUser();
  const { lang, setLang, t } = useLanguage();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  async function handleLogout() {
    await import("@/lib/supabaseClient").then(({ supabase }) =>
      supabase.auth.signOut()
    );
    window.location.href = "/";
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handle mouse events with proper typing
  const handleNavLinkMouseEnter = (
    e: MouseEvent<HTMLAnchorElement>,
    isActive: boolean
  ) => {
    if (!isActive) {
      const target = e.currentTarget;
      target.style.color = "#3b82f6";
      target.style.background = "rgba(59, 130, 246, 0.05)";
      target.style.transform = "translateY(-1px)";
    }
  };

  const handleNavLinkMouseLeave = (
    e: MouseEvent<HTMLAnchorElement>,
    isActive: boolean
  ) => {
    if (!isActive) {
      const target = e.currentTarget;
      target.style.color = "#e2e8f0";
      target.style.background = "transparent";
      target.style.transform = "translateY(0)";
    }
  };

  const handleSelectFocus = (e: React.FocusEvent<HTMLSelectElement>) => {
    e.target.style.borderColor = "rgba(59, 130, 246, 0.5)";
    e.target.style.boxShadow = "0 0 0 3px rgba(59, 130, 246, 0.1)";
  };

  const handleSelectBlur = (e: React.FocusEvent<HTMLSelectElement>) => {
    e.target.style.borderColor = "rgba(148, 163, 184, 0.2)";
    e.target.style.boxShadow = "none";
  };

  const handleButtonMouseEnter = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget;
    target.style.background =
      "linear-gradient(135deg, rgba(239, 68, 68, 0.2) 0%, rgba(220, 38, 38, 0.2) 100%)";
    target.style.borderColor = "rgba(239, 68, 68, 0.5)";
    target.style.transform = "translateY(-1px)";
    target.style.boxShadow = "0 4px 12px rgba(239, 68, 68, 0.2)";
  };

  const handleButtonMouseLeave = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget;
    target.style.background =
      "linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(220, 38, 38, 0.1) 100%)";
    target.style.borderColor = "rgba(239, 68, 68, 0.3)";
    target.style.transform = "translateY(0)";
    target.style.boxShadow = "none";
  };

  const handleLinkMouseEnter = (e: MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget;
    target.style.transform = "translateY(-1px)";
    target.style.boxShadow = "0 4px 16px rgba(59, 130, 246, 0.3)";
  };

  const handleLinkMouseLeave = (e: MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget;
    target.style.transform = "translateY(0)";
    target.style.boxShadow = "0 2px 8px rgba(59, 130, 246, 0.2)";
  };

  const handleRegisterMouseEnter = (e: MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget;
    target.style.borderColor = "rgba(59, 130, 246, 0.5)";
    target.style.background = "rgba(59, 130, 246, 0.1)";
    target.style.transform = "translateY(-1px)";
  };

  const handleRegisterMouseLeave = (e: MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget;
    target.style.borderColor = "rgba(148, 163, 184, 0.3)";
    target.style.background = "rgba(30, 41, 59, 0.8)";
    target.style.transform = "translateY(0)";
  };

  const handleMobileToggleMouseEnter = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget;
    target.style.borderColor = "rgba(59, 130, 246, 0.5)";
    target.style.background = "rgba(59, 130, 246, 0.1)";
  };

  const handleMobileToggleMouseLeave = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget;
    target.style.borderColor = "rgba(148, 163, 184, 0.2)";
    target.style.background = "rgba(30, 41, 59, 0.8)";
  };

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-3px);
          }
        }

        .mobile-nav {
          display: ${isMobileMenuOpen ? "flex" : "none"};
          flex-direction: column;
        }

        .user-info {
          display: none;
        }

        .mobile-toggle {
          display: flex;
        }

        @media (min-width: 640px) {
          .user-info {
            display: flex !important;
            flex-direction: column;
            align-items: flex-end;
          }
        }

        @media (min-width: 768px) {
          .mobile-nav {
            display: flex !important;
            flex-direction: row !important;
            position: static !important;
            background: none !important;
            backdrop-filter: none !important;
            border: none !important;
            border-radius: 0 !important;
            padding: 0 !important;
            gap: 2rem !important;
            box-shadow: none !important;
          }

          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>

      <header
        style={{
          background:
            "linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.95) 50%, rgba(15, 23, 42, 0.95) 100%)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(148, 163, 184, 0.1)",
          position: "sticky",
          top: 0,
          zIndex: 1000,
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1rem 2rem",
            width: "100%", // Make it stretch
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <div
              style={{
                position: "relative",
                padding: "0.5rem",
                borderRadius: "12px",
                background: "linear-gradient(45deg, #3b82f6, #8b5cf6)",
                boxShadow: "0 4px 20px rgba(59, 130, 246, 0.3)",
                animation: "float 3s ease-in-out infinite",
              }}
            >
              <img
                src="/globe.svg"
                alt="EdBridge Logo"
                height={32}
                width={32}
                style={{
                  filter: "brightness(0) invert(1)",
                  transition: "transform 0.3s ease",
                }}
              />
            </div>
            <h1
              style={{
                fontSize: "1.75rem",
                fontWeight: "700",
                background: "linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                letterSpacing: "-0.025em",
                textShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              EdBridge Africa
            </h1>
          </div>

          <nav
            className="mobile-nav"
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              background:
                "linear-gradient(135deg, rgba(15, 23, 42, 0.98) 0%, rgba(30, 41, 59, 0.98) 100%)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(148, 163, 184, 0.1)",
              borderRadius: "0 0 16px 16px",
              padding: "1rem",
              gap: "0.5rem",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
            }}
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    color: isActive ? "#3b82f6" : "#e2e8f0",
                    textDecoration: "none",
                    padding: "0.75rem 1rem",
                    borderRadius: "8px",
                    fontWeight: "500",
                    fontSize: "0.875rem",
                    letterSpacing: "0.025em",
                    position: "relative",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    background: isActive
                      ? "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)"
                      : "transparent",
                    border: isActive
                      ? "1px solid rgba(59, 130, 246, 0.2)"
                      : "1px solid transparent",
                  }}
                  onMouseEnter={(e) => handleNavLinkMouseEnter(e, isActive)}
                  onMouseLeave={(e) => handleNavLinkMouseLeave(e, isActive)}
                  aria-current={isActive ? "page" : undefined}
                >
                  {t(link.key as any)}
                  {isActive && (
                    <div
                      style={{
                        position: "absolute",
                        bottom: "-2px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "60%",
                        height: "2px",
                        background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
                        borderRadius: "1px",
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as any)}
              style={{
                background: "rgba(30, 41, 59, 0.8)",
                border: "1px solid rgba(148, 163, 184, 0.2)",
                borderRadius: "8px",
                color: "#e2e8f0",
                padding: "0.5rem 0.75rem",
                fontSize: "0.875rem",
                cursor: "pointer",
                transition: "all 0.3s ease",
                outline: "none",
              }}
              onFocus={handleSelectFocus}
              onBlur={handleSelectBlur}
              aria-label="Select language"
            >
              {languages.map((l) => (
                <option
                  key={l.code}
                  value={l.code}
                  style={{ background: "#1e293b", color: "#e2e8f0" }}
                >
                  {l.label}
                </option>
              ))}
            </select>

            {loading ? null : user && profile ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <div className="user-info">
                  <span
                    style={{
                      color: "#f1f5f9",
                      fontSize: "0.875rem",
                      fontWeight: "600",
                    }}
                  >
                    {profile.name}
                  </span>
                  <span
                    style={{
                      color: "#94a3b8",
                      fontSize: "0.75rem",
                    }}
                  >
                    {
                      ["Admin", "Student", "Mentor", "Teacher"][
                        profile.user_type - 1
                      ]
                    }
                  </span>
                </div>
                <button
                  onClick={handleLogout}
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(220, 38, 38, 0.1) 100%)",
                    border: "1px solid rgba(239, 68, 68, 0.3)",
                    color: "#fca5a5",
                    padding: "0.5rem 1rem",
                    borderRadius: "8px",
                    fontSize: "0.875rem",
                    fontWeight: "500",
                    cursor: "pointer",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    outline: "none",
                  }}
                  onMouseEnter={handleButtonMouseEnter}
                  onMouseLeave={handleButtonMouseLeave}
                >
                  {t("logout" as any)}
                </button>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  gap: "0.75rem",
                }}
              >
                <Link
                  href="/login"
                  style={{
                    background:
                      "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
                    color: "white",
                    padding: "0.5rem 1rem",
                    borderRadius: "8px",
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    fontWeight: "500",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    boxShadow: "0 2px 8px rgba(59, 130, 246, 0.2)",
                  }}
                  onMouseEnter={handleLinkMouseEnter}
                  onMouseLeave={handleLinkMouseLeave}
                >
                  {t("login" as any)}
                </Link>
                <Link
                  href="/register"
                  style={{
                    background: "rgba(30, 41, 59, 0.8)",
                    border: "1px solid rgba(148, 163, 184, 0.3)",
                    color: "#e2e8f0",
                    padding: "0.5rem 1rem",
                    borderRadius: "8px",
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    fontWeight: "500",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                  onMouseEnter={handleRegisterMouseEnter}
                  onMouseLeave={handleRegisterMouseLeave}
                >
                  {t("register" as any)}
                </Link>
              </div>
            )}

            <button
              onClick={toggleMobileMenu}
              className="mobile-toggle"
              style={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "2.5rem",
                height: "2.5rem",
                background: "rgba(30, 41, 59, 0.8)",
                border: "1px solid rgba(148, 163, 184, 0.2)",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={handleMobileToggleMouseEnter}
              onMouseLeave={handleMobileToggleMouseLeave}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span
                style={{
                  width: "1.25rem",
                  height: "2px",
                  background: "#e2e8f0",
                  borderRadius: "1px",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  transform: isMobileMenuOpen
                    ? "rotate(45deg) translateY(6px)"
                    : "rotate(0) translateY(0)",
                  marginBottom: "3px",
                }}
              />
              <span
                style={{
                  width: "1.25rem",
                  height: "2px",
                  background: "#e2e8f0",
                  borderRadius: "1px",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  opacity: isMobileMenuOpen ? 0 : 1,
                  marginBottom: "3px",
                }}
              />
              <span
                style={{
                  width: "1.25rem",
                  height: "2px",
                  background: "#e2e8f0",
                  borderRadius: "1px",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  transform: isMobileMenuOpen
                    ? "rotate(-45deg) translateY(-6px)"
                    : "rotate(0) translateY(0)",
                }}
              />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
