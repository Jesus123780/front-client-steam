import { CircleCard } from '~/components/CircleCard'
import { Text } from '~/components/Text'
import { arrayService } from '~/mock/servicesMock'
import { getGlobalStyle } from '~/utils'
import { Marquee } from './Marquee'
import {
  Work,
  Service,
  WrapperCard
} from './styles'

export const SectionWork = () => {
  return (
    <Work id=''>
      <div className='ctn_marquee__row'>
        <Marquee />
      </div>
      <Service className='widget-container'>
        <div className='item-section'>
          <Text
          as='h3'
          lineHeight='1.6875rem'
          label='EL SERVICIO'
          color={getGlobalStyle('--color-text-secondary')}
          fontSize='4.375rem' />
        </div>
        <div className='item-section'>
          <Text
            as='p'
            label='Diseñamos todos los sitios web y aplicaciones desde cero, lo que nos permite adaptar la experiencia a la medida de cada marca.'
            fontSize={getGlobalStyle('--font-size-xl')}
          color={getGlobalStyle('--color-text-secondary')}
          />
        </div>
      </Service>

      <WrapperCard>
        {arrayService.map((service, index) => {
          return (
            <div className='list-service' key={service.id}>
              <CircleCard
                {...service}
                index={index + 1}
              />
            </div>
          )
        })}
      </WrapperCard>
    </Work>
  )
}
