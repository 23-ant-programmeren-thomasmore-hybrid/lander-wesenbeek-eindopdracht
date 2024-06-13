"use client"
import NavBar from "@/app/navbar";
import {RenderPortrait} from "@/app/ModleRenderer";
import {Canvas} from "@react-three/fiber";

export default function MainPage(){

    return (
        <main className="bg-orange-100">
            <NavBar/>
            <div className="mx-auto h-screen grid grid-cols-2 gap-x-8">
                <div className="p-6 lg:p-8">
                    <div className="h-10"/>
                    <h1 className="my-6">Hello, I'm Lander</h1>
                    <p>
                        I am a fullstack programmer student. Studying at Thomasmore, Sint Andries.
                    </p>
                </div>
                <div className="col">
                    <Canvas>
                        <ambientLight intensity={0.75} />
                        <directionalLight color="#fff9db" position={[0, 0, 1]} />
                        <RenderPortrait/>
                    </Canvas>
                </div>
                <test/>
            </div>
        </main>
    )
}