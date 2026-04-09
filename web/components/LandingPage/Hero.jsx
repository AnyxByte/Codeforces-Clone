"use client";

import { CODE_LINES } from "@/constants";
import { useEffect, useState } from "react";


export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines < CODE_LINES.length) {
      const t = setTimeout(() => setVisibleLines((v) => v + 1), 80);
      return () => clearTimeout(t);
    }
  }, [visibleLines]);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden grid-bg"
      style={{ background: "#f9fafb" }}
    >
      {/* Glow blobs */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "30%",
          left: "45%",
          transform: "translate(-50%, -50%)",
          width: 700,
          height: 700,
          background:
            "radial-gradient(circle, rgba(232,70,42,0.05) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-325 mx-auto px-6 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <h1
              className="font-extrabold leading-none mb-6 animate-fade-up delay-100 text-[#111118]"
              style={{
                fontSize: "clamp(42px, 6vw, 72px)",
                fontFamily: "'Syne', sans-serif",
              }}
            >
              Where the best
              <br />
              <span style={{ color: "#e8462a" }} className="relative">
                coders
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="6"
                  viewBox="0 0 200 6"
                >
                  <path
                    d="M0 5 Q50 0 100 5 Q150 10 200 5"
                    stroke="#e8462a"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.5"
                  />
                </svg>
              </span>{" "}
              compete
            </h1>

            <p
              className="text-lg mb-8 animate-fade-up delay-200"
              style={{ color: "#6b7280", lineHeight: 1.7, maxWidth: 480 }}
            >
              Join 520,000+ competitive programmers. Solve algorithmic
              challenges, compete in rated contests, and climb to the top of the
              global leaderboard.
            </p>

            <div className="flex flex-wrap gap-3 mb-12 animate-fade-up delay-300">
              <button
                className="mono font-semibold text-sm text-white px-8 py-3 clip-corner transition-all duration-200"
                style={{ background: "#e8462a" }}
              >
                Start Solving →
              </button>
              <button
                className="mono font-medium text-sm px-8 py-3 clip-corner transition-all duration-200"
                style={{
                  border: "1px solid #d1d5db",
                  color: "#374151",
                  background: "transparent",
                }}
              >
                View Contests
              </button>
            </div>
          </div>

          {/* Right — Code window */}
          <div className="animate-float hidden lg:block">
            <div
              className="rounded-xl overflow-hidden animate-glow-pulse"
              style={{
                background: "#1e1e2e",
                border: "1px solid #2d2d3f",
                boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
              }}
            >
              {/* Window chrome */}
              <div
                className="flex items-center gap-2 px-4 py-3"
                style={{
                  background: "#181825",
                  borderBottom: "1px solid #2d2d3f",
                }}
              >
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ background: "#e8462a" }}
                />
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ background: "#f5c842" }}
                />
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ background: "#3dd68c" }}
                />
                <span
                  className="mono text-xs ml-3"
                  style={{ color: "#6b7280" }}
                >
                  solution.cpp — Problem 2090G
                </span>
                <span
                  className="ml-auto mono text-xs px-2 py-0.5 rounded"
                  style={{
                    background: "rgba(61,214,140,0.15)",
                    color: "#3dd68c",
                  }}
                >
                  Accepted ✓
                </span>
              </div>

              {/* Code */}
              <div className="p-5 overflow-hidden" style={{ minHeight: 380 }}>
                <pre className="mono text-[13px] leading-relaxed">
                  {CODE_LINES.slice(0, visibleLines).map((line, i) => (
                    <div key={i} className="flex gap-4">
                      <span
                        style={{
                          color: "#3d3d5c",
                          userSelect: "none",
                          minWidth: 20,
                          textAlign: "right",
                        }}
                      >
                        {i + 1}
                      </span>
                      <span style={{ color: line.color || "#cdd6f4" }}>
                        {line.text}
                      </span>
                    </div>
                  ))}
                  {visibleLines < CODE_LINES.length && (
                    <div className="flex gap-4">
                      <span
                        style={{
                          color: "#3d3d5c",
                          minWidth: 20,
                          textAlign: "right",
                        }}
                      >
                        {visibleLines + 1}
                      </span>
                      <span
                        className="animate-blink"
                        style={{ color: "#e8462a" }}
                      >
                        ▋
                      </span>
                    </div>
                  )}
                </pre>
              </div>

              {/* Status bar */}
              <div
                className="flex items-center justify-between px-4 py-2 mono text-xs"
                style={{
                  background: "#13131f",
                  borderTop: "1px solid #2d2d3f",
                  color: "#6b7280",
                }}
              >
                <span>C++17 · 256 MB · 2s</span>
                <span style={{ color: "#3dd68c" }}>
                  Runtime: 187ms · Memory: 18MB
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
