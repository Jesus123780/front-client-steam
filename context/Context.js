import PropTypes from 'prop-types'
import {
  createContext,
  useContext,
  useMemo,
  useState
} from 'react'
import { useCookies } from '~/hooks/useCookies'

export const Context = createContext()

const Provider = ({ children }) => {
  // STATE
  const [status, setStatus] = useState('close')
  const { handleSetCookie } = useCookies()
  // | "slider-hover"
  // | "slider-drag"
  // | "text"
  // | "link"
  // | "hamburger"
  // | "default";
  const [type, setType] = useState('default')
  console.log(type)
  const value = useMemo(
    () => {
      return {
        status,
        type,
        setType,
        handleSetCookie,
        setStatus
      }
    },
    [status, setStatus]
  )

  return <Context.Provider value={value}>
    {children}
  </Context.Provider>
}

Provider.propTypes = {
  children: PropTypes.any
}
const useAuth = () => { return useContext(Context) }

export { Provider as default, useAuth }
