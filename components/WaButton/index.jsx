import { IconClose, IconWhatsApp } from '@/public/Icons'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { getGlobalStyle } from '~/utils'
import { WPButton } from './styles'

export const WhatsApp = () => {
  const [show, setShow] = useState(false)
  return (
        <WPButton show={show}>
            <div className='wa-container'>
                <div className='wa-toggle'>
                    <div className='label' onClick={() => setShow(!show)}>
                        <IconWhatsApp size={20} color={getGlobalStyle('--color-icons-white')} />
                        &nbsp;
                        <span>
                            HABLAR CON UN ASESOR
                        </span>
                    </div>
                    <div className='wa-box'>
                        <div className='wa-description'>
                        </div>
                        <div className='wa-close' onClick={() => setShow(!show)}>
                            <IconClose color={getGlobalStyle('--color-icons-white')} />
                        </div>
                        <Link
                            className='wa-people'
                            href={`https://web.whatsapp.com/send?phone=${process.env.PHONE_NUMBER}&amp;text=`}
                            target='_blank'
                        >
                            <Image
                                width={60}
                                height={60}
                                alt='WhatsApp Image'
                                src={'/images/wa-logo-green-small.png'}
                            />
                            <div className="wa-info">
                                <span className="wa-title">Marca Fuerte</span>
                                <span className="wa-name">On Demand Services</span>
                            </div>
                        </Link>

                    </div>
                </div>
            </div>
        </WPButton>
  )
}
