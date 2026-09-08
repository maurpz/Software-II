import { useLayoutEffect, useRef } from 'react'
import { Mesh, Group } from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'
import gsap from 'gsap'

export const MetallicCube = () => {
    // Referencias al objeto 3D y al grupo para manipularlos
    const meshRef = useRef<Mesh>(null!)
    const groupRef = useRef<Group>(null!)

    // Hook de scroll de drei para obtener el progreso (0 a 1)
    const scroll = useScroll()

    // Referencia a la cámara para animarla
    const { camera } = useThree()

    // Timeline de GSAP que controlaremos manualmente
    const tl = useRef<gsap.core.Timeline | null>(null)

    useLayoutEffect(() => {
        // Inicializamos el timeline pausado porque lo controlaremos en el useFrame
        tl.current = gsap.timeline({
            defaults: { duration: 1, ease: 'power1.inOut' }
        })

        // --- Definición de la secuencia de animación ---
        // El timeline dura hipotéticamente 4 segundos (uno por cada transición entre secciones)
        // Se mapeará el scroll offset (0-1) al tiempo total del timeline

        // ESTADO INICIAL (Sección 1)
        // Cámara en [0, 0, 5], Cubo centrado y rotado ligeramente

        // ESCENA 2: Rotación y Datos Curiosos (Scroll 0 -> 0.25)
        // El cubo rota y se mueve a la izquierda para dejar espacio al texto a la derecha
        tl.current
            .to(meshRef.current.rotation, { x: 0, y: Math.PI / 2, z: 0 }, 0)
            .to(meshRef.current.position, { x: -1.5 }, 0)
            .to(camera.position, { z: 6 }, 0)

            // ESCENA 3: Scroll Horizontal (Scroll 0.25 -> 0.5)
            // Simulamos movimiento lateral moviendo el cubo al otro lado y rotando
            .to(meshRef.current.rotation, { x: Math.PI / 2, y: Math.PI, z: 0 }, 1)
            .to(meshRef.current.position, { x: 1.5 }, 1)

            // ESCENA 4: Zoom y Detalles (Scroll 0.5 -> 0.75)
            // Acercamiento drástico y rotación compleja
            .to(meshRef.current.rotation, { x: 0, y: 0, z: Math.PI / 4 }, 2)
            .to(meshRef.current.position, { x: 0, y: 0 }, 2)
            .to(camera.position, { z: 2.5 }, 2) // Zoom in

            // ESCENA 5: Showcase Final (Scroll 0.75 -> 1.0)
            // Rotación continua rápida o explosión (aquí rotación rápida)
            .to(meshRef.current.rotation, { x: Math.PI * 2, y: Math.PI * 2 }, 3)
            .to(camera.position, { z: 5 }, 3) // Zoom out final

    }, [camera])

    useFrame((_state, delta) => {
        // Sincronizamos el tiempo del timeline con el offset del scroll
        // scroll.offset va de 0 a 1
        // tl.current.duration() es la duración total del timeline
        if (tl.current) {
            // Usamos seek para ir al punto exacto de la animación
            // range(0, 1) crea un rango de 0 a 1/pages (no queremos eso, queremos todo el rango)
            // Simplemente scroll.offset * duración total

            // Ajustamos para que 4 slides ocupen el 100% del scroll
            // Hay 5 secciones, por lo tanto 4 transiciones.
            // El timeline tiene 4 pasos (tiempos 0, 1, 2, 3 hasta 4).
            tl.current.seek(scroll.offset * tl.current.duration())
        }

        // Rotación constante sutil para dar vida
        if (meshRef.current) {
            // Añade una pequeña rotación extra que no depende del scroll
            meshRef.current.rotation.x += delta * 0.05
            meshRef.current.rotation.y += delta * 0.05
        }
    })

    return (
        <group ref={groupRef}>
            <mesh ref={meshRef}>
                <boxGeometry args={[1.5, 1.5, 1.5]} />
                {/* Material metálico con alta rugosidad para efecto mate o baja para espejo */}
                <meshStandardMaterial
                    color="#4a90e2"
                    metalness={1}
                    roughness={0.2}
                />
            </mesh>
        </group>
    )
}
