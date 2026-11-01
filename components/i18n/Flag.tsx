// Okrugle zastavice za switcher jezika. Inline SVG: oštre na svakoj veličini
// i rade svugdje (emoji zastave se ne prikazuju na Windowsu).

function star(cx: number, cy: number, r: number) {
  const pts: string[] = [];
  for (let i = 0; i < 10; i++) {
    const rad = i % 2 === 0 ? r : r * 0.42;
    const a = -Math.PI / 2 + (i * Math.PI) / 5;
    pts.push(`${(cx + rad * Math.cos(a)).toFixed(2)},${(cy + rad * Math.sin(a)).toFixed(2)}`);
  }
  return pts.join(" ");
}

const BA_STARS = [0, 1, 2, 3, 4, 5, 6].map((i) => star(1.5 + i * 3.6, -1 + i * 5.2, 1.7));

function Bosnia() {
  return (
    <>
      <rect width="32" height="32" fill="#002395" />
      <polygon points="6,0 30,0 30,34" fill="#FECB00" />
      {BA_STARS.map((p) => (
        <polygon key={p} points={p} fill="#fff" />
      ))}
    </>
  );
}

function Slovenia() {
  return (
    <>
      <rect width="32" height="32" fill="#fff" />
      <rect y="10.67" width="32" height="10.66" fill="#0000CE" />
      <rect y="21.33" width="32" height="10.67" fill="#ED1C24" />
      {/* Pojednostavljeni grb */}
      <path
        d="M6.5 6.5h7v6.2c0 2.6-1.6 4.3-3.5 5.1-1.9-.8-3.5-2.5-3.5-5.1z"
        fill="#0000CE"
        stroke="#ED1C24"
        strokeWidth="0.9"
      />
      <path d="M7.3 13.4l1.4-2 1.3 1.6 1.3-1.6 1.4 2z" fill="#fff" />
    </>
  );
}

function Germany() {
  return (
    <>
      <rect width="32" height="10.67" fill="#000" />
      <rect y="10.67" width="32" height="10.66" fill="#DD0000" />
      <rect y="21.33" width="32" height="10.67" fill="#FFCE00" />
    </>
  );
}

const FLAGS = { ba: Bosnia, si: Slovenia, de: Germany };

export default function Flag({
  code,
  size = 20,
  className = "",
}: {
  code: keyof typeof FLAGS;
  size?: number;
  className?: string;
}) {
  const Inner = FLAGS[code];
  return (
    <svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      aria-hidden="true"
      className={`rounded-full flex-shrink-0 ring-1 ring-black/10 ${className}`}
    >
      <clipPath id={`flag-clip-${code}`}>
        <circle cx="16" cy="16" r="16" />
      </clipPath>
      <g clipPath={`url(#flag-clip-${code})`}>
        <Inner />
      </g>
    </svg>
  );
}
