"use client"
import {useRef, useState} from "react";
import { Canvas, useFrame  } from '@react-three/fiber'

export default function CanvasPickles(){
    return (
        <div className="mx-auto w-3/4 h-80">
            <Canvas>
                <RenderPickels/>

                <ambientLight intensity={0.05} />
                <directionalLight color="#fff9db" position={[0, 1, 1]} />
            </Canvas>
        </div>
    )
}

function RenderPickels(){
    const [currentRotaion,setCurrentRotation] = useState(0);
    useFrame((state, delta) => (setCurrentRotation(currentRotaion + delta * 0.2)));

    return (
        <mesh
            position={[0,0,0]}
            rotation={[0,currentRotaion,0]}>

            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial/>
        </mesh>
    )
}