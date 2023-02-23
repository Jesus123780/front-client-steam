import React from 'react'
import { Text } from '~/components/Text'
import { getGlobalStyle } from '~/utils'
import {
  BoxChart,
  ChartCalendar,
  Date,
  Progress,
  ProgressBar,
  ProgressBarContainer
} from './styles'

export const ChartTime = () => {
  const arrayService = [
    {
      name: 'Maquetado HTML / Wordpress / WebFlow',
      progress: 70
    },
    {
      name: 'Desarrollo Web Front / Back end / Apps',
      progress: 70,
      positionEnd: true,
      marginBottom: '1px'
    },
    {
      name: 'UX / Diseño UI / Design System',
      progress: 55
    }
  ]
  return (
    <div>
      <BoxChart>
        <ChartCalendar>
          <Date>
            <div className='day'>
              <h3>Día</h3>
              <span>1</span>
            </div>
          </Date>
          <Date>
            <div className='day'>
              <h3>Días</h3>
              <span>4</span>
            </div>
          </Date>
          <Date>
            <div className='day'>
              <h3>Días</h3>
              <span>12</span>
            </div>

            <div className='day last'>
              <h3>Días</h3>
              <span>+22</span>
            </div>
          </Date>
        </ChartCalendar>
        {arrayService.map((item, index) => {
          const asStyle = index === 1
          return (
          <Progress key={index}>
            <ProgressBarContainer backgroundColor={asStyle} border={asStyle}>
              <ProgressBar progress={item.progress} final={100} end={item.positionEnd}>
                <div style={{ zIndex: 879 }}>
                  <Text
                    margin='0 20px'
                    fontSize={getGlobalStyle('--font-size-lg')}
                    color='var(--color-text-primary)'
                    label={item.name}
                  />
                </div>
              </ProgressBar>
            </ProgressBarContainer>
          </Progress>
          )
        })}
      </BoxChart>
    </div>
  )
}
