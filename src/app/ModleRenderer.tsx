"use client"
import {useRef, useState} from "react";
import { Canvas, useFrame, useLoader} from '@react-three/fiber'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useTexture } from "@react-three/drei"



export function RenderPortrait(){
    const [currentRotation,setCurrentRotation] = useState(-1.5707);
    useFrame((state, delta) => (frameUpdate(delta)));

    function frameUpdate(delta){
        if(currentRotation < 1.5707)
            setCurrentRotation(currentRotation + delta * 1.5);
    }

    const model = useLoader(GLTFLoader, '/modles/Taak_portrait.glb');
    //const texture = useTexture('/Textures/Portrait_texture.png');
    console.log("model + " + model[0]);
    return (
        <mesh
            position={[4,0,0]}
            rotation={[0,currentRotation,0]}
            scale={[2,2,2]}>


            <primitive object={model.scene}/>
            <meshStandardMaterial />
        </mesh>
    )
}

export function RenderCSharp(){
    const colorMap = useTexture('C_Texture.jpg')
    const model = useLoader(FBXLoader, '/modles/C_Logo.fbx')
        console.log("texture " +  colorMap.length);
    return (
        <mesh
            position={[0,8,0.5]}
            rotation={[0,-1.57,0]}
            scale={[0.015,0.015,0.015]}>


            <primitive object={model} args={[1, 1, 1]} />
            <meshStandardMaterial map={colorMap}/>
        </mesh>
    )
}

export function RenderHTML(){
    const model = useLoader(FBXLoader, '/modles/Html_Logo.fbx')
    const colorMap = useTexture('/textures/Html_Texture.png')
    console.log("texture " +  colorMap.length);
    return (
        <mesh
            position={[2,8,0.5]}
            rotation={[0,-1.57,0]}
            scale={[0.015,0.015,0.015]}>


            <primitive object={model} args={[1, 1, 1]} />
            <meshStandardMaterial map={colorMap}/>
        </mesh>
    )
}