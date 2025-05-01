// tweens.js

// Tween a single element
function tweenElement(selector, options = {}) {
    const el = document.querySelector(selector);
    if (!el) return;
  
    // Default options
    const {
      from = { opacity: 0, y: 50 },
      to = { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
      delay = 0
    } = options;
  
    gsap.fromTo(el, from, { ...to, delay });
  }
  
  // Tween multiple elements
  function tweenElements(selector, options) {
    gsap.fromTo(
      selector,
      options.from,
      { ...options.to, stagger: options.stagger || 0.2 }
    );
  }
  