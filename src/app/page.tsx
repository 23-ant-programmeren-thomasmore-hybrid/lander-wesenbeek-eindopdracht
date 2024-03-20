import { Canvas, useFrame } from '@react-three/fiber'

export default function Home() {
  return (
    <main>
      <Canvas>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <Box position={[-1.2, 0, 0]} />
      </Canvas>
    </main>
  );
}

export function Box(props){
  return (
      <mesh
          {...props}
        >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={'orange'} />
      </mesh>
  )
}
