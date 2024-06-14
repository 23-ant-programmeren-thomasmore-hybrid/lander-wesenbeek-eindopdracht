"use client"
import {Canvas} from "@react-three/fiber";
import StartPage from "@/app/StartPage";
import {RenderCSharp, RenderHTML} from "@/app/ModleRenderer";
import NavBar from "@/app/navbar";
export default function MainPage(){

    return (
        <main className="w-screen h-screen">
            <NavBar/>
            <div className="fixed my-20 p-6 z-10">
                <h1 className={"relative bg-custom-1 p-3"}>My Experiences</h1>
                <p className={"relative bg-custom-1 p-2.5"} >
                    I have studied to become a full stack developer in ThomasMore.

                </p>
            </div>
            <Canvas className="h-max w-max">
                <ambientLight intensity={1.95} />
                <directionalLight color="#d9d6c4" position={[0, 0, 1]} />
                <RenderCSharp/>
                <RenderHTML/>
            </Canvas>

        </main>
    )
}