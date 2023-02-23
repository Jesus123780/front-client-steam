import React from 'react'
import styles from '../styles.module.css'
import PropTypes from 'prop-types'

export const CardAvantage = ({ title = 'AHORRA TIEMPO', description }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content_wrapper}>
        <div className={styles.wrapper}>
          <h3 className={styles.title}>
          {title} <br/>

          </h3>
        </div>

        <div className={styles.wrapper}>
          <div className={styles.ctn_paragraph}>
            <p className={styles.paragraph}>
               {description}
                {/* Al adquirir tu suscripción mensual obtienes un equipo de <span className={styles.spanContainer}>especialistas visuales</span>  UI experimentados y listos para sumergirse en el proceso de diseño <span className={styles.spanContainer}>de inmediato.</span> */}
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}
CardAvantage.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string
}
