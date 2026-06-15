import { Environment, Lightformer } from "@react-three/drei"


const StudioLights = () => {
  return (
    <group>
        <Environment resolution={256}>
            <group>
                <Lightformer
                form='rect'
                intensity={10}
                position={-15,5,10}
                scale={10}
                rotation-y={Math.PI/2}
                />
                <Lightformer
                form='rect'
                intensity={10}
                position={15,5,-10}
                scale={10}
                rotation-y={Math.PI/2}
                />
            </group>
        </Environment>
    </group>
  )
}

export default StudioLights