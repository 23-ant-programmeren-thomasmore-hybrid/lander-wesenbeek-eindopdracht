"use client"
import {useEffect, useState} from "react";
import {useFrame, useLoader} from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import {mod} from "three/examples/jsm/nodes/math/MathNode";



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


    const model = useLoader(GLTFLoader, '/modles/C_Logo.glb')
    return (
        <RenderHangingLogo model={model} position={[4,4.5,0.5]} scale={[0.8,0.8,0.8]}/>
    )
}

export function RenderHTML(){
    const model = useLoader(GLTFLoader, '/modles/Html_Logo.glb')
    return (
        <RenderHangingLogo model={model} position={[-3,3.5,0.5]} scale={[0.6,0.6,0.6]}/>
    )
}

function RenderHangingLogo(props){
    const {model, position, scale} = props;
    const [extraRot,setExtraRot] = useState(0);
    const [extraRotForce, setExtraRotForce] = useState(0);
    const [rotForce, setRotForce] = useState(0);
    const [Rot,setRot] = useState(0);
    const [time,setTime] = useState(0);
    const [mousePos, setMousePos] = useState([0,0])
    const [previousMousePos,setPreviousMousePos] = useState([0,0]);
    useFrame((state, delta) => (frameUpdate(delta)));
    useEffect(() => {
        const handleWindowMouseMove = event => {
            setMousePos([
                event.clientX,
                event.clientY,
            ]);
        };
        window.addEventListener('mousemove', handleWindowMouseMove);

        return () => {
            window.removeEventListener(
                'mousemove',
                handleWindowMouseMove,
            );
        };
    }, []);
    function frameUpdate(delta){
        setTime(time + delta);
        setPreviousMousePos(mousePos);

        let newForce = 0

        if(rotForce > 0){
            newForce += rotForce - delta;
            if(newForce < 0) {
                newForce = 0;
            }
        }
        else if(rotForce < 0){
            newForce += rotForce + delta;
            if(newForce > 0) {
                newForce = 0;
            }
        }
        if(extraRotForce !== 0){
            console.log("extra");
            newForce = extraRotForce;
            setExtraRotForce(0);
        }
        setRotForce(newForce);

        //console.log("force " + rotForce);
        setExtraRot(extraRot + rotForce * delta);
        setRot(Math.cos(time * 1.2) * 0.05 + extraRot);
    }
    function push(){
        console.log("difrence " + previousMousePos[0]);
        setExtraRotForce((mousePos[0] - previousMousePos[0]) > 0? 2:-2);
    }

    return(
        <mesh
            position={position}
            rotation={[0,-1.8 + Rot,0]}
            scale={scale}
            onPointerOver={push}>


            <primitive object={model.scene}/>
        </mesh>
    )
}