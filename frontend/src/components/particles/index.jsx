import { Canvas } from "@react-three/fiber"
import Particles from "./particles"

export default function ParticleBackground() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5] }}
      style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", backgroundColor: "black" }}
    >
      <Particles />
    </Canvas>
  )
}