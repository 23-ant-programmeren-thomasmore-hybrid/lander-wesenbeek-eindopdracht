"use client"
import NavBar from "@/app/navbar";
import {Canvas, useFrame, useThree} from "@react-three/fiber";
import { RoundedBox, Text } from '@react-three/drei';
import { useRef, useState, useEffect} from "react";

export default function MainPage(){

    return(
        <main className="w-screen h-screen bg-gradient-to-r from-cyan-100 to-blue-200">
            <NavBar/>
            <Canvas className="h-max w-max">
                <ambientLight intensity={1.95} />
                <directionalLight color="#d9d6c4" position={[0, 0, 1]} />
                <CameraController/>
                <EmailButton/>
                <LinkedInButton/>
                <ItchIoButton/>
                <GitHubButton/>
            </Canvas>
        </main>
    )
}

function CameraController(){
    const [mousePos, setMousePos] = useState([0,0])
    const { camera } = useThree()
    useEffect(() => {
        const handleWindowMouseMove = event => {
            const { innerWidth: width, innerHeight: height } = window;
            camera.rotation.y = -(event.clientX/width - 0.5)/2;
            camera.rotation.x = -(event.clientY/height - 0.5)/2;
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
    return(
        <>
        </>
    )
}

function EmailButton(){
    const [size,setSize] = useState(1);
    const [copied, setCopied] = useState(0.0);
    const ref = useRef(false);
    useFrame((state, delta) => (frameUpdate(delta)));
    function hover(){
        setSize(1.2);
        ref.current = true;
    }
    function unHover(){
        setSize(1);
        ref.current = false;
    }
    function frameUpdate(delta){
        if(copied > 0){
            setCopied(copied - delta);
        }
    }

    useEffect(() => {
        const handleClick = event => {
            if(ref.current){
                navigator.clipboard.writeText("mailto:lander.wesenbeek@hotmail.be");
                setCopied(1.0);
            }
        };
        window.addEventListener('click', handleClick);
        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, []);

    return(
        <RoundedBox
            args={[3 * size, size, size]}
            radius={0.15}
            smoothness={4}
            bevelSegments={4}
            creaseAngle={0.4}
            rotation={[0.1,0.4,-0.1]}
            position={[-2.5,2,0]}
            onPointerEnter={hover}
            onPointerOut={unHover}
        >
            <meshStandardMaterial color="#29B6F6" />

            <RoundedBox
                args={[2.5 * size, 0.8 * size, 0.8 * size]}
                radius={0.15}
                rotation={[0,0,0]}
                position={[0,0,0.2]}
            >
                <meshStandardMaterial color="#0288D1" />
            </RoundedBox>
            <Text position={[0,0,0.8]} fontSize={0.6 * size}>{copied>0?"Copied" : "E-mail"}</Text>
        </RoundedBox>
    )
}

function LinkedInButton(){
    const [size,setSize] = useState(1);
    function hover(){
        setSize(1.2);
    }
    function unHover(){
        setSize(1);
    }
    return(
        <RoundedBox
            args={[3.5 * size, size, size]}
            radius={0.15}
            smoothness={4}
            bevelSegments={4}
            creaseAngle={0.4}
            rotation={[-0.2,-0.4,0.1]}
            position={[1.9,-1.2,0]}
            onClick={(e) =>  window.location.href = 'https://www.linkedin.com/in/lander-wesenbeek/'}
            onPointerEnter={hover}
            onPointerOut={unHover}
        >
            <meshStandardMaterial color="#1E88E5" />

            <RoundedBox
                args={[3 * size, 0.8 * size, 0.8 * size]}
                radius={0.15}
                rotation={[0,0,0]}
                position={[0,0,0.2]}
            >
                <meshStandardMaterial color="#F5F5F5" />
            </RoundedBox>
            <Text position={[0,0,0.8]} fontSize={0.6 * size} color="black" >LinkedIn</Text>
        </RoundedBox>
    )
}

function ItchIoButton(){
    const [size,setSize] = useState(1);
    function hover(){
        setSize(1.2);
    }
    function unHover(){
        setSize(1);
    }
    return(
        <RoundedBox
            args={[3 * size, size, size]}
            radius={0.15}
            smoothness={4}
            bevelSegments={4}
            creaseAngle={0.4}
            rotation={[0,0.4,-0.12]}
            position={[-3.6,-1.6,0]}
            onClick={(e) =>  window.location.href = 'https://wandrill.itch.io/'}
            onPointerEnter={hover}
            onPointerOut={unHover}
        >
            <meshStandardMaterial color="#FF7575"/>

            <Text position={[0,0,0.8]} fontSize={0.6 * size} >Itch.io</Text>
        </RoundedBox>
    )
}

function GitHubButton(){
    const [size,setSize] = useState(1);
    function hover(){
        setSize(1.2);
    }
    function unHover(){
        setSize(1);
    }

    return(
        <RoundedBox
            args={[2.5 * size, size, size]}
            radius={0.15}
            smoothness={4}
            bevelSegments={4}
            creaseAngle={0.4}
            rotation={[-0.1,-0.4,-0.12]}
            position={[3,2.2,0]}
            onClick={(e) =>  window.location.href = 'https://github.com/AdhesiveBoy'}
            onPointerEnter={hover}
            onPointerOut={unHover}
        >
            <meshStandardMaterial color="#222222"/>

            <Text position={[0,0,0.8]} fontSize={0.6 * size} >GitHub</Text>
        </RoundedBox>
    )
}