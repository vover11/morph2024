import { useRef, useEffect, useState, useCallback, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Physics, RigidBody, CuboidCollider, BallCollider } from '@react-three/rapier';
import { MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { AiOutlineZoomIn, AiOutlineZoomOut } from 'react-icons/ai'; // Ant Design icons
import { AiOutlineControl, AiOutlineCloseCircle } from 'react-icons/ai'; // Import icons from react-icons
// import { FaBeer, FaCoffee } from 'react-icons/fa'; // FontAwesome icons

function Model({ showWireframe, ...props }) {
  const { scene } = useGLTF('models/model2/scene.gltf');
  const ref = useRef(); // Reference to apply rotation

  // Traverse through the model and apply wireframe mode
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material.wireframe = showWireframe;
      }
    });
  }, [showWireframe, scene]);

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material.dispose(); // Dispose old material

        // Replace with MeshTransmissionMaterial as a React component
        child.material = new THREE.MeshPhysicalMaterial({ // Use THREE material as placeholder
          color: 0xffffff,
          metalness: 0.1,
          roughness: 0.1,
          clearcoat: 1.0,
          clearcoatRoughness: 0.1,
          transmission: 1.0,
          thickness: 0.1,
          specular: 1.0,
          reflectivity: 0.9,
          transparent: true,
          opacity: 0.8,
          envMapIntensity: 1.0,
        });
      }
    });
  }, [scene]);

  // Continuous rotation on the y-axis
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01; // Rotate the model slowly on the y-axis
    }
  });

  return (
    <group ref={ref} scale={[0.6, 0.6, 0.6]} {...props}>
      <primitive object={scene} />
    </group>
  );
}
function Connector({ position, children, vec = new THREE.Vector3(), scale, r = THREE.MathUtils.randFloatSpread, accent, ...props }) {
  const api = useRef();
  const pos = useMemo(() => position || [r(10), r(10), r(10)], []);
  useFrame((state, delta) => {
    delta = Math.min(0.1, delta);
    api.current?.applyImpulse(vec.copy(api.current.translation()).negate().multiplyScalar(1));
  });
  return (
    <RigidBody
      linearDamping={4}
      angularDamping={2}
      friction={0.1}
      position={pos}
      ref={api}
    >
      <CuboidCollider args={[0.38, 1.27, 0.38]} />
      <CuboidCollider args={[1.27, 0.38, 0.38]} />
      <CuboidCollider args={[0.38, 0.38, 1.27]} />
      {children ? children : <Model {...props} />}
    </RigidBody>
  );
}

function Pointer({ vec = new THREE.Vector3() }) {
  const ref = useRef();
  useFrame(({ mouse, viewport }) => {
    ref.current?.setNextKinematicTranslation(vec.set((mouse.x * viewport.width) / 2, (mouse.y * viewport.height) / 2, 0));
  });
  return (
    <RigidBody position={[0, 0, 0]} type="kinematicPosition" colliders={false} ref={ref}>
      <BallCollider args={[1]} />
    </RigidBody>
  );
}

const Reactthreefiber = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showWireframe, setShowWireframe] = useState(false); // State for wireframe
  const [orbitControlsEnabled, setOrbitControlsEnabled] = useState(false); // Set initial state to false

  const toggleWireframeMode = useCallback(() => {
    setShowWireframe((prev) => !prev);
  }, []);

  const toggleOrbitControls = useCallback(() => {
    setOrbitControlsEnabled((prev) => !prev);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className={`h-full rounded-md transform transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
      >
        <Canvas
          className="rounded-md"
          dpr={[1, 2]}
          camera={{ position: [0, 0.2, 10], zoom: 4, rotation: [0, 0, 0] }}
          gl={{ alpha: false }}
          onCreated={({ gl }) => {
            gl.setClearColor('#1c1c1c');
          }}
        >
          <ambientLight intensity={Math.PI / 2} />
          <spotLight position={[10, 15, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} color={'#ffffff'} />
          <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} color={'#ffffff'} />
          <spotLight position={[0, 3, 5]} angle={0.90} penumbra={1} decay={0} intensity={Math.PI} color={'#DD637C'} />
          <spotLight position={[0, 3, -5]} angle={0.90} penumbra={1} decay={0} intensity={Math.PI} color={'#1137c6'} />

          <Physics gravity={[0, 3, 0]}>
            <Connector position={[0, 6, 0]} showWireframe={showWireframe} />
          </Physics>

          {orbitControlsEnabled && (
            <OrbitControls
              enableZoom={false}
              enableRotate={true}
              enablePan={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
          )}
          <gridHelper args={[15, 60, '#29ecac', '#10B981']} position={[0, -2, 0]} rotation={[Math.PI / 7, 0, 0]} />
        </Canvas>

        <button
          onClick={toggleWireframeMode}
          className={`fixed bottom-4 right-4 text-white px-4 py-2 rounded-full ${showWireframe ? 'bg-accent' : 'bg-primary'
            }`}
        >
          {showWireframe ? 'Frame Off' : 'Frame On'}
        </button>

        <button
          onClick={toggleOrbitControls}
          className="fixed bottom-4 left-4 bg-green-500 text-white px-4 py-2 rounded-full flex items-center justify-center"
        >
          {orbitControlsEnabled ? (
            <span className="material-symbols-outlined">2d</span>
          ) : (
            <span className="material-symbols-outlined">3d_rotation</span>
          )}
        </button>
      </section>
    </>
  );
};

// Preload the GLTF model
useGLTF.preload('models/model1/scene.gltf');

export default Reactthreefiber;












// import { useRef, useEffect, useState, useCallback } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { OrbitControls, useGLTF } from '@react-three/drei';

// function Model({ showWireframe, ...props }) {
//   const { scene } = useGLTF('models/model2/scene.gltf');
//   const ref = useRef(); // Reference to apply rotation

//   // Traverse through the model and apply wireframe mode
//   useEffect(() => {
//     scene.traverse((child) => {
//       if (child.isMesh) {
//         child.material.wireframe = showWireframe;
//       }
//     });
//   }, [showWireframe, scene]);

//   // Continuous rotation on the x-axis
//   useFrame(() => {
//     if (ref.current) {
//       ref.current.rotation.y += 0.01; // Rotate the model slowly on the x-axis
//     }
//   });

//   return <primitive ref={ref} object={scene} {...props} scale={[0.6, 0.6, 0.6]} />;
// }

// function Box(props) {
//   const ref = useRef();
//   const [hovered, hover] = useState(false);
//   const [clicked, click] = useState(false);
//   useFrame((state, delta) => (ref.current.rotation.x += delta));

//   return (
//     <mesh
//       {...props}
//       ref={ref}
//       scale={clicked ? 1.5 : 1}
//       onClick={() => click(!clicked)}
//       onPointerOver={(event) => (event.stopPropagation(), hover(true))}
//       onPointerOut={() => hover(false)}
//     >
//       <boxGeometry args={[1, 1, 1]} />
//       <meshPhysicalMaterial
//         color={hovered ? '#10b9ab' : '#b92d10'}
//         metalness={0.2}
//         roughness={0}
//         clearcoat={0.8}
//       />
//     </mesh>
//   );
// }

// const Reactthreefiber = () => {
//   const sectionRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);
//   const [showWireframe, setShowWireframe] = useState(false); // State for wireframe

//   const toggleWireframeMode = useCallback(() => {
//     setShowWireframe((prev) => !prev);
//   }, []);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIsVisible(true);
//           }
//         });
//       },
//       { threshold: 0.5 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   return (
//     <>
//       <section
//         ref={sectionRef}
//         className={`container h-72 md:h-screen rounded-md transform transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
//           }`}
//       >
//         <Canvas
//           className="rounded-md"
//           dpr={[1, 2]}
//           camera={{ position: [0, 0.2, 10], zoom: 4, rotation: [0, 0, 0] }}
//           gl={{ alpha: false }}
//           onCreated={({ gl }) => {
//             gl.setClearColor('#0d0d0d');
//           }}
//         >
//           <ambientLight intensity={Math.PI / 2} />
//           <spotLight position={[10, 15, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
//           <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
//           {/* <Box position={[-1.2, 0, 0]} />
//           <Box position={[1.2, 0, 0]} /> */}
//           <Model position={[0, 0.2, 0]} showWireframe={showWireframe} />
//           <OrbitControls
//             enableZoom={false} // Disable zoom
//             enableRotate={true} // Enable rotation
//             enablePan={false} // Disable panning
//             maxPolarAngle={Math.PI / 2} // Limit rotation to prevent looking below
//             minPolarAngle={Math.PI / 2} // Limit rotation to prevent looking above
//           />
//           <gridHelper args={[10, 40, '#29ecac', '#10B981']} position={[-0.25, -1, 0]} rotation={[0, 0, 0]} />
//         </Canvas>

//         {/* Button to toggle wireframe */}
//         <button
//           onClick={toggleWireframeMode}
//           className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-full"
//         >
//           {showWireframe ? 'frame off' : 'frame on'}
//         </button>
//         {/* <div className='fixed top-4 left-4 flex flex-col'>
//           <a className='text-success font-bold text-xl md:text-5xl' href="">навигация к прибыли 📍</a>
//         </div> */}
//       </section>
//     </>
//   );
// };

// // Preload the GLTF model
// useGLTF.preload('models/model1/scene.gltf');

// export default Reactthreefiber;
