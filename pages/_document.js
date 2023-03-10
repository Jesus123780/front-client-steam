import React from 'react'
import { ServerStyleSheet } from 'styled-components'
import Document, {
  Html,
  Head,
  Main,
  NextScript
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage
    try {
      ctx.renderPage = () => {
        return originalRenderPage({
          enhanceApp: App => { return props => { return sheet.collectStyles(<App {...props} />) } }
        })
      }
      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render () {
    return (
      <Html>
        <Head>
          <meta charSet='utf-8' />
          {/* <title>Delivery</title> */}
          <link
            href='https://fonts.googleapis.com/css2?family=Inter&display=optional'
            rel='stylesheet'
          />
          <link href='https://fonts.googleapis.com' rel='preconnect'></link>
          <link
            crossOrigin='anonymous'
            href='https://fonts.gstatic.com'
            rel='preconnect'
          ></link>
          <link
            crossOrigin='anonymous'
            href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap'
            rel='stylesheet'
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id='portal'></div>
        </body>
      </Html>
    )
  }
}

export default MyDocument

// MyDocument.propTypes = {

// }
