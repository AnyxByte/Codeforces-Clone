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
      className="py-20 grid-bg relative"
      style={{ background: "#f5f5f7" }}
    >
      <div className="max-w-325 mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2
              className="font-bold text-4xl text-[#111118]"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Recent Problems
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <input
              type="text"
              placeholder="Search problems..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="mono text-xs px-4 py-2 rounded-lg outline-none text-[#111118]"
              style={{
                background: "#fff",
                border: "1px solid #e5e7eb",
                width: 200,
                boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#2563eb")}
              onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
            />
          </div>
        </div>

        <div
          className="rounded-xl overflow-hidden"
          style={{
            background: "#fff",
            border: "1px solid #e5e7eb",
            boxShadow: "0 1px 8px rgba(0,0,0,0.05)",
          }}
        >
          {/* Table header */}
          <div
            className="grid grid-cols-12 gap-4 px-5 py-3 mono text-xs font-semibold"
            style={{
              color: "#9ca3af",
              borderBottom: "1px solid #f3f4f6",
              background: "#f9fafb",
            }}
          >
            <div className="col-span-1">#</div>
            <div className="col-span-5">Problem</div>
            <div className="col-span-2">Rating</div>
            <div className="col-span-3">Tags</div>
            <div className="col-span-1 text-right">Solved</div>
          </div>

          {filtered.map((p, i) => (
            <div
              key={p.id}
              className="grid grid-cols-12 gap-4 px-5 py-4 cursor-pointer transition-all duration-150"
              style={{
                borderBottom:
                  i < filtered.length - 1 ? "1px solid #f3f4f6" : "none",
                background: hoveredId === p.id ? "#fafafa" : "#fff",
              }}
            >
              <div
                className="col-span-1 mono text-xs"
                style={{ color: "#d1d5db" }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="col-span-5">
                <div className="flex items-center gap-2">
                  <span
                    className="mono text-xs px-1.5 py-0.5 rounded"
                    style={{
                      background: "#f3f4f6",
                      color: "#6b7280",
                      border: "1px solid #e5e7eb",
                    }}
                  >
                    {p.id}
                  </span>
                  <span className="text-sm font-medium text-[#111118]">
                    {p.name}
                  </span>
                </div>
              </div>
              <div className="col-span-2">
                <span
                  className="mono text-sm font-bold"
                  style={{ color: diffColor(p.rating) }}
                >
                  {p.rating}
                </span>
              </div>
              <div className="col-span-3 flex flex-wrap gap-1">
                {p.tags.slice(0, 2).map((t) => (
                  <span
                    key={t}
                    className="mono text-xs px-2 py-0.5 rounded-sm"
                    style={{
                      background: "#f3f4f6",
                      color: "#6b7280",
                      border: "1px solid #e5e7eb",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div
                className="col-span-1 text-right mono text-xs font-medium"
                style={{ color: "#6b7280" }}
              >
                {p.solvers.toLocaleString()}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <button
            className="mono text-sm px-8 py-3 clip-corner transition-all duration-200 font-medium"
            style={{
              border: "1px solid #d1d5db",
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
