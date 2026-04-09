export default function Footer() {
  return (
    <footer style={{ background: "#fff", borderTop: "1px solid #e5e7eb" }}>
      <div className="max-w-325 mx-auto px-6 py-3">
        {/* TOP ROW */}
        <div className="flex items-center justify-between">
          {/* LEFT: LOGO */}
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 flex items-center justify-center text-sm font-bold text-white clip-corner-sm"
              style={{
                background: "linear-gradient(135deg, #e8462a, #ff6b47)",
              }}
            >
              CF
            </div>
            <span className="mono text-base font-bold text-[#111118]">
              code<span style={{ color: "#e8462a" }}>forces</span>
            </span>
          </div>

          {/* RIGHT: STATUS */}
          <div className="flex items-center gap-2 mono text-xs text-[#9ca3af]">
            <span style={{ borderTop: "1px solid #f3f4f6", color: "#9ca3af" }}>
              {" "}
              © 2026 Codeforces. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
