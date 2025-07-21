"use client";
import { useUser } from "@/context/UserContext";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const navLinks = [
  { href: "/", key: "home" },
  { href: "/courses", key: "courses" },
  { href: "/dashboard", key: "dashboard" },
  { href: "/scholarships", key: "scholarships" },
  { href: "/toolkit", key: "toolkit" },
  { href: "/mentorship", key: "mentorship" },
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
  async function handleLogout() {
    await import("@/lib/supabaseClient").then(({ supabase }) => supabase.auth.signOut());
    window.location.href = "/";
  }
  return (
    <header>
      <div className="container header-row">
        <div className="header-left">
          <h1 className="header-title">EdBridge Africa</h1>
          <nav className="header-nav">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} className="header-nav-link">
                {t(link.key)}
              </Link>
            ))}
          </nav>
        </div>
        <div className="header-right">
          <select
            value={lang}
            onChange={e => setLang(e.target.value)}
            className="header-lang-toggle"
            aria-label="Select language"
          >
            {languages.map(l => (
              <option key={l.code} value={l.code}>{l.label}</option>
            ))}
          </select>
          {loading ? null : user && profile ? (
            <div className="header-user-info">
              <span className="header-user-name">{profile.name} ({["Admin","Student","Mentor","Teacher"][profile.user_type-1]})</span>
              <button className="btn btn-outline" onClick={handleLogout}>{t("logout")}</button>
            </div>
          ) : (
            <div className="header-auth-links">
              <Link href="/login" className="btn btn-primary">{t("login")}</Link>
              <Link href="/register" className="btn btn-outline">{t("register")}</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
} 