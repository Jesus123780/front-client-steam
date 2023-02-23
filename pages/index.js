import Head from 'next/head'
import PropTypes from 'prop-types'
import { AlertCookies } from '~/components/AlertCookies'
import { ViewHome } from '~/container/Home'
export default function ContainerHome ({ cookies }) {
  return (
    <div>
        <Head>
          <title>Home </title>
          <meta name="description" content="marcafuerte" />
        </Head>
        <ViewHome />
      {cookies && <AlertCookies />}
    </div>
  )
}

ContainerHome.propTypes = {
  cookies: PropTypes.bool
}

export const getServerSideProps = function ({ req, res }) {
  if (!req.cookies[process.env.COOKIE_NAME]) {
    return {
      props: { cookies: false, user: null }
    }
  }

  return {
    props: {
      cookies: true, user: null
    }
  }
}
