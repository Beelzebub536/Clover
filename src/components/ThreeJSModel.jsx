import React, { useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

// Simple 3D model component
const SimpleModel = () => {
  const mesh = useRef();
  
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="teal" />
    </mesh>
  );
};

// Complex model that would use a GLTF file
const ComplexModel = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} scale={[1, 1, 1]} />;
};

const ThreeJSModel = ({ modelType = 'simple', modelPath = '' }) => {
  return (
    <div className="h-[400px] w-full rounded-lg overflow-hidden shadow-lg">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        
        {modelType === 'simple' ? (
          <SimpleModel />
        ) : (
          <ComplexModel modelPath={modelPath} />
        )}
        
        <OrbitControls enableZoom={true} enablePan={true} />
      </Canvas>
    </div>
  );
};

export default ThreeJSModel;