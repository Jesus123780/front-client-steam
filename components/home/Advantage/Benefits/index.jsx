import { IconArrowDiagonalTop } from '@/public/Icons'
import React from 'react'
import { getGlobalStyle } from '~/utils'
import styles from './style.module.css'
export const Benefits = () => {
  return (
    <div className={styles.container}>
      <div className={styles['wrapper-box']}>
        <h2 className={styles.title}>BENEFICIOS</h2>
        <h2 className={styles['section-subtitle']}>
          <span>DESDE LA IDEA </span>
          <span>HASTA LA </span>
          <span>EXPERIENCIA</span>
        </h2>
        <div className={styles['widget-wrap']}>
          <div className={styles.ctn_paragraph}>
            <IconArrowDiagonalTop color={getGlobalStyle('--color-icons-white')} />
            <p className={styles.paragraph}>
              Creamos experiencias digitales premium que hacen que las marcas se destaquen más que su competencia.
            </p>
          </div>
        </div>
      </div>
      <div className={styles['wrapper-box']}>
        <div className={styles.box}>
          <div className={styles.children_box}>

          </div>
          <div className={styles.children_box_tow}>

          </div>

        </div>
      </div>
    </div>
  )
}
