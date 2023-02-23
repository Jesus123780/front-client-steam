import PropTypes from 'prop-types'
import {
  Navigation,
  Pagination
} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Easing, useScroll } from '~/hooks/useScroll'
import { CtnSwiper, ImageSwiper } from './styles'

export const SwiperSlider = () => {
  const progress = useScroll({
    ease: Easing.linear,
    start: '50vh',
    end: '180vh'
  })
  return (
    <div>
      <CtnSwiper>
        <Swiper
         slidesPerView={1}
         spaceBetween={30}
         translate={progress * 100 * 100}
         loop={true}
         modules={[Pagination, Navigation]}
         className="mySwiper"
        >
          {[1, 2, 4, 5, 6, 7]?.map((slideContent, index) => {
            return (
              <SwiperSlide
                key={slideContent.carProId}
                virtualIndex={index}
              >
                <div className='swiper-slide'>
                <ImageSwiper />
                <ImageSwiper />
                <ImageSwiper />
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </CtnSwiper>
    </div>
  )
}

SwiperSlider.propTypes = {
  checkedItems: PropTypes.shape({
    has: PropTypes.func
  }),
  datCat: PropTypes.shape({
    catProductsAll: PropTypes.shape({
      map: PropTypes.func
    })
  }),
  disabledItems: PropTypes.shape({
    has: PropTypes.func
  }),
  handleChangeCheck: PropTypes.func
}
