import { dataIconTech, technologies } from '~/mock/dataTech'
import { Expertice } from './Expertise'
import {
  CircleImage,
  ContainerTech,
  ContentTech
} from './styles'

export const OursTechnologies = () => {
  const handleMouseOver = (e, index) => {
    const span = document.querySelector(`.overlay_span--${index}`)
    const position = e.target.getBoundingClientRect()
    const { clientX, clientY } = e
    span.style.setProperty('--x', clientX - position.x + 'px')
    span.style.setProperty('--y', clientY - position.y + 'px')
  }

  const handleMouseLeave = (e, index) => {
    const span = document.querySelector(`.overlay_span--${index}`)
    const position = e.target.getBoundingClientRect()
    const { clientX, clientY } = e
    span.style.setProperty('--x', clientX - position.x + 'px')
    span.style.setProperty('--y', clientY - position.y + 'px')
    span.style.left = `${clientX - position.x}px`
    span.style.top = `${clientY - position.y}px`
  }
  return (
    <ContainerTech>
      <Expertice />
      <ContentTech>
        {technologies.map((item, index) => {
          return (
            <CircleImage key={index} >
              <div className="container">
                <div
                  className="card"
                  onMouseEnter={(e) => { return handleMouseOver(e, index) }}
                  onMouseLeave={(e) => { return handleMouseLeave(e, index) }}
                >
                  <span className={`overlay_span--${index}`}></span>
                  <div className="content">
                    {dataIconTech[item]}
                  </div>
                </div>
              </div>
            </CircleImage>
          )
        })}
        <div>

        </div>
      </ContentTech>
    </ContainerTech>
  )
}
