import { getCookie, setCookie } from 'cookies-next'
import { getCurrentDomain } from '~/utils'

export const useCookies = () => {
  const domain = getCurrentDomain()
  const keyToSaveData = process.env.COOKIE_NAME
  const saveDataState = getCookie(keyToSaveData, { path: '/', domain })
  const handleSetCookie = () => {
    setCookie(keyToSaveData, true, { path: '/', domain })
  }
  return {
    hasCookies: !!saveDataState,
    handleSetCookie
  }
}
