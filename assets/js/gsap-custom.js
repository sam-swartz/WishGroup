gsap.registerPlugin(ScrollTrigger);

function initDesktopAnimations() {
  const sections = gsap.utils.toArray('.our-business_section');
  
  // Pin the title section
  ScrollTrigger.create({
    trigger: ".our-business_banner",
    start: "top top",
    endTrigger: ".our-business_section",
    end: "bottom top", 
    pin: true,
    pinSpacing: false
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

gsap.registerPlugin(ScrollTrigger);


function initMobileAnimations() {
  const sections = gsap.utils.toArray('.our-business_section');
  const banner = document.querySelector('.our-business_banner');

  // Reset any previous transformations
  gsap.set(".our-business_banner, .our-business_section, .content", { clearProps: "all" });

  // Animate banner with a subtle parallax effect
  gsap.from(banner, {
    opacity: 0,
    y: 50,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: banner,
      start: "top 90%",
      end: "bottom 10%",
      toggleActions: "play none none reverse",
      scrub: 0.5
    }
  });

  // Animate sections with stagger and parallax effects
  sections.forEach((section, index) => {
    const content = section.querySelector('.content');
    const image = section.querySelector('img'); // Assuming there's an image in each section

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    tl.from(section, {
      opacity: 0,
      duration: 0.8,
      ease: "power2.out"
    })
    .from(content, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.4")
    .from(image, {
      scale: 1.1,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.6");

    // Add a more pronounced parallax effect
    gsap.to(content, {
      y: () => -section.offsetHeight * 0.1, // Move up to 10% of section height
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });

    // Add a subtle scale effect to images
    if (image) {
      gsap.to(image, {
        scale: 1.05,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });
    }
  });

  // Animate footer with a fade-in and slide-up effect
  gsap.from("footer", {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "footer",
      start: "top 95%",
      end: "bottom bottom",
      toggleActions: "play none none reverse"
    }
  });

  // Add a smooth scroll effect
  gsap.to(window, {
    duration: 1.5,
    scrollTo: {
      y: "#target-element", // Replace with your target element's selector
      autoKill: false
    },
    ease: "power3.inOut"
  });
}

function handleResize() {
  // Kill all ScrollTrigger instances
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  
  // Clear any inline styles added by GSAP
  gsap.set(".our-business_banner, .our-business_section, .content, footer", { clearProps: "all" });
  
  // Reinitialize animations based on screen width
  if (window.innerWidth > 768) {
    initDesktopAnimations();
  } else {
    initMobileAnimations();
  }
}

// Initialize animations based on initial screen width
if (window.innerWidth > 768) {
  initDesktopAnimations();
} else {
  initMobileAnimations();
}

// Add resize event listener
window.addEventListener('resize', gsap.debounce(handleResize, 250));