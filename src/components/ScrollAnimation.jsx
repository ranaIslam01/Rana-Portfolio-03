import React, { useEffect, useRef, forwardRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimation = forwardRef(({ 
  children, 
  animation = 'fade-up',
  delay = 0,
  duration = 1,
  start = "top 85%",
  className = '',
  stagger = null,
  ...props 
}, ref) => {
  const elementRef = useRef();
  const timelineRef = useRef();

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let fromVars = {};
    let toVars = {};

    // Define animation variants
    switch (animation) {
      case 'fade-up':
        fromVars = { opacity: 0, y: 50 };
        toVars = { opacity: 1, y: 0 };
        break;
      case 'fade-down':
        fromVars = { opacity: 0, y: -50 };
        toVars = { opacity: 1, y: 0 };
        break;
      case 'fade-left':
        fromVars = { opacity: 0, x: -50 };
        toVars = { opacity: 1, x: 0 };
        break;
      case 'fade-right':
        fromVars = { opacity: 0, x: 50 };
        toVars = { opacity: 1, x: 0 };
        break;
      case 'scale-in':
        fromVars = { opacity: 0, scale: 0.8 };
        toVars = { opacity: 1, scale: 1 };
        break;
      case 'slide-up':
        fromVars = { y: 100 };
        toVars = { y: 0 };
        break;
      case 'rotate-in':
        fromVars = { opacity: 0, rotation: -10, scale: 0.9 };
        toVars = { opacity: 1, rotation: 0, scale: 1 };
        break;
      default:
        fromVars = { opacity: 0 };
        toVars = { opacity: 1 };
    }

    // Set initial state
    if (stagger && element.children.length > 0) {
      gsap.set(element.children, fromVars);
    } else {
      gsap.set(element, fromVars);
    }

    // Create timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: start,
        toggleActions: "play none none reverse",
        markers: false
      }
    });

    if (stagger && element.children.length > 0) {
      tl.to(element.children, {
        ...toVars,
        duration: duration,
        delay: delay,
        stagger: stagger,
        ease: "power2.out"
      });
    } else {
      tl.to(element, {
        ...toVars,
        duration: duration,
        delay: delay,
        ease: "power2.out"
      });
    }

    timelineRef.current = tl;

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, [animation, delay, duration, start, stagger]);

  return React.cloneElement(children, {
    ref: (node) => {
      elementRef.current = node;
      if (ref) {
        if (typeof ref === 'function') ref(node);
        else ref.current = node;
      }
    },
    className: `${children.props.className || ''} ${className}`.trim(),
    ...props
  });
});

ScrollAnimation.displayName = 'ScrollAnimation';

export default ScrollAnimation;
