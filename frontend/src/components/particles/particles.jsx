import { useRef, useMemo } from "react"
import { useFrame, useThree } from "@react-three/fiber"

function randomEdgePosition(viewport) {
    const hw = viewport.width  * 0.5
    const hh = viewport.height * 0.5
    switch (Math.floor(Math.random() * 4)) {
      case 0: return [(Math.random() - 0.5) * viewport.width,  hh, 0] // top
      case 1: return [(Math.random() - 0.5) * viewport.width, -hh, 0] // bottom
      case 2: return [-hw, (Math.random() - 0.5) * viewport.height, 0] // left
      case 3: return [ hw, (Math.random() - 0.5) * viewport.height, 0] // right
    }
  }

  export default function Particles({ count = 1000 }) {
    const points = useRef()
    const { mouse, viewport } = useThree()
  
    const lifetimes = useRef(new Float32Array(count).fill(1))
    const velocities = useRef(new Float32Array(count * 3))
    const positions = useMemo(() => new Float32Array(count * 3), [count])
  
    // Seed positions on first render once viewport is known
    const seeded = useRef(false)
    useFrame(() => {
      if (!points.current) return
      const position = points.current.geometry.attributes.position
      if (!position) return
  
      // First frame: place all particles on edges properly
      if (!seeded.current && viewport.width > 0) {
        const pos = position.array
        for (let i = 0; i < count; i++) {
          const i3 = i * 3
          const [x, y, z] = randomEdgePosition(viewport)
          pos[i3] = x; pos[i3+1] = y; pos[i3+2] = z
          lifetimes.current[i] = Math.random() // stagger so they don't all die at once
          velocities.current[i3]     = (Math.random() - 0.5) * 0.004
          velocities.current[i3 + 1] = (Math.random() - 0.5) * 0.004
          velocities.current[i3 + 2] = 0
        }
        position.needsUpdate = true
        seeded.current = true
        return
      }
  
      const pos = position.array
      const vel = velocities.current
      const life = lifetimes.current
  
      for (let i = 0; i < count; i++) {
        const i3 = i * 3
        life[i] += 0.002
  
        if (life[i] >= 1) {
          life[i] = 0
          const [x, y, z] = randomEdgePosition(viewport)
          pos[i3] = x; pos[i3+1] = y; pos[i3+2] = z
          vel[i3]     = (Math.random() - 0.5) * 0.04
          vel[i3 + 1] = (Math.random() - 0.5) * 0.04
          vel[i3 + 2] = 0
        }
  
        pos[i3]     += vel[i3]
        pos[i3 + 1] += vel[i3 + 1]

        vel[i3]     *= 0.995
        vel[i3 + 1] *= 0.995
  
        const dx = pos[i3]     - mouse.x * viewport.width  * 0.5
        const dy = pos[i3 + 1] - mouse.y * viewport.height * 0.5
        const mdist = Math.sqrt(dx * dx + dy * dy)
        const force = Math.max(0, 1 - mdist / 3)
        pos[i3]     += dx * force * 0.05
        pos[i3 + 1] += dy * force * 0.05
      }
  
      position.needsUpdate = true
    })
  
    return (
      <points ref={points}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" array={positions} count={count} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial color="white" size={0.05} sizeAttenuation />
      </points>
    )
  }