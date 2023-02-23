import { useState, useLayoutEffect, useCallback } from 'react'

/**
 * Converts a DOMRect into a regular JS Object.
 *
 * For some reason, getBoundlingClientRect() returns a DOMRect consisting
 * entirely of non-enumerable properties (so things like Object.value(DOMRect)
 * do not work). DOMRects have a .toJSON() method, but this method was broken
 * in Firefox and possibly other browsers https://stackoverflow.com/a/48632087.
 * @param {DOMRect} rect
 * @returns {object}
 */
function DOMRectToObject (rect) {
  return {
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    left: rect.left,
    width: rect.width,
    height: rect.height,
    x: rect.x,
    y: rect.y
  }
}

/**
 * Measures an element with getBoundingClientRect().
 *
 * Usage:
 *    const [elementSize, refCb] = useElementSize();
 *    // ...
 *    <div ref={refCb} />
 *
 * useElementSize() returns an array containing:
 *   [0]: an object containing various measurements (e.g. width, height)
 *   [1]: a function to pass as a property in a ref attribute of the element to measure
 *
 * An element will be re-measured any time the window resizes.
 */
export default function useElementSize () {
  // elementSize is what we want. It's the result of calling:
  //   element.getBoundingClientRect()
  const [elementSize, setElementSize] = useState({})

  // We can't just take in a ref because we need to wait for it to be populated
  // with an element.
  // https://reactjs.org/docs/hooks-faq.html#how-can-i-measure-a-dom-node
  const [element, setElement] = useState(null)
  const refCb = useCallback((node) => {
    if (node !== null) {
      setElement(node)
    }
  }, [])

  // We need to use LayoutEffect here because we're measuring DOM nodes.
  useLayoutEffect(() => {
    if (!element) {
      return
    }

    // Measure the element for the first time
    setElementSize(DOMRectToObject(element.getBoundingClientRect()))

    // Re-measure the element whenever the window changes size.
    const handleResize = () => {
      setElementSize(DOMRectToObject(element.getBoundingClientRect()))
    }
    window.addEventListener('resize', handleResize)
    const cleanup = () => window.removeEventListener('resize', handleResize)

    return cleanup
  }, [element])

  return {
    size: elementSize,
    ref: refCb
  }
}
