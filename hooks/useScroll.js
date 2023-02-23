import { useEffect, useState } from 'react'

export const useScrollY = () => {
  // Función scroll Para mover verticalmente
  const [offsetY, setOffsetY] = useState(0)
  const handleScroll = () => { return setOffsetY(window.pageYOffset) }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => { return window.removeEventListener('scroll', handleScroll) }
  }, [])
  return {
    offsetY
  }
}
// Función scroll Para rotar
export function useScrollRotate () {
  const [position, setPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => { return setPosition(window.scrollY) }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return { position }
}

export const useScrollColor = () => {
  const [scrollNav, setScrollNav] = useState(false)
  const changeNav = () => {
    if (window?.scrollY >= 1) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])
  return {
    scrollNav
  }
}

export const useScrollHook = () => {
  const [style, setStyle] = useState({})
  useEffect(() => {
    let scrollPos = 0
    const handleChangeHeaderStyle = () => {
      if (document.body?.getBoundingClientRect && document.body.getBoundingClientRect().top > scrollPos) {
        setStyle({})
      } else {
        setStyle({ transform: 'translateY(-300%)' })
      }
      scrollPos = document.body.getBoundingClientRect().top
    }

    window.addEventListener('scroll', handleChangeHeaderStyle)

    return () => {
      window.removeEventListener('scroll', handleChangeHeaderStyle)
    }
  }, [])

  return style
}

export const Easing = {
  // no easing, no acceleration
  linear: t => t,
  // accelerating from zero velocity
  easeInQuad: t => t * t,
  // decelerating to zero velocity
  easeOutQuad: t => t * (2 - t),
  // acceleration until halfway, then deceleration
  easeInOutQuad: t => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
  // accelerating from zero velocity
  easeInCubic: t => t * t * t,
  // decelerating to zero velocity
  easeOutCubic: t => --t * t * t + 1,
  // acceleration until halfway, then deceleration
  easeInOutCubic: t =>
    t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
  // accelerating from zero velocity
  easeInQuart: t => t * t * t * t,
  // decelerating to zero velocity
  easeOutQuart: t => 1 - --t * t * t * t,
  // acceleration until halfway, then deceleration
  easeInOutQuart: t => (t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t),
  // accelerating from zero velocity
  easeInQuint: t => t * t * t * t * t,
  // decelerating to zero velocity
  easeOutQuint: t => 1 + --t * t * t * t * t,
  // acceleration until halfway, then deceleration
  easeInOutQuint: t =>
    t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t
}

const computeAbsoluteValue = (value, container) => {
  if (typeof value === 'number') {
    return value
  }
  if (typeof value === 'string') {
    const num = parseFloat(value)
    const unit = value.match(/[a-z]+$/i)
    if (unit) {
      switch (unit[0]) {
        case 'vh':
          return (num / 100) * window.innerHeight
        case '%':
          return (num / 100) * container.innerHeight
      }
    }
  }
  return NaN
}

export const useScroll = ({
  container: containerHome = null,
  start = 0,
  active = true,
  end: endBody = '0',
  ease = Easing.linear
}) => {
  const [progress, setProgress] = useState(0)
  const [end, setEnd] = useState(endBody)
  const [container, setContainer] = useState(containerHome)
  useEffect(() => {
    setEnd(container?.scrollHeight - window.innerHeight)
    setContainer(document?.documentElement)
    let raf
    let prevScroll = window.scrollY
    const tick = () => {
      if (container && active) {
        raf = requestAnimationFrame(tick)
        if (window.scrollY !== prevScroll) {
          prevScroll = window.scrollY
          // action.
          const startAbs = computeAbsoluteValue(start, container)
          const endAbs = computeAbsoluteValue(end, container)
          const progress = (container.scrollTop - startAbs) / (endAbs - startAbs)
          setProgress(ease(Math.min(1, Math.max(0, progress))))
        }
      }
    }
    tick()
    return () => cancelAnimationFrame(raf)
  }, [container, start, end, ease])
  return progress
}
