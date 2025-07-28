import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useScrollAnimations() {
  const setupStackedCards = () => {
    const sections = gsap.utils.toArray(".stacked-section");

    sections.forEach((section, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top bottom", // When top of section hits bottom of viewport
          end: "+=500",       // Scroll distance to animate over
          scrub: 1,           // Smooth scrubbing
          markers: false,      // Debug (remove in production)
        },
      });

      // Stack effect: Scale + opacity + overlap
      tl.from(section, {
        y: 100,
        opacity: 0,
        scale: 0.95,
        duration: 0.5,
      });
    });
  };

  return { setupStackedCards };
}