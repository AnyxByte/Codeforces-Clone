"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

function NavLink({ label }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href="#"
      className="mono text-xs tracking-widest transition-colors duration-200 px-3 py-1.5 rounded"
      style={{
        color: hovered ? "#e8462a" : "#6b7280",
        textDecoration: "none",
        fontWeight: 500,
      }}
    >
      {label}
    </Link>
  );
}
export default function Navbar() {
  const NAV_LINKS = ["Contests", "Problemset"];

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(255,255,255,0.97)"
          : "rgba(255,255,255,0.8)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid #e5e7eb",
        boxShadow: scrolled ? "0 1px 12px rgba(0,0,0,0.07)" : "none",
      }}
    >
      <div className="max-w-325 mx-auto px-6 flex items-center h-15 gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2.5 shrink-0">
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

        {/* Links */}
        <div className="hidden md:flex items-center gap-0.5 flex-1">
          {NAV_LINKS.map((l) => (
            <NavLink key={l} label={l} />
          ))}
        </div>

        {/* Right */}
        <div className="flex items-center gap-3 ml-auto">
          <Link href="/auth">
            <button
              className="mono text-xs cursor-pointer rounded-sm px-4 py-2 transition-all duration-200 clip-corner-sm text-white font-semibold"
              style={{ background: "#e8462a" }}
            >
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
