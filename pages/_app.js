import PropTypes from 'prop-types'
import Head from 'next/head'
import ErrorBoundary from '~/components/Error'
import { Layout } from '~/components/layout'
import Context from '~/context/Context'
import '../styles/globals.css'
import '../public/styles/tokens.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import CustomCursor from '~/components/test'

function MyApp ({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => { return <Layout>{page}</Layout> })
  return (
    <div>
      <Head>
        <meta name='theme-color'></meta>
        {/* <link href='/manifest.json' rel='manifest' /> */}
        <link
          href='/static/favicon.ico'
          rel='icon'
          type='image/svg+xml'
        />
        <meta content='#317EFB' name='theme-color' />
        <link href='/static/favicon.ico' rel='apple-touch-icon' />
      </Head>
      {getLayout(
        <Context>
          <ErrorBoundary>
            <CustomCursor>
              <Component {...pageProps} />
            </CustomCursor>
          </ErrorBoundary>

        </Context>
      )}
    </div>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape({
  })
}

export default MyApp
