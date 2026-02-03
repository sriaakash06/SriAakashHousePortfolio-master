import { useTexture } from '@react-three/drei'

export default function Mug(props) {
  const reactMugTexture = useTexture('./Textures/ReactMugBaked.jpg')
  const UiUxMugTexture = useTexture('./Textures/UiUxMugBaked.png')
  const SqlMugTexture = useTexture('./Textures/SqlMugBaked.png')
  const JavaMugTexture = useTexture('./Textures/JavaMugBaked.png')


  return <>
    <mesh
      geometry={props.nodes.ReactMug.geometry}
      position={[0, 1, 0]}
    >
      <meshBasicMaterial map={reactMugTexture} map-flipY={false} />
    </mesh>

    <mesh
      geometry={props.nodes.ThreeJSMug.geometry}
      position={[0, 1, 0]}
    >
      <meshBasicMaterial map={UiUxMugTexture} map-flipY={false} />

    </mesh>

    <mesh
      geometry={props.nodes.SymfonyMug.geometry}
      position={[0, 1, 0]}
    >
      <meshBasicMaterial map={SqlMugTexture} map-flipY={false} />

    </mesh>

    <mesh
      geometry={props.nodes.BlenderMug.geometry}
      position={[0, 1, 0]}
    >
      <meshBasicMaterial map={JavaMugTexture} map-flipY={false} />

    </mesh>
  </>
}