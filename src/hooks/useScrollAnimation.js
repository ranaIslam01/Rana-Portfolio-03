import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimation = () => {
  const animationRefs = useRef([]);

  useEffect(() => {
    const elements = document.querySelectorAll('.anim-on-scroll');
    
    elements.forEach((element, index) => {
      const animationType = element.dataset.animation || 'fade-up';
      const delay = element.dataset.delay || 0;
      const duration = element.dataset.duration || 1;
      
      let animation = {};
      
      // Set initial state based on animation type
      switch (animationType) {
        case 'fade-up':
          gsap.set(element, { opacity: 0, y: 50 });
          animation = { opacity: 1, y: 0 };
          break;
        case 'fade-left':
          gsap.set(element, { opacity: 0, x: -50 });
          animation = { opacity: 1, x: 0 };
          break;
        case 'fade-right':
          gsap.set(element, { opacity: 0, x: 50 });
          animation = { opacity: 1, x: 0 };
          break;
        case 'fade-down':
          gsap.set(element, { opacity: 0, y: -50 });
          animation = { opacity: 1, y: 0 };
          break;
        case 'scale':
          gsap.set(element, { opacity: 0, scale: 0.8 });
          animation = { opacity: 1, scale: 1 };
          break;
        case 'slide-up':
          gsap.set(element, { y: 100 });
          animation = { y: 0 };
          break;
        default:
          gsap.set(element, { opacity: 0, y: 30 });
          animation = { opacity: 1, y: 0 };
      }
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse",
          markers: false
        }
      });
      
      tl.to(element, {
        ...animation,
        duration: parseFloat(duration),
        delay: parseFloat(delay),
        ease: "power2.out"
      });
      
      animationRefs.current.push(tl);
    });
    
    return () => {
      animationRefs.current.forEach(tl => tl.kill());
      animationRefs.current = [];
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return { refresh: ScrollTrigger.refresh };
};

export const useStaggerAnimation = (selector, options = {}) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    
    if (elements.length === 0) return;
    
    const {
      animationType = 'fade-up',
      stagger = 0.1,
      duration = 0.8,
      start = "top 85%"
    } = options;
    
    let fromVars = {};
    let toVars = {};
    
    switch (animationType) {
      case 'fade-up':
        fromVars = { opacity: 0, y: 30 };
        toVars = { opacity: 1, y: 0 };
        break;
      case 'fade-left':
        fromVars = { opacity: 0, x: -30 };
        toVars = { opacity: 1, x: 0 };
        break;
      case 'fade-right':
        fromVars = { opacity: 0, x: 30 };
        toVars = { opacity: 1, x: 0 };
        break;
      case 'scale':
        fromVars = { opacity: 0, scale: 0.8 };
        toVars = { opacity: 1, scale: 1 };
        break;
    }
    
    gsap.set(elements, fromVars);
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: elements[0].closest('section') || elements[0],
        start: start,
        toggleActions: "play none none reverse",
      }
    });
    
    tl.to(elements, {
      ...toVars,
      duration: duration,
      stagger: stagger,
      ease: "power2.out"
    });
    
    return () => {
      tl.kill();
    };
  }, [selector, options]);
};
