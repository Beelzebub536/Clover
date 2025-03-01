import React, { useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Model = ({ modelPath }: { modelPath: string }) => {
  const group = useRef<THREE.Group>();
  const { scene } = useGLTF(modelPath);

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.005;
    }
  });

  return <primitive ref={group} object={scene} scale={[1, 1, 1]} />;
};

interface ThreeDModelProps {
  modelPath: string;
  backgroundColor?: string;
}

const ThreeDModel: React.FC<ThreeDModelProps> = ({ 
  modelPath,
  backgroundColor = '#1e3a8a'
}) => {
  return (
    <div className="w-full h-[400px] rounded-xl overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ background: backgroundColor }}
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Model modelPath={modelPath} />
        <OrbitControls enableZoom={true} enablePan={true} />
      </Canvas>
    </div>
  );
};

export default ThreeDModel;