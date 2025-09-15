import { useState, useEffect, useCallback } from 'react'

function useAnimation(initialState = true) {
  const [isAnimating, setIsAnimating] = useState(initialState)
  const [animationSpeed, setAnimationSpeed] = useState(1)

  const toggleAnimation = useCallback(() => {
    setIsAnimating(prev => !prev)
  }, [])

  const startAnimation = useCallback(() => {
    setIsAnimating(true)
  }, [])

  const stopAnimation = useCallback(() => {
    setIsAnimating(false)
  }, [])

  const changeSpeed = useCallback((speed) => {
    setAnimationSpeed(speed)
  }, [])

  useEffect(() => {
    const handleKeyPress = (event) => {
      switch (event.key.toLowerCase()) {
        case ' ':
        case 'enter':
          event.preventDefault()
          toggleAnimation()
          break
        case 'r':
          event.preventDefault()
          startAnimation()
          break
        case 's':
          event.preventDefault()
          stopAnimation()
          break
        default:
          break
      }
    }

    document.addEventListener('keydown', handleKeyPress)
    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [toggleAnimation, startAnimation, stopAnimation])

  return {
    isAnimating,
    animationSpeed,
    toggleAnimation,
    startAnimation,
    stopAnimation,
    changeSpeed
  }
}

export default useAnimation