import { useState } from "react";
import { useGLTF } from "@react-three/drei";

export default function Figurine() {
  const [clicked, click] = useState(false);

  const { scene } = useGLTF("models/figurine.glb");

  return (
    <primitive
      object={scene}
      scale={clicked ? 2 : 1}
      position={[0, 0, 0]}
      onClick={() => click(!clicked)}
    ></primitive>
  );
}
