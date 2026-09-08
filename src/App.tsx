import { Canvas } from '@react-three/fiber'
import { Experience } from './components/Experience'
import './index.css'

function App() {
  return (
    <>
      <Canvas
        shadows
        camera={{ position: [0, 0, 5], fov: 30 }}
        dpr={[1, 2]} // Optimización para pantallas retina
      >
        <color attach="background" args={['#050505']} />
        <Experience />
      </Canvas>
      {/* Aquí irá el Overlay HTML para el scroll */}
    </>
  )
}

export default App
