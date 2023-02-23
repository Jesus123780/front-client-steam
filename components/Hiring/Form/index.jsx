import React from 'react'
import { Button } from '~/components/Button'
import { Checkbox } from '~/components/Checkbox'
import { Text } from '~/components/Text'
import { dataServices } from '~/mock/dataServices'
import {
  ContentForm,
  Field,
  PlatFormOption,
  ProductType,
  PaymentMethod
} from './styles'

export const Form = () => {
  return (
        <ContentForm as='form'>
            <Field>
                <Text
                    as='h5'
                    label='¿Buscas diseño para? *'
                />
                <PlatFormOption>
                    <label className="is-web">
                        <input name="platform_web" type="checkbox" value="web" />
                        <span className="label-text">Web</span>
                    </label>
                    <label className="is-web">
                        <input name="platform_web" type="checkbox" value="web" />
                        <span className="label-text">Web</span>
                    </label>
                    <label className="is-web">
                        <input name="platform_web" type="checkbox" value="web" />
                        <span className="label-text">Web</span>
                    </label>
                </PlatFormOption>
            </Field>
                <Text
                    as='h5'
                    label='¿Qué servicios te interesan más? *'
                />
            <ProductType>
                {dataServices.map((service, index) => {
                  return <Checkbox label={service.title} key={index} />
                })}
            </ProductType>
            <PaymentMethod>
                <Text
                    as='h5'
                    label='¿Preferencia de pago? *'
                />
                <div className="col1of2">
                    <div className="product-option"><label> <input name="product" type="radio" value="prototype" /> <span className="label-text">Transferencia electrónica</span> </label></div>
                </div>
                <div className="col1of2">
                    <div className="product-option"><label> <input name="product" type="radio" value="prototype" /> <span className="label-text">Transferencia electrónica</span> </label></div>
                </div>
            </PaymentMethod>
            <div>
                <Text
                    as='h5'
                    label='Mensaje / preguntas'
                />
                <textarea style={{ padding: '24px 31px' }} name="message" placeholder="Me gustaría saber..." rows="8"></textarea>
            </div>
            {/* legal */}
            <div>
                <Text
                    as='h5'
                    label='Legal'
                />

                <label className="field">
                    <div className="error-hint">
                        <div className="error-message"></div>
                    </div>
                    <input className="js-agreed-to-privacy required" name="agreed_to_privacy" type="checkbox" />
                    <span className="label-text all">
                        He leído y estoy de acuerdo con las
                        <a href="#">
                            <b>Preguntas Frecuentes</b>
                        </a>
                    </span>
                </label>

                <label className="field">
                    <div className="error-hint">
                        <div className="error-message"></div>
                    </div>
                    <input className="js-agreed-to-privacy required" name="agreed_to_privacy" type="checkbox" />
                    <span className="label-text all">
                        Acepto el tratamiento de mis datos personales por parte de MARCA FUERTE UI Design Subscription Services contenidos en el formulario de contratación con el fin de adquirir sus servicios bajo suscripción a través del mismo.
                    </span>
                </label>

                <label className="field">
                    <div className="error-hint">
                        <div className="error-message"></div>
                    </div>
                    <input className="js-agreed-to-privacy required" name="agreed_to_privacy" type="checkbox" />
                    <span className="label-text all">
                    He leído la política de privacidad y la cláusula de información que contiene. Soy consciente de que mi consentimiento puede ser revocado en cualquier momento (sin que ello afecte la licitud del tratamiento basado en el consentimiento antes de su retirada) mediante el envío de un correo electrónico a: legal@marcafuerte.co, lo que supondrá la eliminación de mis datos personales por el Administrador.
                    </span>
                </label>
            </div>
            <Button
                padding='20px 116px'
                backgroundColor='#c3323a'
                label='Adquirir Suscripción'
                type='submit'
                borderRadius='20px'
                color='white'
            />
        </ContentForm>
  )
}
