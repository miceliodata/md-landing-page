# Mont-Fort Style Text Animations

This document describes all the scroll-triggered text animations available in your project, inspired by modern agency websites like Mont-Fort.

## Available Animation Classes

### 1. **animate-char-reveal**
Character-by-character reveal animation with 3D rotation effect.
- Each character animates individually
- Characters flip from bottom (rotationX: -90deg) to normal position
- Stagger delay: 0.02s between characters
- Duration: 0.8s per character
- **Use for**: Main headings, hero titles, section titles

**Example:**
```vue
<h1 class="animate-char-reveal">About Us</h1>
```

### 2. **animate-word-reveal**
Word-by-word reveal animation with 3D flip effect.
- Each word animates individually
- Words flip from bottom with slight Y translation
- Stagger delay: 0.08s between words
- Duration: 1s per word
- **Use for**: Hero headlines, important statements

**Example:**
```vue
<h1 class="animate-word-reveal">Ecosystem Orchestrator</h1>
```

### 3. **animate-line-reveal**
Line reveal animation that slides content up from bottom.
- Entire line/block slides up into view
- Duration: 1.2s
- **Use for**: Subheadings, paragraph blocks

**Example:**
```vue
<div class="animate-line-reveal">
  <p>Your content here</p>
</div>
```

### 4. **animate-fade-up**
Simple fade-in with upward slide motion.
- Smooth fade from 0 to 1 opacity
- Slides up 60px
- Duration: 1.2s
- **Use for**: Paragraphs, descriptions, general text

**Example:**
```vue
<p class="animate-fade-up">Your paragraph text</p>
```

### 5. **animate-slide-left**
Slides in from the left side.
- Starts 100px to the left
- Fades in while sliding
- Duration: 1.2s
- **Use for**: Left-aligned content, side panels

**Example:**
```vue
<div class="animate-slide-left">Content</div>
```

### 6. **animate-slide-right**
Slides in from the right side.
- Starts 100px to the right
- Fades in while sliding
- Duration: 1s
- **Use for**: Right-aligned content, side panels

**Example:**
```vue
<div class="animate-slide-right">Content</div>
```

### 7. **animate-scale**
Scale up animation with bounce effect.
- Starts at 0.8 scale
- Scales to 1.0 with elastic bounce
- Duration: 1.2s
- **Use for**: Buttons, cards, important elements, images

**Example:**
```vue
<button class="animate-scale">Click Me</button>
```

### 8. **animate-stagger-group** + **animate-stagger**
Staggered animation for groups of items.
- Container: `animate-stagger-group`
- Items: `animate-stagger`
- Each item fades up with 0.15s delay between items
- Duration: 0.8s per item
- **Use for**: Lists, card grids, menu items

**Example:**
```vue
<div class="animate-stagger-group">
  <div class="animate-stagger">Item 1</div>
  <div class="animate-stagger">Item 2</div>
  <div class="animate-stagger">Item 3</div>
</div>
```

### 9. **animate-blur-in**
Blur-to-focus animation.
- Starts with 10px blur
- Gradually comes into focus
- Duration: 1.5s
- **Use for**: Hero text, dramatic reveals, subtitles

**Example:**
```vue
<p class="animate-blur-in">Dramatic text reveal</p>
```

### 10. **animate-clip-reveal**
Clip path reveal from left to right.
- Reveals content using CSS clip-path
- Duration: 1.5s
- **Use for**: Images, text blocks, special reveals

**Example:**
```vue
<div class="animate-clip-reveal">Content revealed left to right</div>
```

### 11. **animate-parallax**
Parallax scrolling effect.
- Moves slower than scroll speed
- Creates depth effect
- Continuous during scroll
- **Use for**: Background text, decorative elements

**Example:**
```vue
<div class="animate-parallax">Floating text</div>
```

### 12. **animate-flip**
3D flip-in animation.
- Flips from Y-axis rotation -90deg
- Duration: 1s per item
- Auto-stagger for multiple items
- **Use for**: Cards, panels, feature boxes

**Example:**
```vue
<div class="animate-flip">Card content</div>
```

## Animation Triggers

All animations are triggered when:
- The element enters 85% of viewport height (most animations)
- The element enters 90% of viewport height (slide-left)
- The element enters 80% of viewport height (word-reveal, stagger groups)

Animations use `toggleActions: 'play none none reverse'` which means:
- **onEnter**: play
- **onLeave**: none
- **onEnterBack**: none
- **onLeaveBack**: reverse

This creates smooth bidirectional animations as you scroll up and down.

## Combining Animations

You can combine certain animation classes for more complex effects:

```vue
<!-- Fade up within a stagger group -->
<div class="animate-stagger-group">
  <h2 class="animate-stagger animate-fade-up">Item 1</h2>
  <h2 class="animate-stagger animate-fade-up">Item 2</h2>
</div>
```

## Performance Considerations

- All animations respect `prefers-reduced-motion` for accessibility
- Animations use `will-change` for performance optimization
- ScrollTrigger instances are properly cleaned up on component unmount
- GPU-accelerated properties (transform, opacity) are used for smooth performance

## Customizing Animations

To modify animation timing or behavior, edit:
```
src/composables/useScrollAnimations.ts
```

To modify animation styles, edit:
```
src/assets/animations.css
```

## Current Implementation

All sections have been updated with appropriate animations:
- **HeroSection**: word-reveal, blur-in, scale
- **AboutSection**: char-reveal, stagger groups
- **MenuSection**: word-reveal, stagger
- **SuppliersSection**: char-reveal, stagger groups
- **BrandsSection**: char-reveal, fade-up, stagger
- **PartnersSection**: char-reveal, fade-up, scale, word-reveal, stagger
- **ContactSection**: word-reveal, fade-up, scale

## Troubleshooting

**Animations not playing:**
1. Check browser console for GSAP errors
2. Verify `initTextAnimations()` is called in LandingPage.vue
3. Check that animation classes are properly applied
4. Ensure ScrollTrigger is registered

**Janky animations:**
1. Reduce number of character-reveal instances (expensive)
2. Use word-reveal instead of char-reveal for long text
3. Check for excessive DOM elements

**Animations playing too early/late:**
- Adjust `start` value in useScrollAnimations.ts
- Current values: 'top 85%' (most), 'top 80%' (word/stagger), 'top 90%' (slide-left)
