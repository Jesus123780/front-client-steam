import PropTypes from 'prop-types'
import React from 'react'
import { Button } from '~/components/Button'
import { getGlobalStyle, numberFormat } from '~/utils'
import {
  Price,
  Tag,
  WidgetContainer
} from './styles'

export const MemoCard = ({
  title,
  description,
  price,
  list,
  state,
  type,
  bgColor,
  recomendation,
  priceQuarterly,
  discount,
  ...props
}) => {
  return (
    <WidgetContainer
      state={state}
      bgColor={bgColor}
      {...props}
      >
      <div className='pricing-table-headline'>
        <h5 className='title'>
          {title}
        </h5>
        <p className='subtitle -unspace'>
          {type}
        </p>
      </div>
      <div className='price-number titles-typo title'>
        <Price center={props.center}>
          {numberFormat(state ? price : priceQuarterly)}
          <span className='symbol'>
            $
          </span>
        </Price>
        <Tag>
          / MXN + IVA
        </Tag>
      </div>
      <div className='pricing-table-content date'>
        Facturado mes a mes
      </div>
      <button className='pricing-table-recomendation'>
        {state ? recomendation : discount}
      </button>
      <div className='pricing-table-details'>
        {description}
      </div>
      <div className='call-action'>
        <Button
          width='100%'
          label='Adquirir  AHORA'
          padding='20px 0'
          borderRadius='8px'
          fontSize='0.9375rem'
          lineHeight='1.75rem'
          color={props.center ? 'var(--color-text-primary)' : 'var(--color-text-secondary)'}
          backgroundColor='transparent'
          fontWeight={getGlobalStyle('--font-weight-normal')}
          border={`1px solid ${props.center ? 'var(--color-primary-gray)' : 'var(--color-text-secondary)'}`}
        />
      </div>
      <div className='pricing-table-features'>
        <ul className='price-lits'>
          {list.map((item, index) => (
            <li key={index}>
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </WidgetContainer>
  )
}

export const Card = React.memo(MemoCard, (prevProps, nextProps) => {
  return prevProps.state === nextProps.state
})

MemoCard.propTypes = {
  bgColor: PropTypes.any,
  center: PropTypes.bool,
  description: PropTypes.any,
  discount: PropTypes.string,
  list: PropTypes.array,
  price: PropTypes.number,
  priceQuarterly: PropTypes.number,
  recomendation: PropTypes.string,
  state: PropTypes.bool,
  title: PropTypes.any,
  type: PropTypes.string
}

MemoCard.defaultProps = {
  description: null,
  list: [],
  price: 0,
  recomendation: '',
  type: 'Pro'
}
