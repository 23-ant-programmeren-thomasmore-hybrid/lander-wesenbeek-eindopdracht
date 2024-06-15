import {useEffect, useState} from "react";
import {useFrame} from "@react-three/fiber";
import { Text } from '@react-three/drei';

export function MyText(props){
    const {text, fontSize, position, rotation,alingX} = props
    useFrame((state, delta) => (frameUpdate(delta)));
    const [realRot, setRealRot] = useState([0,0,0])
    const [mousePos, setMousePos] = useState([0,0])
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
        const { innerWidth: width, innerHeight: height } = window;
        let newRotation = [0, (((mousePos[0]/width) -0.5) * 12 - position[0])/100,-(((mousePos[1]/height) -0.5) * 6 - position[1])/100];
        setRealRot((newRotation));
    }

    return(
        <Text color="black" anchorX={alingX?alingX:"left"} anchorY="top" fontSize={fontSize} position={position} rotation={realRot?realRot:rotation}>
            {text}
        </Text>
    )
}