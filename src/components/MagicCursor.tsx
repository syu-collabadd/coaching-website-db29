import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  maxLife: number
  size: number
  color: string
  isExplosion: boolean
}

const COLORS = [
  'rgba(212,175,55,',
  'rgba(246,216,96,',
  'rgba(248,230,150,',
  'rgba(255,255,200,',
  'rgba(200,213,192,',
]

export default function MagicCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particles = useRef<Particle[]>([])
  const mouse = useRef({ x: -200, y: -200 })
  const rafRef = useRef<number>(0)
  const lastPos = useRef({ x: -200, y: -200 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const spawnTrail = (x: number, y: number) => {
      const dx = x - lastPos.current.x
      const dy = y - lastPos.current.y
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < 4) return
      lastPos.current = { x, y }

      for (let i = 0; i < 3; i++) {
        const color = COLORS[Math.floor(Math.random() * COLORS.length)]
        particles.current.push({
          x: x + (Math.random() - 0.5) * 8,
          y: y + (Math.random() - 0.5) * 8,
          vx: (Math.random() - 0.5) * 1.2,
          vy: -Math.random() * 1.5 - 0.5,
          life: 1,
          maxLife: 0.6 + Math.random() * 0.5,
          size: 2 + Math.random() * 3,
          color,
          isExplosion: false,
        })
      }
    }

    const spawnExplosion = (x: number, y: number) => {
      for (let i = 0; i < 40; i++) {
        const angle = (Math.PI * 2 * i) / 40 + Math.random() * 0.3
        const speed = 1.5 + Math.random() * 4
        const color = COLORS[Math.floor(Math.random() * COLORS.length)]
        particles.current.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1,
          maxLife: 0.8 + Math.random() * 0.6,
          size: 2 + Math.random() * 4,
          color,
          isExplosion: true,
        })
      }
    }

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      spawnTrail(e.clientX, e.clientY)
    }

    const onClick = (e: MouseEvent) => {
      spawnExplosion(e.clientX, e.clientY)
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('click', onClick)

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw custom cursor dot
      const cx = mouse.current.x
      const cy = mouse.current.y

      ctx.save()
      ctx.beginPath()
      ctx.arc(cx, cy, 6, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(212,175,55,0.9)'
      ctx.shadowBlur = 12
      ctx.shadowColor = 'rgba(212,175,55,0.8)'
      ctx.fill()
      ctx.restore()

      // Outer ring
      ctx.save()
      ctx.beginPath()
      ctx.arc(cx, cy, 14, 0, Math.PI * 2)
      ctx.strokeStyle = 'rgba(212,175,55,0.4)'
      ctx.lineWidth = 1
      ctx.stroke()
      ctx.restore()

      // Update and draw particles
      const dt = 1 / 60
      particles.current = particles.current.filter(p => p.life > 0)

      for (const p of particles.current) {
        p.life -= dt / p.maxLife
        if (p.life <= 0) continue

        p.x += p.vx
        p.y += p.vy
        if (!p.isExplosion) {
          p.vy += 0.04 // gentle gravity for trail
        } else {
          p.vx *= 0.95
          p.vy *= 0.95
        }

        const alpha = Math.max(0, p.life)
        ctx.save()
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size * alpha, 0, Math.PI * 2)
        ctx.fillStyle = p.color + alpha + ')'
        ctx.shadowBlur = 8
        ctx.shadowColor = p.color + '0.8)'
        ctx.fill()
        ctx.restore()
      }

      rafRef.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('click', onClick)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
      style={{ mixBlendMode: 'screen' }}
    />
  )
}
