<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from "vue";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import earthVertexShader from "../../shaders/earth/vertex.vs?raw";
import earthFragmentShader from "../../shaders/earth/fragment.fs?raw";

const canvasRef = ref<HTMLCanvasElement | null>(null);
const loadingProgress = ref(0);
const isLoading = ref(true);

let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let controls: OrbitControls;
let earth: THREE.Mesh;
let earthGlow: THREE.Sprite;
let stars: THREE.Points;
let atmosphere: THREE.Mesh;
let markers: THREE.Group;
let dotParticles: THREE.Points;
let borderPoints: THREE.Points;
let flightLines: THREE.Group;
let animationId: number;
let directionalLight: THREE.DirectionalLight;
//let lightHelper: THREE.DirectionalLightHelper | undefined;

// Animation state for smooth transitions
let targetEarthPosition = { x: 0, y: 0, z: 0 };
let targetEarthRotation = { x: 0, y: 0, z: 0 };
let targetEarthScale = 100;
let currentEarthPosition = { x: 0, y: 0, z: 0 };
let currentEarthRotation = { x: 0, y: 0, z: 0 };
let currentEarthScale = 100;
let continuousRotationY = 0; // Track continuous rotation separately

// Animation smoothing factor (0-1, higher = faster, lower = more elegant/slower)
const POSITION_SMOOTHING = 0.02; // Reduced for slower, more elegant movement
const ROTATION_SMOOTHING = 0.02; // Slower rotation
const SCALE_SMOOTHING = 0.02; // Slower scaling

// Earth configuration per section - ADJUST THESE VALUES TO CONTROL EARTH POSITION
const earthConfig = {
  hero: {
    position: { x: -100, y: -50, z: 0 }, // Earth position (x=left/right, y=up/down, z=forward/back)
    rotation: { x: 0, y: 0.55, z: 0 }, // Earth rotation in radians (x=pitch, y=yaw, z=roll)
    scale: 100, // Earth scale (100 = default size)
  },
  info: {
    position: { x: -100, y: 50, z: 0 },
    rotation: { x: 0, y: 0.55, z: 0 },
    scale: 100,
  },
  suppliers: {
    position: { x: -50, y: 0, z: 0 },
    rotation: { x: 0, y: 0, z: 0 },
    scale: 40,
  },
  partners: {
    position: { x: 0, y: -50, z: 0 },
    rotation: { x: 0, y: 0, z: 0 },
    scale: 85,
  },
  contact: {
    position: { x: 0, y: -50, z: 0 },
    rotation: { x: 0, y: 0, z: 0 },
    scale: 85,
  },
};

// City locations for markers (lat, lon, name) - only showing target countries
const cities = [
  { lat: 23.8103, lon: 90.4125, name: "Bangladesh" }, // Dhaka
  { lat: 39.9334, lon: 32.8597, name: "Turkey" }, // Ankara
  { lat: 40.4168, lon: -3.7038, name: "Spain" }, // Madrid
  { lat: 39.9042, lon: 116.4074, name: "China" }, // Beijing
];

// Initialize the scene
const initScene = () => {
  if (!canvasRef.value) return;

  // Scene
  scene = new THREE.Scene();

  // Camera - positioned to show upper hemisphere from below
  camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    10000
  );
  // Position camera below Earth looking up, to show upper hemisphere
  camera.position.set(0, 0, -150);
  camera.lookAt(0, 0, 0); // Look towards upper part of Earth

  // Renderer
  renderer = new THREE.WebGLRenderer({
    canvas: canvasRef.value,
    alpha: true,
    antialias: true,
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Controls - disabled zoom and rotation
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = false;
  controls.enableZoom = false; // Disabled zoom
  controls.enableRotate = false; // Disabled mouse rotation
  controls.enablePan = false;
  controls.autoRotate = false;
};

// Create starry background with circular points
const createStars = () => {
  const starsGeometry = new THREE.BufferGeometry();
  const starsMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 2,
    transparent: true,
    opacity: 0.8,
    sizeAttenuation: true,
    map: createCircleTexture(),
    blending: THREE.AdditiveBlending,
  });

  const starsVertices = [];
  for (let i = 0; i < 6000; i++) {
    const x = (Math.random() - 0.5) * 2000;
    const y = (Math.random() - 0.5) * 2000;
    const z = (Math.random() - 0.5) * 2000;
    starsVertices.push(x, y, z);
  }

  starsGeometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(starsVertices, 3)
  );

  stars = new THREE.Points(starsGeometry, starsMaterial);
  scene.add(stars);
};

// Create circular texture for round points
const createCircleTexture = () => {
  const canvas = document.createElement("canvas");
  canvas.width = 32;
  canvas.height = 32;
  const ctx = canvas.getContext("2d")!;

  const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
  gradient.addColorStop(0, "rgba(255,255,255,1)");
  gradient.addColorStop(0.5, "rgba(255,255,255,0.5)");
  gradient.addColorStop(1, "rgba(255,255,255,0)");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 32, 32);

  const texture = new THREE.CanvasTexture(canvas);
  return texture;
};

// Create Earth with custom shaders
const createEarth = () => {
  const textureLoader = new THREE.TextureLoader();

  // Earth sphere - base size at 100 scale
  const earthGeometry = new THREE.SphereGeometry(100, 64, 64);

  // Create shader uniforms
  const uniforms = {
    glowColor: { value: new THREE.Color(0x0cd1eb) },
    scale: { value: -1.0 },
    bias: { value: 1.0 },
    power: { value: 3.3 },
    time: { value: 100 },
    isHover: { value: false },
    map: { value: null as THREE.Texture | null },
    // Lighting uniforms - DISABLED FOR NOW (turn back on later!)
    directionalLightPosition: { value: new THREE.Vector3(0, 50, -150) },
    directionalLightColor: { value: new THREE.Color(0xffffff) }, // Set to white/neutral
    directionalLightIntensity: { value: 0.0 }, // DISABLED
    ambientLightColor: { value: new THREE.Color(0xffffff) },
    ambientLightIntensity: { value: 1.0 }, // Full ambient = flat lighting (no shadows)
  };

  // Load earth texture with shader material
  textureLoader.load("/images/earth/earth.jpg", (texture) => {
    uniforms.map.value = texture;
    loadingProgress.value = 100;
    setTimeout(() => {
      isLoading.value = false;
    }, 500);
  });

  // Create shader material
  const earthMaterial = new THREE.ShaderMaterial({
    uniforms: uniforms,
    vertexShader: earthVertexShader,
    fragmentShader: earthFragmentShader,
  });

  earth = new THREE.Mesh(earthGeometry, earthMaterial);
  // Initialize position, rotation, scale from hero config
  currentEarthPosition = { ...earthConfig.hero.position };
  currentEarthRotation = { ...earthConfig.hero.rotation };
  currentEarthScale = earthConfig.hero.scale;
  targetEarthPosition = { ...earthConfig.hero.position };
  targetEarthRotation = { ...earthConfig.hero.rotation };
  targetEarthScale = earthConfig.hero.scale;

  earth.position.set(
    currentEarthPosition.x,
    currentEarthPosition.y,
    currentEarthPosition.z
  );
  earth.rotation.x = currentEarthRotation.x;
  earth.rotation.y = currentEarthRotation.y;
  earth.rotation.z = currentEarthRotation.z;
  earth.scale.set(
    currentEarthScale / 100,
    currentEarthScale / 100,
    currentEarthScale / 100
  );
  scene.add(earth);

  // Add point cloud border for depth effect
  const borderGeometry = new THREE.SphereGeometry(
    100 + 10, // Base size at 100 scale
    60,
    60
  );
  const pointMaterial = new THREE.PointsMaterial({
    color: 0x81ffff,
    transparent: true,
    sizeAttenuation: true,
    opacity: 0.1,
    size: 0.5,
  });
  borderPoints = new THREE.Points(borderGeometry, pointMaterial);
  borderPoints.position.set(
    currentEarthPosition.x,
    currentEarthPosition.y,
    currentEarthPosition.z
  );
  borderPoints.rotation.x = currentEarthRotation.x;
  borderPoints.rotation.y = currentEarthRotation.y;
  borderPoints.rotation.z = currentEarthRotation.z;
  borderPoints.scale.set(
    currentEarthScale / 100,
    currentEarthScale / 100,
    currentEarthScale / 100
  );
  scene.add(borderPoints);

  // Create sprite-based glow (like 3d-earth style)
  const textureLoader2 = new THREE.TextureLoader();
  const glowTexture = textureLoader2.load("/images/earth/glow.png");

  const spriteMaterial = new THREE.SpriteMaterial({
    map: glowTexture,
    color: 0x4390d1,
    transparent: true,
    opacity: 0.7,
    depthWrite: false,
  });

  earthGlow = new THREE.Sprite(spriteMaterial);
  const initialGlowScale = (currentEarthScale / 100) * 300; // 3x the Earth size
  earthGlow.scale.set(initialGlowScale, initialGlowScale, 1);
  earthGlow.position.set(
    currentEarthPosition.x,
    currentEarthPosition.y,
    currentEarthPosition.z
  );
  scene.add(earthGlow);

  // Add lighting - DISABLED FOR NOW, FULL FLAT LIGHTING
  const ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
  scene.add(ambientLight);

  // Directional light (sun) - DISABLED (intensity = 0)
  directionalLight = new THREE.DirectionalLight(0xffffff, 0.0);
  directionalLight.position.set(0, 50, -150);
  scene.add(directionalLight);

  // Light helper - DISABLED FOR NOW (uncomment to re-enable)
  // lightHelper = new THREE.DirectionalLightHelper(directionalLight, 20, 0xffff00);
  // scene.add(lightHelper);

  // Add global controls for the light (kept for later use)
  (window as any).moveLight = (x: number, y: number, z: number) => {
    if (directionalLight) {
      directionalLight.position.set(x, y, z);
      // if (lightHelper) lightHelper.update(); // COMMENTED - lightHelper is disabled
      if (earth && earth.material) {
        const material = earth.material as THREE.ShaderMaterial;
        material.uniforms.directionalLightPosition.value.set(x, y, z);
      }
    }
  };

  (window as any).getLightPos = () => {
    if (directionalLight) {
      const pos = directionalLight.position;
      return { x: pos.x, y: pos.y, z: pos.z };
    }
  };

  (window as any).setLightIntensity = (intensity: number) => {
    if (directionalLight) {
      directionalLight.intensity = intensity;
      if (earth && earth.material) {
        const material = earth.material as THREE.ShaderMaterial;
        material.uniforms.directionalLightIntensity.value = intensity;
      }
    }
  };

  (window as any).setLightColor = (hexColor: number) => {
    if (directionalLight) {
      directionalLight.color.setHex(hexColor);
      if (earth && earth.material) {
        const material = earth.material as THREE.ShaderMaterial;
        material.uniforms.directionalLightColor.value.setHex(hexColor);
      }
    }
  };

  (window as any).setAmbientIntensity = (intensity: number) => {
    if (ambientLight) {
      ambientLight.intensity = intensity;
      if (earth && earth.material) {
        const material = earth.material as THREE.ShaderMaterial;
        material.uniforms.ambientLightIntensity.value = intensity;
      }
    }
  };
};

// Create atmospheric glow (3d-earth style)
const createAtmosphere = () => {
  const atmosphereGeometry = new THREE.SphereGeometry(
    100, // Base size at 100 scale
    50,
    50
  );

  // Custom atmospheric shader
  const atmosphereMaterial = new THREE.ShaderMaterial({
    uniforms: {
      coeficient: { value: 1.0 },
      power: { value: 3.0 },
      glowColor: { value: new THREE.Color(0x4390d1) },
    },
    vertexShader: `
      varying vec3 vVertexWorldPosition;
      varying vec3 vVertexNormal;
      varying vec4 vFragColor;
      void main(){
        vVertexNormal = normalize(normalMatrix * normal);
        vVertexWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 glowColor;
      uniform float coeficient;
      uniform float power;
      varying vec3 vVertexNormal;
      varying vec3 vVertexWorldPosition;
      varying vec4 vFragColor;
      void main(){
        vec3 worldCameraToVertex = vVertexWorldPosition - cameraPosition;
        vec3 viewCameraToVertex = (viewMatrix * vec4(worldCameraToVertex, 0.0)).xyz;
        viewCameraToVertex = normalize(viewCameraToVertex);
        float intensity = pow(coeficient + dot(vVertexNormal, viewCameraToVertex), power);
        gl_FragColor = vec4(glowColor, intensity);
      }
    `,
    blending: THREE.NormalBlending,
    transparent: true,
    depthWrite: false,
  });

  atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
  atmosphere.position.set(
    currentEarthPosition.x,
    currentEarthPosition.y,
    currentEarthPosition.z
  );
  atmosphere.rotation.x = currentEarthRotation.x;
  atmosphere.rotation.y = currentEarthRotation.y;
  atmosphere.rotation.z = currentEarthRotation.z;
  atmosphere.scale.set(
    currentEarthScale / 100,
    currentEarthScale / 100,
    currentEarthScale / 100
  );
  scene.add(atmosphere);
};

// Convert lat/lon to 3D coordinates (offset for Earth's new position)
const latLonToVector3 = (
  lat: number,
  lon: number,
  radius: number = earthConfig.hero.scale,
  local: boolean = false
) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);

  if (local) {
    // Local coordinates (relative to Earth center at origin)
    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const y = radius * Math.cos(phi);
    const z = radius * Math.sin(phi) * Math.sin(theta);
    return new THREE.Vector3(x, y, z);
  } else {
    // World coordinates (with Earth offset)
    const x =
      -(radius * Math.sin(phi) * Math.cos(theta)) + earthConfig.hero.position.x;
    const y = radius * Math.cos(phi) + earthConfig.hero.position.y;
    const z =
      radius * Math.sin(phi) * Math.sin(theta) + earthConfig.hero.position.z;
    return new THREE.Vector3(x, y, z);
  }
};

// Create city markers with labels
const createMarkers = () => {
  markers = new THREE.Group();

  cities.forEach((city, index) => {
    const markerGroup = new THREE.Group();

    // Create flat disk marker (circle facing camera)
    const diskGeometry = new THREE.CircleGeometry(1.2, 32);
    const diskMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.9,
      side: THREE.DoubleSide,
    });
    const disk = new THREE.Mesh(diskGeometry, diskMaterial);

    // Create pulsing ring around the disk
    const ringGeometry = new THREE.RingGeometry(1.5, 1.8, 32);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x00ffff,
      transparent: true,
      opacity: 0.6,
      side: THREE.DoubleSide,
    });
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);

    // Store ring reference for pulse animation with unique phase
    ring.userData.pulsePhase = index * 0.5; // Stagger the pulse animations

    const position = latLonToVector3(
      city.lat,
      city.lon,
      100 + 0.5, // Base size at 100 scale
      true
    );

    // Position disk and ring
    disk.position.copy(position);
    ring.position.copy(position);

    // Make disk and ring face outward from Earth center (billboard effect)
    const normal = position.clone().normalize();
    disk.lookAt(normal.multiplyScalar(1000).add(position));
    ring.lookAt(normal.multiplyScalar(1000).add(position));

    markerGroup.add(disk);
    markerGroup.add(ring);

    // Create larger text label positioned to the right of the disk
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d")!;
    canvas.width = 512;
    canvas.height = 128;

    context.fillStyle = "rgba(255, 255, 255, 1)";
    context.font = "bold 48px Arial";
    context.textAlign = "left";
    context.textBaseline = "middle";
    context.fillText(city.name, 10, 64);

    const texture = new THREE.CanvasTexture(canvas);
    const spriteMaterial = new THREE.SpriteMaterial({
      map: texture,
      transparent: true,
    });
    const sprite = new THREE.Sprite(spriteMaterial);

    // Position label to the right of the disk
    const labelOffset = new THREE.Vector3(1, 0, 0).applyAxisAngle(
      new THREE.Vector3(0, 0, 1),
      Math.atan2(position.y, position.x)
    );
    const labelPos = position.clone().add(labelOffset.multiplyScalar(8));
    sprite.position.copy(labelPos);

    // Scale label based on distance from Earth center (will auto-scale with Earth)
    sprite.scale.set(15, 3.75, 1);

    markerGroup.add(sprite);
    markers.add(markerGroup);
  });

  // Position and rotate markers group to match Earth
  markers.position.set(
    currentEarthPosition.x,
    currentEarthPosition.y,
    currentEarthPosition.z
  );
  markers.rotation.x = currentEarthRotation.x;
  markers.rotation.y = currentEarthRotation.y;
  markers.rotation.z = currentEarthRotation.z;
  markers.scale.set(
    currentEarthScale / 100,
    currentEarthScale / 100,
    currentEarthScale / 100
  );
  scene.add(markers);
};

// Create dot particle array around Earth with circular points
const createDotParticles = () => {
  const dotGeometry = new THREE.BufferGeometry();
  const dotPositions = [];
  const dotCount = 1500;

  for (let i = 0; i < dotCount; i++) {
    const radius = 100 + 6 + Math.random() * 12; // Base size at 100 scale
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.random() * Math.PI;

    // Generate in local coordinates (relative to Earth center at origin)
    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.cos(phi);
    const z = radius * Math.sin(phi) * Math.sin(theta);

    dotPositions.push(x, y, z);
  }

  dotGeometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(dotPositions, 3)
  );

  const dotMaterial = new THREE.PointsMaterial({
    color: 0x00ffff,
    size: 1,
    transparent: true,
    opacity: 0.6,
    blending: THREE.AdditiveBlending,
    sizeAttenuation: true,
    map: createCircleTexture(),
  });

  dotParticles = new THREE.Points(dotGeometry, dotMaterial);

  // Position and rotate dots to match Earth
  dotParticles.position.set(
    currentEarthPosition.x,
    currentEarthPosition.y,
    currentEarthPosition.z
  );
  dotParticles.rotation.x = currentEarthRotation.x;
  dotParticles.rotation.y = currentEarthRotation.y;
  dotParticles.rotation.z = currentEarthRotation.z;
  dotParticles.scale.set(
    currentEarthScale / 100,
    currentEarthScale / 100,
    currentEarthScale / 100
  );

  scene.add(dotParticles);
};

// Create animated flight lines from other countries to Spain
const createFlightLines = () => {
  flightLines = new THREE.Group();

  // Spain is the destination (index 2 in cities array)
  const spainCity = cities[2]; // Spain
  const spainPos = latLonToVector3(
    spainCity.lat,
    spainCity.lon,
    100 + 0.5,
    true
  );

  // Create flight lines from other countries to Spain
  cities.forEach((city, index) => {
    if (index === 2) return; // Skip Spain itself

    const originPos = latLonToVector3(city.lat, city.lon, 100 + 0.5, true);

    // Create a curved path between two points on the sphere
    const midpoint = new THREE.Vector3(
      (originPos.x + spainPos.x) / 2,
      (originPos.y + spainPos.y) / 2,
      (originPos.z + spainPos.z) / 2
    );

    // Normalize and scale outward to create taller arc above surface
    const controlPoint = midpoint.clone().normalize().multiplyScalar(130);

    const curve = new THREE.QuadraticBezierCurve3(
      originPos,
      controlPoint,
      spainPos
    );

    // Create geometry from curve
    const points = curve.getPoints(100);
    const geometry = new THREE.BufferGeometry().setFromPoints(points);

    // Create material with gradient effect
    const material = new THREE.LineBasicMaterial({
      color: 0x00ffff,
      transparent: true,
      opacity: 0.8,
      linewidth: 2,
      depthTest: true,
      depthWrite: false,
    });

    const line = new THREE.Line(geometry, material);

    // Add subtle outer glow by creating a slightly thicker line behind
    const glowMaterial = new THREE.LineBasicMaterial({
      color: 0x00ffff,
      transparent: true,
      opacity: 0.15,
      linewidth: 6,
      depthTest: true,
      depthWrite: false,
    });
    const glowLine = new THREE.Line(geometry.clone(), glowMaterial);
    flightLines.add(glowLine);

    // Store animation data
    line.userData.fullGeometry = geometry.clone();
    line.userData.animationOffset = index * 0.5; // Stagger animations
    line.userData.totalPoints = points.length;

    flightLines.add(line);

    // Add animated particle traveling along the line (from origin to Spain)
    const particleGeometry = new THREE.SphereGeometry(0.4, 8, 8);
    const particleMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.9,
    });
    const particle = new THREE.Mesh(particleGeometry, particleMaterial);

    particle.userData.curve = curve;
    particle.userData.animationOffset = index * 0.5;

    flightLines.add(particle);
  });

  // Position and scale flight lines to match Earth
  flightLines.position.set(
    currentEarthPosition.x,
    currentEarthPosition.y,
    currentEarthPosition.z
  );
  flightLines.rotation.x = currentEarthRotation.x;
  flightLines.rotation.y = currentEarthRotation.y;
  flightLines.rotation.z = currentEarthRotation.z;
  flightLines.scale.set(
    currentEarthScale / 100,
    currentEarthScale / 100,
    currentEarthScale / 100
  );

  scene.add(flightLines);
};

// Update Earth position/rotation/scale with smooth interpolation
const updateEarthTransform = () => {
  if (!earth) return;

  // Smoothly interpolate position
  currentEarthPosition.x +=
    (targetEarthPosition.x - currentEarthPosition.x) * POSITION_SMOOTHING;
  currentEarthPosition.y +=
    (targetEarthPosition.y - currentEarthPosition.y) * POSITION_SMOOTHING;
  currentEarthPosition.z +=
    (targetEarthPosition.z - currentEarthPosition.z) * POSITION_SMOOTHING;

  // Smoothly interpolate rotation
  currentEarthRotation.x +=
    (targetEarthRotation.x - currentEarthRotation.x) * ROTATION_SMOOTHING;
  currentEarthRotation.y +=
    (targetEarthRotation.y - currentEarthRotation.y) * ROTATION_SMOOTHING;
  currentEarthRotation.z +=
    (targetEarthRotation.z - currentEarthRotation.z) * ROTATION_SMOOTHING;

  // Add very subtle continuous rotation to Y axis (almost imperceptible)
  continuousRotationY += 0.00002; // Extremely slow rotation

  // Smoothly interpolate scale
  currentEarthScale += (targetEarthScale - currentEarthScale) * SCALE_SMOOTHING;

  // Apply transforms to Earth (add continuous rotation to current rotation)
  earth.position.set(
    currentEarthPosition.x,
    currentEarthPosition.y,
    currentEarthPosition.z
  );
  earth.rotation.x = currentEarthRotation.x;
  earth.rotation.y = currentEarthRotation.y + continuousRotationY; // Add continuous rotation
  earth.rotation.z = currentEarthRotation.z;
  earth.scale.set(
    currentEarthScale / 100,
    currentEarthScale / 100,
    currentEarthScale / 100
  );

  // Sync all other elements with Earth
  if (borderPoints) {
    borderPoints.position.copy(earth.position);
    borderPoints.rotation.copy(earth.rotation);
    borderPoints.scale.copy(earth.scale);
  }
  if (atmosphere) {
    atmosphere.position.copy(earth.position);
    atmosphere.rotation.copy(earth.rotation);
    atmosphere.scale.copy(earth.scale);
  }
  if (earthGlow) {
    earthGlow.position.copy(earth.position);
    const glowScale = (currentEarthScale / 100) * 300; // Scale proportionally (3x the Earth size)
    earthGlow.scale.set(glowScale, glowScale, 1);
  }
  if (markers) {
    markers.position.copy(earth.position);
    markers.rotation.copy(earth.rotation);
    markers.scale.copy(earth.scale);
  }
  if (dotParticles) {
    dotParticles.position.copy(earth.position);
    dotParticles.rotation.copy(earth.rotation);
    dotParticles.scale.copy(earth.scale);
  }
  if (flightLines) {
    flightLines.position.copy(earth.position);
    flightLines.rotation.copy(earth.rotation);
    flightLines.scale.copy(earth.scale);
  }
};

// Animation loop
const animate = () => {
  animationId = requestAnimationFrame(animate);

  // Update Earth transform smoothly
  updateEarthTransform();

  // Rotate stars slowly
  if (stars) {
    stars.rotation.y += 0.0001;
  }

  // Animate marker rings - slow pulse effect
  if (markers) {
    markers.children.forEach((markerGroup) => {
      if (markerGroup instanceof THREE.Group) {
        markerGroup.children.forEach((child) => {
          // Find the ring mesh and animate it
          if (
            child instanceof THREE.Mesh &&
            child.geometry instanceof THREE.RingGeometry
          ) {
            const time = Date.now() * 0.0005; // Slower animation
            const phase = child.userData.pulsePhase || 0;

            // Slow pulse for scale
            const pulseScale = 1 + Math.sin(time + phase) * 0.2;
            child.scale.set(pulseScale, pulseScale, 1);

            // Slow pulse for opacity
            const pulseMaterial = child.material as THREE.MeshBasicMaterial;
            pulseMaterial.opacity = 0.4 + Math.sin(time + phase) * 0.3;
          }
        });
      }
    });
  }

  // Animate flight lines and particles
  if (flightLines) {
    const time = Date.now() * 0.0003; // Slow animation speed

    flightLines.children.forEach((child) => {
      // Animate particles traveling along curves
      if (child instanceof THREE.Mesh && child.userData.curve) {
        const offset = child.userData.animationOffset || 0;
        const progress = ((time + offset) % 3) / 3; // Loop every 3 seconds
        const point = child.userData.curve.getPoint(progress);
        child.position.copy(point);

        // Fade in/out at start and end
        const fadeDist = 0.1;
        if (progress < fadeDist) {
          child.material.opacity = (progress / fadeDist) * 0.9;
        } else if (progress > 1 - fadeDist) {
          child.material.opacity = ((1 - progress) / fadeDist) * 0.9;
        } else {
          child.material.opacity = 0.9;
        }
      }
    });
  }

  controls.update();
  renderer.render(scene, camera);
};

// Set target Earth config for a section
const setEarthSection = (sectionName: keyof typeof earthConfig) => {
  const config = earthConfig[sectionName];
  targetEarthPosition = { ...config.position };
  targetEarthRotation = { ...config.rotation };
  targetEarthScale = config.scale;
};

// Handle scroll for section detection and Earth transitions with smooth interpolation
const handleScroll = () => {
  const sections = [
    { id: "hero-section", config: "hero" as const },
    { id: "info-section", config: "info" as const },
    { id: "suppliers-section", config: "suppliers" as const },
    { id: "partners-section", config: "partners" as const },
    { id: "contact-section", config: "contact" as const },
  ];

  const viewportCenter = window.scrollY + window.innerHeight * 0.8; // 80% down viewport

  // Find current and next sections based on scroll position
  let currentSectionIndex = 0;
  let nextSectionIndex = 0;
  let transitionProgress = 0;

  for (let i = 0; i < sections.length; i++) {
    const element = document.getElementById(sections[i].id);
    if (!element) continue;

    const rect = element.getBoundingClientRect();
    const elementTop = rect.top + window.scrollY;
    const elementBottom = elementTop + rect.height;

    // Extended transition zone - starts at 85% through section and extends into next section
    const transitionStart = elementTop + rect.height * 0.85; // Start transition at 85% through section
    const transitionZoneLength = rect.height * 0.5; // Transition zone (50% of section height)
    const transitionEnd = transitionStart + transitionZoneLength;

    if (viewportCenter >= elementTop && viewportCenter < elementBottom) {
      currentSectionIndex = i;

      // Calculate transition progress if we're in the transition zone
      if (viewportCenter >= transitionStart && i < sections.length - 1) {
        transitionProgress =
          (viewportCenter - transitionStart) / transitionZoneLength;
        transitionProgress = Math.max(0, Math.min(1, transitionProgress)); // Clamp between 0 and 1
        nextSectionIndex = i + 1;
      }
      break;
    } else if (
      i < sections.length - 1 &&
      viewportCenter >= elementBottom &&
      viewportCenter < transitionEnd
    ) {
      // We're past the section but still in transition zone
      currentSectionIndex = i;
      nextSectionIndex = i + 1;
      transitionProgress =
        (viewportCenter - transitionStart) / transitionZoneLength;
      transitionProgress = Math.max(0, Math.min(1, transitionProgress));
      break;
    }
  }

  // Interpolate between current and next section configurations
  if (transitionProgress > 0 && nextSectionIndex < sections.length) {
    const currentConfig = earthConfig[sections[currentSectionIndex].config];
    const nextConfig = earthConfig[sections[nextSectionIndex].config];

    // Ultra-smooth interpolation using cubic ease-in-out for elegant space travel feel
    const eased =
      transitionProgress < 0.5
        ? 4 * transitionProgress * transitionProgress * transitionProgress
        : 1 - Math.pow(-2 * transitionProgress + 2, 3) / 2;

    targetEarthPosition.x =
      currentConfig.position.x +
      (nextConfig.position.x - currentConfig.position.x) * eased;
    targetEarthPosition.y =
      currentConfig.position.y +
      (nextConfig.position.y - currentConfig.position.y) * eased;
    targetEarthPosition.z =
      currentConfig.position.z +
      (nextConfig.position.z - currentConfig.position.z) * eased;

    targetEarthRotation.x =
      currentConfig.rotation.x +
      (nextConfig.rotation.x - currentConfig.rotation.x) * eased;
    targetEarthRotation.y =
      currentConfig.rotation.y +
      (nextConfig.rotation.y - currentConfig.rotation.y) * eased;
    targetEarthRotation.z =
      currentConfig.rotation.z +
      (nextConfig.rotation.z - currentConfig.rotation.z) * eased;

    targetEarthScale =
      currentConfig.scale + (nextConfig.scale - currentConfig.scale) * eased;
  } else {
    // No transition, just set to current section
    setEarthSection(sections[currentSectionIndex].config);
  }
};

// Handle window resize
const handleResize = () => {
  if (!camera || !renderer) return;

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
};

// Initialize everything
const init = () => {
  initScene();
  createStars();
  createEarth();
  createAtmosphere();
  createMarkers();
  createDotParticles();
  createFlightLines();
  animate();
};

onMounted(() => {
  init();
  window.addEventListener("resize", handleResize);
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
  window.removeEventListener("scroll", handleScroll);
  cancelAnimationFrame(animationId);

  // Cleanup Three.js resources
  if (renderer) {
    renderer.dispose();
  }
  if (controls) {
    controls.dispose();
  }
});
</script>

<template>
  <div class="earth-container" style="opacity: 0.66">
    <!-- Loading screen -->
    <div v-if="isLoading" class="loading-screen">
      <div class="loading-content">
        <div class="loading-spinner"></div>
        <p class="loading-text">Loading Earth...</p>
        <div class="loading-bar">
          <div
            class="loading-bar-fill"
            :style="{ width: `${loadingProgress}%` }"
          ></div>
        </div>
        <p class="loading-percent">{{ loadingProgress }}%</p>
      </div>
    </div>

    <!-- Canvas -->
    <canvas ref="canvasRef" class="earth-canvas"></canvas>
  </div>
</template>

<style scoped>
.earth-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 0;
  pointer-events: none;
}

.earth-canvas {
  display: block;
  width: 100%;
  height: 100%;
}

.loading-screen {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #267a6aff, #312e81);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  animation: fadeOut 0.5s ease-in-out 0.3s forwards;
}

@keyframes fadeOut {
  to {
    opacity: 0;
    pointer-events: none;
  }
}

.loading-content {
  text-align: center;
  color: white;
}

.loading-spinner {
  width: 60px;
  height: 60px;
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top-color: #10b981;
  border-radius: 50%;
  margin: 0 auto 20px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.loading-text {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 20px;
  letter-spacing: 0.05em;
}

.loading-bar {
  width: 200px;
  height: 4px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  margin: 0 auto 10px;
  overflow: hidden;
}

.loading-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #10b981, #06b6d4);
  border-radius: 2px;
  transition: width 0.3s ease;
}

.loading-percent {
  font-size: 0.875rem;
  opacity: 0.8;
}
</style>
