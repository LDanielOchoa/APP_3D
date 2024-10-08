import React, { useEffect, useRef } from 'react';
import { GLView } from 'expo-gl';
import * as THREE from 'three';
import { Renderer } from 'expo-three';
import { Asset } from 'expo-asset';

const Render3DScreen = ({ route }) => {
  const glViewRef = useRef(null);

  useEffect(() => {
    const loadModel = async () => {
      const { current: gl } = glViewRef;
      const renderer = new Renderer({ gl });
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
      camera.position.z = 5;

      const light = new THREE.DirectionalLight(0xffffff, 1);
      light.position.set(5, 5, 5).normalize();
      scene.add(light);

      const ambientLight = new THREE.AmbientLight(0x404040); // Luz suave
      scene.add(ambientLight);

      // Cargar modelo
      const asset = Asset.fromModule(require('../components/xd.glb')); // Tu archivo .glb
      await asset.downloadAsync();

      const loader = new THREE.GLTFLoader();
      loader.load(
        asset.uri,
        (gltf) => {
          scene.add(gltf.scene);
        },
        undefined,
        (error) => {
          console.error(error);
        }
      );

      const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
        gl.endFrameEXP();
      };

      animate();
    };

    loadModel();
  }, []);

  return (
    <GLView
      style={{ flex: 1 }}
      onContextCreate={(gl) => {
        glViewRef.current = gl;
      }}
    />
  );
};

export default Render3DScreen;
