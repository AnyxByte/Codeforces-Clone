import { UPCOMING_CONTESTS } from "@/constants";
import Link from "next/link";

export default function ContestsSection() {
  return (
    <section className="py-14 relative" style={{ background: "#fff" }}>
      <div className="max-w-325 mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2
              className="font-bold text-4xl text-[#111118]"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Upcoming Contests
            </h2>
          </div>
          <Link
            href="#"
            className="mono text-sm hidden sm:block transition-colors duration-200"
            style={{ color: "#9ca3af" }}
          >
            View all →
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {UPCOMING_CONTESTS.map((c, i) => (
            <div
              key={i}
              className="p-5 rounded-xl transition-all duration-200 cursor-pointer group"
              style={{
                background: "#f9fafb",
                border: "1px solid #e5e7eb",
                boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
              }}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  {/* Color accent bar */}
                  <div
                    className="w-8 h-1 rounded-full mb-3"
                    style={{ background: c.color }}
                  />
                  <div className="font-semibold text-sm mb-2 leading-snug text-[#111118]">
                    {c.name}
                  </div>
                  <div
                    className="mono text-xs flex flex-wrap gap-3"
                    style={{ color: "#6b7280" }}
                  >
                    <span>📅 {c.date}</span>
                    <span>🕐 {c.time}</span>
                    <span>⏱ {c.duration}</span>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <div className="mono text-xs mb-2">
                    <span className="font-bold" style={{ color: c.color }}>
                      {c.reg.toLocaleString()}
                    </span>
                    <span style={{ color: "#9ca3af" }}> reg.</span>
                  </div>
                  <button
                    className="mono text-xs px-4 py-1.5 clip-corner-sm transition-all duration-200 text-white font-semibold"
                    style={{ background: c.color }}
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
