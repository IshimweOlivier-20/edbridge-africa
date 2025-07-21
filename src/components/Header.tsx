"use client";
import { useUser } from "@/context/UserContext";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/scholarships", label: "Scholarships" },
  { href: "/toolkit", label: "Toolkit" },
  { href: "/mentorship", label: "Mentorship" },
];

const languages = [
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "rw", label: "Kinyarwanda" },
];

export default function Header() {
  const { user, profile, loading } = useUser();
  const [lang, setLang] = useState("en");
  async function handleLogout() {
    await import("@/lib/supabaseClient").then(({ supabase }) => supabase.auth.signOut());
    window.location.href = "/";
  }
  return (
    <header>
      <div className="container flex" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="flex items-center gap-8">
          <h1>EdBridge Africa</h1>
          <nav className="hidden md:flex gap-4">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} className="text-blue-900 hover:underline font-medium">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <select
            value={lang}
            onChange={e => setLang(e.target.value)}
            className="border rounded px-2 py-1 text-sm"
            aria-label="Select language"
          >
            {languages.map(l => (
              <option key={l.code} value={l.code}>{l.label}</option>
            ))}
          </select>
          {loading ? null : user && profile ? (
            <div className="flex gap-4 items-center">
              <span style={{ color: '#374151', fontWeight: 500 }}>{profile.name} ({["Admin","Student","Mentor","Teacher"][profile.user_type-1]})</span>
              <button onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <div className="flex gap-4">
              <Link href="/login" className="btn">Login</Link>
              <Link href="/register" className="btn" style={{ background: '#fff', color: '#1e40af', border: '1px solid #1e40af' }}>Register</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
} 