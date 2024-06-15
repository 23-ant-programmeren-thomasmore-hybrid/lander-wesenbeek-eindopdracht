"use client"
import {Canvas} from "@react-three/fiber";
import {RenderCSharp, RenderHTML} from "@/app/ModleRenderer";
import NavBar from "@/app/navbar";
import {MyText} from "@/app/MyText";
export default function MainPage(){

    return (
        <main className="w-screen h-screen">
            <NavBar/>
            <Canvas className="h-max w-max">
                <ambientLight intensity={1.95} />
                <directionalLight color="#d9d6c4" position={[0, 0, 1]} />
                <RenderCSharp/>
                <RenderHTML/>
                <MyText fontSize={0.2} position={[-4.5,2,1]} rotation={[0,0,0]}
                        text={"My Experiences"}/>
                <MyText fontSize={0.15} position={[-4,1.6,1]} rotation={[0,0,0]}
                        text={"I have studied to become a full stack developer in ThomasMore."}/>
                <MyText fontSize={0.15} position={[-4,1.3,1]} rotation={[0,0,0]}
                        text={"Where I have learned to use many different tools"}/>
                <MyText fontSize={0.15} position={[-4,1 ,1]} rotation={[0,0,0]}
                        text={"But I am most familiar with C# and html"}/>
                <MyText fontSize={0.15} position={[-4,0.7 ,1]} rotation={[0,0,0]}
                        text={"Naturally have I learned many more skills"}/>

                <MyText fontSize={0.15} position={[-1.5,0.3 ,1]} rotation={[0,0,0]} alingX={"center"}
                        text={"> C#"}/>
                <MyText fontSize={0.15} position={[-1.5,0 ,1]} rotation={[0,0,0]} alingX={"center"}
                        text={"> C++"}/>
                <MyText fontSize={0.15} position={[-1.5,-0.3 ,1]} rotation={[0,0,0]} alingX={"center"}
                        text={"> rust"}/>
                <MyText fontSize={0.15} position={[-0.5,0.3 ,1]} rotation={[0,0,0]} alingX={"center"}
                        text={"> html"}/>
                <MyText fontSize={0.15} position={[-0.5,0 ,1]} rotation={[0,0,0]} alingX={"center"}
                        text={"> react"}/>
                <MyText fontSize={0.15} position={[-0.5,-0.3 ,1]} rotation={[0,0,0]} alingX={"center"}
                        text={"> javascript"}/>

                <MyText fontSize={0.2} position={[3,-1 ,1]} rotation={[0,0,0]} alingX={"right"}
                        text={"Languages:"}/>
                <MyText fontSize={0.15} position={[2.6,-1.4 ,1]} rotation={[0,0,0]} alingX={"right"}
                        text={"> Dutch"}/>
                <MyText fontSize={0.15} position={[3.6,-1.4 ,1]} rotation={[0,0,0]} alingX={"right"}
                        text={"> English"}/>
            </Canvas>

        </main>
    )
}