"use client"
import NavBar from "@/app/navbar";
import {RenderPortrait} from "@/app/ModleRenderer";
import {Canvas} from "@react-three/fiber";
import {MyText} from "@/app/MyText";


export default function MainPage(){

    return (
        <main>
            <NavBar/>
            <div className="mx-auto h-screen grid">
                <Canvas>
                    <ambientLight intensity={0.75} />
                    <directionalLight color="#fff9db" position={[0, 0, 1]} />
                    <RenderPortrait/>
                    <MyText text={"Hello, I'm Lander Wesenbeek"} fontSize={0.5} position={[-7,2,-0]} rotation={[0,0,0]}/>
                    <MyText fontSize={0.22} position={[-6.5,1,-0]} rotation={[0,0,0]}
                            text={"I am a fullstack programmer student. Studying at Thomasmore, Sint Andries."}/>
                    <MyText fontSize={0.19} position={[-5.9,0.4,-0]} rotation={[0,0,0]}
                            text={"I like to spend my free time making stuff, like making games, painting, music."} />
                    <MyText  fontSize={0.19} position={[-5.9,0,-0]} rotation={[0,0,0]}
                             text={"As well delving into nerdy topics of math behind realtime graphics rendering."}/>
                    <MyText  fontSize={0.19} position={[-5.9,-0.4,-0]} rotation={[0,0,0]}
                             text={"Where I even made a small game engine in rust."}/>
                    <MyText  fontSize={0.18} position={[-5.6,-1.2,-0]} rotation={[0,0,0]}
                             text={"But life isn't complete when you don't go walking outside in nature."}/>
                    <MyText  fontSize={0.18} position={[-5.6,-1.6,-0]} rotation={[0,0,0]}
                             text={"Or having a good beer with some friends."}/>
                </Canvas>
            </div>
        </main>
    )
}