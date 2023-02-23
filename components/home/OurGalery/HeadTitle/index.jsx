import React from 'react'
import { SectionTititle } from './styles'
import CustomMarquee from 'react-fast-marquee'
import { Text } from '~/components/Text'
import { getGlobalStyle } from '~/utils'
import style from './style.module.css'
import { dataGalery } from '~/mock/dataGalery'

export const HeadTitle = () => {
  return (
        <div>
            <SectionTititle>
                <CustomMarquee
                    gradient={false}
                    pauseOnClick={true}
                    speed={100}
                >
                    <div className={style.container}>
                        {dataGalery?.map((item) => (
                            <div className={style.item} key={item.id}>
                                <Text
                                    as='h3'
                                    color={getGlobalStyle('--color-text-primary')}
                                    label={item.title}
                                    fontSize='8rem'
                                    margin='0'
                                    fontWeight={getGlobalStyle('--font-weight-light')}
                                />
                                <div className={style.rectangle}> </div>
                            </div>
                        ))}
                    </div>
                </CustomMarquee>
                <CustomMarquee
                    gradient={false}
                    pauseOnClick={true}
                    speed={100}
                    direction='right'
                >
                    <div className={style.container}>
                        {dataGalery?.map((item) => (
                            <div className={style.item} key={item.id}>
                                <Text
                                    as='h3'
                                    color={getGlobalStyle('--color-text-primary')}
                                    label={item.title}
                                    fontSize='8rem'
                                    margin='0'
                                    fontWeight={getGlobalStyle('--font-weight-light')}
                                />
                                <div className={style.rectangle}> </div>
                            </div>
                        ))}
                    </div>
                </CustomMarquee>
            </SectionTititle>
        </div>
  )
}
