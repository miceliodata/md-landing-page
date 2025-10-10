# 3D Earth Component Documentation

## Overview

The `ThreeEarth.vue` component is a fully-featured 3D Earth visualization built with Three.js, inspired by the [GhostCatcg/3d-earth](https://github.com/GhostCatcg/3d-earth) project. All Chinese text has been translated to English.

## Features

### Implemented ✅

1. **3D Earth Globe**
   - High-resolution Earth texture (Blue Marble)
   - Bump mapping for terrain elevation
   - Specular mapping for water reflection
   - Realistic lighting (ambient + directional)
   - Auto-rotation

2. **Starry Background**
   - 6,000 procedurally generated stars
   - Subtle rotation animation
   - Depth and immersion

3. **Atmospheric Glow**
   - Custom shader-based atmosphere
   - Blue glow effect around Earth
   - Additive blending for realism

4. **City Markers**
   - 6 major cities marked on globe:
     - New York
     - London
     - Tokyo
     - Sydney
     - Guangzhou
     - São Paulo
   - Glowing marker points (emerald green)
   - Pulsing ring animations
   - Light pillars extending from surface
   - Synchronized pulse effects

5. **Loading Screen**
   - Animated spinner
   - Progress bar with percentage
   - Smooth fade-out transition
   - Texture loading progress tracking

6. **Interactive Controls**
   - OrbitControls for mouse interaction
   - Auto-rotation (0.5 speed)
   - Zoom limits (150-400 units)
   - Smooth damping
   - Pan disabled for better UX

7. **Responsive Design**
   - Automatic window resize handling
   - Maintains aspect ratio
   - Pixel-perfect rendering

## Technical Details

### Dependencies
- **three** (v0.180.0) - 3D graphics library
- **@types/three** - TypeScript definitions
- **OrbitControls** - Camera controls addon

### Textures Used
All textures loaded from unpkg CDN:
- `earth-blue-marble.jpg` - Base Earth texture
- `earth-topology.png` - Bump/height map
- `earth-water.png` - Specular/reflection map

### Performance Optimizations
- Efficient geometry (SphereGeometry with optimized segments)
- Reusable materials
- RequestAnimationFrame for smooth 60fps
- Proper cleanup on component unmount
- WebGL alpha and antialiasing enabled

### Camera Setup
- **FOV**: 45 degrees
- **Position**: (0, 0, 250)
- **Near/Far**: 1 - 10000
- **Perspective camera** for realistic depth

### Scene Composition
```
Scene
├── Stars (Points)
├── Earth (Mesh)
│   ├── Geometry: SphereGeometry(50, 64, 64)
│   └── Material: PhongMaterial with textures
├── Atmosphere (Mesh)
│   ├── Geometry: SphereGeometry(52, 64, 64)
│   └── Material: ShaderMaterial (custom glow)
├── Markers (Group)
│   ├── City Points (Spheres)
│   ├── Glow Rings (RingGeometry)
│   └── Light Pillars (Cylinders)
└── Lights
    ├── AmbientLight (0.6 intensity)
    └── DirectionalLight (0.8 intensity)
```

## Usage

### Basic Implementation
```vue
<script setup>
import ThreeEarth from '@/components/animations/ThreeEarth.vue'
</script>

<template>
  <div class="relative h-screen">
    <ThreeEarth />
  </div>
</template>
```

### Customization

#### Adding New Cities
Edit the `cities` array in ThreeEarth.vue:
```typescript
const cities = [
  { lat: 40.7128, lon: -74.006, name: 'New York' },
  { lat: 48.8566, lon: 2.3522, name: 'Paris' }, // Add new city
  // ...
]
```

#### Adjusting Rotation Speed
Modify in `animate()` function:
```typescript
earth.rotation.y += 0.001  // Increase for faster rotation
```

#### Changing Colors
```typescript
// Marker color
color: 0x10b981  // Change hex color

// Atmosphere color
gl_FragColor = vec4(0.3, 0.6, 1.0, 1.0)  // R, G, B, A
```

#### Camera Position
```typescript
camera.position.set(0, 0, 250)  // x, y, z
controls.minDistance = 150      // Min zoom
controls.maxDistance = 400      // Max zoom
```

## File Structure

```
src/components/animations/
└── ThreeEarth.vue
    ├── <script setup>
    │   ├── Imports (Three.js, OrbitControls)
    │   ├── State (refs for canvas, loading)
    │   ├── City data
    │   ├── Scene initialization
    │   ├── Star creation
    │   ├── Earth creation
    │   ├── Atmosphere shaders
    │   ├── Marker creation
    │   ├── Animation loop
    │   ├── Resize handler
    │   └── Lifecycle hooks
    ├── <template>
    │   ├── Loading screen
    │   └── Canvas element
    └── <style scoped>
        ├── Container styles
        ├── Loading animations
        └── Progress bar
```

## Latitude/Longitude to 3D Coordinates

The component uses this conversion formula:
```typescript
const latLonToVector3 = (lat, lon, radius) => {
  const phi = (90 - lat) * (Math.PI / 180)
  const theta = (lon + 180) * (Math.PI / 180)

  const x = -(radius * Math.sin(phi) * Math.cos(theta))
  const y = radius * Math.cos(phi)
  const z = radius * Math.sin(phi) * Math.sin(theta)

  return new THREE.Vector3(x, y, z)
}
```

## Animation Effects

### Marker Pulse
```typescript
const scale = 1 + Math.sin(Date.now() * 0.003 + index) * 0.1
child.scale.set(scale, scale, scale)
```

### Ring Fade
```typescript
const opacity = 0.3 + Math.sin(Date.now() * 0.002 + index) * 0.2
material.opacity = opacity
```

## Browser Compatibility

- ✅ Chrome/Edge (Chromium)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers with WebGL support

## Troubleshooting

### Black screen
1. Check browser console for WebGL errors
2. Verify GPU acceleration is enabled
3. Check texture URLs are accessible

### Performance issues
1. Reduce star count (change 6000 to lower value)
2. Decrease sphere segments (64 → 32)
3. Remove markers if not needed
4. Disable auto-rotation

### Textures not loading
1. Check network tab for 404 errors
2. Verify CDN URLs are accessible
3. Consider hosting textures locally
4. Check CORS policy

## Future Enhancements

Potential additions from original project:
- [ ] Flight lines between cities
- [ ] Animated satellites in orbit
- [ ] Click interactions on markers
- [ ] City labels with sprites
- [ ] Custom texture support
- [ ] Day/night cycle
- [ ] Cloud layer
- [ ] Animated airplane paths

## Credits

Inspired by [GhostCatcg/3d-earth](https://github.com/GhostCatcg/3d-earth)
- Built with Three.js
- Textures from unpkg/three-globe
- Adapted for Vue 3 + TypeScript
