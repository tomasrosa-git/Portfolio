// Patito con cono de tránsito — placeholder simpático para "Próximamente".
// (Reemplazá por tu ilustración real cuando la tengas.)
export function Duck({ className = '' }) {
  return (
    <svg viewBox="0 0 120 140" className={className} aria-hidden>
      <g
        fill="none"
        stroke="#2a2420"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* cuerpo */}
        <path
          d="M30 96 C 18 96 14 78 22 66 C 14 56 20 40 36 40 C 44 24 78 24 88 42 C 104 46 106 70 94 80 C 102 92 96 108 80 108 L 40 108 C 34 108 30 104 30 96 Z"
          fill="#fdfdfb"
        />
        {/* ala */}
        <path d="M78 70 C 86 74 88 86 80 92" />
        {/* ojos */}
        <circle cx="52" cy="58" r="2.6" fill="#2a2420" stroke="none" />
        <circle cx="64" cy="58" r="2.6" fill="#2a2420" stroke="none" />
        {/* pico */}
        <path d="M44 66 c 0 7 14 7 14 0 c 0 -5 -14 -5 -14 0 Z" fill="#f3b53f" />
        <path d="M50 70 c 0 6 12 6 12 0 c 0 -4 -12 -4 -12 0 Z" fill="#f3b53f" />
        {/* patas */}
        <path d="M46 108 l -4 10 l 10 -3" fill="#f3b53f" />
        <path d="M70 108 l 4 10 l -10 -3" fill="#f3b53f" />
        {/* cono de tránsito */}
        <path d="M40 40 l 20 -34 l 20 34 Z" fill="#e2674a" />
        <path d="M52 22 l 16 0 M48 31 l 24 0" stroke="#fdfdfb" strokeWidth="5" />
        <path d="M30 40 l 30 8 l 30 -8 l -30 -8 Z" fill="#e2674a" />
      </g>
    </svg>
  )
}

// Clip de papel.
export function Paperclip({ className = '' }) {
  return (
    <svg viewBox="0 0 24 60" className={className} aria-hidden>
      <path
        d="M8 12 v30 a6 6 0 0 0 12 0 V10 a9 9 0 0 0 -18 0 v34"
        fill="none"
        stroke="#8a8f98"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  )
}

// Chincheta / pushpin para clavar etiquetas en el tablero.
export function Pushpin({ className = '', color = 'var(--red)' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <circle cx="12" cy="9" r="7" fill={color} />
      <circle cx="9.5" cy="6.5" r="2.3" fill="rgba(255,255,255,0.55)" />
      <path d="M12 16 v6" stroke="#5b5046" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

// Estrellita garabateada.
export function Star({ className = '', color = 'var(--orange)' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 3 l2.4 6 H21 l-5.2 3.8 2 6.2 L12 15.4 6.2 19 8.2 12.8 3 9 h6.6 z" />
    </svg>
  )
}

// Código de barras dibujado (decorativo, para el carnet).
export function Barcode({ className = '' }) {
  const bars = [2, 1, 3, 1, 1, 2, 1, 4, 1, 2, 1, 1, 3, 1, 2, 1, 4, 1, 1, 2, 1, 3, 1]
  let x = 0
  return (
    <svg viewBox="0 0 120 30" className={className} aria-hidden preserveAspectRatio="none">
      {bars.map((w, i) => {
        const rect = i % 2 === 0 ? <rect key={i} x={x} y="0" width={w} height="30" fill="var(--ink)" /> : null
        x += w + 1.5
        return rect
      })}
    </svg>
  )
}
