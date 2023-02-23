export const mergeRefs = (...refs) => {
  if (!refs.length) return null
  if (refs.length === 1) return refs[0]

  // We have to memoize the function we return, because React calls a the old
  // function ref with null when you pass a new one.
  const mergedRef = getMemoizedMergedRef((value) => {
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(value)
      } else if (ref !== null) {
        ref.current = value
      }
    })
  }, refs)

  return mergedRef
}

getMemoizedMergedRef.cache = new WeakMap()

function getMemoizedMergedRef (
  value,
  [firstRef, ...otherRefs] = [],
  cache = getMemoizedMergedRef.cache
) {
  if (!firstRef) return value
  if (!cache.has(firstRef)) {
    const nestedCache = new WeakMap()
    cache.set(firstRef, getMemoizedMergedRef(value, otherRefs, nestedCache))
  }

  return cache.get(firstRef)
}
