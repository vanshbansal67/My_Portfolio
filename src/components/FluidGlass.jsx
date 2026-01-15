import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { MeshTransmissionMaterial, useGLTF } from '@react-three/drei';

const Lens = ({ ...props }) => {
    return (
        // We use a standard sphere instead of loading a external .glb file
        <mesh {...props}>
            <sphereGeometry args={[1, 64, 64]} />
            <MeshTransmissionMaterial
                backside
                samples={4}
                thickness={2}
                chromaticAberration={0.025}
                anisotropy={0.1}
                distortion={0.1}
                distortionScale={0.1}
                temporalDistortion={0.1}
                ior={1.15}
                transmission={1}
                color="white"
            />
        </mesh>
    );
};

const FluidGlass = ({ title }) => {
    return (
        <div className="h-[400px] w-full relative bg-[#050505]">
            {/* The 3D Canvas */}
            <div className="absolute inset-0 z-20 pointer-events-none">
                <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    <Suspense fallback={null}>
                        <Lens position={[0, 0, 0]} scale={2} />
                    </Suspense>
                </Canvas>
            </div>

            {/* The Text Layers */}
            <div className="relative h-full w-full flex items-center justify-center">
                <h2 className="absolute text-7xl md:text-8xl font-black uppercase tracking-tighter text-white/10 z-0">
                    {title}
                </h2>
                <h2 className="absolute text-7xl md:text-8xl font-black uppercase tracking-tighter text-white z-10 pointer-events-none">
                    {title}
                </h2>
            </div>
        </div>
    );
};

export default FluidGlass;