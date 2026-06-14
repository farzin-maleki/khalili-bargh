export function CircuitBackdrop({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1200 600"
      preserveAspectRatio="none"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    >
      <defs>
        <linearGradient id="cbg" x1="0" x2="1">
          <stop offset="0%" stopColor="var(--primary)" stopOpacity="0" />
          <stop offset="50%" stopColor="var(--primary)" stopOpacity="0.8" />
          <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path className="circuit-path" d="M0,120 L260,120 L300,160 L520,160 L560,120 L860,120 L900,160 L1200,160" />
      <path className="circuit-path slow" d="M0,300 L180,300 L220,260 L460,260 L500,300 L780,300 L820,340 L1200,340" />
      <path className="circuit-path" d="M0,480 L320,480 L360,440 L640,440 L680,480 L960,480 L1000,520 L1200,520" />
      {[
        [260, 120], [560, 120], [900, 160],
        [220, 260], [500, 300], [820, 340],
        [360, 440], [680, 480], [1000, 520],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={3} fill="var(--primary)" className="filament-pulse" />
      ))}
    </svg>
  );
}