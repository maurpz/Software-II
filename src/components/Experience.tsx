import { ScrollControls, Environment } from '@react-three/drei'
import { MetallicCube } from './MetallicCube'
import { Overlay } from './Overlay'

export const Experience = () => {
    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            {/* Environment map para reflejos metálicos realistas */}
            <Environment preset="city" />

            {/* Control de Scroll: 5 páginas para las 5 secciones */}
            <ScrollControls pages={5} damping={0.2}>
                <MetallicCube />
                <Overlay />
            </ScrollControls>
        </>
    )
}
