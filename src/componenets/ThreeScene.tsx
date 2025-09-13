'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const mount = mountRef.current;

    // Get container dimensions
    const containerWidth = mount.clientWidth;
    const containerHeight = mount.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, containerWidth / containerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      antialias: window.innerWidth > 768, // Disable antialiasing on mobile for performance
      alpha: true
    });

    renderer.setSize(containerWidth, containerHeight);
    renderer.setClearColor(0x000000, 0); // Transparent background
    mount.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Create multiple geometric objects
    const objects: THREE.Mesh[] = [];

    // Cube
    const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
    const cubeMaterial = new THREE.MeshPhongMaterial({ color: 0x00ff88, shininess: 100 });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.x = -3;
    scene.add(cube);
    objects.push(cube);

    // Sphere
    const sphereGeometry = new THREE.SphereGeometry(0.8, 32, 32);
    const sphereMaterial = new THREE.MeshPhongMaterial({ color: 0xff6b6b, shininess: 100 });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.x = 0;
    scene.add(sphere);
    objects.push(sphere);

    // Torus
    const torusGeometry = new THREE.TorusGeometry(0.6, 0.3, 16, 100);
    const torusMaterial = new THREE.MeshPhongMaterial({ color: 0x4ecdc4, shininess: 100 });
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    torus.position.x = 3;
    scene.add(torus);
    objects.push(torus);

    // Octahedron
    const octaGeometry = new THREE.OctahedronGeometry(0.8);
    const octaMaterial = new THREE.MeshPhongMaterial({ color: 0x45b7d1, shininess: 100 });
    const octahedron = new THREE.Mesh(octaGeometry, octaMaterial);
    octahedron.position.y = -2;
    scene.add(octahedron);
    objects.push(octahedron);

    // Icosahedron
    const icoGeometry = new THREE.IcosahedronGeometry(0.7);
    const icoMaterial = new THREE.MeshPhongMaterial({ color: 0xf9ca24, shininess: 100 });
    const icosahedron = new THREE.Mesh(icoGeometry, icoMaterial);
    icosahedron.position.y = 2;
    scene.add(icosahedron);
    objects.push(icosahedron);

    camera.position.z = 8;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      const time = Date.now() * 0.001;

      // Animate each object differently
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      cube.position.y = Math.sin(time) * 0.5;

      sphere.rotation.x += 0.005;
      sphere.rotation.z += 0.01;
      sphere.position.y = Math.cos(time * 0.8) * 0.3;

      torus.rotation.x += 0.02;
      torus.rotation.y += 0.015;
      torus.position.y = Math.sin(time * 1.2) * 0.4;

      octahedron.rotation.x += 0.008;
      octahedron.rotation.y += 0.012;
      octahedron.position.x = Math.cos(time * 0.6) * 1.5;

      icosahedron.rotation.z += 0.01;
      icosahedron.rotation.y += 0.008;
      icosahedron.position.x = Math.sin(time * 0.9) * 1.2;

      // Camera subtle movement
      camera.position.x = Math.sin(time * 0.1) * 0.5;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      if (!mount) return;

      const newWidth = mount.clientWidth;
      const newHeight = mount.clientHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      objects.forEach(obj => {
        obj.geometry.dispose();
        if (obj.material instanceof THREE.Material) {
          obj.material.dispose();
        }
      });
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: '100%',
        height: 'clamp(300px, 50vh, 600px)', // Responsive height: min 300px, max 600px, preferred 50vh
        background: 'transparent',
        minHeight: '300px' // Ensure minimum height on very small screens
      }}
    />
  );
};

export default ThreeScene;
