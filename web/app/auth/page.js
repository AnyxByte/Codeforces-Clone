"use client";
import { useState } from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

export default function LoginPage() {
  const [tab, setTab] = useState("login");
  const [hoveredBtn, setHoveredBtn] = useState(null);

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "#f5f5f7", fontFamily: "'Syne', sans-serif" }}
    >
      {/* Minimal navbar */}
      <nav
        className="w-full px-8 h-[60px] flex items-center justify-between"
        style={{ background: "#fff", borderBottom: "1px solid #e5e7eb" }}
      >
        <Link href="/" style={{ textDecoration: "none" }}>
          <div className="flex items-center gap-2.5">
            <div
              className="w-8 h-8 flex items-center justify-center text-sm font-bold text-white clip-corner-sm"
              style={{ background: "linear-gradient(135deg, #e8462a, #ff6b47)" }}
            >
              CF
            </div>
            <span className="mono text-[17px] font-bold tracking-tight text-[#111118]">
              code<span style={{ color: "#e8462a" }}>forces</span>
            </span>
          </div>
        </Link>
        <span className="mono text-xs" style={{ color: "#9ca3af" }}>
          {tab === "login" ? "Don't have an account? " : "Already have an account? "}
          <button
            onClick={() => setTab(tab === "login" ? "signup" : "login")}
            style={{ color: "#e8462a", background: "none", border: "none", cursor: "pointer", fontFamily: "inherit", fontSize: "inherit", fontWeight: 600 }}
          >
            {tab === "login" ? "Sign up" : "Log in"}
          </button>
        </span>
      </nav>

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md">
          {/* Card */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{ background: "#fff", border: "1px solid #e5e7eb", boxShadow: "0 4px 32px rgba(0,0,0,0.07)" }}
          >
            {/* Tab switcher */}
            <div className="flex" style={{ borderBottom: "1px solid #f3f4f6" }}>
              {["login", "signup"].map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className="flex-1 py-4 mono text-sm font-semibold transition-all duration-200"
                  style={{
                    background: tab === t ? "#fff" : "#f9fafb",
                    color: tab === t ? "#111118" : "#9ca3af",
                    border: "none",
                    cursor: "pointer",
                    borderBottom: tab === t ? "2px solid #e8462a" : "2px solid transparent",
                    fontFamily: "inherit",
                  }}
                >
                  {t === "login" ? "Log In" : "Sign Up"}
                </button>
              ))}
            </div>

            <div className="p-8">
              {/* Heading */}
              <div className="text-center mb-8">
                <h1 className="font-extrabold text-2xl mb-2 text-[#111118]" style={{ fontFamily: "'Syne', sans-serif" }}>
                  {tab === "login" ? "Welcome back" : "Join the arena"}
                </h1>
                <p className="text-sm" style={{ color: "#9ca3af" }}>
                  {tab === "login"
                    ? "Continue your competitive programming journey"
                    : "Start competing with 520,000+ programmers worldwide"}
                </p>
              </div>

              {/* OAuth buttons */}
              <div className="flex flex-col gap-3">
                {/* Google */}
                <button
                  onMouseEnter={() => setHoveredBtn("google")}
                  onMouseLeave={() => setHoveredBtn(null)}
                  className="w-full flex items-center gap-4 px-5 py-3.5 rounded-xl transition-all duration-200 mono text-sm font-medium"
                  style={{
                    background: hoveredBtn === "google" ? "#f9fafb" : "#fff",
                    border: `1px solid ${hoveredBtn === "google" ? "#d1d5db" : "#e5e7eb"}`,
                    color: "#374151",
                    cursor: "pointer",
                    fontFamily: "inherit",
                    boxShadow: hoveredBtn === "google" ? "0 2px 12px rgba(0,0,0,0.09)" : "0 1px 3px rgba(0,0,0,0.04)",
                    transform: hoveredBtn === "google" ? "translateY(-1px)" : "none",
                  }}
                >
                  <FcGoogle size={22} />
                  <span>{tab === "login" ? "Continue" : "Sign up"} with Google</span>
                  <FiChevronRight
                    size={16}
                    className="ml-auto"
                    color={hoveredBtn === "google" ? "#9ca3af" : "#d1d5db"}
                  />
                </button>

                {/* GitHub */}
                <button
                  onMouseEnter={() => setHoveredBtn("github")}
                  onMouseLeave={() => setHoveredBtn(null)}
                  className="w-full flex items-center gap-4 px-5 py-3.5 rounded-xl transition-all duration-200 mono text-sm font-medium"
                  style={{
                    background: hoveredBtn === "github" ? "#1a1a1a" : "#111118",
                    border: "1px solid #111118",
                    color: "#fff",
                    cursor: "pointer",
                    fontFamily: "inherit",
                    boxShadow: hoveredBtn === "github" ? "0 4px 16px rgba(0,0,0,0.22)" : "0 1px 4px rgba(0,0,0,0.12)",
                    transform: hoveredBtn === "github" ? "translateY(-1px)" : "none",
                  }}
                >
                  <FaGithub size={22} color="white" />
                  <span>{tab === "login" ? "Continue" : "Sign up"} with GitHub</span>
                  <FiChevronRight
                    size={16}
                    className="ml-auto"
                    color="rgba(255,255,255,0.35)"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Fine print */}
          <p className="text-center mono text-xs mt-5" style={{ color: "#9ca3af" }}>
            By continuing, you agree to our{" "}
            <a href="#" style={{ color: "#6b7280", textDecoration: "underline" }}>Terms of Service</a>{" "}
            and{" "}
            <a href="#" style={{ color: "#6b7280", textDecoration: "underline" }}>Privacy Policy</a>
          </p>
        </div>
      </div>

      {/* Bottom rainbow accent */}
      <div
        className="h-1 w-full"
        style={{ background: "linear-gradient(90deg, #e8462a, #ff6b47, #d97706, #16a34a, #2563eb)" }}
      />

      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
      `}</style>
    </div>
  );
}