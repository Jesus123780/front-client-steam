import { useIntersectionObserver } from '~/hooks/useIntersection'
import { ContentVideo } from './styles'
import { useRef } from 'react'

export const Video = () => {
  const ref = useRef(null)
  const { onScreen } = useIntersectionObserver({
    el: ref,
    active: true,
    disconnect: true,
    onEnter: () => {
      if (onScreen) {
        ref.current.play()
      }
    },
    out: () => {
      ref.current.pause()
    }
  })

  return (
    <ContentVideo id='Video'>
      <video loop muted style={{ width: '100vw' }} ref={ref}>
        <source src="/videos/video-provisional.mp4" />
      </video>
    </ContentVideo>
  )
}
