import type { CSSProperties } from "react";

type Props = {
  src: string;
  className?: string;
  /** 0..1 — how visible the photo is through the overlay */
  intensity?: number;
  position?: string;
};

/**
 * Atmospheric photo backdrop with a heavy dark gradient so it stays
 * legible against the "Filament Glow" dark theme.
 */
export function PhotoBackdrop({ src, className = "", intensity = 0.35, position = "center" }: Props) {
  const style: CSSProperties = {
    backgroundImage: `url(${src})`,
    backgroundSize: "cover",
    backgroundPosition: position,
    opacity: intensity,
  };
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute inset-0" style={style} />
      {/* warm amber tint to match filament palette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 70% 30%, color-mix(in oklab, var(--primary) 18%, transparent), transparent 60%)",
        }}
      />
      {/* dark vignette so text stays readable */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, var(--background) 0%, color-mix(in oklab, var(--background) 75%, transparent) 35%, color-mix(in oklab, var(--background) 70%, transparent) 65%, var(--background) 100%)",
        }}
      />
    </div>
  );
}