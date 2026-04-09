'use client';
import { useState, useEffect } from 'react';

// ─── DATA ────────────────────────────────────────────────────────────────────

const NAV_LINKS = ['Contests', 'Problemset', 'Gym', 'Groups', 'Rating', 'EDU', 'Blog'];

const TICKER_ITEMS = [
  { type: 'contest', text: 'Codeforces Round 987 (Div. 2) — starts in 2h 14m' },
  { type: 'submit', text: 'tourist submitted AC on 2100-rated problem' },
  { type: 'contest', text: 'Educational Round 172 — registration open' },
  { type: 'submit', text: 'jiangly solved "Subarray Queries" in 00:03:22' },
  { type: 'contest', text: 'Codeforces Round 988 (Div. 1+2) — in 3 days' },
  { type: 'submit', text: 'Um_nik achieved peak rating 3839' },
  { type: 'contest', text: 'ICPC World Finals Practice Round — tomorrow' },
];

const UPCOMING_CONTESTS = [
  { name: 'Codeforces Round 987 (Div. 2)', date: 'Apr 06, 2026', time: '17:35 UTC', duration: '2h 30m', reg: 4821, color: '#2563eb' },
  { name: 'Educational Round 172 (Rated for Div. 2)', date: 'Apr 08, 2026', time: '14:05 UTC', duration: '2h 0m', reg: 3290, color: '#16a34a' },
  { name: 'Codeforces Round 988 (Div. 1)', date: 'Apr 10, 2026', time: '17:35 UTC', duration: '2h 30m', reg: 1847, color: '#e8462a' },
  { name: 'Codeforces Round 988 (Div. 1+2)', date: 'Apr 12, 2026', time: '17:35 UTC', duration: '3h 0m', reg: 7204, color: '#d97706' },
];

const RECENT_PROBLEMS = [
  { id: '2090G', name: 'Permutation Compression', rating: 2800, tags: ['dp', 'greedy'], solvers: 412 },
  { id: '2090F', name: 'Counting Substrings', rating: 2400, tags: ['strings', 'hashing'], solvers: 891 },
  { id: '2090E', name: 'Tree Diameter Queries', rating: 2100, tags: ['trees', 'lca'], solvers: 2103 },
  { id: '2090D', name: 'Modular Inversions', rating: 1800, tags: ['math', 'number theory'], solvers: 4821 },
  { id: '2090C', name: 'Segment Rearrangement', rating: 1500, tags: ['greedy', 'sorting'], solvers: 9340 },
  { id: '2090B', name: 'Array Partitioning', rating: 1200, tags: ['implementation'], solvers: 18204 },
];

const STATS = [
  { label: 'Registered Users', value: '527,841', icon: '👥', color: '#2563eb' },
  { label: 'Problems in Archive', value: '9,412', icon: '📚', color: '#e8462a' },
  { label: 'Total Contests', value: '1,863', icon: '🏆', color: '#d97706' },
  { label: 'Submissions Today', value: '2.1M', icon: '⚡', color: '#16a34a' },
];

const CODE_LINES = [
  { text: '#include <bits/stdc++.h>', color: '#6b7280' },
  { text: 'using namespace std;', color: '#6b7280' },
  { text: '', color: '' },
  { text: 'int main() {', color: '#111118' },
  { text: '  int n; cin >> n;', color: '#111118' },
  { text: '  vector<int> a(n);', color: '#111118' },
  { text: '  for (auto& x : a) cin >> x;', color: '#2563eb' },
  { text: '', color: '' },
  { text: "  // Kadane's algorithm", color: '#16a34a' },
  { text: '  long long ans = LLONG_MIN;', color: '#111118' },
  { text: '  long long cur = 0;', color: '#111118' },
  { text: '  for (int x : a) {', color: '#2563eb' },
  { text: '    cur = max((long long)x, cur+x);', color: '#111118' },
  { text: '    ans = max(ans, cur);', color: '#111118' },
  { text: '  }', color: '#2563eb' },
  { text: '  cout << ans << "\\n";', color: '#d97706' },
  { text: '  return 0;', color: '#e8462a' },
  { text: '}', color: '#111118' },
];

// ─── HELPERS ─────────────────────────────────────────────────────────────────

function diffColor(r) {
  if (r >= 2400) return '#e8462a';
  if (r >= 1900) return '#d97706';
  if (r >= 1600) return '#2563eb';
  return '#16a34a';
}

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function NavLink({ label }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href="#"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="mono text-xs tracking-widest transition-colors duration-200 px-3 py-1.5 rounded"
      style={{ color: hovered ? '#e8462a' : '#6b7280', textDecoration: 'none', fontWeight: 500 }}
    >
      {label}
    </a>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.8)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid #e5e7eb',
        boxShadow: scrolled ? '0 1px 12px rgba(0,0,0,0.07)' : 'none',
      }}
    >
      <div className="max-w-[1300px] mx-auto px-6 flex items-center h-[60px] gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2.5 flex-shrink-0">
          <div
            className="w-8 h-8 flex items-center justify-center text-sm font-bold text-white clip-corner-sm"
            style={{ background: 'linear-gradient(135deg, #e8462a, #ff6b47)' }}
          >
            CF
          </div>
          <span className="mono text-[17px] font-bold tracking-tight text-[#111118]">
            code<span style={{ color: '#e8462a' }}>forces</span>
          </span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-0.5 flex-1">
          {NAV_LINKS.map(l => <NavLink key={l} label={l} />)}
        </div>

        {/* Right */}
        <div className="flex items-center gap-3 ml-auto">
          <div
            className="hidden sm:flex items-center gap-1.5 text-xs mono px-3 py-1.5 rounded"
            style={{ background: '#f3f4f6', border: '1px solid #e5e7eb', color: '#6b7280' }}
          >
            <span style={{ color: '#16a34a', fontSize: 8 }}>●</span>
            1,847 online
          </div>
          <button
            className="mono text-xs font-medium px-4 py-2 transition-all duration-200 clip-corner-sm"
            style={{ border: '1px solid #d1d5db', color: '#374151', background: 'transparent' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#e8462a'; e.currentTarget.style.color = '#e8462a'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#d1d5db'; e.currentTarget.style.color = '#374151'; }}
          >
            Login
          </button>
          <button
            className="mono text-xs font-semibold px-4 py-2 text-white clip-corner-sm transition-all duration-200"
            style={{ background: '#e8462a' }}
            onMouseEnter={e => e.currentTarget.style.background = '#ff5538'}
            onMouseLeave={e => e.currentTarget.style.background = '#e8462a'}
          >
            Register
          </button>
        </div>
      </div>
    </nav>
  );
}

function Ticker() {
  return (
    <div
      className="overflow-hidden py-2 mono text-xs"
      style={{ background: '#fff7f5', borderBottom: '1px solid #fde8e4', borderTop: '1px solid #fde8e4', marginTop: 60 }}
    >
      <div className="flex whitespace-nowrap animate-ticker">
        {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
          <span key={i} className="flex items-center gap-2 px-8" style={{ color: '#6b7280' }}>
            <span style={{ color: item.type === 'contest' ? '#e8462a' : '#16a34a', fontSize: 8 }}>●</span>
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
}

function Hero() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines < CODE_LINES.length) {
      const t = setTimeout(() => setVisibleLines(v => v + 1), 80);
      return () => clearTimeout(t);
    }
  }, [visibleLines]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden grid-bg" style={{ background: '#f9fafb' }}>
      {/* Glow blobs */}
      <div className="absolute pointer-events-none" style={{
        top: '30%', left: '45%', transform: 'translate(-50%, -50%)',
        width: 700, height: 700,
        background: 'radial-gradient(circle, rgba(232,70,42,0.05) 0%, transparent 65%)',
      }} />

      <div className="max-w-[1300px] mx-auto px-6 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <div
              className="inline-flex items-center gap-2 mono text-xs px-3 py-1.5 mb-8 clip-corner-sm animate-fade-up"
              style={{ border: '1px solid rgba(232,70,42,0.3)', color: '#e8462a', background: 'rgba(232,70,42,0.05)' }}
            >
              <span className="animate-blink" style={{ fontSize: 8 }}>●</span>
              Round 987 starting in 2h 14m — Register now
            </div>

            <h1
              className="font-extrabold leading-none mb-6 animate-fade-up delay-100 text-[#111118]"
              style={{ fontSize: 'clamp(42px, 6vw, 72px)', fontFamily: "'Syne', sans-serif" }}
            >
              Where the best<br />
              <span style={{ color: '#e8462a' }} className="relative">
                coders
                <svg className="absolute -bottom-2 left-0 w-full" height="6" viewBox="0 0 200 6">
                  <path d="M0 5 Q50 0 100 5 Q150 10 200 5" stroke="#e8462a" strokeWidth="2" fill="none" opacity="0.5" />
                </svg>
              </span>{' '}compete
            </h1>

            <p className="text-lg mb-8 animate-fade-up delay-200" style={{ color: '#6b7280', lineHeight: 1.7, maxWidth: 480 }}>
              Join 520,000+ competitive programmers. Solve algorithmic challenges, compete in rated contests, and climb to the top of the global leaderboard.
            </p>

            <div className="flex flex-wrap gap-3 mb-12 animate-fade-up delay-300">
              <button
                className="mono font-semibold text-sm text-white px-8 py-3 clip-corner transition-all duration-200"
                style={{ background: '#e8462a' }}
                onMouseEnter={e => e.currentTarget.style.background = '#ff5538'}
                onMouseLeave={e => e.currentTarget.style.background = '#e8462a'}
              >
                Start Solving →
              </button>
              <button
                className="mono font-medium text-sm px-8 py-3 clip-corner transition-all duration-200"
                style={{ border: '1px solid #d1d5db', color: '#374151', background: 'transparent' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#e8462a'; e.currentTarget.style.color = '#e8462a'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#d1d5db'; e.currentTarget.style.color = '#374151'; }}
              >
                View Contests
              </button>
            </div>

            {/* Mini stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 animate-fade-up delay-400">
              {STATS.map(s => (
                <div
                  key={s.label}
                  className="p-3 rounded-lg transition-all duration-200"
                  style={{ background: '#fff', border: '1px solid #e5e7eb', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = s.color + '60'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = '#e5e7eb'}
                >
                  <div className="text-lg mb-0.5">{s.icon}</div>
                  <div className="mono font-bold text-sm" style={{ color: s.color }}>{s.value}</div>
                  <div className="text-xs mt-0.5" style={{ color: '#9ca3af' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Code window */}
          <div className="animate-float hidden lg:block">
            <div
              className="rounded-xl overflow-hidden animate-glow-pulse"
              style={{ background: '#1e1e2e', border: '1px solid #2d2d3f', boxShadow: '0 20px 60px rgba(0,0,0,0.15)' }}
            >
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-4 py-3" style={{ background: '#181825', borderBottom: '1px solid #2d2d3f' }}>
                <span className="w-3 h-3 rounded-full" style={{ background: '#e8462a' }} />
                <span className="w-3 h-3 rounded-full" style={{ background: '#f5c842' }} />
                <span className="w-3 h-3 rounded-full" style={{ background: '#3dd68c' }} />
                <span className="mono text-xs ml-3" style={{ color: '#6b7280' }}>solution.cpp — Problem 2090G</span>
                <span className="ml-auto mono text-xs px-2 py-0.5 rounded" style={{ background: 'rgba(61,214,140,0.15)', color: '#3dd68c' }}>Accepted ✓</span>
              </div>

              {/* Code */}
              <div className="p-5 overflow-hidden" style={{ minHeight: 380 }}>
                <pre className="mono text-[13px] leading-relaxed">
                  {CODE_LINES.slice(0, visibleLines).map((line, i) => (
                    <div key={i} className="flex gap-4">
                      <span style={{ color: '#3d3d5c', userSelect: 'none', minWidth: 20, textAlign: 'right' }}>
                        {i + 1}
                      </span>
                      <span style={{ color: line.color || '#cdd6f4' }}>{line.text}</span>
                    </div>
                  ))}
                  {visibleLines < CODE_LINES.length && (
                    <div className="flex gap-4">
                      <span style={{ color: '#3d3d5c', minWidth: 20, textAlign: 'right' }}>{visibleLines + 1}</span>
                      <span className="animate-blink" style={{ color: '#e8462a' }}>▋</span>
                    </div>
                  )}
                </pre>
              </div>

              {/* Status bar */}
              <div
                className="flex items-center justify-between px-4 py-2 mono text-xs"
                style={{ background: '#13131f', borderTop: '1px solid #2d2d3f', color: '#6b7280' }}
              >
                <span>C++17 · 256 MB · 2s</span>
                <span style={{ color: '#3dd68c' }}>Runtime: 187ms · Memory: 18MB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContestsSection() {
  return (
    <section className="py-20 relative" style={{ background: '#fff' }}>
      <div className="max-w-[1300px] mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="mono text-xs tracking-widest mb-3" style={{ color: '#e8462a' }}>// UPCOMING</div>
            <h2 className="font-bold text-4xl text-[#111118]" style={{ fontFamily: "'Syne', sans-serif" }}>
              Upcoming Contests
            </h2>
          </div>
          <a href="#" className="mono text-sm hidden sm:block transition-colors duration-200" style={{ color: '#9ca3af' }}
            onMouseEnter={e => e.currentTarget.style.color = '#e8462a'}
            onMouseLeave={e => e.currentTarget.style.color = '#9ca3af'}
          >
            View all →
          </a>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {UPCOMING_CONTESTS.map((c, i) => (
            <div
              key={i}
              className="p-5 rounded-xl transition-all duration-200 cursor-pointer group"
              style={{ background: '#f9fafb', border: '1px solid #e5e7eb', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = c.color + '60'; e.currentTarget.style.background = '#fff'; e.currentTarget.style.boxShadow = `0 4px 20px ${c.color}15`; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.background = '#f9fafb'; e.currentTarget.style.boxShadow = '0 1px 4px rgba(0,0,0,0.04)'; }}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  {/* Color accent bar */}
                  <div className="w-8 h-1 rounded-full mb-3" style={{ background: c.color }} />
                  <div className="font-semibold text-sm mb-2 leading-snug text-[#111118]">
                    {c.name}
                  </div>
                  <div className="mono text-xs flex flex-wrap gap-3" style={{ color: '#6b7280' }}>
                    <span>📅 {c.date}</span>
                    <span>🕐 {c.time}</span>
                    <span>⏱ {c.duration}</span>
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="mono text-xs mb-2">
                    <span className="font-bold" style={{ color: c.color }}>{c.reg.toLocaleString()}</span>
                    <span style={{ color: '#9ca3af' }}> reg.</span>
                  </div>
                  <button
                    className="mono text-xs px-4 py-1.5 clip-corner-sm transition-all duration-200 text-white font-semibold"
                    style={{ background: c.color }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '1'}
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

function ProblemsetSection() {
  const [hoveredId, setHoveredId] = useState(null);
  const [search, setSearch] = useState('');

  const filtered = RECENT_PROBLEMS.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="py-20 grid-bg relative" style={{ background: '#f5f5f7' }}>
      <div className="max-w-[1300px] mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="mono text-xs tracking-widest mb-3" style={{ color: '#2563eb' }}>// PROBLEMS</div>
            <h2 className="font-bold text-4xl text-[#111118]" style={{ fontFamily: "'Syne', sans-serif" }}>Recent Problems</h2>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <input
              type="text"
              placeholder="Search problems..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="mono text-xs px-4 py-2 rounded-lg outline-none text-[#111118]"
              style={{ background: '#fff', border: '1px solid #e5e7eb', width: 200, boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}
              onFocus={e => e.target.style.borderColor = '#2563eb'}
              onBlur={e => e.target.style.borderColor = '#e5e7eb'}
            />
          </div>
        </div>

        <div className="rounded-xl overflow-hidden" style={{ background: '#fff', border: '1px solid #e5e7eb', boxShadow: '0 1px 8px rgba(0,0,0,0.05)' }}>
          {/* Table header */}
          <div
            className="grid grid-cols-12 gap-4 px-5 py-3 mono text-xs font-semibold"
            style={{ color: '#9ca3af', borderBottom: '1px solid #f3f4f6', background: '#f9fafb' }}
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
                borderBottom: i < filtered.length - 1 ? '1px solid #f3f4f6' : 'none',
                background: hoveredId === p.id ? '#fafafa' : '#fff',
              }}
              onMouseEnter={() => setHoveredId(p.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="col-span-1 mono text-xs" style={{ color: '#d1d5db' }}>{String(i + 1).padStart(2, '0')}</div>
              <div className="col-span-5">
                <div className="flex items-center gap-2">
                  <span className="mono text-xs px-1.5 py-0.5 rounded" style={{ background: '#f3f4f6', color: '#6b7280', border: '1px solid #e5e7eb' }}>{p.id}</span>
                  <span className="text-sm font-medium text-[#111118]">{p.name}</span>
                </div>
              </div>
              <div className="col-span-2">
                <span className="mono text-sm font-bold" style={{ color: diffColor(p.rating) }}>{p.rating}</span>
              </div>
              <div className="col-span-3 flex flex-wrap gap-1">
                {p.tags.slice(0, 2).map(t => (
                  <span key={t} className="mono text-xs px-2 py-0.5 rounded-sm" style={{ background: '#f3f4f6', color: '#6b7280', border: '1px solid #e5e7eb' }}>
                    {t}
                  </span>
                ))}
              </div>
              <div className="col-span-1 text-right mono text-xs font-medium" style={{ color: '#6b7280' }}>
                {p.solvers.toLocaleString()}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <button
            className="mono text-sm px-8 py-3 clip-corner transition-all duration-200 font-medium"
            style={{ border: '1px solid #d1d5db', color: '#374151', background: '#fff' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#2563eb'; e.currentTarget.style.color = '#2563eb'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#d1d5db'; e.currentTarget.style.color = '#374151'; }}
          >
            Browse All 9,412 Problems
          </button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const cols = [
    { title: 'Platform', links: ['Problemset', 'Contests', 'Gym', 'Rating', 'EDU'] },
    { title: 'Community', links: ['Blog', 'Groups', 'Discord', 'Forum', 'Discuss'] },
    { title: 'Resources', links: ['API', 'Polygon', 'GitHub', 'Status', 'Docs'] },
    { title: 'Company', links: ['About', 'Team', 'Blog', 'Careers', 'Contact'] },
  ];

  return (
    <footer style={{ background: '#fff', borderTop: '1px solid #e5e7eb' }}>
      <div className="max-w-[1300px] mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 flex items-center justify-center text-sm font-bold text-white clip-corner-sm"
                style={{ background: 'linear-gradient(135deg, #e8462a, #ff6b47)' }}>
                CF
              </div>
              <span className="mono text-base font-bold text-[#111118]">
                code<span style={{ color: '#e8462a' }}>forces</span>
              </span>
            </div>
            <p className="text-xs leading-relaxed" style={{ color: '#9ca3af' }}>
              The world's leading competitive programming platform. Trusted by millions of coders globally.
            </p>
          </div>

          {cols.map(col => (
            <div key={col.title}>
              <div className="mono text-xs font-bold tracking-widest mb-4 text-[#374151]">{col.title}</div>
              <ul className="space-y-2">
                {col.links.map(l => (
                  <li key={l}>
                    <a href="#" className="text-xs transition-colors duration-200" style={{ color: '#9ca3af', textDecoration: 'none' }}
                      onMouseEnter={e => e.currentTarget.style.color = '#374151'}
                      onMouseLeave={e => e.currentTarget.style.color = '#9ca3af'}
                    >{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-12 pt-8 mono text-xs"
          style={{ borderTop: '1px solid #f3f4f6', color: '#9ca3af' }}>
          <span>© 2026 Codeforces. All rights reserved.</span>
          <div className="flex items-center gap-2">
            <span className="animate-blink" style={{ color: '#16a34a', fontSize: 8 }}>●</span>
            <span>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function Page() {
  return (
    <main>
      <Navbar />
      <Ticker />
      <Hero />
      <ContestsSection />
      <ProblemsetSection />
      <Footer />
    </main>
  );
}