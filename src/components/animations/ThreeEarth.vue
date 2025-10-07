<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import earthVertexShader from '../../shaders/earth/vertex.vs?raw'
import earthFragmentShader from '../../shaders/earth/fragment.fs?raw'

const canvasRef = ref<HTMLCanvasElement | null>(null)
const loadingProgress = ref(0)
const isLoading = ref(true)

let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let controls: OrbitControls
let earth: THREE.Mesh
let earthGlow: THREE.Sprite
let stars: THREE.Points
let atmosphere: THREE.Mesh
let markers: THREE.Group
let dotParticles: THREE.Points
let flyLines: THREE.Group
let borderPoints: THREE.Points
let animationId: number
let scrollY = 0
let targetRotation = 0

// City locations for markers (lat, lon, name) - only showing target countries
const cities = [
  { lat: 23.8103, lon: 90.4125, name: 'Bangladesh' }, // Dhaka
  { lat: 39.9334, lon: 32.8597, name: 'Turkey' }, // Ankara
  { lat: 40.4168, lon: -3.7038, name: 'Spain' }, // Madrid
  { lat: 39.9042, lon: 116.4074, name: 'China' }, // Beijing
]

// Initialize the scene
const initScene = () => {
  if (!canvasRef.value) return

  // Scene
  scene = new THREE.Scene()

  // Camera - positioned to show upper hemisphere from below
  camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    10000
  )
  // Position camera below Earth looking up, to show upper hemisphere
  camera.position.set(50, -80, 100)
  camera.lookAt(50, 30, 0) // Look towards upper part of Earth

  // Renderer
  renderer = new THREE.WebGLRenderer({
    canvas: canvasRef.value,
    alpha: true,
    antialias: true,
  })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)

  // Controls - disabled zoom and rotation
  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = false
  controls.enableZoom = false // Disabled zoom
  controls.enableRotate = false // Disabled mouse rotation
  controls.enablePan = false
  controls.autoRotate = false
}

// Create starry background with circular points
const createStars = () => {
  const starsGeometry = new THREE.BufferGeometry()
  const starsMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 2,
    transparent: true,
    opacity: 0.8,
    sizeAttenuation: true,
    map: createCircleTexture(),
    blending: THREE.AdditiveBlending,
  })

  const starsVertices = []
  for (let i = 0; i < 6000; i++) {
    const x = (Math.random() - 0.5) * 2000
    const y = (Math.random() - 0.5) * 2000
    const z = (Math.random() - 0.5) * 2000
    starsVertices.push(x, y, z)
  }

  starsGeometry.setAttribute(
    'position',
    new THREE.Float32BufferAttribute(starsVertices, 3)
  )

  stars = new THREE.Points(starsGeometry, starsMaterial)
  scene.add(stars)
}

// Create circular texture for round points
const createCircleTexture = () => {
  const canvas = document.createElement('canvas')
  canvas.width = 32
  canvas.height = 32
  const ctx = canvas.getContext('2d')!

  const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16)
  gradient.addColorStop(0, 'rgba(255,255,255,1)')
  gradient.addColorStop(0.5, 'rgba(255,255,255,0.5)')
  gradient.addColorStop(1, 'rgba(255,255,255,0)')

  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, 32, 32)

  const texture = new THREE.CanvasTexture(canvas)
  return texture
}

// Create Earth with custom shaders
const createEarth = () => {
  const textureLoader = new THREE.TextureLoader()

  // Earth sphere - sized to show half in Hero section
  const earthGeometry = new THREE.SphereGeometry(60, 64, 64)

  // Create shader uniforms
  const uniforms = {
    glowColor: { value: new THREE.Color(0x0cd1eb) },
    scale: { value: -1.0 },
    bias: { value: 1.0 },
    power: { value: 3.3 },
    time: { value: 100 },
    isHover: { value: false },
    map: { value: null }
  }

  // Load earth texture with shader material
  textureLoader.load(
    '/images/earth/earth.jpg',
    (texture) => {
      uniforms.map.value = texture
      loadingProgress.value = 100
      setTimeout(() => {
        isLoading.value = false
      }, 500)
    }
  )

  // Create shader material
  const earthMaterial = new THREE.ShaderMaterial({
    uniforms: uniforms,
    vertexShader: earthVertexShader,
    fragmentShader: earthFragmentShader,
  })

  earth = new THREE.Mesh(earthGeometry, earthMaterial)
  // Position Earth center in bottom-right quadrant
  earth.position.set(50, -60, 0)
  // Rotate Earth to show Asia (rotate around Y-axis to shift longitude)
  earth.rotation.y = Math.PI * 0.85 // ~153 degrees - rotated more to the right
  earth.rotation.z = 0 // Fix tilt
  scene.add(earth)

  // Add point cloud border for depth effect
  const borderGeometry = new THREE.SphereGeometry(70, 60, 60)
  const pointMaterial = new THREE.PointsMaterial({
    color: 0x81ffff,
    transparent: true,
    sizeAttenuation: true,
    opacity: 0.1,
    size: 0.5,
  })
  borderPoints = new THREE.Points(borderGeometry, pointMaterial)
  borderPoints.position.set(50, -60, 0)
  borderPoints.rotation.y = Math.PI * 0.85
  borderPoints.rotation.z = 0
  scene.add(borderPoints)

  // Create sprite-based glow (like 3d-earth style)
  const textureLoader2 = new THREE.TextureLoader()
  const glowTexture = textureLoader2.load('/images/earth/glow.png')

  const spriteMaterial = new THREE.SpriteMaterial({
    map: glowTexture,
    color: 0x4390d1,
    transparent: true,
    opacity: 0.7,
    depthWrite: false,
  })

  earthGlow = new THREE.Sprite(spriteMaterial)
  earthGlow.scale.set(180, 180, 1) // 60 * 3.0
  earthGlow.position.set(50, -60, 0)
  scene.add(earthGlow)

  // Add lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
  scene.add(ambientLight)

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
  directionalLight.position.set(5, 3, 5)
  scene.add(directionalLight)
}

// Create atmospheric glow (3d-earth style)
const createAtmosphere = () => {
  const atmosphereGeometry = new THREE.SphereGeometry(60, 50, 50)

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
  })

  atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial)
  atmosphere.position.set(50, -60, 0)
  atmosphere.rotation.y = Math.PI * 0.85 // Match Earth rotation
  atmosphere.rotation.z = 0
  scene.add(atmosphere)
}

// Convert lat/lon to 3D coordinates (offset for Earth's new position)
const latLonToVector3 = (lat: number, lon: number, radius: number = 60, local: boolean = false) => {
  const phi = (90 - lat) * (Math.PI / 180)
  const theta = (lon + 180) * (Math.PI / 180)

  if (local) {
    // Local coordinates (relative to Earth center at origin)
    const x = -(radius * Math.sin(phi) * Math.cos(theta))
    const y = radius * Math.cos(phi)
    const z = radius * Math.sin(phi) * Math.sin(theta)
    return new THREE.Vector3(x, y, z)
  } else {
    // World coordinates (with Earth offset)
    const x = -(radius * Math.sin(phi) * Math.cos(theta)) + 50
    const y = radius * Math.cos(phi) - 60
    const z = radius * Math.sin(phi) * Math.sin(theta)
    return new THREE.Vector3(x, y, z)
  }
}

// Create city markers with labels
const createMarkers = () => {
  markers = new THREE.Group()

  cities.forEach((city) => {
    // White dot marker (using local coordinates)
    const markerGeometry = new THREE.SphereGeometry(0.8, 16, 16)
    const markerMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 1.0,
    })
    const marker = new THREE.Mesh(markerGeometry, markerMaterial)

    const position = latLonToVector3(city.lat, city.lon, 60.5, true)
    marker.position.copy(position)

    markers.add(marker)

    // Create text label using CSS2DRenderer would be better, but using sprite for simplicity
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')!
    canvas.width = 256
    canvas.height = 64

    context.fillStyle = 'rgba(255, 255, 255, 0.9)'
    context.font = 'bold 32px Arial'
    context.textAlign = 'left'
    context.textBaseline = 'middle'
    context.fillText(city.name, 10, 32)

    const texture = new THREE.CanvasTexture(canvas)
    const spriteMaterial = new THREE.SpriteMaterial({
      map: texture,
      transparent: true,
    })
    const sprite = new THREE.Sprite(spriteMaterial)

    // Position label next to the marker
    const labelPos = latLonToVector3(city.lat, city.lon, 65, true)
    sprite.position.copy(labelPos)
    sprite.scale.set(10, 2.5, 1)

    markers.add(sprite)
  })

  // Position and rotate markers group to match Earth
  markers.position.set(50, -60, 0)
  markers.rotation.y = Math.PI * 0.85
  markers.rotation.z = 0
  scene.add(markers)
}

// Create dot particle array around Earth with circular points
const createDotParticles = () => {
  const dotGeometry = new THREE.BufferGeometry()
  const dotPositions = []
  const dotCount = 1500

  for (let i = 0; i < dotCount; i++) {
    const radius = 66 + Math.random() * 12 // Around the Earth
    const theta = Math.random() * Math.PI * 2
    const phi = Math.random() * Math.PI

    // Generate in local coordinates (relative to Earth center at origin)
    const x = radius * Math.sin(phi) * Math.cos(theta)
    const y = radius * Math.cos(phi)
    const z = radius * Math.sin(phi) * Math.sin(theta)

    dotPositions.push(x, y, z)
  }

  dotGeometry.setAttribute(
    'position',
    new THREE.Float32BufferAttribute(dotPositions, 3)
  )

  const dotMaterial = new THREE.PointsMaterial({
    color: 0x00ffff,
    size: 1,
    transparent: true,
    opacity: 0.6,
    blending: THREE.AdditiveBlending,
    sizeAttenuation: true,
    map: createCircleTexture(),
  })

  dotParticles = new THREE.Points(dotGeometry, dotMaterial)

  // Position and rotate dots to match Earth
  dotParticles.position.set(50, -60, 0)
  dotParticles.rotation.y = Math.PI * 0.85
  dotParticles.rotation.z = 0

  scene.add(dotParticles)
}

// Flight lines removed - now just showing city markers

// Animation loop
const animate = () => {
  animationId = requestAnimationFrame(animate)

  // Rotate earth based on scroll
  if (earth) {
    targetRotation = scrollY * 0.001
    earth.rotation.y += (targetRotation - earth.rotation.y) * 0.05

    // Sync all elements with earth rotation
    if (borderPoints) {
      borderPoints.rotation.y = earth.rotation.y
    }
    if (atmosphere) {
      atmosphere.rotation.y = earth.rotation.y
    }
    if (markers) {
      markers.rotation.y = earth.rotation.y
    }
  }

  // Rotate stars slowly
  if (stars) {
    stars.rotation.y += 0.0001
  }

  // Rotate dot particles
  if (dotParticles) {
    dotParticles.rotation.y += 0.0005
  }

  // Animate markers - subtle pulse effect
  if (markers) {
    markers.children.forEach((child, index) => {
      if (child instanceof THREE.Mesh) {
        // Gentle pulse effect for white dots
        const scale = 1 + Math.sin(Date.now() * 0.002 + index) * 0.15
        child.scale.set(scale, scale, scale)
      }
    })
  }

  controls.update()
  renderer.render(scene, camera)
}

// Handle scroll for Earth rotation and camera transitions
const handleScroll = () => {
  const heroSection = document.getElementById('hero-section')
  const infoSection = document.getElementById('info-section')
  const proposalSection = document.getElementById('proposal-section')

  if (!heroSection || !infoSection || !proposalSection || !camera) return

  const heroHeight = heroSection.offsetHeight
  const infoHeight = infoSection.offsetHeight
  const proposalHeight = proposalSection.offsetHeight

  // Start transition at 85% through Info section (nearing the bottom)
  const transitionStartOffset = infoHeight * 0.85
  const transitionStart = heroHeight + transitionStartOffset
  const thirdSectionStart = heroHeight + infoHeight
  // End transition at start of proposal section (zoom out complete by section 3)
  const transitionEnd = thirdSectionStart + (proposalHeight * 0.1) // End at 10% into proposal section

  const currentScroll = window.scrollY

  // Calculate scroll progress for transition
  if (currentScroll >= transitionStart && currentScroll < transitionEnd) {
    // Transitioning to full Earth view
    const progress = (currentScroll - transitionStart) / (transitionEnd - transitionStart)
    const smoothProgress = Math.min(progress, 1)

    // Original position: (50, -80, 100)
    // Target position: center-left with full view
    const startX = 50
    const startY = -80
    const startZ = 100

    const targetX = -30 // Center-left
    const targetY = 50   // Raised to center Earth in middle of viewer height
    const targetZ = 200 // Zoomed out to show full Earth (80-85% of viewport height)

    camera.position.x = startX + (targetX - startX) * smoothProgress
    camera.position.y = startY + (targetY - startY) * smoothProgress
    camera.position.z = startZ + (targetZ - startZ) * smoothProgress

    // Adjust lookAt target to center Earth vertically
    const startLookX = 50
    const startLookY = 30
    const startLookZ = 0

    const targetLookX = 0
    const targetLookY = 50  // Center Earth at viewer height
    const targetLookZ = 0

    camera.lookAt(
      startLookX + (targetLookX - startLookX) * smoothProgress,
      startLookY + (targetLookY - startLookY) * smoothProgress,
      startLookZ + (targetLookZ - startLookZ) * smoothProgress
    )
  } else if (currentScroll >= transitionEnd) {
    // After transition complete - maintain full Earth view and enable rotation
    camera.position.set(-30, 50, 200)
    camera.lookAt(0, 50, 0)

    // Only start rotation after proposal section
    const fourthSectionStart = thirdSectionStart + proposalHeight
    if (currentScroll >= fourthSectionStart) {
      scrollY = currentScroll - fourthSectionStart
    }
  } else {
    // Before transition - original view
    camera.position.set(50, -80, 100)
    camera.lookAt(50, 30, 0)
  }
}

// Handle window resize
const handleResize = () => {
  if (!camera || !renderer) return

  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

// Initialize everything
const init = () => {
  initScene()
  createStars()
  createEarth()
  createAtmosphere()
  createMarkers()
  createDotParticles()
  animate()
}

onMounted(() => {
  init()
  window.addEventListener('resize', handleResize)
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('scroll', handleScroll)
  cancelAnimationFrame(animationId)

  // Cleanup Three.js resources
  if (renderer) {
    renderer.dispose()
  }
  if (controls) {
    controls.dispose()
  }
})
</script>

<template>
  <div class="earth-container" style="opacity: 0.66;">
    <!-- Loading screen -->
    <div v-if="isLoading" class="loading-screen">
      <div class="loading-content">
        <div class="loading-spinner"></div>
        <p class="loading-text">Loading Earth...</p>
        <div class="loading-bar">
          <div class="loading-bar-fill" :style="{ width: `${loadingProgress}%` }"></div>
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
