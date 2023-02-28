import { useContext } from 'react'
import { Text } from '~/components/Text'
import { TextAnimation } from '~/components/TextAnimation'
import { Context } from '~/context/Context'
import { useScroll, Easing } from '~/hooks/useScroll'
import { getGlobalStyle } from '~/utils'
import { ContentMain } from './styles'
import { WrapperFigure } from './WrapperFigure'

export const Main = () => {
  const { setType } = useContext(Context)

  const progress = useScroll({
    ease: Easing.easeInOutQuad,
    start: '50vh',
    end: '140vh'
  })
  return (
    <ContentMain
      style={{ height: '100vh' }}
      className='container'
      id='Main'
    >
      {/* <TextAnimation /> */}
      <div className='ctn_first' onMouseEnter={() => setType('slider-drag')} onMouseOver={() => setType('slider-drag')}>
        <div className='ctn_first__title'>
          <h1 className='title'>
            <div className='ctn_flex'>
            <TextAnimation text='UXUI' />
            &nbsp;
            <span>DESIGN</span>
            </div>
            <span>ON DEMAND</span>
            <span>SERVICE</span>
          </h1>
        </div>
        <WrapperFigure
        right={'-270px'}
        style={{
          transform: `translateX(
                ${progress * 100 * 100}px
                )
                `
        }}
        />
      </div>
      <div className='ctn_second'>
        <WrapperFigure
        left={'0'}
            style={{
              transform: `
              rotate(${180}deg)
              translateX( ${progress * 100 * 100}px)`
            }}
        />
        <div className='wrapper_text'>
        <Text
          lineHeight='1.75rem'
          fontWeight={getGlobalStyle('--font-weight-normal')}
          as='h2'
          margin='0'
          fontSize={getGlobalStyle('--font-size-2xl')}
          opacity='80%'
          color={getGlobalStyle('--color-text-secondary')}
          label='Solicitud de diseños ilimitados'
        />
        <Text
          lineHeight='1.75rem'
          fontWeight={getGlobalStyle('--font-weight-normal')}
          margin='0'
          as='h2'
          fontSize={getGlobalStyle('--font-size-2xl')}
          opacity='80%'
          color={getGlobalStyle('--color-text-secondary')}
          label='Revisiones ilimitadas'
        />
        <Text
          lineHeight='1.75rem'
          fontWeight={getGlobalStyle('--font-weight-normal')}
          margin='0'
          as='h2'
          fontSize={getGlobalStyle('--font-size-2xl')}
          opacity='80%'
          color={getGlobalStyle('--color-text-secondary')}
          label='Entrega rápida'
        />
        </div>
      </div>
    </ContentMain>
  )
}
