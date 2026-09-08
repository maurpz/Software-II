import { Scroll } from '@react-three/drei'


export const Overlay = () => {
    return (
        <Scroll html style={{ width: '100%' }}>

            {/* El Scroll de drei maneja el HTML sincronizado */}

            {/* Sección 1: Intro */}
            <section className="section" style={{ justifyContent: 'flex-start' }}>
                <div>
                    <h1>El Cubo <br /><span className="highlight">Metálico</span></h1>
                    <p style={{ marginTop: '2rem' }}>
                        Una exploración interactiva de la geometría y la luz.
                        <br />
                        Hecho con React, Three.js y GSAP.
                    </p>
                </div>
            </section>

            {/* Sección 2: Rotación / Datos */}
            <section className="section" style={{ justifyContent: 'flex-end', textAlign: 'right' }}>
                <div>
                    <h1>Simetría <br /><span className="highlight">Perfecta</span></h1>
                    <p>
                        El cubo es el único poliedro regular con 6 caras cuadradas idénticas.
                        <br />
                        Su grupo de simetría es octaédrico.
                    </p>
                </div>
            </section>

            {/* Sección 3: Scroll Horizontal (Simulado visualmente o real) */}
            {/* Aquí la cámara se moverá lateralmente, el texto acompañará */}
            <section className="section" style={{ justifyContent: 'center', textAlign: 'center' }}>
                <div>
                    <h1>Dualidad</h1>
                    <p>
                        Su dual es el octaedro.
                        <br />
                        Vértices: 8 | Aristas: 12 | Caras: 6
                    </p>
                </div>
            </section>

            {/* Sección 4: Zoom / Detalle */}
            <section className="section" style={{ justifyContent: 'flex-start', alignItems: 'flex-end', paddingBottom: '10rem' }}>
                <div>
                    <h1>Estructura <br /><span className="highlight">Atómica</span></h1>
                    <p>
                        En la naturaleza, la pirita forma cristales cúbicos metálicos perfectos.
                    </p>
                </div>
            </section>

            {/* Sección 5: Showcase */}
            <section className="section" style={{ justifyContent: 'center', alignItems: 'center' }}>
                <div>
                    <h1 style={{ fontSize: '3rem' }}>Potencial <span className="highlight">Ilimitado</span></h1>
                    <p>
                        Combinando WebGL y Shaders, las posibilidades creativas son infinitas.
                    </p>
                </div>
            </section>

        </Scroll>
    )
}
