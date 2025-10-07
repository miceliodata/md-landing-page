<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const canvasRef = ref<HTMLCanvasElement | null>(null)
const loadingProgress = ref(0)
const isLoading = ref(true)

let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let controls: OrbitControls
let earth: THREE.Mesh
let earthGlow: THREE.Mesh
let stars: THREE.Points
let atmosphere: THREE.Mesh
let markers: THREE.Group
let dotParticles: THREE.Points
let flyLines: THREE.Group
let animationId: number
let scrollY = 0
let targetRotation = 0

// City locations for markers (lat, lon, name)
const cities = [
  { lat: 40.7128, lon: -74.006, name: 'New York' },
  { lat: 23.8103, lon: 90.4125, name: 'Bangladesh' }, // Dhaka
  { lat: 39.9334, lon: 32.8597, name: 'Turkey' }, // Ankara
  { lat: 39.9042, lon: 116.4074, name: 'China' }, // Beijing
  { lat: 40.4168, lon: -3.7038, name: 'Spain' }, // Madrid
]

// Flight connections
const connections = [
  { from: 0, to: 1 }, // NY to Bangladesh
  { from: 0, to: 2 }, // NY to Turkey
  { from: 3, to: 4 }, // China to Spain
  { from: 1, to: 4 }, // Bangladesh to Spain
  { from: 2, to: 4 }, // Turkey to Spain
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

// Create Earth
const createEarth = () => {
  const textureLoader = new THREE.TextureLoader()

  // Earth sphere - sized to show half in Hero section
  const earthGeometry = new THREE.SphereGeometry(60, 64, 64)

  // Load earth texture
  const earthMaterial = new THREE.MeshPhongMaterial({
    map: textureLoader.load(
      'https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg',
      () => {
        loadingProgress.value = 50
      }
    ),
    bumpMap: textureLoader.load(
      'https://unpkg.com/three-globe/example/img/earth-topology.png',
      () => {
        loadingProgress.value = 75
      }
    ),
    bumpScale: 0.3,
    specularMap: textureLoader.load(
      'https://unpkg.com/three-globe/example/img/earth-water.png',
      () => {
        loadingProgress.value = 100
        setTimeout(() => {
          isLoading.value = false
        }, 500)
      }
    ),
    specular: new THREE.Color(0x333333),
    shininess: 5,
  })

  earth = new THREE.Mesh(earthGeometry, earthMaterial)
  // Position Earth center in bottom-right quadrant
  earth.position.set(50, -60, 0)
  // Rotate Earth to show Asia (rotate around Y-axis to shift longitude)
  earth.rotation.y = Math.PI * 0.85 // ~153 degrees - rotated more to the right
  earth.rotation.z = 0 // Fix tilt
  scene.add(earth)

  // Create continent glow outline
  const glowGeometry = new THREE.SphereGeometry(60.6, 64, 64)
  const glowMaterial = new THREE.ShaderMaterial({
    uniforms: {
      glowColor: { value: new THREE.Color(0x00ffff) },
      viewVector: { value: camera.position }
    },
    vertexShader: `
      uniform vec3 viewVector;
      varying float intensity;
      void main() {
        vec3 vNormal = normalize(normalMatrix * normal);
        vec3 vNormel = normalize(normalMatrix * viewVector);
        intensity = pow(0.8 - dot(vNormal, vNormel), 3.0);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 glowColor;
      varying float intensity;
      void main() {
        vec3 glow = glowColor * intensity;
        gl_FragColor = vec4(glow, intensity * 0.5);
      }
    `,
    side: THREE.FrontSide,
    blending: THREE.AdditiveBlending,
    transparent: true
  })

  earthGlow = new THREE.Mesh(glowGeometry, glowMaterial)
  earthGlow.position.set(50, -60, 0)
  earthGlow.rotation.y = Math.PI * 0.85 // Match Earth rotation
  earthGlow.rotation.z = 0
  scene.add(earthGlow)

  // Add lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
  scene.add(ambientLight)

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
  directionalLight.position.set(5, 3, 5)
  scene.add(directionalLight)
}

// Create atmospheric glow
const createAtmosphere = () => {
  const atmosphereGeometry = new THREE.SphereGeometry(62.4, 64, 64)
  const atmosphereMaterial = new THREE.ShaderMaterial({
    vertexShader: `
      varying vec3 vNormal;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      varying vec3 vNormal;
      void main() {
        float intensity = pow(0.6 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
        gl_FragColor = vec4(0.3, 0.6, 1.0, 1.0) * intensity;
      }
    `,
    blending: THREE.AdditiveBlending,
    side: THREE.BackSide,
    transparent: true,
  })

  atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial)
  atmosphere.position.set(50, -60, 0)
  atmosphere.rotation.y = Math.PI * 0.85 // Match Earth rotation
  atmosphere.rotation.z = 0
  scene.add(atmosphere)
}

// Convert lat/lon to 3D coordinates (offset for Earth's new position)
const latLonToVector3 = (lat: number, lon: number, radius: number = 60) => {
  const phi = (90 - lat) * (Math.PI / 180)
  const theta = (lon + 180) * (Math.PI / 180)

  const x = -(radius * Math.sin(phi) * Math.cos(theta)) + 50
  const y = radius * Math.cos(phi) - 60
  const z = radius * Math.sin(phi) * Math.sin(theta)

  return new THREE.Vector3(x, y, z)
}

// Create city markers
const createMarkers = () => {
  markers = new THREE.Group()

  cities.forEach((city) => {
    // Marker point
    const markerGeometry = new THREE.SphereGeometry(0.5, 16, 16)
    const markerMaterial = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      transparent: true,
      opacity: 0.9,
    })
    const marker = new THREE.Mesh(markerGeometry, markerMaterial)

    const position = latLonToVector3(city.lat, city.lon, 60.6)
    marker.position.copy(position)

    // Glowing ring around marker
    const ringGeometry = new THREE.RingGeometry(0.8, 1.2, 32)
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      transparent: true,
      opacity: 0.5,
      side: THREE.DoubleSide,
    })
    const ring = new THREE.Mesh(ringGeometry, ringMaterial)
    ring.position.copy(position)
    ring.lookAt(0, 0, 0)

    // Light pillar
    const pillarGeometry = new THREE.CylinderGeometry(0.2, 0.5, 4, 16)
    const pillarMaterial = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.6,
    })
    const pillar = new THREE.Mesh(pillarGeometry, pillarMaterial)
    pillar.position.copy(position)
    pillar.lookAt(0, 0, 0)

    markers.add(marker)
    markers.add(ring)
    markers.add(pillar)
  })

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

// Create flight lines between cities
const createFlightLines = () => {
  flyLines = new THREE.Group()

  connections.forEach((connection) => {
    const startCity = cities[connection.from]
    const endCity = cities[connection.to]

    const startPos = latLonToVector3(startCity.lat, startCity.lon, 60.2)
    const endPos = latLonToVector3(endCity.lat, endCity.lon, 60.2)

    // Create curved line
    const curve = new THREE.QuadraticBezierCurve3(
      startPos,
      new THREE.Vector3(
        (startPos.x + endPos.x) / 2,
        (startPos.y + endPos.y) / 2 + 20, // Arc height
        (startPos.z + endPos.z) / 2
      ),
      endPos
    )

    const points = curve.getPoints(50)
    const lineGeometry = new THREE.BufferGeometry().setFromPoints(points)

    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x10b981,
      transparent: true,
      opacity: 0.6,
      linewidth: 2,
    })

    const line = new THREE.Line(lineGeometry, lineMaterial)
    flyLines.add(line)

    // Animated moving dot along the line
    const dotGeometry = new THREE.SphereGeometry(0.3, 8, 8)
    const dotMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.9,
    })
    const movingDot = new THREE.Mesh(dotGeometry, dotMaterial)
    movingDot.userData.curve = curve
    movingDot.userData.progress = Math.random()
    flyLines.add(movingDot)
  })

  scene.add(flyLines)
}

// Animation loop
const animate = () => {
  animationId = requestAnimationFrame(animate)

  // Rotate earth based on scroll
  if (earth) {
    targetRotation = scrollY * 0.001
    earth.rotation.y += (targetRotation - earth.rotation.y) * 0.05

    // Sync glow with earth rotation
    if (earthGlow) {
      earthGlow.rotation.y = earth.rotation.y
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

  // Animate markers
  if (markers) {
    markers.children.forEach((child, index) => {
      if (child instanceof THREE.Mesh) {
        // Pulse effect for markers
        const scale = 1 + Math.sin(Date.now() * 0.003 + index) * 0.1
        child.scale.set(scale, scale, scale)

        // Fade rings in and out
        if (child.geometry instanceof THREE.RingGeometry) {
          const opacity = 0.3 + Math.sin(Date.now() * 0.002 + index) * 0.2
          ;(child.material as THREE.MeshBasicMaterial).opacity = opacity
        }
      }
    })
  }

  // Animate flight line dots
  if (flyLines) {
    flyLines.children.forEach((child) => {
      if (child instanceof THREE.Mesh && child.userData.curve) {
        child.userData.progress += 0.002
        if (child.userData.progress > 1) {
          child.userData.progress = 0
        }
        const point = child.userData.curve.getPoint(child.userData.progress)
        child.position.copy(point)
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
  createFlightLines()
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
