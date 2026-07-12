// Seal.jsx — Vestateck brand mark
// Traced from the approved logo file. Two exports:
//   <VestateckMark />    icon only — use for favicon, app icon, small nav slots
//   <VestateckLockup />  icon + wordmark — use for header/nav, hero, footer

const INK = "#102C57";
const TEAL = "#1D9E75";

export function VestateckMark({ size = 32, className = "" }) {
  return (
    <svg
      width={size}
      height={(size * 230) / 260}
      viewBox="0 0 260 230"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Vestateck"
      className={className}
    >
      <polygon points="32,43 93,146 123,94 105,63 86,43" fill={INK} />
      <polygon
        points="226,43 171,43 160,51 102,153 103,166 120,190 141,193"
        fill={TEAL}
      />
      <polygon points="169,147 143,193 168,193 179,186 183,173" fill={INK} />
    </svg>
  );
}

export function VestateckLockup({ height = 32, className = "" }) {
  const markWidth = (height * 260) / 230;
  return (
    <div
      className={className}
      style={{ display: "inline-flex", alignItems: "center", gap: height * 0.28 }}
    >
      <VestateckMark size={markWidth} />
      <span
        style={{
          fontFamily: "'Fraunces', serif",
          fontWeight: 600,
          fontSize: height * 0.85,
          lineHeight: 1,
          whiteSpace: "nowrap",
        }}
      >
        <span style={{ color: INK }}>Vesta</span>
        <span style={{ color: TEAL }}>teck</span>
      </span>
    </div>
  );
}

export default VestateckMark;