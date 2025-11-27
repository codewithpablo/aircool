"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useMemo, useRef } from "react";
import { Box3, Vector3, Group } from "three";

interface RobotModelProps {
  modelPath: string;
  scale?: number;
}

function RotatingModel({ scene, scale, offsetY }: { scene: any; scale: number; offsetY: number }) {
  const groupRef = useRef<Group>(null);

  // Si quieres que quede estático, no uses useFrame para rotación
  // useFrame((_, delta) => {
  //   if (groupRef.current) {
  //     groupRef.current.rotation.y += delta * 0.5;
  //   }
  // });

  return (
    <group ref={groupRef} position={[0, offsetY, 0]} scale={scale}>
      <primitive object={scene} />
    </group>
  );
}

export default function RobotModel({ modelPath, scale = 1 }: RobotModelProps) {
  const { scene } = useGLTF(modelPath) as any;

  // Centrar verticalmente y ver piernas
  const { offsetY, maxDim } = useMemo(() => {
    const box = new Box3().setFromObject(scene);
    const size = new Vector3();
    box.getSize(size);
    const center = new Vector3();
    box.getCenter(center);

    const offset = -center.y; // centra el modelo
    const maxDim = Math.max(size.x, size.y, size.z);

    return { offsetY: offset, maxDim };
  }, [scene]);

  // Tupla estricta para TypeScript
  const cameraPos: [number, number, number] = [0, maxDim * 0.5, maxDim * 1.5];

  return (
    <Canvas
      style={{ width: "100%", height: "100%" }}
      camera={{ position: cameraPos, fov: 50 }}
    >
      {/* Luces */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <directionalLight position={[-5, 5, 5]} intensity={0.7} />

      {/* Modelo con rotación */}
      <RotatingModel scene={scene} scale={scale} offsetY={offsetY} />

      {/* Controles */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        rotateSpeed={0.6}
      />
    </Canvas>
  );
}
