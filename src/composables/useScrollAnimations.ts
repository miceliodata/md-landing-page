import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

export default function useScrollAnimations() {
  gsap.registerPlugin(ScrollTrigger, SplitText)

  const setupStackedCards = () => {
    // Original stacked cards animation
    const sections = gsap.utils.toArray('.stacked-section')

    sections.forEach((section: any, i: number) => {
      if (i === 0) return // Skip first section (hero)

      gsap.fromTo(section, {
        y: '100vh',
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'top center',
          scrub: 1
        }
      })
    })
  }

  const initTextAnimations = () => {
    console.log('Initializing Mont-Fort style text animations...')

    // Kill any existing triggers first
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())

    // CHARACTER REVEAL ANIMATION (Mont-Fort style)
    const charRevealElements = gsap.utils.toArray('.animate-char-reveal')
    charRevealElements.forEach((element: any) => {
      const chars = element.textContent.split('')
      element.innerHTML = chars.map((char: string) =>
        char === ' ' ? '<span class="char">&nbsp;</span>' : `<span class="char">${char}</span>`
      ).join('')

      gsap.fromTo(element.querySelectorAll('.char'), {
        opacity: 0,
        y: 20,
        rotationX: -90
      }, {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 0.8,
        stagger: 0.02,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      })
    })

    // WORD REVEAL ANIMATION (staggered words)
    const wordRevealElements = gsap.utils.toArray('.animate-word-reveal')
    wordRevealElements.forEach((element: any) => {
      const words = element.textContent.split(' ')
      element.innerHTML = words.map((word: string) =>
        `<span class="word-wrapper"><span class="word">${word}</span></span>`
      ).join(' ')

      gsap.fromTo(element.querySelectorAll('.word'), {
        opacity: 0,
        y: 50,
        rotateX: -90
      }, {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 1,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      })
    })

    // LINE REVEAL ANIMATION (masks from bottom)
    const lineRevealElements = gsap.utils.toArray('.animate-line-reveal')
    lineRevealElements.forEach((element: any) => {
      gsap.set(element, { overflow: 'hidden' })
      gsap.fromTo(element.children || element, {
        y: '100%',
        opacity: 0
      }, {
        y: '0%',
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      })
    })

    // FADE UP ANIMATION (smooth fade from bottom)
    const fadeUpElements = gsap.utils.toArray('.animate-fade-up')
    fadeUpElements.forEach((element: any) => {
      gsap.fromTo(element, {
        opacity: 0,
        y: 60
      }, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      })
    })

    // SLIDE LEFT ANIMATION
    const slideLeftElements = gsap.utils.toArray('.animate-slide-left')
    slideLeftElements.forEach((element: any) => {
      gsap.fromTo(element, {
        opacity: 0,
        x: -100
      }, {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        }
      })
    })

    // SLIDE RIGHT ANIMATION
    const slideRightElements = gsap.utils.toArray('.animate-slide-right')
    slideRightElements.forEach((element: any) => {
      gsap.fromTo(element, {
        opacity: 0,
        x: 100
      }, {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      })
    })

    // SCALE UP ANIMATION
    const scaleElements = gsap.utils.toArray('.animate-scale')
    scaleElements.forEach((element: any) => {
      gsap.fromTo(element, {
        opacity: 0,
        scale: 0.8
      }, {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      })
    })

    // STAGGER ANIMATION (for lists/groups)
    const staggerGroups = gsap.utils.toArray('.animate-stagger-group')
    staggerGroups.forEach((group: any) => {
      const items = group.querySelectorAll('.animate-stagger')
      gsap.fromTo(items, {
        opacity: 0,
        y: 40
      }, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: group,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      })
    })

    // BLUR IN ANIMATION (text comes into focus)
    const blurInElements = gsap.utils.toArray('.animate-blur-in')
    blurInElements.forEach((element: any) => {
      gsap.fromTo(element, {
        opacity: 0,
        filter: 'blur(10px)'
      }, {
        opacity: 1,
        filter: 'blur(0px)',
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      })
    })

    // CLIP PATH REVEAL (text reveals from center/side)
    const clipRevealElements = gsap.utils.toArray('.animate-clip-reveal')
    clipRevealElements.forEach((element: any) => {
      gsap.fromTo(element, {
        clipPath: 'inset(0 100% 0 0)',
        opacity: 0
      }, {
        clipPath: 'inset(0 0% 0 0)',
        opacity: 1,
        duration: 1.5,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      })
    })

    // PARALLAX TEXT (slower movement creating depth)
    const parallaxElements = gsap.utils.toArray('.animate-parallax')
    parallaxElements.forEach((element: any) => {
      gsap.fromTo(element, {
        y: 100
      }, {
        y: -100,
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      })
    })

    // FLIP ANIMATION
    const flipElements = gsap.utils.toArray('.animate-flip')
    flipElements.forEach((element: any, index: number) => {
      gsap.fromTo(element, {
        rotationY: -90,
        opacity: 0
      }, {
        rotationY: 0,
        opacity: 1,
        duration: 1,
        delay: index * 0.1,
        ease: 'power2.out',
        transformPerspective: 1000,
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      })
    })
  }

  onMounted(() => {
    // Small delay to ensure DOM is ready
    setTimeout(initTextAnimations, 100)
  })

  return {
    setupStackedCards,
    initTextAnimations
  }
}