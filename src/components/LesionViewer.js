import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const LesionViewer = ({ polypoints }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    camera.position.z = 20;

    const controls = new OrbitControls(camera, renderer.domElement);

    const points = polypoints.map(layer => {
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(layer.length * 3);

      for (let i = 0; i < layer.length; i++) {
        positions[i * 3] = layer[i].x;
        positions[i * 3 + 1] = layer[i].y;
        positions[i * 3 + 2] = layer[i].z;
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const material = new THREE.LineBasicMaterial({ color: 0xffffff });
      return new THREE.LineLoop(geometry, material);
    });

    points.forEach(point => {
      scene.add(point);
    });

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      controls.dispose();
    };
  }, [polypoints]);

  return <canvas ref={canvasRef} style={{ width: '100%', height: '90%' }}/>;
};

export default LesionViewer;