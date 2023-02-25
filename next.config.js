/* eslint-disable consistent-return */
/** @type {import('next').NextConfig} */
const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD
} = require('next/constants')
const nextConfig = {
  reactStrictMode: true
}
module.exports = (phase) => {
  // npm run dev or next dev
  const isDev = phase === PHASE_DEVELOPMENT_SERVER
  // npm run build or next build
  const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1'
  // npm run build or next build
  const isStaging = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === '1'
  const env = {
    NAMEDB: (() => {
      if (isDev) return 'app'
      if (isProd) return 'app'
    })(),
    USERDB: (() => {
      if (isDev) return 'root'
      if (isProd) return 'root'
    })(),
    PASSDB: (() => {
      if (isDev) return ''
      if (isProd) return ''
    })(),
    HOSTDB: (() => {
      if (isDev) return 'localhost'
      if (isProd) return 'localhost'
    })(),
    URL_BASE: (() => {
      if (isDev) return 'http://localhost:3001/'
      if (isProd) return 'http://localhost:3001/'
    })(),
    MAIN_URL_BASE: (() => {
      if (isDev) return 'http://localhost:3000/'
      if (isProd) return 'http://localhost:3000/'
      if (isStaging) return 'Title Stg'
    })(),
    // URL_BASE_WS
    URL_ADMIN_SERVER: (() => {
      if (isDev) return 'http://localhost:4000/'
      if (isProd) return 'http://localhost:4000/'
    })(),
    COOKIE_NAME: 'terms',
    PHONE_NUMBER: '525635806219'
  }

  const resolveUniqueReactForHooks = {
    webpack: (config, options) => {
      if (options.isServer) {
        config.externals = ['react', ...config.externals]
      }
      // eslint-disable-next-line no-undef
      config.resolve.alias.react = reactPath
      return config
    },
    images: {
      domains: ['http2.mlstatic.com', 'localhost', 'server-image-food.herokuapp.com']
    }
  }
  const headers = () => {
    return [
      {
        source: '/app',
        headers: [
          {
            key: 'x-custom-header-1',
            value: 'my custom header 1'
          }
        ]
      }
    ]
  }
  const redirects = () => {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true
      }
    ]
  }
  const rewrites = () => {
    return [
      {
        source: '/ab',
        destination: '/about'
      }
    ]
  }
  const assetPrefix = isProd ? 'https://cdn.mydomain.com' : ''
  const images = {
    domains: ['http2.mlstatic.com', 'localhost', 'server-image-food.herokuapp.com', '*']
  }
  return {
    env,
    images,
    headers,
    rewrites,
    redirects
  }
}
