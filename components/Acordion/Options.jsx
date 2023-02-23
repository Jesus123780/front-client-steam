import React, {
  useEffect,
  useRef,
  useState
} from 'react'
import PropTypes from 'prop-types'
import {
  MenuLeft,
  OptionMenu,
  Span,
  Row,
  ContainerBurger
} from './Styled'
import { useRouter } from 'next/router'
import { IconLinePart, IconPlus } from '@/public/Icons'

export const MenoOptions = ({
  index,
  active,
  children,
  label,
  path,
  handleClick,
  icon
}) => {
  const [height, setHeight] = useState(0)
  const [heightMenu, setHeightMenu] = useState(0)
  const refButton = useRef()
  const refMenu = useRef()
  const location = useRouter()

  useEffect(() => {
    setHeight(refButton.current.clientHeight - refMenu.current.clientHeight)
    setHeightMenu(refMenu.current.clientHeight)
    !!location.pathname.includes(path) && handleClick(index)
  }, [])
  const [status, setStatus] = useState('open')
  useEffect(() => {
    setHeight(active ? (height + heightMenu) : refButton.current.clientHeight - refMenu.current.clientHeight)
    setStatus(active ? 'open' : 'close')
  }, [active])

  return (
    <>
      <MenuLeft
        id={`menu-id__${index}`}
        type='button'
        onClick={e => handleClick(e)}
        active={active}
        ref={refButton}
        index={index}
        height={height}
      >
        <Row active={active}>
          <Span active={active}>{label}</Span>
          <ContainerBurger>
            <div
              className='BurgerMenu__container'
              onClick={() => { return handleClick(index) }}
              role='button'
            >
              <div className={status}>
               {active
                 ? <IconLinePart color={active ? '#DADADA' : '#252525' } />
                 : <IconPlus />
                }
              </div>
            </div>
          </ContainerBurger>
        </Row>
        <OptionMenu active={active} ref={refMenu}>
          {children}
        </OptionMenu>
      </MenuLeft>
    </>
  )
}
export const Options = React.memo(MenoOptions, (prevProps, nextProps) => {
  return prevProps.active === nextProps.active
})
MenoOptions.propTypes = {
  index: PropTypes.number,
  active: PropTypes.bool,
  children: PropTypes.node,
  label: PropTypes.string,
  path: PropTypes.string,
  handleClick: PropTypes.func,
  icon: PropTypes.any
}
