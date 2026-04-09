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
      className="relative min-h-screen flex items-center overflow-hidden grid-bg mt-10"
      style={{ background: "#f9fafb" }}
    >
      {/* Glow blob */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 500,
          height: 500,
          background:
            "radial-gradient(circle, rgba(232,70,42,0.05) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 w-full py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* LEFT */}
          <div>
            <h1
              className="font-extrabold leading-tight mb-4 sm:mb-6 text-[#111118]"
              style={{
                fontSize: "clamp(32px, 8vw, 72px)",
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
              className="text-base sm:text-lg mb-6 sm:mb-8"
              style={{
                color: "#6b7280",
                lineHeight: 1.7,
                maxWidth: 500,
              }}
            >
              Join 520,000+ competitive programmers. Solve algorithmic
              challenges, compete in rated contests, and climb to the top of the
              global leaderboard.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10 sm:mb-12">
              <button
                className="w-full sm:w-auto mono font-semibold text-sm text-white px-6 sm:px-8 py-3 clip-corner"
                style={{ background: "#e8462a" }}
              >
                Start Solving →
              </button>

              <button
                className="w-full sm:w-auto mono font-medium text-sm px-6 sm:px-8 py-3 clip-corner"
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

          {/* RIGHT — Code Window */}
          <div className="mt-8 lg:mt-0 flex justify-center">
            <div
              className="rounded-xl overflow-hidden scale-[0.92] sm:scale-100 w-full max-w-[500px]"
              style={{
                background: "#1e1e2e",
                border: "1px solid #2d2d3f",
                boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
              }}
            >
              {/* Header */}
              <div
                className="flex items-center gap-2 px-4 py-3"
                style={{
                  background: "#181825",
                  borderBottom: "1px solid #2d2d3f",
                }}
              >
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />

                <span
                  className="mono text-xs ml-3 hidden sm:block"
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
                  ✓
                </span>
              </div>

              {/* Code */}
              <div className="p-4 sm:p-5 overflow-hidden" style={{ minHeight: 260 }}>
                <pre className="mono text-[12px] sm:text-[13px] leading-relaxed">
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
                        className="animate-pulse"
                        style={{ color: "#e8462a" }}
                      >
                        ▋
                      </span>
                    </div>
                  )}
                </pre>
              </div>

              {/* Footer */}
              <div
                className="flex items-center justify-between px-4 py-2 mono text-xs"
                style={{
                  background: "#13131f",
                  borderTop: "1px solid #2d2d3f",
                  color: "#6b7280",
                }}
              >
                <span>C++17 · 256 MB · 2s</span>
                <span className="hidden sm:block" style={{ color: "#3dd68c" }}>
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