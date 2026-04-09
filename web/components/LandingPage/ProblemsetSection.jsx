"use client";

import { RECENT_PROBLEMS } from "@/constants";
import { useState } from "react";

function diffColor(r) {
  if (r >= 2400) return "#e8462a";
  if (r >= 1900) return "#d97706";
  if (r >= 1600) return "#2563eb";
  return "#16a34a";
}

export default function ProblemsetSection() {
  const [hoveredId, setHoveredId] = useState(null);
  const [search, setSearch] = useState("");

  const filtered = RECENT_PROBLEMS.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.id.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <section
      className="py-12 sm:py-16 lg:py-20 grid-bg relative"
      style={{ background: "#f5f5f7" }}
    >
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6">
        
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
          
          <h2
            className="font-bold text-2xl sm:text-3xl lg:text-4xl text-[#111118]"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Recent Problems
          </h2>

          {/* SEARCH (visible on mobile now) */}
          <input
            type="text"
            placeholder="Search problems..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full sm:w-[220px] mono text-xs px-4 py-2 rounded-lg outline-none text-[#111118]"
            style={{
              background: "#fff",
              border: "1px solid #e5e7eb",
              boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
            }}
          />
        </div>

        {/* TABLE WRAPPER (KEY FIX) */}
        <div className="w-full overflow-x-auto">
          <div
            className="min-w-[700px] rounded-xl overflow-hidden"
            style={{
              background: "#fff",
              border: "1px solid #e5e7eb",
              boxShadow: "0 1px 8px rgba(0,0,0,0.05)",
            }}
          >
            {/* HEADER */}
            <div className="grid grid-cols-12 gap-4 px-4 sm:px-5 py-3 mono text-xs font-semibold text-gray-400 bg-gray-50 border-b">
              <div className="col-span-1">#</div>
              <div className="col-span-5">Problem</div>
              <div className="col-span-2">Rating</div>
              <div className="col-span-3">Tags</div>
              <div className="col-span-1 text-right">Solved</div>
            </div>

            {/* ROWS */}
            {filtered.map((p, i) => (
              <div
                key={p.id}
                onMouseEnter={() => setHoveredId(p.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="grid grid-cols-12 gap-4 px-4 sm:px-5 py-3 sm:py-4 cursor-pointer transition"
                style={{
                  borderBottom:
                    i < filtered.length - 1 ? "1px solid #f3f4f6" : "none",
                  background: hoveredId === p.id ? "#fafafa" : "#fff",
                }}
              >
                <div className="col-span-1 mono text-xs text-gray-300">
                  {String(i + 1).padStart(2, "0")}
                </div>

                <div className="col-span-5">
                  <div className="flex items-center gap-2">
                    <span className="mono text-[10px] sm:text-xs px-1.5 py-0.5 rounded bg-gray-100 border text-gray-500">
                      {p.id}
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-[#111118]">
                      {p.name}
                    </span>
                  </div>
                </div>

                <div className="col-span-2">
                  <span
                    className="mono text-xs sm:text-sm font-bold"
                    style={{ color: diffColor(p.rating) }}
                  >
                    {p.rating}
                  </span>
                </div>

                <div className="col-span-3 flex flex-wrap gap-1">
                  {p.tags.slice(0, 2).map((t) => (
                    <span
                      key={t}
                      className="mono text-[10px] sm:text-xs px-2 py-0.5 rounded bg-gray-100 border text-gray-500"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="col-span-1 text-right mono text-xs text-gray-500">
                  {p.solvers.toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BUTTON */}
        <div className="mt-6 flex justify-center">
          <button
            className="w-full sm:w-auto mono text-sm px-6 sm:px-8 py-3 clip-corner font-medium border rounded-sm"
            style={{
              borderColor: "#d1d5db",
              color: "#374151",
              background: "#fff",
            }}
          >
            Browse All
          </button>
        </div>
      </div>
    </section>
  );
}