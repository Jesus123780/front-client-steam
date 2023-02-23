import React from 'react'

export function useFrame ({ enabled = true, onFrame }) {
  const callbackRef = React.useRef(null)
  callbackRef.current = onFrame

  React.useEffect(() => {
    if (!enabled) return

    let t = performance.now()
    const frame = requestAnimationFrame(handleFrame)

    return () => {
      cancelAnimationFrame(frame)
    }

    function handleFrame (_t) {
      const dt = Math.min(1000, _t - t)
      t = _t

      callbackRef.current && callbackRef.current(dt)

      requestAnimationFrame(handleFrame)
    }
  }, [enabled])
}
