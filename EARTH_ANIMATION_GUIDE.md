# Earth Animation Control Guide

## Overview
The Earth now smoothly animates between different positions, rotations, and scales as you scroll through sections. All configuration is centralized in `src/components/animations/ThreeEarth.vue`.

## Configuration Location
**File:** `src/components/animations/ThreeEarth.vue`
**Lines:** 41-68

## Control Variables

### Earth Configuration Object (`earthConfig`)
Each section has its own configuration with three properties:

```typescript
{
  position: { x: 0, y: 0, z: 0 },  // Earth position
  rotation: { x: 0, y: 0, z: 0 },  // Earth rotation in radians
  scale: 100,                       // Earth scale (100 = default)
}
```

### Position Control
- **x**: Left/Right movement (negative = left, positive = right)
- **y**: Up/Down movement (negative = down, positive = up)
- **z**: Forward/Back movement (negative = closer to camera, positive = away)

### Rotation Control (in radians)
- **x**: Pitch (tilt up/down)
- **y**: Yaw (rotate left/right)
- **z**: Roll (tilt sideways)

**Tip:** To convert degrees to radians: `degrees * (Math.PI / 180)`
- Example: 90° = 1.571 radians (Math.PI / 2)
- Example: 180° = 3.142 radians (Math.PI)

### Scale Control
- **100** = default size
- **50** = half size
- **200** = double size

## Animation Smoothing
Control how fast the Earth transitions between positions:

**Location:** Lines 37-39

```typescript
const POSITION_SMOOTHING = 0.05;  // 0.01 = slow, 0.1 = fast
const ROTATION_SMOOTHING = 0.05;
const SCALE_SMOOTHING = 0.05;
```

## Sections
The Earth animates through these sections:
1. **hero** - Hero Section
2. **info** - About Section
3. **suppliers** - Suppliers Section
4. **partners** - Partners Section
5. **contact** - Contact Section

## How to Adjust Earth Positions

1. Open `src/components/animations/ThreeEarth.vue`
2. Find the `earthConfig` object (lines 41-68)
3. Modify the values for each section
4. Save and test by scrolling through the page

## Example Configurations

### Move Earth to the right and rotate
```typescript
info: {
  position: { x: 100, y: 0, z: 0 },
  rotation: { x: 0, y: 1.571, z: 0 },  // 90° rotation
  scale: 100,
}
```

### Zoom out and move down
```typescript
suppliers: {
  position: { x: 0, y: -50, z: 0 },
  rotation: { x: 0, y: 0, z: 0 },
  scale: 60,  // 60% of original size
}
```

### Full rotation showcase
```typescript
partners: {
  position: { x: 0, y: 0, z: 0 },
  rotation: { x: 0.524, y: 3.142, z: 0.262 },  // 30°, 180°, 15°
  scale: 120,
}
```

## Tips for Testing
1. Start with small changes (±10-20 for position, ±0.1-0.5 for rotation)
2. Test one section at a time
3. Adjust smoothing values if transitions feel too fast or slow
4. Use browser dev tools to reload and jump between sections quickly

## Current State
All positions are zeroed out (position: 0,0,0, rotation: 0,0,0, scale: 100) so you can customize each section from scratch.
