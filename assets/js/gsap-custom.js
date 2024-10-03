gsap.registerPlugin(ScrollTrigger);


// <-- banner Animation Start here -->



// const missionCard = gsap.timeline({ defaults: { duration: 1 } });

// missionCard.fromTo("#oneBond_mission_card", {
//         opacity: 0,
//         x: -500,
//     }, {
//         x: 0,
//         ease: "power1.in",
//         opacity: 1,
//     })
//     .fromTo("#oneBond_values_card", {
//         opacity: 0,
//         x: -500,
//     }, {
//         x: 0,
//         ease: "power1.in",
//         opacity: 1,
//     })
//     .fromTo("#oneBond_integrity_card", {
//         opacity: 0,
//         x: -500,
//     }, {
//         x: 0,
//         ease: "power1.in",
//         opacity: 1,
//     });

// ScrollTrigger.create({
//     animation: missionCard,
//     trigger: "#mission",
//     start: "top bottom",
//     end: "+=1000",
//     scrub: true,
//     markers: true
// });