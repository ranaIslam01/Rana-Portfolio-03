import React, { useEffect, useRef, useState } from 'react'

const ScrollReveal = ({ children, className = '', delay = 0, direction = 'up' }) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay])

  const getTransformClass = () => {
    if (!isVisible) {
      switch (direction) {
        case 'up':
          return 'translate-y-10 opacity-0'
        case 'down':
          return '-translate-y-10 opacity-0'
        case 'left':
          return 'translate-x-10 opacity-0'
        case 'right':
          return '-translate-x-10 opacity-0'
        default:
          return 'translate-y-10 opacity-0'
      }
    }
    return 'translate-y-0 translate-x-0 opacity-100'
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${getTransformClass()} ${className}`}
    >
      {children}
    </div>
  )
}

export default ScrollReveal

