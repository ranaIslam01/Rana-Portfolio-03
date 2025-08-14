import React from 'react';
import ScrollAnimation from './ScrollAnimation';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ScrollAnimationDemo = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="text-center space-y-8">
          <h1 className="text-6xl font-bold anim-on-scroll" data-animation="fade-up">
            GSAP ScrollTrigger Demo
          </h1>
          <p className="text-xl text-muted-foreground anim-on-scroll" data-animation="fade-up" data-delay="0.3">
            Scroll down to see various animations in action
          </p>
        </div>
      </section>

      {/* Animation Examples */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-20">
          
          {/* Fade Up */}
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-8 anim-on-scroll" data-animation="fade-up">
              Fade Up Animation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="glassmorphism p-8 rounded-xl anim-on-scroll"
                  data-animation="fade-up"
                  data-delay={0.2 * i}
                >
                  <h3 className="text-xl font-semibold mb-4">Card {i}</h3>
                  <p className="text-muted-foreground">
                    This card animates with a fade-up effect when it enters the viewport.
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Side Animations */}
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-8 anim-on-scroll" data-animation="fade-up">
              Side Animations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="anim-on-scroll" data-animation="fade-left">
                <h3 className="text-2xl font-bold mb-4">From Left</h3>
                <p className="text-muted-foreground">
                  This content slides in from the left side of the screen.
                </p>
              </div>
              <div className="anim-on-scroll" data-animation="fade-right">
                <h3 className="text-2xl font-bold mb-4">From Right</h3>
                <p className="text-muted-foreground">
                  This content slides in from the right side of the screen.
                </p>
              </div>
            </div>
          </div>

          {/* Scale Animation */}
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-8 anim-on-scroll" data-animation="fade-up">
              Scale Animation
            </h2>
            <div className="glassmorphism p-12 rounded-2xl anim-on-scroll" data-animation="scale">
              <h3 className="text-3xl font-bold mb-4">Scale Effect</h3>
              <p className="text-lg text-muted-foreground">
                This element scales up from a smaller size when it enters the viewport.
              </p>
            </div>
          </div>

          {/* Staggered Animation */}
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-8 anim-on-scroll" data-animation="fade-up">
              Staggered Animation
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div
                  key={i}
                  className="glassmorphism p-6 rounded-lg text-center anim-on-scroll"
                  data-animation="fade-up"
                  data-delay={0.1 * i}
                >
                  <div className="w-8 h-8 bg-primary rounded-full mx-auto mb-2"></div>
                  <p className="text-sm">Item {i}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mixed Animations */}
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-8 anim-on-scroll" data-animation="rotate-in">
              Mixed Animations
            </h2>
            <div className="space-y-8">
              <div className="glassmorphism p-8 rounded-xl anim-on-scroll" data-animation="slide-up">
                <h3 className="text-2xl font-bold mb-4">Slide Up</h3>
                <p className="text-muted-foreground">Slides up from below</p>
              </div>
              <div className="glassmorphism p-8 rounded-xl anim-on-scroll" data-animation="fade-down">
                <h3 className="text-2xl font-bold mb-4">Fade Down</h3>
                <p className="text-muted-foreground">Fades in from above</p>
              </div>
            </div>
          </div>

          {/* ScrollAnimation Component Demo */}
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-8 anim-on-scroll" data-animation="fade-up">
              ScrollAnimation Component
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollAnimation animation="fade-left" delay={0.1}>
                <div className="glassmorphism p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-2">Component 1</h3>
                  <p className="text-muted-foreground">Using ScrollAnimation wrapper</p>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animation="scale-in" delay={0.3}>
                <div className="glassmorphism p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-2">Component 2</h3>
                  <p className="text-muted-foreground">Scale animation</p>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-right" delay={0.5}>
                <div className="glassmorphism p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-2">Component 3</h3>
                  <p className="text-muted-foreground">Fade from right</p>
                </div>
              </ScrollAnimation>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ScrollAnimationDemo;
