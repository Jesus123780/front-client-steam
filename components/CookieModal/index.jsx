import React from 'react'
import styled from 'styled-components'
import { Overlay } from '../Overlay'

export const CookiesEstrict = () => {
  return (
    <>
      <Overlay />
      <ContainerModal>
        <div className='container'>
          <div>
            <button type="button" className='circle_clic'>x</button>
          </div>
          <div className='container_open'>
            <div className='moval_title'>
              <h2 className='moval_text'>
              </h2>
              <img src="https://marcafuerte.app/viejo/wp-content/uploads/2022/09/Logo-300x213.png" className='mova_icon' />
            </div>
            <div className='parrafo_one'>
              <p>
                Esta web utiliza cookies para que podamos ofrecerte la mejor experiencia de usuario posible. La información de las cookies se almacena en tu navegador y realiza funciones tales como reconocerte cuando vuelves a nuestra web o ayudar a nuestro equipo a comprender qué secciones de la web encuentras más interesantes y útiles.
              </p>
              <h2>Cookies estrictamente necesarias</h2>
              <p>
                Las cookies estrictamente necesarias tiene que activarse siempre para que podamos guardar tus preferencias de ajustes de cookies.<br />  <br /> Si desactivas esta cookie no podremos guardar tus preferencias.  Esto significa que cada vez que visites esta web tendrás que activar o desactivar las cookies de nuevo.
              </p>
              <h2>
                Cookies de terceros
              </h2>
              <p>
                Esta web utiliza Google Analytics para recopilar información anónima tal como el número de visitantes del sitio, o las páginas más populares. Dejar esta cookie activa nos permite mejorar nuestra web.
              </p>
              <h2>
                Política de cookies
              </h2>
              <p>
                Más información sobre nuestra <a className='link' href='#'> política de cookies</a>
              </p>
            </div>
          </div>
          <div className='ctn_b_t'>
            <div className='container_button'>
              <button className='button_item'><a href='#'> Activar todo</a></button>
              <button className='button_item'><a href='#'>Rechazar todo</a></button>
              <button className='button_item'><a href='#'>Guardar cambios</a></button>
            </div>
            <div>
              <p>
                Powered by  <a className='link' href='#'> GDPR Cookie Compliance </a>
              </p>
            </div>
          </div>

        </div>
      </ContainerModal>
    </>
  )
}

const ContainerModal = styled.div`
    background-color: #fff;
    border-radius: 10px;
    bottom: 0;
    left: 0;
    margin: auto;
    max-width: 1170px;
    min-height: 600px;
    right: 0;
    top: 0;
    width: 80vw;
   position: fixed;
  color: #000;
  max-height: 45.125rem;
  min-width: 700px;
  z-index: 99999;
    .container{
padding: 1.875rem 3.125rem;
position:relative;
    }
    .container_open{
      border-bottom: 1px solid rgba(139, 152, 150, 0.468); 
    }
    .circle_clic{
      border-radius: 50%;
    width: 80px;
    height: 80px;
    background-color: #c3323a;
    position: absolute;
    top: -40px;
    right: -33px;
    cursor:pointer;
    }
    .moval_title{
      align-items: center;
      display: flex;
      justify-content:space-around ;
    }
    .moval_text{
      width: 100%;
    font-size: 28px;
    font-weight: 700;
    line-height: 1.1;

    }
    .mova_icon{
  width: 100px;

    
    }
    .parrafo_one{
      height: 31.25rem;
      overflow: auto  ;
      padding: 1.25rem 0;
      width: 70%;
    }
    p{
      padding: 1.25rem 0;
    }
    h2{
         font-weight: 700;
    font-size: var( --font-size-2xl);
    margin-bottom: 0.9375rem;
    padding-right: 11.875rem;
    }
    .button_item{

  background-color: #c3323a;;
  border-radius: 1.875rem;
  border:1px solid transparent; 
  font-weight: bold;
  margin: 10px 4px;
  padding: 10px;  
}
.button_item:hover{
  background-color: aqua;
  border:1px solid #c3323a;;
  color:#c3323a;;
}
.link{
  border-bottom: 2px solid ;
}
.link:hover{
  color: transparent;
}
.container_button{
  width:70%;
}
.ctn_b_t{
    color: #000;
    display:flex;
    font-size: 0.8125rem;
    font-weight: 700;
    margin-top: 2.0625rem;
}
`
