import React from 'react'
import { About } from './About'
import { Main } from './main'
import { SectionWork } from './HowWorkIt'
import { Video } from './video'
import { Band } from './Band'
import { FAQ } from '../FAQ'
import { OursTechnologies } from './OursTecnologies'
import { Cube } from './Cube'
import { Advantage } from './Advantage'
import { ProyectsOnTime } from './ProyectsOnTime'
import { Plans } from './Plans'
import { OurGalery } from './OurGalery'
import { Easing, useScroll } from '~/hooks/useScroll'

export const Home = () => {
  const progress = useScroll({
    ease: Easing.easeInCubic,
    start: '1vh',
    end: '2vh'
  })
  return (
    <div >
      <Main />
      <Cube
        end={true}
        margin='0 400px 0 0'
        style={{
          transform: `translateY(
                ${progress * 100 * 100}px
                )
                `
        }}
      />
      <About />
      <Video />
      <SectionWork />
      <Band />
      <Advantage />
      <OurGalery />
      <Plans />
      <ProyectsOnTime />
      <OursTechnologies />
      <FAQ />
    </div>
  )
}
export { Home as default }
