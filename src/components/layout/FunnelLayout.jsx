
export function FunnelLayout({ children }) {
  return (
    <div className="min-h-screen bg-night flex flex-col">
      {/* Minimal top bar — logo only, no nav links */}
      <header className="px-5 py-4 flex items-center justify-between border-b border-cadet/8">
        <a
          href="/"
          className="font-monument text-frosted text-sm tracking-wide hover:text-cadet transition-colors"
          aria-label="iTrust121 home"
        >
          iTrust<span className="text-cadet">121</span>
        </a>
        {/* Exit link — subtle, always available */}
        <a
          href="/"
          className="font-sans text-xs text-cadet/35 hover:text-cadet/60 transition-colors"
        >
          Exit
        </a>
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col">
        {children}
      </main>
    </div>
  );
}