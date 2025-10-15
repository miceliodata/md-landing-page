<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import * as THREE from "three";

const containerRef = ref<HTMLDivElement>();

let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let earth: THREE.Group;
let animationId: number;

// const props = defineProps<{
//   size?: number
// }>()

// Simplified continent coordinates (lat, lon pairs)
// const continentData = {
//   // North America
//   northAmerica: [
//     [70, -150], [60, -160], [50, -170], [45, -125], [35, -120], [25, -115],
//     [30, -100], [45, -85], [55, -75], [65, -80], [70, -100], [70, -150]
//   ],
//   // South America
//   southAmerica: [
//     [10, -70], [0, -75], [-20, -70], [-35, -65], [-45, -70], [-55, -65],
//     [-35, -55], [-20, -45], [0, -50], [10, -60], [10, -70]
//   ],
//   // Europe
//   europe: [
//     [70, 20], [60, 10], [55, 25], [45, 40], [35, 25], [40, 5],
//     [50, -5], [60, 0], [70, 10], [70, 20]
//   ],
//   // Africa
//   africa: [
//     [35, 10], [30, 50], [15, 50], [0, 40], [-20, 25], [-35, 20],
//     [-35, 35], [-15, 50], [5, 45], [20, 35], [35, 25], [35, 10]
//   ],
//   // Asia
//   asia: [
//     [70, 60], [70, 120], [50, 140], [35, 135], [25, 120], [15, 100],
//     [25, 80], [35, 70], [45, 60], [55, 70], [65, 80], [70, 60]
//   ],
//   // Australia
//   australia: [
//     [-10, 110], [-25, 115], [-35, 130], [-40, 145], [-35, 155],
//     [-25, 150], [-15, 145], [-10, 130], [-10, 110]
//   ]
// }

// Create wireframe sphere with latitude/longitude lines and continents
const createWireframeEarth = () => {
  const earthGroup = new THREE.Group();

  // Main Earth sphere with texture
  const sphereGeometry = new THREE.SphereGeometry(2.2, 64, 32);

  // Create texture loader
  const textureLoader = new THREE.TextureLoader();

  // Load high-resolution Earth texture (local file)
  const earthTexture = textureLoader.load("/textures/earth-8k.jpg");
  earthTexture.colorSpace = THREE.SRGBColorSpace;

  // Main Earth material with texture
  const earthMaterial = new THREE.MeshPhongMaterial({
    map: earthTexture,
    shininess: 0.1,
    transparent: true,
    opacity: 0.7,
  });

  const earthMesh = new THREE.Mesh(sphereGeometry, earthMaterial);
  earthMesh.receiveShadow = true;
  earthMesh.castShadow = true;
  earthGroup.add(earthMesh);

  // Wireframe overlay removed for cleaner appearance

  // Removed all wireframe elements for clean appearance

  // Removed continent wireframe outlines for clean textured appearance

  // Silk Road path coordinates (major historical trade route points)
  const silkRoadPoints = [
    { lat: 39.9, lon: 116.4 }, // Beijing
    { lat: 39.0, lon: 125.7 }, // Pyongyang
    { lat: 42.8, lon: 74.6 }, // Bishkek
    { lat: 41.3, lon: 69.2 }, // Tashkent
    { lat: 39.6, lon: 66.9 }, // Samarkand
    { lat: 38.5, lon: 68.8 }, // Dushanbe
    { lat: 36.7, lon: 67.1 }, // Mazar-i-Sharif
    { lat: 34.5, lon: 69.2 }, // Kabul
    { lat: 33.7, lon: 66.5 }, // Herat
    { lat: 36.3, lon: 59.6 }, // Mashhad
    { lat: 35.7, lon: 51.4 }, // Tehran
    { lat: 33.3, lon: 44.4 }, // Baghdad
    { lat: 36.2, lon: 37.2 }, // Aleppo
    { lat: 41.0, lon: 29.0 }, // Istanbul
    { lat: 41.9, lon: 12.5 }, // Rome
    { lat: 40.4, lon: -3.7 }, // Madrid
  ];

  // Convert to 3D coordinates and create path
  const silkRoadPath = silkRoadPoints.map((point) => {
    const lat = (point.lat * Math.PI) / 180;
    const lon = (point.lon * Math.PI) / 180;
    const radius = 2.22; // Adjusted for Earth size

    return new THREE.Vector3(
      radius * Math.cos(lat) * Math.cos(lon),
      radius * Math.sin(lat),
      radius * Math.cos(lat) * Math.sin(lon)
    );
  });

  // Create Silk Road line with better visibility
  const silkRoadGeometry = new THREE.BufferGeometry().setFromPoints(
    silkRoadPath
  );
  const silkRoadMaterial = new THREE.LineBasicMaterial({
    color: 0xffd700, // Gold color for historical trade route
    transparent: true,
    opacity: 0, // Will be animated on scroll
    linewidth: 4,
  });

  // Add glow effect to make Silk Road more visible
  const silkRoadGlowMaterial = new THREE.LineBasicMaterial({
    color: 0xffd700,
    transparent: true,
    opacity: 0,
    linewidth: 8,
  });

  const silkRoadLine = new THREE.Line(silkRoadGeometry, silkRoadMaterial);
  silkRoadLine.name = "silkRoad"; // For easy reference
  earthGroup.add(silkRoadLine);

  // Add glow line for better visibility
  const silkRoadGlow = new THREE.Line(silkRoadGeometry, silkRoadGlowMaterial);
  silkRoadGlow.name = "silkRoadGlow";
  earthGroup.add(silkRoadGlow);

  return earthGroup;
};

const animate = () => {
  animationId = requestAnimationFrame(animate);

  if (earth) {
    // Get scroll progress
    const scrollY = window.scrollY;
    const heroHeight = window.innerHeight * 0.95;
    const maxScroll = heroHeight * 0.8;
    const scrollProgress = Math.min(scrollY / maxScroll, 1);

    // Rotate Earth from continental Asia to Europe based on scroll
    const baseRotation = Math.PI * 0.5; // Starting position (continental Asia)
    const scrollRotation = scrollProgress * Math.PI * 0.5; // Additional rotation toward Europe
    earth.rotation.y = baseRotation + scrollRotation;

    // Add subtle continuous rotation
    earth.rotation.y += 0.001;

    // Remove bobbing animation for cleaner look

    // Animate Silk Road line based on scroll
    const silkRoadLine = earth.getObjectByName("silkRoad") as THREE.Mesh | null;
    const silkRoadGlow = earth.getObjectByName(
      "silkRoadGlow"
    ) as THREE.Mesh | null;

    if (silkRoadLine && silkRoadLine.material) {
      // Animate the line drawing effect with scroll
      if (scrollProgress > 0.2) {
        const lineProgress = Math.min((scrollProgress - 0.2) * 1.25, 1);

        // ensure material supports opacity
        if ("opacity" in silkRoadLine.material) {
          (silkRoadLine.material as THREE.Material).opacity =
            lineProgress * 0.9;
          silkRoadLine.material.transparent = true;
        }

        // Animate glow effect
        if (
          silkRoadGlow &&
          silkRoadGlow.material &&
          "opacity" in silkRoadGlow.material
        ) {
          (silkRoadGlow.material as THREE.Material).opacity =
            lineProgress * 0.4;
          silkRoadGlow.material.transparent = true;
        }
      } else {
        if ("opacity" in silkRoadLine.material) {
          (silkRoadLine.material as THREE.Material).opacity = 0;
        }
        if (
          silkRoadGlow &&
          silkRoadGlow.material &&
          "opacity" in silkRoadGlow.material
        ) {
          (silkRoadGlow.material as THREE.Material).opacity = 0;
        }
      }
    }
  }

  renderer.render(scene, camera);
};

onMounted(() => {
  if (!containerRef.value) return;

  const container = containerRef.value;
  const containerWidth = container.clientWidth;
  const containerHeight = container.clientHeight;

  // Scene setup
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    75,
    containerWidth / containerHeight,
    0.1,
    1000
  );
  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

  renderer.setSize(containerWidth, containerHeight);
  renderer.setClearColor(0x000000, 0); // Transparent background
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  container.appendChild(renderer.domElement);

  // Create Earth
  earth = createWireframeEarth();
  // Set initial rotation to show continental Asia (China, Bangladesh, etc)
  earth.rotation.y = Math.PI * 0.5; // Rotate ~90 degrees to show continental Asia
  // Move Earth slightly to the right
  earth.position.x = 0.3;
  scene.add(earth);

  // Position camera much closer for dramatic close-up view
  camera.position.z = 3.2;
  camera.position.y = 0.3;

  // Add cinematic lighting setup
  const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
  scene.add(ambientLight);

  // Main sun light - positioned from camera and slightly above
  const sunLight = new THREE.DirectionalLight(0xffeaa7, 1.8); // Warm sunlight color
  sunLight.position.set(0, 2, 4); // From camera position, elevated above
  sunLight.castShadow = true;
  sunLight.shadow.mapSize.width = 2048;
  sunLight.shadow.mapSize.height = 2048;
  scene.add(sunLight);

  // Rim light for dramatic edge lighting
  const rimLight = new THREE.DirectionalLight(0x74b9ff, 0.5); // Cool blue rim light
  rimLight.position.set(3, -1, -2); // Opposite side for rim lighting
  scene.add(rimLight);

  // Subtle fill light from the bottom
  const fillLight = new THREE.DirectionalLight(0xffffff, 0.3);
  fillLight.position.set(0, -5, 2);
  scene.add(fillLight);

  // Start animation
  animate();

  // Handle resize
  const handleResize = () => {
    if (!containerRef.value) return;
    const newWidth = containerRef.value.clientWidth;
    const newHeight = containerRef.value.clientHeight;

    camera.aspect = newWidth / newHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(newWidth, newHeight);
  };

  window.addEventListener("resize", handleResize);

  // Cleanup function
  return () => {
    window.removeEventListener("resize", handleResize);
  };
});

onUnmounted(() => {
  if (animationId) {
    cancelAnimationFrame(animationId);
  }
  if (renderer) {
    renderer.dispose();
  }
});
</script>

<template>
  <div
    ref="containerRef"
    class="absolute inset-0 pointer-events-none"
    style="z-index: 1"
  />
</template>

<style scoped>
/* Ensure the canvas takes full size */
div {
  width: 100%;
  height: 100%;
}
</style>
