"use client"
import {useRef, useState} from "react";
import { Canvas, useFrame  } from '@react-three/fiber'

export default function CanvasPickles(){
    return (
        <Canvas>
            <RenderPickels/>

            <ambientLight intensity={0.05} />
            <directionalLight color="#fff9db" position={[0, 1, 1]} />
        </Canvas>
    )
}

function RenderPickels(){
    const ref = useRef()
    useFrame((state, delta) => (ref.current.rotation.y += delta * 0.2))

    return (
        <mesh
            ref={ref}
            position={[-1,0,0]}>

            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial/>
        </mesh>
    )
}