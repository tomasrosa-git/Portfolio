import { useEffect, useRef } from 'react'

// Cursor custom con ring que "respira" y crece sobre elementos interactivos.
// Se desactiva solo en dispositivos táctiles (vía CSS @media hover).
export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!fine) return

    const dot = dotRef.current
    const ring = ringRef.current
    let ringX = 0,
      ringY = 0,
      mouseX = 0,
      mouseY = 0
    let raf

    const move = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.transform = `translate(${mouseX - 5}px, ${mouseY - 5}px)`
    }

    const loop = () => {
      ringX += (mouseX - ringX) * 0.18
      ringY += (mouseY - ringY) * 0.18
      ring.style.transform = `translate(${ringX - 15}px, ${ringY - 15}px)`
      raf = requestAnimationFrame(loop)
    }

    const over = (e) => {
      if (e.target.closest('a, button, [data-cursor]')) {
        ring.style.width = '48px'
        ring.style.height = '48px'
        ring.style.borderColor = 'var(--red)'
      }
    }
    const out = () => {
      ring.style.width = '30px'
      ring.style.height = '30px'
      ring.style.borderColor = 'var(--ink)'
    }

    window.addEventListener('mousemove', move)
    document.addEventListener('mouseover', over)
    document.addEventListener('mouseout', out)
    raf = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', over)
      document.removeEventListener('mouseout', out)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden />
      <div ref={ringRef} className="cursor-ring" aria-hidden />
    </>
  )
}
