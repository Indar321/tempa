document.addEventListener("DOMContentLoaded", () => {
    // Master Timeline for smooth, deliberate motion
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    // 1. Slow zoom out of the center image
    tl.to(".hero-img", {
        scale: 1,
        duration: 2.5,
        ease: "power3.inOut"
    }, 0);

    // 2. Kinetic Text Reveal (Masking effect)
    tl.to(".word", {
        y: "0%",
        duration: 1.5,
        stagger: 0.2
    }, 0.5);

    // 3. Fade in subtitle and nav
    tl.to([".subtitle", ".minimal-nav"], {
        opacity: 1,
        duration: 1.5,
        stagger: 0.3
    }, 1.2);

    // Optional: Subtle parallax on mouse move
    const container = document.querySelector('.container-frame');
    const image = document.querySelector('.hero-image-wrapper');

    container.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 50;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 50;
        
        gsap.to(image, {
            x: xAxis,
            y: yAxis,
            duration: 1,
            ease: "power1.out"
        });
    });
});
