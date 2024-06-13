"use client"
import {Canvas} from "@react-three/fiber";
import StartPage from "@/app/StartPage";
import {RenderCSharp, RenderHTML} from "@/app/ModleRenderer";
import NavBar from "@/app/navbar";
export default function MainPage(){

    return (
        <main className="bg-blue-100 w-screen h-screen">
            <NavBar/>
            <Canvas className="h-max w-max">
                <ambientLight intensity={1.95} />
                <directionalLight color="#d9d6c4" position={[0, 0, 1]} />
                <RenderCSharp/>
                <RenderHTML/>
            </Canvas>

        </main>
    )
}