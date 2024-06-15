"use client"
import {useState} from "react";
import {useFrame, useLoader} from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'



export function RenderPortrait(){
    const [currentRotation,setCurrentRotation] = useState(-1.5707);
    const [pushback, setPushBack] = useState(0);
    useFrame((state, delta) => (frameUpdate(delta)));

    function frameUpdate(delta){
        const newRot = currentRotation + delta * 1.5 - pushback;

        if(newRot < -1.5707)
            setCurrentRotation(-1.5707);

        if(newRot < 1.5707)
            setCurrentRotation(newRot);
        else
            setCurrentRotation(1.5707);

        if(pushback > 0){
            setPushBack(pushback - delta * 0.15);
        }
    }

    function push(){
        setPushBack(0.07);
    }

    const model = useLoader(GLTFLoader, '/modles/Taak_portrait.glb');
    return (
        <mesh
            position={[8,0,0]}
            rotation={[0,currentRotation,0]}
            scale={[2,2,2]}
            onPointerOver={push}>



            <primitive object={model.scene}/>
        </mesh>
    )
}

export function RenderCSharp(){
    const [xRot,setXRot] = useState(0);
    const [zRot,setZRot] = useState(0);
    const [time,setTime] = useState(0);
    useFrame((state, delta) => (frameUpdate(delta)));

    function frameUpdate(delta){
        setTime(time + delta);
        setXRot( Math.sin(time) * 0.06);
        setZRot(Math.cos(time * 1.2) * 0.05);
    }
    const model = useLoader(GLTFLoader, '/modles/C_Logo.glb')
    return (
        <mesh
            position={[4,4.5,0.5]}
            rotation={[0,-2 + zRot,0]}
            scale={[0.8,0.8,0.8]}>


            <primitive object={model.scene}/>
        </mesh>
    )
}

export function RenderHTML(){
    const [xRot,setXRot] = useState(12);
    const [zRot,setZRot] = useState(0);
    const [time,setTime] = useState(0);
    useFrame((state, delta) => (frameUpdate(delta)));

    function frameUpdate(delta){
        setTime(time + delta);
        setXRot( Math.sin(time * 0.7) * 0.06);
        setZRot(Math.cos(time * 0.6) * 0.05);
    }
    const model = useLoader(GLTFLoader, '/modles/Html_Logo.glb')
    return (
        <mesh
            position={[-3,3.5,0.5]}
            rotation={[0,-1.57 - xRot,zRot * 0.4]}
            scale={[0.6,0.6,0.6]}>


            <primitive object={model.scene}/>
        </mesh>
    )
}