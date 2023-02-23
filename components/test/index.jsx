import PropTypes from 'prop-types'
import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { Context } from '~/context/Context'

const CustomCursor = ({ children }) => {
  const { type } = useContext(Context)
  const secondaryCursor = React.useRef(null)
  const thirdCursor = React.useRef(null)
  const mainCursor = React.useRef(null)
  const positionRef = React.useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1
  })
  const [mouse] = useState(false)
  React.useEffect(() => {
    if (mouse) {
      document.addEventListener('mousemove', (event) => {
        const { clientX, clientY } = event

        const mouseX = clientX
        const mouseY = clientY

        positionRef.current.mouseX = mouseX - secondaryCursor.current.clientWidth / 2
        positionRef.current.mouseY =
                  mouseY - secondaryCursor.current.clientHeight / 2
        mainCursor.current.style.transform = `translate3d(${mouseX -
                  mainCursor.current.clientWidth / 2}px, ${mouseY -
                  mainCursor.current.clientHeight / 2}px, 0)`
      })
    }

    return () => { }
  }, [])

  React.useEffect(() => {
    // eslint-disable-next-line
    const followMouse = () => {
      if (mouse) {
        positionRef.current.key = requestAnimationFrame(followMouse)
        const {
          mouseX,
          mouseY,
          destinationX,
          destinationY,
          distanceX,
          distanceY
        } = positionRef.current
        if (!destinationX || !destinationY) {
          positionRef.current.destinationX = mouseX
          positionRef.current.destinationY = mouseY
        } else {
          positionRef.current.distanceX = (mouseX - destinationX) * 0.1
          positionRef.current.distanceY = (mouseY - destinationY) * 0.1
          if (
            Math.abs(positionRef.current.distanceX) +
                        Math.abs(positionRef.current.distanceY) <
                        0.1
          ) {
            positionRef.current.destinationX = mouseX
            positionRef.current.destinationY = mouseY
          } else {
            positionRef.current.destinationX += distanceX
            positionRef.current.destinationY += distanceY
          }
        }
        secondaryCursor.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`
        thirdCursor.current.style.transform = `translate3d(${destinationX * 0}px, ${destinationY}px, 0)`
      }
    }
    followMouse()
  }, [])
  return (
        <Content>
            <div className={`cursor-wrapper ${type}`}>
                <div className="secondary-cursor" ref={thirdCursor}>
                    <div className="cursor-background"></div>
                </div>
                <div className="main-cursor " ref={mainCursor}>
                    <div className="main-cursor-background"></div>
                </div>
                <div className="secondary-cursor" ref={secondaryCursor}>
                    <div className="cursor-background"></div>
                </div>
            </div>
            {children}
        </Content>
  )
}

CustomCursor.propTypes = {
  children: PropTypes.any
}
const Content = styled.div`
.cursor-wrapper {
    position: fixed;
    z-index: var(--z-index-99999)
}
    .main-cursor,
.secondary-cursor {
    z-index: 10000;
    left: 0px;
    right: 22px;
    margin: auto;
    top: -123px;
    pointer-events: none;
    overflow: hidden;
    transform: translate3d(0, 0, 0);
    position: relative;
}

.main-cursor {
  transition: opacity 1s cubic-bezier(0.77, 0, 0.175, 1);
  animation: fadeIn 1s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards;
  mix-blend-mode: difference;

  .main-cursor-background {
    width: 10px;
    height: 10px;
    background: #c3323a;
    border-radius: 50%;
  }
}

.secondary-cursor {
  width: 60px;
  height: 60px;
  will-change: auto;
  position: absolute;

  .cursor-background {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px solid #c3323a;
    position: relative;
    &:after,
    &:before {
      content: "";
      width: 3px;
      height: 3px;
      border-radius: 50%;
      background: white;
      display: block;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      animation: fadeOut 0.75s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards;
    }
    &:before {
      left: 10px;
    }

    &:after {
      right: 10px;
    }
  }
}

.slider-drag {
  .cursor-background {
    animation: scaleUp 1s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards,
      bgUp 1s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards;

    &:after {
      animation: fadeIn 1s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards,
        translateRightDot 1s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards;
    }

    &:before {
      animation: fadeIn 1s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards,
        translateLeftDot 1s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards;
    }
  }

  .main-cursor {
    animation: fadeOut 0.75s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards;
  }
}

.hamburger {
  .cursor-background {
    animation: fadeOut 1s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards;
  }

  .main-cursor-background {
    animation: scaleUp 1s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards;
  }
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

@keyframes bgUp {
  from {
    background-color: transparent;
  }

  to {
    background-color: black;
  }
}

@keyframes bgDown {
  from {
    background-color: black;
  }

  to {
    background-color: transparent;
  }
}

@keyframes scaleUp {
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.5);
  }
}

@keyframes scaleDown {
  from {
    transform: scale(1.5);
  }

  to {
    transform: scale(1);
  }
}

@keyframes translateLeftDot {
  from {
    transform: translate(20px, -50%);
  }

  to {
    transform: translate(0px, -50%);
  }
}

@keyframes translateRightDot {
  from {
    transform: translate(-20px, -50%);
  }

  to {
    transform: translate(0px, -50%);
  }
}

`
export default CustomCursor
