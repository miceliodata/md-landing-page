<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
//import { animate } from 'animejs'

const globeRef = ref<SVGElement>();
const containerRef = ref<HTMLDivElement>();

const props = defineProps<{
  size?: number;
}>();

// Make globe 75% of screen size
const size =
  props.size || Math.min(window.innerWidth, window.innerHeight) * 0.75;
const radius = size / 2 - 40;
const centerX = size / 2;
const centerY = size / 2;

// 3D Globe generation with continent outlines
const generate3DWireframe = (rotationY: number = 0) => {
  const lines = [];

  // Latitude circles (horizontal)
  for (let lat = -80; lat <= 80; lat += 20) {
    const points = [];
    const latRad = (lat * Math.PI) / 180;
    const circleRadius = Math.cos(latRad) * radius;

    for (let lon = 0; lon <= 360; lon += 5) {
      const lonRad = ((lon + rotationY) * Math.PI) / 180;
      const x = centerX + Math.sin(lonRad) * circleRadius;
      const y = centerY + Math.sin(latRad) * radius;
      const z = Math.cos(lonRad) * circleRadius;

      if (z > -radius * 0.3) {
        // Only show front hemisphere
        points.push({ x, y, visible: z > 0 });
      }
    }
    if (points.length > 2) lines.push({ type: "latitude", points, lat });
  }

  // Longitude lines (vertical)
  for (let lon = 0; lon < 360; lon += 20) {
    const points = [];
    const lonRad = ((lon + rotationY) * Math.PI) / 180;

    for (let lat = -90; lat <= 90; lat += 5) {
      const latRad = (lat * Math.PI) / 180;
      const x = centerX + Math.sin(lonRad) * Math.cos(latRad) * radius;
      const y = centerY + Math.sin(latRad) * radius;
      const z = Math.cos(lonRad) * Math.cos(latRad) * radius;

      if (z > -radius * 0.3) {
        // Only show front hemisphere
        points.push({ x, y, visible: z > 0 });
      }
    }
    if (points.length > 2) lines.push({ type: "longitude", points, lon });
  }

  return lines;
};

// Generate continent outlines (simplified)
const generateContinents = (rotationY: number = 0) => {
  const continents = [];

  // Asia outline (simplified)
  const asiaPoints = [
    [60, 20],
    [80, 30],
    [120, 35],
    [140, 40],
    [120, 50],
    [100, 60],
    [80, 45],
    [60, 35],
  ];

  // Europe outline
  const europePoints = [
    [-10, 35],
    [20, 45],
    [30, 60],
    [20, 65],
    [0, 55],
    [-15, 50],
  ];

  // Convert to 3D coordinates
  const convert3D = (points: number[][]) => {
    return points
      .map(([lon, lat]) => {
        const lonRad = ((lon + rotationY) * Math.PI) / 180;
        const latRad = (lat * Math.PI) / 180;
        const x = centerX + Math.sin(lonRad) * Math.cos(latRad) * radius;
        const y = centerY + Math.sin(latRad) * radius;
        const z = Math.cos(lonRad) * Math.cos(latRad) * radius;
        return { x, y, z, visible: z > 0 };
      })
      .filter((p) => p.z > -radius * 0.3);
  };

  continents.push({ name: "Asia", points: convert3D(asiaPoints) });
  continents.push({ name: "Europe", points: convert3D(europePoints) });

  return continents;
};

// Connection points (3D coordinates)
const getConnectionPoints = (rotationY: number = 0) => {
  const connections = [
    { name: "China", lon: 104, lat: 35 },
    { name: "Japan", lon: 138, lat: 36 },
    { name: "South Korea", lon: 128, lat: 36 },
    { name: "Thailand", lon: 100, lat: 15 },
    { name: "India", lon: 77, lat: 20 },
  ];

  const spain = { name: "Spain", lon: -4, lat: 40 };

  const convert3D = (lon: number, lat: number) => {
    const lonRad = ((lon + rotationY) * Math.PI) / 180;
    const latRad = (lat * Math.PI) / 180;
    const x = centerX + Math.sin(lonRad) * Math.cos(latRad) * radius;
    const y = centerY + Math.sin(latRad) * radius;
    const z = Math.cos(lonRad) * Math.cos(latRad) * radius;
    return { x, y, z, visible: z > -radius * 0.1 };
  };

  const spainPoint = convert3D(spain.lon, spain.lat);
  const asiaPoints = connections.map((conn) => ({
    ...conn,
    ...convert3D(conn.lon, conn.lat),
  }));

  return { spain: spainPoint, asia: asiaPoints };
};

const currentRotation = ref(0);
const wireframeLines = ref(generate3DWireframe(0));
const continents = ref(generateContinents(0));
const connectionPoints = ref(getConnectionPoints(0));

const updateGlobe = () => {
  wireframeLines.value = generate3DWireframe(currentRotation.value);
  continents.value = generateContinents(currentRotation.value);
  connectionPoints.value = getConnectionPoints(currentRotation.value);
};

const handleScroll = () => {
  const scrollY = window.scrollY;
  const heroHeight = window.innerHeight * 0.95; // 95vh from hero section
  const maxScroll = heroHeight * 0.8; // Animation completes at 80% of hero scroll
  const progress = Math.min(scrollY / maxScroll, 1);

  // Rotate globe left to right based on scroll
  currentRotation.value = progress * 90; // 0 to 90 degrees
  updateGlobe();

  // Animate connection lines appearance
  const connectionOpacity = progress > 0.5 ? (progress - 0.5) * 2 : 0;

  if (globeRef.value) {
    const connectionElements = globeRef.value.querySelectorAll(
      ".connection-line, .connection-dot"
    );
    connectionElements.forEach((el) => {
      (el as SVGElement).style.opacity = connectionOpacity.toString();
    });
  }
};

let scrollHandler: (() => void) | null = null;

onMounted(() => {
  if (!globeRef.value) return;

  // Initial globe generation
  updateGlobe();

  // Setup scroll listener
  scrollHandler = handleScroll;
  window.addEventListener("scroll", scrollHandler, { passive: true });

  // Initial call to set initial state
  handleScroll();
});

onUnmounted(() => {
  if (scrollHandler) {
    window.removeEventListener("scroll", scrollHandler);
  }
});
</script>

<template>
  <div
    ref="containerRef"
    class="wireframe-globe-container absolute inset-0 flex items-center justify-center pointer-events-none"
  >
    <svg
      ref="globeRef"
      :width="size"
      :height="size"
      class="opacity-30 transition-opacity duration-500"
      style="filter: drop-shadow(0 0 30px rgba(16, 185, 129, 0.4))"
    >
      <!-- 3D Globe wireframe -->
      <g class="globe-wireframe">
        <!-- Latitude lines -->
        <g class="latitude-lines">
          <template
            v-for="(line, _) in wireframeLines.filter(
              (l) => l.type === 'latitude'
            )"
            :key="`lat-${_}`"
          >
            <path
              :d="`M ${line.points.map((p) => `${p.x},${p.y}`).join(' L ')}`"
              fill="none"
              :stroke="`rgba(16, 185, 129, ${line.lat === 0 ? '0.8' : '0.4'})`"
              :stroke-width="line.lat === 0 ? '2' : '1'"
            />
          </template>
        </g>

        <!-- Longitude lines -->
        <g class="longitude-lines">
          <template
            v-for="(line, _) in wireframeLines.filter(
              (l) => l.type === 'longitude'
            )"
            :key="`lng-${_}`"
          >
            <path
              :d="`M ${line.points.map((p) => `${p.x},${p.y}`).join(' L ')}`"
              fill="none"
              stroke="rgba(16, 185, 129, 0.4)"
              stroke-width="1"
            />
          </template>
        </g>

        <!-- Main globe outline (equator) -->
        <circle
          :cx="centerX"
          :cy="centerY"
          :r="radius"
          fill="none"
          stroke="rgba(16, 185, 129, 0.6)"
          stroke-width="2"
          opacity="0.5"
        />
      </g>

      <!-- Continent outlines -->
      <g class="continents">
        <template
          v-for="(continent, index) in continents"
          :key="`continent-${index}`"
        >
          <path
            v-if="continent.points.length > 2"
            :d="`M ${continent.points
              .map((p) => `${p.x},${p.y}`)
              .join(' L ')} Z`"
            fill="rgba(16, 185, 129, 0.1)"
            stroke="rgba(16, 185, 129, 0.7)"
            stroke-width="1.5"
          />
        </template>
      </g>

      <!-- Connection lines from Asian countries to Spain -->
      <g class="connections">
        <!-- Connection lines -->
        <template
          v-for="(country, index) in connectionPoints.asia"
          :key="`connection-${index}`"
        >
          <path
            v-if="country.visible && connectionPoints.spain.visible"
            :d="`M ${country.x} ${country.y} Q ${
              centerX + (country.x - connectionPoints.spain.x) * 0.3
            } ${centerY - 80} ${connectionPoints.spain.x} ${
              connectionPoints.spain.y
            }`"
            fill="none"
            stroke="rgba(245, 158, 11, 0.8)"
            stroke-width="2"
            stroke-dasharray="8,4"
            class="connection-line"
            style="opacity: 0"
          />
        </template>

        <!-- Asian country dots -->
        <template
          v-for="(country, index) in connectionPoints.asia"
          :key="`asia-dot-${index}`"
        >
          <circle
            v-if="country.visible"
            :cx="country.x"
            :cy="country.y"
            r="4"
            fill="rgba(245, 158, 11, 1)"
            class="connection-dot asia-dot"
            style="opacity: 0"
          >
            <title>{{ country.name }}</title>
          </circle>
        </template>

        <!-- Spain dot -->
        <circle
          v-if="connectionPoints.spain.visible"
          :cx="connectionPoints.spain.x"
          :cy="connectionPoints.spain.y"
          r="5"
          fill="rgba(239, 68, 68, 1)"
          class="connection-dot spain-dot"
          style="opacity: 0"
        >
          <title>Spain</title>
        </circle>
      </g>
    </svg>
  </div>
</template>

<style scoped>
.wireframe-globe-container {
  z-index: 1;
}

.connection-line {
  filter: drop-shadow(0 0 8px rgba(245, 158, 11, 0.6));
  transition: opacity 0.3s ease;
}

.connection-dot {
  filter: drop-shadow(0 0 6px currentColor);
  transition: opacity 0.3s ease;
}

.asia-dot {
  filter: drop-shadow(0 0 6px rgba(245, 158, 11, 0.8));
}

.spain-dot {
  filter: drop-shadow(0 0 8px rgba(239, 68, 68, 0.8));
}

.latitude-lines path,
.longitude-lines path {
  transition: opacity 0.2s ease;
}

.continents path {
  transition: fill-opacity 0.3s ease, stroke-opacity 0.3s ease;
}
</style>
