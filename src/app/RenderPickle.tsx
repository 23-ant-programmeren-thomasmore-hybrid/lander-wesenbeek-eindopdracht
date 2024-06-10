"use client"
import {useRef, useState} from "react";
import { Canvas, useFrame, useLoader} from '@react-three/fiber'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'


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
export function RenderPortrait(){
    const [currentRotaion,setCurrentRotation] = useState(-1.5707);
    useFrame((state, delta) => (frameUpdate(delta)));

    function frameUpdate(delta){
        if(currentRotaion < 1.5707)
            setCurrentRotation(currentRotaion + delta * 1.5);
    }

    const modle = useLoader(FBXLoader, '/modles/Taak_portrait.fbx')
    return (
        <mesh
            position={[4,0,0]}
            rotation={[0,currentRotaion,0]}
            scale={[0.015,0.015,0.015]}>


            <primitive object={modle} args={[1, 1, 1]} />
            <meshStandardMaterial/>
        </mesh>
    )
}