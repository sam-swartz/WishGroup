gsap.registerPlugin(ScrollTrigger);

// Pin the title section
ScrollTrigger.create({
  trigger: ".our-business_banner",
  start: "top top",
  endTrigger: ".our-business_section",
  end: "bottom top", // Ends when the first our-business_section hits the top
  pin: true,
  pinSpacing: false
});

const sections = gsap.utils.toArray('.our-business_section');

sections.forEach((section) => {

  ScrollTrigger.create({
    trigger: section,
    start: "top top",  // Start pinning when the section hits the top of the viewport
    pin: true,
    pinSpacing: false,  // Remove default spacing, so sections overlap perfectly
    scrub: true,        // Smooth scrolling effect
    snap: {
      snapTo: 1 / (sections.length - 1),  // Snap to each section
      duration: { min: 0.2, max: 0.5 },   // Smooth snapping
      ease: "power1.inOut"
    },
    markers: false,     // Remove markers for clean UI
  });
});