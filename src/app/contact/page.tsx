"use client"
import NavBar from "@/app/navbar";
import {Canvas} from "@react-three/fiber";
import { RoundedBox, Text } from '@react-three/drei';

export default function MainPage(){

    return(
        <main className="w-screen h-screen">
            <NavBar/>
            <Canvas className="h-max w-max">
                <ambientLight intensity={1.95} />
                <directionalLight color="#d9d6c4" position={[0, 0, 1]} />

                <EmailButton/>
                <LinkedInButton/>
                <ItchIoButton/>
                <GitHubButton/>
            </Canvas>
        </main>
    )
}

function EmailButton(){
    return(
        <RoundedBox
            args={[3, 1, 1]}
            radius={0.15} // Radius of the rounded corners. Default is 0.05
            smoothness={4} // The number of curve segments. Default is 4
            bevelSegments={4} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
            creaseAngle={0.4} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle
            rotation={[0.1,0.4,-0.1]}
            position={[-2.5,2,0]}
        >
            <meshStandardMaterial color="#29B6F6" />

            <RoundedBox
                args={[2.5, 0.8, 0.8]}
                radius={0.15}
                rotation={[0,0,0]}
                position={[0,0,0.2]}
            >
                <meshStandardMaterial color="#0288D1" />
            </RoundedBox>
            <Text position={[0,0,0.8]} fontSize={0.6}>E-mail</Text>
        </RoundedBox>
    )
}

function LinkedInButton(){
    return(
        <RoundedBox
            args={[3.5, 1, 1]}
            radius={0.15}
            smoothness={4}
            bevelSegments={4}
            creaseAngle={0.4}
            rotation={[-0.2,-0.4,0.1]}
            position={[1.9,-1.2,0]}
            onClick={(e) =>  window.location.href = 'https://www.linkedin.com/in/lander-wesenbeek/'}
        >
            <meshStandardMaterial color="#1E88E5" />

            <RoundedBox
                args={[3, 0.8, 0.8]}
                radius={0.15}
                rotation={[0,0,0]}
                position={[0,0,0.2]}
            >
                <meshStandardMaterial color="#F5F5F5" />
            </RoundedBox>
            <Text position={[0,0,0.8]} fontSize={0.6} color="black" >LinkedIn</Text>
        </RoundedBox>
    )
}

function ItchIoButton(){
    return(
        <RoundedBox
            args={[3, 1, 1]}
            radius={0.15}
            smoothness={4}
            bevelSegments={4}
            creaseAngle={0.4}
            rotation={[0,0.4,-0.12]}
            position={[-3.6,-1.6,0]}
            onClick={(e) =>  window.location.href = 'https://wandrill.itch.io/'}
        >
            <meshStandardMaterial color="#FF7575"/>

            <Text position={[0,0,0.8]} fontSize={0.6} >Itch.io</Text>
        </RoundedBox>
    )
}

function GitHubButton(){
    return(
        <RoundedBox
            args={[2.5, 1, 1]}
            radius={0.15}
            smoothness={4}
            bevelSegments={4}
            creaseAngle={0.4}
            rotation={[-0.1,-0.4,-0.12]}
            position={[3,2.2,0]}
            onClick={(e) =>  window.location.href = 'https://github.com/AdhesiveBoy'}
        >
            <meshStandardMaterial color="#222222"/>

            <Text position={[0,0,0.8]} fontSize={0.6} >GitHub</Text>
        </RoundedBox>
    )
}