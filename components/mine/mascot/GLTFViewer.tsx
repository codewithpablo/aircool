'use client';

import { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

interface GLTFViewerProps {
  url: string;
}

const DancingModel = ({ url, onFocus }: { url: string; onFocus: (focusPoint: THREE.Vector3) => void }) => {
  const { scene } = useGLTF(url);
  const ref = useRef<THREE.Group>(null);

  // Para animaciones
  const floatRef = useRef(0);
  const danceRef = useRef(0);

  useEffect(() => {
    if (ref.current) {
      const box = new THREE.Box3().setFromObject(ref.current);
      const size = new THREE.Vector3();
      box.getSize(size);

      const focusPoint = new THREE.Vector3(
        (box.min.x + box.max.x) / 2,
        box.min.y + size.y * 0.75, // pecho/cabeza
        (box.min.z + box.max.z) / 2
      );
      onFocus(focusPoint);
    }
  }, [ref, onFocus]);

  useFrame((state, delta) => {
    if (ref.current) {
      floatRef.current += delta;
      danceRef.current += delta;

      // Flotación suave arriba/abajo
      ref.current.position.y = 0.1 * Math.sin(floatRef.current * 2);

      // Rotación Y general
      ref.current.rotation.y += delta * 0.2;

      // Movimiento de “brazos” simulando baile
      ref.current.traverse((child: any) => {
        if (child.isMesh) {
          // balanceo simple de brazos y piernas según posición Z
          child.rotation.x = 0.2 * Math.sin(danceRef.current * 3 + child.position.z);
          child.rotation.z = 0.2 * Math.sin(danceRef.current * 4 + child.position.x);
        }
      });
    }
  });

  return <primitive ref={ref} object={scene} scale={1} />;
};

const CameraOrbit = ({
  target = new THREE.Vector3(0, 0, 0),
  radius = 5,
  speed = 0.5,
  height = 0
}) => {
  const { camera, clock } = useThree();

  useFrame(() => {
    const t = clock.getElapsedTime() * speed;
    camera.position.x = target.x + radius * Math.sin(t);
    camera.position.z = target.z + radius * Math.cos(t);
    camera.position.y = target.y + height;
    camera.lookAt(target);
  });

  return null;
};

const GLTFViewer = ({ url }: GLTFViewerProps) => {
  const [focusPoint, setFocusPoint] = useState(new THREE.Vector3(0, 0, 0));

  return (
    <div style={{ width: "100%", height: "500px" }}>
      <Canvas
        shadows
        camera={{ position: [5, 2, 5], fov: 50 }}
        style={{ background: "#f0f0f0" }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight
          position={[5, 10, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <Suspense fallback={null}>
          <DancingModel url={url} onFocus={setFocusPoint} />
        </Suspense>
        <CameraOrbit target={focusPoint} radius={3.5} speed={0.5} height={0} />
        <OrbitControls enablePan={false} enableZoom={false} enableRotate={false} />
      </Canvas>
    </div>
  );
};

export default GLTFViewer;
