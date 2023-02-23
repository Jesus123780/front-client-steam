export const getCurrentDomain = () => {
  return typeof window !== 'undefined' && window.location.hostname.split('.').slice(-2).join('.')
}
export const getGlobalStyle = (style) => {
  return `var(${style})`
}
// export const numberFormat = value => { return value ? (parseInt(value) ? new Intl.NumberFormat('de-DE').format(parseFloat(`${value}`.replace(/\./g, ''))) : '') : (value === 0 ? 0 : '') }
export const numberFormat = value => value ? (parseInt(value) ? new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(parseFloat(`${value}`.replace(/\./g, ''))) : '') : (value === 0 ? 0 : '')
