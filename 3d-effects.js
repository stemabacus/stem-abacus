/* ==========================================================================
   3D Visual Effects Engine - STEM Abacus Academy
   Three.js Particle Background + GSAP Scroll Animations + Mouse Tilt
   ========================================================================== */

(function() {
  'use strict';

  /* --------------------------------------------------------------------
     1. THREE.JS FLOATING GEOMETRIC PARTICLE BACKGROUND
     -------------------------------------------------------------------- */
  function initThreeScene() {
    const container = document.getElementById('three-particles-bg');
    if (!container) return;

    const scene = new THREE.Scene();
    
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // --- Create floating geometric shapes ---
    const shapes = [];
    const geometries = [
      new THREE.IcosahedronGeometry(0.6, 0),
      new THREE.OctahedronGeometry(0.5, 0),
      new THREE.TorusKnotGeometry(0.4, 0.15, 40, 8),
      new THREE.TetrahedronGeometry(0.55, 0),
      new THREE.DodecahedronGeometry(0.45, 0)
    ];

    // Brand colors
    const colors = [
      0x1e3c72, // Primary indigo
      0x2a5298, // Primary light
      0xd97706, // Amber/gold
      0xf59e0b, // Light amber
      0x4f7bbf, // Soft blue
      0xffb84d  // Warm gold
    ];

    const shapeCount = 35;
    const spread = 45;

    for (let i = 0; i < shapeCount; i++) {
      const geom = geometries[Math.floor(Math.random() * geometries.length)];
      const color = colors[Math.floor(Math.random() * colors.length)];
      const material = new THREE.MeshPhongMaterial({
        color: color,
        transparent: true,
        opacity: 0.15 + Math.random() * 0.25,
        wireframe: Math.random() > 0.5,
        emissive: color,
        emissiveIntensity: 0.02,
        shininess: 30
      });
      
      const mesh = new THREE.Mesh(geom, material);
      
      mesh.position.set(
        (Math.random() - 0.5) * spread,
        (Math.random() - 0.5) * spread,
        (Math.random() - 0.5) * spread
      );
      
      mesh.rotation.set(
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2
      );
      
      // Custom properties for animation
      mesh.userData = {
        rotSpeed: {
          x: (Math.random() - 0.5) * 0.01,
          y: (Math.random() - 0.5) * 0.01,
          z: (Math.random() - 0.5) * 0.01
        },
        floatSpeed: 0.002 + Math.random() * 0.005,
        floatAmp: 0.5 + Math.random() * 1.5,
        initialY: mesh.position.y,
        initialX: mesh.position.x,
        phase: Math.random() * Math.PI * 2
      };
      
      scene.add(mesh);
      shapes.push(mesh);
    }

    // --- Add ambient lights ---
    const ambientLight = new THREE.AmbientLight(0x404060, 0.4);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x1e3c72, 0.7);
    dirLight1.position.set(5, 10, 7);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xd97706, 0.4);
    dirLight2.position.set(-5, -3, 10);
    scene.add(dirLight2);

    const pointLight = new THREE.PointLight(0xf59e0b, 0.3, 50);
    pointLight.position.set(0, 0, 15);
    scene.add(pointLight);

    // --- Mouse tracking for parallax (shared) ---
    let mouseX = 0, mouseY = 0;
    let targetMouseX = 0, targetMouseY = 0;

    document.addEventListener('mousemove', (e) => {
      targetMouseX = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    });

    // --- Handle resize ---
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // --- Animation loop ---
    let time = 0;

    function animate() {
      requestAnimationFrame(animate);
      time++;

      // Smooth mouse follow
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Rotate shapes and float
      shapes.forEach(mesh => {
        const ud = mesh.userData;
        mesh.rotation.x += ud.rotSpeed.x;
        mesh.rotation.y += ud.rotSpeed.y;
        mesh.rotation.z += ud.rotSpeed.z;
        
        // Floating motion
        mesh.position.y = ud.initialY + Math.sin(time * ud.floatSpeed + ud.phase) * ud.floatAmp;
        mesh.position.x = ud.initialX + Math.cos(time * ud.floatSpeed * 0.7 + ud.phase) * ud.floatAmp * 0.5;
      });

      // Subtle camera movement following mouse
      camera.position.x += (mouseX * 1.5 - camera.position.x) * 0.02;
      camera.position.y += (mouseY * 1.5 - camera.position.y) * 0.02;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    }

    animate();
  }

  /* --------------------------------------------------------------------
     2. GSAP SCROLL-TRIGGERED 3D ANIMATIONS
     -------------------------------------------------------------------- */
  function initScrollAnimations() {
    // Register ScrollTrigger plugin
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    
    gsap.registerPlugin(ScrollTrigger);

    // --- Hero Parallax Depth ---
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
      const heroTitle = heroSection.querySelector('.hero-title');
      const heroSubtitle = heroSection.querySelector('.hero-subtitle');
      const heroImage = heroSection.querySelector('.hero-image');
      const heroBorder = heroSection.querySelector('.hero-image-border');

      // Parallax on scroll
      gsap.to(heroTitle, {
        y: 60,
        ease: 'none',
        scrollTrigger: {
          trigger: heroSection,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5
        }
      });

      gsap.to(heroSubtitle, {
        y: 40,
        ease: 'none',
        scrollTrigger: {
          trigger: heroSection,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5
        }
      });

      if (heroImage) {
        gsap.to(heroImage, {
          y: -30,
          scale: 1.05,
          ease: 'none',
          scrollTrigger: {
            trigger: heroSection,
            start: 'top top',
            end: 'bottom top',
            scrub: 2
          }
        });
      }

      if (heroBorder) {
        gsap.to(heroBorder, {
          y: -20,
          rotation: -2,
          ease: 'none',
          scrollTrigger: {
            trigger: heroSection,
            start: 'top top',
            end: 'bottom top',
            scrub: 2
          }
        });
      }
    }

    // --- Course Cards: 3D Staggered Reveal ---
    const courseCards = document.querySelectorAll('.course-card');
    if (courseCards.length) {
      gsap.fromTo(courseCards, 
        { 
          opacity: 0, 
          rotationY: 25, 
          z: -50,
          transformPerspective: 1000
        },
        {
          opacity: 1,
          rotationY: 0,
          z: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.courses-section',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }

    // --- USP Cards: Staggered Fade In ---
    const uspCards = document.querySelectorAll('.usp-card');
    if (uspCards.length) {
      gsap.fromTo(uspCards,
        {
          opacity: 0,
          y: 50,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: 'back.out(1.7)',
          scrollTrigger: {
    
