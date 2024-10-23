gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

// Our Business

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

function initMobileAnimations() {
  const sections = gsap.utils.toArray('.our-business_section');
  
  // Reset any previous transformations
  gsap.set(".our-business_section, .title-xl, .title-semibold, .our_business_para, .our_business_img img", { clearProps: "all" });

  sections.forEach((section, index) => {
    const title = section.querySelector('.title-xl');
    const subtitle = section.querySelector('.title-semibold');
    const paragraph = section.querySelector('.our_business_para');
    const image = section.querySelector('.our_business_img img');

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
    });

    if (title) {
      tl.from(title, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out"
      }, "-=0.4");

      // Parallax effect for title
      gsap.to(title, {
        y: () => -section.offsetHeight * 0.03, // Move up to 3% of section height
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });
    }

    if (subtitle) {
      tl.from(subtitle, {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out"
      }, "-=0.4");

      // Parallax effect for subtitle
      gsap.to(subtitle, {
        y: () => -section.offsetHeight * 0.02, // Move up to 2% of section height
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });
    }

    if (paragraph) {
      tl.from(paragraph, {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out"
      }, "-=0.4");

      // Parallax effect for paragraph
      gsap.to(paragraph, {
        y: () => -section.offsetHeight * 0.01, // Move up to 1% of section height
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });
    }

    if (image) {
      tl.from(image, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.6");

      // Enhanced parallax effect for image
      gsap.to(image, {
        y: () => -section.offsetHeight * 0.05, // Move up to 5% of section height
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

  // Animate the banner separately if it exists
  const banner = document.querySelector('.our-business_banner');
  if (banner) {
    gsap.from(banner, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: banner,
        start: "top 90%",
        end: "bottom 10%",
        toggleActions: "play none none reverse"
      }
    });
  }

  // Animate footer
  const footer = document.querySelector('footer');
  if (footer) {
    gsap.from(footer, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: footer,
        start: "top 95%",
        end: "bottom bottom",
        toggleActions: "play none none reverse"
      }
    });
  }
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



// sticky bottom