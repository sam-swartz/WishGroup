gsap.registerPlugin(ScrollTrigger);

function initScrollAnimations() {
  const sections = gsap.utils.toArray('.our-business_section');
  
  // Pin the title section
  ScrollTrigger.create({
    trigger: ".our-business_banner",
    start: "top top",
    endTrigger: ".our-business_section",
    end: "bottom top", 
    pin: true,
    pinSpacing: false,
  });

  sections.forEach((section, index) => {
    const isLastSection = index === sections.length - 1;
    
    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: isLastSection ? "bottom bottom" : "bottom top",
      pin: true,
      pinSpacing: false,  
      scrub: true,       
      snap: {
        snapTo: 1 / (sections.length - 1),
        duration: { min: 0.2, max: 0.5 },
        ease: "power1.inOut"
      },
    });

    // Add fade-in animation for content
    gsap.from(section.querySelector('.content'), {
      opacity: 0,
      y: 50,
      duration: 0.5,
      scrollTrigger: {
        trigger: section,
        start: "top center",
        toggleActions: "play none none reverse"
      }
    });
  });

  // Add a separate trigger for the footer
  ScrollTrigger.create({
    trigger: "footer",
    start: "top bottom",
    end: "bottom bottom",
    scrub: true,
    onEnter: () => gsap.to("footer", { opacity: 1, duration: 0.5 }),
    onLeaveBack: () => gsap.to("footer", { opacity: 0, duration: 0.5 })
  });
}

function handleResize() {
  // Kill all ScrollTrigger instances
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  
  // Reinitialize animations
  initScrollAnimations();
}

// Initialize animations
initScrollAnimations();

// Add resize event listener
window.addEventListener('resize', gsap.debounce(handleResize, 250));