

document.addEventListener("DOMContentLoaded", function() {

  // Check if particles.js container exists
  if (document.getElementById('particles-js')) {
    // Initialize particles.js with optimized settings
    initParticles();
    
    // Initialize enhanced gold dust effects
    initGoldDustEffects();
  }
  
  // Initialize scroll animations
  setTimeout(function() {
    initScrollAnimations();
  }, 500); // Add a small delay to ensure DOM is fully loaded
    
  // Initialize interactive features
  initInteractions();

  initEmailPopup(); 

});

/**
 * Initialize particles.js with optimized settings
 */
function initParticles() {
  try {
    particlesJS('particles-js', {
      "particles": {
        "number": {
          "value": 120, // Reduced for better performance
          "density": {
            "enable": true,
            "value_area": 1000
          }
        },
        "color": {
          "value": ["#ffd700", "#ffed4e", "#d4af37", "#f0e68c"]
        },
        "shape": {
          "type": ["circle"],
          "stroke": {
            "width": 0,
            "color": "#000000"
          }
        },
        "opacity": {
          "value": 0.4,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 0.5,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 2.5,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 1.5,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": false
        },
        "move": {
          "enable": true,
          "speed": 2,
          "direction": "top",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": true,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "repulse": {
            "distance": 150,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          }
        }
      },
      "retina_detect": false // Disabled for better performance
    });
    console.log("Particles.js initialized successfully");
  } catch (error) {
    console.error("Error initializing particles.js:", error);
  }
}

/**
 * Initialize gold dust effects
 */
function initGoldDustEffects() {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  // Add keyframes for animations
  addKeyframesStyles();
  
  // Create gold dust clouds for visual depth
  createGoldDustClouds(hero);
  
  // Create light flares for focus points
  createLightFlares(hero);
  
  // Initialize dust particle effect
  createGoldDustParticles(hero);
  
  // Add interactive light trail effect on non-mobile devices
  if (window.innerWidth > 768) {
    addLightTrailEffect(hero);
  }
}

/**
 * Add keyframes styles for animations
 */
function addKeyframesStyles() {
  const style = document.createElement('style');
  style.textContent = `
    /* Cloud floating animation */
    @keyframes cloudFloat {
      0% {
        transform: translateY(0px) translateX(0px) scale(1) rotate(0deg);
        opacity: 0.4;
      }
      50% {
        transform: translateY(-45px) translateX(15px) scale(1.1) rotate(3deg);
        opacity: 0.7;
      }
      100% {
        transform: translateY(0px) translateX(0px) scale(1) rotate(0deg);
        opacity: 0.4;
      }
    }
    
    /* Faster floating animation for foreground elements */
    @keyframes cloudFloatFast {
      0% {
        transform: translateY(0px) translateX(0px) scale(1);
        opacity: 0.5;
      }
      50% {
        transform: translateY(-30px) translateX(-10px) scale(1.1);
        opacity: 0.8;
      }
      100% {
        transform: translateY(0px) translateX(0px) scale(1);
        opacity: 0.5;
      }
    }
    
    /* Light flare pulsing animation */
    @keyframes flarePulse {
      0% {
        transform: scale(0.8);
        opacity: 0.3;
        filter: blur(5px);
      }
      50% {
        transform: scale(1.3);
        opacity: 0.7;
        filter: blur(8px);
      }
      100% {
        transform: scale(0.8);
        opacity: 0.3;
        filter: blur(5px);
      }
    }
    
    /* Gold dust particle animation */
    @keyframes goldDustRise {
      0% {
        transform: translateY(20px);
        opacity: 0;
      }
      30% {
        opacity: 0.8;
      }
      80% {
        opacity: 0.4;
      }
      100% {
        transform: translateY(-100px) translateX(var(--tx));
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
}

/**
 * Create gold dust clouds for visual depth
 * @param {HTMLElement} hero - The hero section element
 */
function createGoldDustClouds(hero) {
  // Determine number of clouds based on screen size
  const isDesktop = window.innerWidth >= 768;
  const backgroundClouds = isDesktop ? 6 : 3;
  const foregroundClouds = isDesktop ? 4 : 2;
  
  // Create background layer clouds
  for (let i = 0; i < backgroundClouds; i++) {
    const cloud = document.createElement('div');
    cloud.className = 'gold-cloud layer-1';
    
    const size = Math.random() * 180 + 120;
    const x = Math.random() * 120 - 10;
    const y = 40 + Math.random() * 60;
    
    Object.assign(cloud.style, {
      position: 'absolute',
      borderRadius: '50%',
      pointerEvents: 'none',
      zIndex: '1',
      width: size + 'px',
      height: size * 0.6 + 'px',
      left: x + '%',
      bottom: y + '%',
      background: `radial-gradient(ellipse at center, 
        rgba(255, 215, 0, ${0.1 + Math.random() * 0.1}) 0%, 
        rgba(212, 175, 55, ${0.07 + Math.random() * 0.05}) 40%, 
        transparent 75%)`,
      filter: 'blur(8px)',
      transform: `rotate(${Math.random() * 360}deg)`,
      animation: `cloudFloat ${12 + Math.random() * 8}s ease-in-out infinite ${Math.random() * 5}s`
    });
    
    hero.appendChild(cloud);
  }
  
  // Create foreground layer clouds
  for (let i = 0; i < foregroundClouds; i++) {
    const cloud = document.createElement('div');
    cloud.className = 'gold-cloud layer-2';
    
    const size = Math.random() * 100 + 60;
    const x = Math.random() * 100;
    const y = 20 + Math.random() * 40;
    
    Object.assign(cloud.style, {
      position: 'absolute',
      borderRadius: '60% 40% 70% 30% / 50% 60% 40% 50%',
      pointerEvents: 'none',
      zIndex: '2',
      width: size + 'px',
      height: size * 0.7 + 'px',
      left: x + '%',
      bottom: y + '%',
      background: `radial-gradient(ellipse at center, 
        rgba(255, 215, 0, ${0.18 + Math.random() * 0.12}) 0%, 
        rgba(255, 235, 59, ${0.12 + Math.random() * 0.08}) 30%, 
        transparent 70%)`,
      filter: 'blur(3px)',
      transform: `rotate(${Math.random() * 360}deg)`,
      animation: `cloudFloatFast ${8 + Math.random() * 5}s ease-in-out infinite ${Math.random() * 3}s`
    });
    
    hero.appendChild(cloud);
  }
}

/**
 * Create light flares for focus points
 * @param {HTMLElement} hero - The hero section element
 */
function createLightFlares(hero) {
  for (let i = 0; i < 3; i++) {
    const flare = document.createElement('div');
    flare.className = 'light-flare';
    
    const size = Math.random() * 60 + 30;
    const x = 10 + Math.random() * 80;
    const y = 5 + Math.random() * 20;
    
    Object.assign(flare.style, {
      position: 'absolute',
      borderRadius: '50%',
      pointerEvents: 'none',
      zIndex: '2',
      width: size + 'px',
      height: size + 'px',
      left: x + '%',
      bottom: y + '%',
      background: `radial-gradient(circle, 
        rgba(255, 255, 220, 0.5) 0%, 
        rgba(255, 215, 0, 0.3) 30%, 
        rgba(255, 215, 0, 0.1) 60%,
        transparent 80%)`,
      filter: 'blur(5px)',
      animation: `flarePulse ${4 + Math.random() * 3}s ease-in-out infinite ${Math.random() * 2}s`
    });
    
    hero.appendChild(flare);
  }
}

/**
 * Create gold dust particles
 * @param {HTMLElement} hero - The hero section element
 */
function createGoldDustParticles(hero) {
  const particleContainer = document.createElement('div');
  particleContainer.className = 'dust-particle-container';
  
  Object.assign(particleContainer.style, {
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    pointerEvents: 'none',
    zIndex: '3'
  });
  
  hero.appendChild(particleContainer);
  
  // Determine performance settings based on device
  const isDesktop = window.innerWidth >= 768;
  const particlesPerBatch = isDesktop ? 3 : 2;
  const intervalFrequency = isDesktop ? 300 : 400; // ms
  
  // Create new particles periodically
  const particleInterval = setInterval(() => {
    // Create particles per interval
    for (let i = 0; i < particlesPerBatch; i++) {
      const particle = document.createElement('div');
      particle.className = 'gold-dust-particle';
      
      const size = Math.random() * 4 + 1;
      const x = Math.random() * 100;
      const txVal = -50 + Math.random() * 100; // Random x drift
      
      Object.assign(particle.style, {
        position: 'absolute',
        borderRadius: '50%',
        width: size + 'px',
        height: size + 'px',
        left: x + '%',
        bottom: '0',
        background: `radial-gradient(circle, 
          rgba(255, 215, 0, 0.95) 0%, 
          rgba(255, 215, 0, 0.7) 50%, 
          transparent 90%)`,
        boxShadow: '0 0 4px rgba(255, 215, 0, 0.9)'
      });
      
      particle.style.setProperty('--tx', txVal + 'px');
      
      // Random animation duration
      const duration = 3 + Math.random() * 3;
      particle.style.animation = `goldDustRise ${duration}s ease-out forwards`;
      
      particleContainer.appendChild(particle);
      
      // Remove particles after animation completes
      setTimeout(() => {
        if (particleContainer.contains(particle)) {
          particleContainer.removeChild(particle);
        }
      }, duration * 1000);
    }
  }, intervalFrequency);
  
  // Cleanup interval when navigating away
  window.addEventListener('beforeunload', () => {
    clearInterval(particleInterval);
  });
  
  // Adjust interval if window is resized
  window.addEventListener('resize', () => {
    clearInterval(particleInterval);
    // Restart with new settings
    createGoldDustParticles(hero);
  }, { once: true });
}

/**
 * Add interactive light trail effect
 * @param {HTMLElement} hero - The hero section element
 */
function addLightTrailEffect(hero) {
  let trailPoints = [];
  let isMoving = false;
  let animationFrameId;
  
  hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Limit number of points added per movement for performance
    if (trailPoints.length < 30) {
      trailPoints.push({x, y, age: 0, size: 10 + Math.random() * 15});
    }
    isMoving = true;
  });
  
  hero.addEventListener('mouseleave', () => {
    isMoving = false;
  });
  
  // Render and update trail points
  function updateTrail() {
    const canvas = document.querySelector('#particles-js canvas');
    if (canvas) {
      const ctx = canvas.getContext('2d');
      
      // Update trail points
      for (let i = 0; i < trailPoints.length; i++) {
        const point = trailPoints[i];
        point.age++;
        
        if (point.age > 20) {
          trailPoints.splice(i, 1);
          i--;
        } else {
          // Draw glowing point
          const opacity = 1 - point.age / 20;
          const size = point.size * (1 - point.age / 20);
          
          const gradient = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, size);
          gradient.addColorStop(0, `rgba(255, 255, 200, ${opacity * 0.8})`);
          gradient.addColorStop(0.5, `rgba(255, 215, 0, ${opacity * 0.5})`);
          gradient.addColorStop(1, `rgba(255, 215, 0, 0)`);
          
          ctx.save();
          ctx.globalCompositeOperation = 'lighter';
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }
      
      // Limit number of trail points for performance
      if (trailPoints.length > 30) {
        trailPoints = trailPoints.slice(-30);
      }
    }
    
    animationFrameId = requestAnimationFrame(updateTrail);
  }
  
  updateTrail();
  
  // Cleanup animation frame when navigating away
  window.addEventListener('beforeunload', () => {
    cancelAnimationFrame(animationFrameId);
  });
}



/**
 * Initialize scroll animations for elements
 */
function initScrollAnimations() {
  // Get all elements that need animation
  const animatedElements = document.querySelectorAll(
    '.story-left, .story-section, .story-image, .story-highlight, .ceo-portrait, h1, h2'
  );
    
    // Create a new Intersection Observer instance
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // If element is in view
        if (entry.isIntersecting) {
          // Add animation class
          entry.target.classList.add('animate');
          // Once animated, stop observing this element
          observer.unobserve(entry.target);
        }
      });
    }, {
    // Element is considered in view when 20% visible
    threshold: 0.2,
    // Start animation slightly before element enters viewport
    rootMargin: '0px 0px -50px 0px'
  });

  // Also observe zigzag rows
  const zigzagRows = document.querySelectorAll('.zigzag-row');
  if (zigzagRows.length > 0) {
    zigzagRows.forEach(element => {
      observer.observe(element);
    });
  }

  // Start observing each element
  animatedElements.forEach(element => {
    observer.observe(element);
  });

  // Apply immediate animation for already visible elements
  // This ensures elements that are already in viewport on page load get animated
  animatedElements.forEach(element => {
    const rect = element.getBoundingClientRect();
    const isVisible = (
      rect.top <= window.innerHeight && 
      rect.bottom >= 0
    );
    
    if (isVisible) {
      // Add animation class with slight delay for better effect
      setTimeout(() => {
        element.classList.add('animate');
      }, 300);
    }
  });
  
  // Create global scroll effects
  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    
    // Parallax effect for story background
    const storySection = document.querySelector('.company-story');
    if (storySection) {
      const storyRect = storySection.getBoundingClientRect();
      if (storyRect.top < window.innerHeight && storyRect.bottom > 0) {
        const parallaxOffset = (window.innerHeight - storyRect.top) * 0.1;
        const bg = document.querySelector('.story-bg');
        if (bg) {
          bg.style.transform = `translateY(${parallaxOffset}px)`;
        }
      }
    }
  });
}

/**
 * Initialize interactive features
 */
function initInteractions() {
  
  
  // Animation for gradient text
  const heroTitle = document.querySelector('.hero h1');
  if (heroTitle) {
    setInterval(() => {
      heroTitle.style.backgroundPosition = `${Math.random() * 100}% 50%`;
    }, 3000);
  }

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId !== '#') {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
          
          // Close mobile menu when clicking a navigation link
          const mobileMenuBtn = document.querySelector('.mobile-menu-toggle');
          const navLinks = document.querySelector('.nav-links');
          if (mobileMenuBtn && mobileMenuBtn.classList.contains('active')) {
            mobileMenuBtn.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.classList.remove('menu-open');
          }
        }
      }
    });
  });
  
  // Mobile navigation menu toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileMenuBtn && navLinks) {
    // Set correct initial state
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    
    mobileMenuBtn.addEventListener('click', function() {
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      
      // Toggle menu state
      this.classList.toggle('active');
      navLinks.classList.toggle('active');
      document.body.classList.toggle('menu-open');
      
      // Update accessibility attributes
      this.setAttribute('aria-expanded', !isExpanded);
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (navLinks.classList.contains('active') &&
          !navLinks.contains(event.target) &&
          !mobileMenuBtn.contains(event.target)) {
        mobileMenuBtn.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.classList.remove('menu-open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      }
    });
    
    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function() {
        mobileMenuBtn.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.classList.remove('menu-open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

/**
 * 이메일 팝업 및 EmailJS 전송 기능 초기화
 */
function initEmailPopup() {
  // --- EmailJS 설정 ---
  // 중요: 아래 값들을 자신의 EmailJS 계정 정보로 반드시 교체하세요.
  const serviceID = 'service_sy3t3st';
  const templateID = 'template_vd6aicd';
  const publicKey = 'otj91E1g0eVHidqoe';

  // EmailJS 초기화
  (function(){
      emailjs.init({
          publicKey: publicKey,
      });
  })();
  
  // --- DOM 요소 선택 ---
  const popupOverlay = document.getElementById('email-popup-overlay');
  const contactForm = document.getElementById('contact-form');
  const sendButton = document.getElementById('send-email-btn');
  const formStatus = document.getElementById('form-status');
  const closePopupButton = document.getElementById('close-popup-btn');
  const emailPopupTriggers = document.querySelectorAll('.open-email-popup');

  // --- 이벤트 리스너 ---
  
  // 팝업 열기
  emailPopupTriggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => {
          e.preventDefault();
          popupOverlay.classList.add('visible');
      });
  });

  // 팝업 닫기 함수
  const closePopup = () => {
      popupOverlay.classList.remove('visible');
  }

  // 닫기 버튼 또는 오버레이 클릭 시 팝업 닫기
  closePopupButton.addEventListener('click', closePopup);
  popupOverlay.addEventListener('click', (e) => {
      // 팝업 콘텐츠가 아닌 배경(오버레이)을 클릭했을 때만 닫힘
      if (e.target === popupOverlay) {
          closePopup();
      }
  });

  // 폼 제출 처리
  contactForm.addEventListener('submit', function(event) {
      event.preventDefault();

      // 간단한 유효성 검사
      if (!this.firstName.value || !this.lastName.value || !this.email.value || !this.subject.value || !this.message.value) {
          formStatus.textContent = '모든 필수 항목을 입력해주세요.';
          formStatus.style.color = 'red';
          return;
      }

      // EmailJS로 메일 전송
      sendButton.disabled = true;
      sendButton.textContent = '전송 중...';
      formStatus.textContent = '';
      
      emailjs.sendForm(serviceID, templateID, this)
          .then(() => {
              sendButton.disabled = false;
              sendButton.textContent = 'Send Message';
              formStatus.textContent = '메일이 성공적으로 전송되었습니다!';
              formStatus.style.color = 'green';
              
              contactForm.reset(); // 폼 초기화
              
              // 2초 후 팝업 닫기
              setTimeout(() => {
                  closePopup();
                  formStatus.textContent = ''; // 상태 메시지 초기화
              }, 2000);
              
          }, (err) => {
              sendButton.disabled = false;
              sendButton.textContent = 'Send Message';
              formStatus.textContent = '메일 전송에 실패했습니다. ' + JSON.stringify(err);
              formStatus.style.color = 'red';
          });
  });
}
