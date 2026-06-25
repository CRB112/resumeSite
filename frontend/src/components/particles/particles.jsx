import { useRef, useMemo } from "react"
import { useFrame, useThree } from "@react-three/fiber"

function randomEdgePosition(viewport) {
  const hw = viewport.width * 0.5
  const hh = viewport.height * 0.5

  switch (Math.floor(Math.random() * 4)) {
    case 0:
      return [(Math.random() - 0.5) * viewport.width, hh, 0]
    case 1:
      return [(Math.random() - 0.5) * viewport.width, -hh, 0]
    case 2:
      return [-hw, (Math.random() - 0.5) * viewport.height, 0]
    case 3:
      return [hw, (Math.random() - 0.5) * viewport.height, 0]
  }
}

export default function Particles({ count = 1500 }) {
  const points = useRef()
  const { mouse, viewport } = useThree()

  const positions = useMemo(() => new Float32Array(count * 3), [count])
  const colors = useMemo(() => new Float32Array(count * 3), [count])
  const isBlue = useRef(new Uint8Array(count))


  const velocities = useRef(new Float32Array(count * 3))
  const lifetimes = useRef(new Float32Array(count).fill(1))

  const seeded = useRef(false)

  useFrame(() => {
    if (!points.current) return

    const geo = points.current.geometry
    const posAttr = geo.attributes.position
    const colAttr = geo.attributes.color

    const pos = posAttr.array
    const col = colAttr.array
    const vel = velocities.current
    const life = lifetimes.current

    const mx = mouse.x * viewport.width * 0.5
    const my = mouse.y * viewport.height * 0.5
    
    if (!seeded.current && viewport.width > 0) {
      for (let i = 0; i < count; i++) {
        const i3 = i * 3
        const [x, y, z] = randomEdgePosition(viewport)
      
        pos[i3] = x
        pos[i3 + 1] = y
        pos[i3 + 2] = z

        const blue = Math.floor(Math.random() * 5) === 0
        isBlue.current[i] = blue ? 1 : 0
        
        if (blue) {
          col[i3] = 0.1
          col[i3 + 1] = 0.1
          col[i3 + 2] = .6
        } else {
          const gray = 0.05 + Math.random() * .05
          col[i3] = gray
          col[i3 + 1] = gray
          col[i3 + 2] = gray
        }

        vel[i3] = (Math.random() - 0.5) * 0.02
        vel[i3 + 1] = (Math.random() - 0.5) * 0.02
        vel[i3 + 2] = 0

        life[i] = Math.random()
      }

      posAttr.needsUpdate = true
      colAttr.needsUpdate = true
      seeded.current = true
      return
    }
    for (let i = 0; i < count; i++) {
      const i3 = i * 3

      life[i] += 0.002
      if (life[i] >= 1) {
        life[i] = 0

        const [x, y, z] = randomEdgePosition(viewport)

        pos[i3] = x
        pos[i3 + 1] = y
        pos[i3 + 2] = z

        const blue = Math.floor(Math.random() * 5) === 0
        isBlue.current[i] = blue ? 1 : 0
        
        if (blue) {
          col[i3] = 0.1
          col[i3 + 1] = 0.1
          col[i3 + 2] = .6
        } else {
          const gray = 0.05 + Math.random() * 0.05
          col[i3] = gray
          col[i3 + 1] = gray
          col[i3 + 2] = gray
        }

        vel[i3] = (Math.random() - 0.5) * 0.04
        vel[i3 + 1] = (Math.random() - 0.5) * 0.04
        vel[i3 + 2] = 0
      }
      const dx = pos[i3] - mx
      const dy = pos[i3 + 1] - my

      const dist = Math.sqrt(dx * dx + dy * dy)

      const radius = 3
      let force = 1 - dist / radius * 2
      force = Math.max(0, force)
      force *= force

      vel[i3] += dx * force * 0.01
      vel[i3 + 1] += dy * force * 0.01

      pos[i3] += vel[i3]
      pos[i3 + 1] += vel[i3 + 1]

      vel[i3] *= 0.995
      vel[i3 + 1] *= 0.995

      const baseR = col[i3]
      const baseG = col[i3 + 1]
      const baseB = col[i3 + 2]
      
      const boost = force * 0.6
      
      col[i3]     = baseR + boost
      col[i3 + 1] = baseG + boost
      col[i3 + 2] = baseB + boost
  
      col[i3]     = Math.min(1, col[i3])
      col[i3 + 1] = Math.min(1, col[i3 + 1])
      col[i3 + 2] = Math.min(1, col[i3 + 2])
    }

    posAttr.needsUpdate = true
    colAttr.needsUpdate = true
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={count}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          array={colors}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        vertexColors
        size={0.05}
        sizeAttenuation
        transparent
      />
    </points>
  )
}