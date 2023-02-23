/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'
export const IconArrowTop = ({
  size,
  style = {},
  color
}) => {
  return <svg
      height={size}
      style={style}
      version='1.1'
      viewBox='0 0 330 330'
      width={size}
      x='0px'
      xmlns='http://www.w3.org/2000/svg'
      y='0px'
    >
      <path
        d='M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394
  l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393
  C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z'
        fill={color}
      />
    </svg>
}

export const IconLinePart = ({
  size,
  style = {},
  color
}) => (
  <svg
    width={16}
    height={2}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 1h14"
      stroke={color}
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
export const IconPlus = ({
  size,
  style = {},
  color
}) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.333 8H15M8.167 1v14"
      stroke="#252525"
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
export const IconInstagram = ({
  size = 32,
  style = {},
  color
}) => {
  return <svg
  width={size}
  height={size}
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M16 20.666a4.667 4.667 0 1 0 0-9.333 4.667 4.667 0 0 0 0 9.333Z"
    stroke="#DADADA"
    strokeWidth={1.7}
    strokeMiterlimit={10}
    strokeLinecap="round"
    strokeLinejoin="round"
  />
  <path
    d="M28 16.706C28 24.666 25.333 28 16 28S4 25.333 4 16C4 7.333 6.667 4 16 4c10 0 12 3.333 12 12.706Z"
    stroke="#DADADA"
    strokeWidth={1.7}
    strokeLinecap="round"
    strokeLinejoin="round"
  />
  <path
    d="M22 10a.667.667 0 1 0 0-1.333A.667.667 0 0 0 22 10Z"
    fill="#DADADA"
    stroke="#DADADA"
    strokeWidth={1.7}
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
}

IconArrowTop.propTypes = {
  color: PropTypes.any,
  size: PropTypes.any,
  style: PropTypes.object
}
export const IconArrowLeft = ({
  style = {},
  size,
  color
}) => {
  return <svg
      height={size}
      style={style}
      viewBox='0 0 22.893 45.908'
      width={size}
      x='0px'
      y='0px'
    >
      <path
        d='M1365.5,348.848l21.837-22.686L1365.5,303.635'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='bevel'
        strokeWidth='2px'
        transform='translate(1388.033 349.194) rotate(180)'
      />
    </svg>
}

IconArrowTop.propTypes = {
  color: PropTypes.any,
  size: PropTypes.any,
  style: PropTypes.object
}
export const IconClose = ({
  style = {},
  size = 16,
  color
}) => {
  return <svg
  width={size}
  height={size}
  style={style}
  fill={color || 'none'}
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="m4 12 8-8M12 12 4 4"
    stroke={color || '#000'}
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
}
export const IconHamBurger = ({
  style = {},
  size = 16,
  color
}) => {
  return <svg
  width={22}
  height={10}
  style={style}
  fill={color || 'none'}
  xmlns="http://www.w3.org/2000/svg"
>
  <rect width={22} height={2} rx={1} fill="#090909" />
  <rect y={8} width={17} height={2} rx={1} fill="#090909" />
</svg>
}
export const IconWhatsApp = ({
  style = {},
  size,
  color
}) => {
  return <svg
    height={size}
    style={style}
    viewBox='-23 -21 682 682.66669'
    width={size}
    x='0px'
    y='0px'
  ><path
      d='m544.386719 93.007812c-59.875-59.945312-139.503907-92.9726558-224.335938-93.007812-174.804687 0-317.070312 142.261719-317.140625 317.113281-.023437 55.894531 14.578125 110.457031 42.332032 158.550781l-44.992188 164.335938 168.121094-44.101562c46.324218 25.269531 98.476562 38.585937 151.550781 38.601562h.132813c174.785156 0 317.066406-142.273438 317.132812-317.132812.035156-84.742188-32.921875-164.417969-92.800781-224.359376zm-224.335938 487.933594h-.109375c-47.296875-.019531-93.683594-12.730468-134.160156-36.742187l-9.621094-5.714844-99.765625 26.171875 26.628907-97.269531-6.269532-9.972657c-26.386718-41.96875-40.320312-90.476562-40.296875-140.28125.054688-145.332031 118.304688-263.570312 263.699219-263.570312 70.40625.023438 136.589844 27.476562 186.355469 77.300781s77.15625 116.050781 77.132812 186.484375c-.0625 145.34375-118.304687 263.59375-263.59375 263.59375zm144.585938-197.417968c-7.921875-3.96875-46.882813-23.132813-54.148438-25.78125-7.257812-2.644532-12.546875-3.960938-17.824219 3.96875-5.285156 7.929687-20.46875 25.78125-25.09375 31.066406-4.625 5.289062-9.242187 5.953125-17.167968 1.984375-7.925782-3.964844-33.457032-12.335938-63.726563-39.332031-23.554687-21.011719-39.457031-46.960938-44.082031-54.890626-4.617188-7.9375-.039062-11.8125 3.476562-16.171874 8.578126-10.652344 17.167969-21.820313 19.808594-27.105469 2.644532-5.289063 1.320313-9.917969-.664062-13.882813-1.976563-3.964844-17.824219-42.96875-24.425782-58.839844-6.4375-15.445312-12.964843-13.359374-17.832031-13.601562-4.617187-.230469-9.902343-.277344-15.1875-.277344-5.28125 0-13.867187 1.980469-21.132812 9.917969-7.261719 7.933594-27.730469 27.101563-27.730469 66.105469s28.394531 76.683594 32.355469 81.972656c3.960937 5.289062 55.878906 85.328125 135.367187 119.648438 18.90625 8.171874 33.664063 13.042968 45.175782 16.695312 18.984374 6.03125 36.253906 5.179688 49.910156 3.140625 15.226562-2.277344 46.878906-19.171875 53.488281-37.679687 6.601563-18.511719 6.601563-34.375 4.617187-37.683594-1.976562-3.304688-7.261718-5.285156-15.183593-9.253906zm0 0'
      fill={color}
      fillRule='evenodd'
  /></svg>
}

export const IconArrowDiagonalTop = ({
  style = {},
  size = 21,
  color
}) => {
  return <svg
  height={size}
  width={size}
  style={style}
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M4.323 16.424 16.427 4.322M8.357 4.322h8.07v8.068"
    stroke={color || '#252525'}
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
}

export const IconDoots = ({
  style = {},
  size = 54,
  color
}) => {
  return <svg
  width={size}
  height={size}
  style={style}
  fill={color || 'none'}
  xmlns="http://www.w3.org/2000/svg"
>
  <circle cx={40} cy={14} r={14} fill="#D1ED5D" />
  <circle cx={7} cy={14} r={7} fill="#D1ED5D" />
</svg>
}

export const IconFigma = ({
  style = {},
  size = 26,
  color
}) => {
  return <svg
  width={26}
  height={38}
  fill={color || 'none'}
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M12.769 1.007h5.456a5.327 5.327 0 1 1 0 10.653h-5.456V1.007ZM1.007 6.333a5.327 5.327 0 0 1 5.326-5.326h5.456V11.66H6.333a5.327 5.327 0 0 1-5.326-5.327ZM1.007 19a5.327 5.327 0 0 1 5.326-5.327h5.456v10.653H6.333A5.327 5.327 0 0 1 1.007 19ZM1.007 31.667a5.327 5.327 0 0 1 5.326-5.327h5.456v5.262c0 2.971-2.44 5.391-5.424 5.391-2.948 0-5.358-2.391-5.358-5.326ZM13.803 19a5.327 5.327 0 0 1 5.326-5.327h.13a5.327 5.327 0 1 1 0 10.653h-.13A5.327 5.327 0 0 1 13.803 19Z"
    stroke={color || '#D1ED5D'}
    strokeWidth={2.013}
  />
</svg>
}

export const IconXD = ({
  style = {},
  size = 26,
  color
}) => {
  return <svg
  width={39}
  height={38}
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M27.366 27.702c.476-.21.85-.458 1.119-.745v.825h2.972V9.88l-.108.05-2.82 1.3-.044.02v4.643c-.744-.729-1.76-1.09-3.038-1.09-1.64 0-2.978.598-4.006 1.793-1.013 1.195-1.515 2.808-1.515 4.832 0 2.087.493 3.726 1.49 4.905.997 1.164 2.369 1.743 4.104 1.743.68 0 1.296-.124 1.846-.374Zm0 0-.031-.07m.031.07-.031-.07m0 0c-.54.245-1.145.368-1.815.368-1.716 0-3.065-.572-4.046-1.717l7.01.56c-.261.304-.645.567-1.15.79Zm-6.994.15h.131l-.065-.114-5.104-8.889 4.736-8.201.066-.115h-3.538l-.021.04-2.876 5.369-2.9-5.369-.021-.04H7.21l.066.115 4.736 8.25-5.08 8.84-.065.114h3.537l.022-.04 3.22-6.006 3.267 6.006.022.04h3.405Zm8.144-3.729c-.523.778-1.374 1.173-2.572 1.173-.96 0-1.697-.342-2.22-1.024-.51-.686-.77-1.608-.77-2.774 0-1.233.26-2.17.77-2.822.506-.65 1.226-.977 2.17-.977 1.181 0 2.05.395 2.622 1.175v5.25Z"
    fill="#D1ED5D"
    stroke="#D1ED5D"
    strokeWidth={0.153}
  />
  <rect
    x={0.75}
    y={0.75}
    width={37.5}
    height={36.5}
    rx={6.88}
    stroke="#D1ED5D"
    strokeWidth={1.5}
  />
</svg>
}

export const IconAngular = ({
  style = {},
  size = 26,
  color
}) => {
  return <svg
  width={46}
  height={48}
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g clipPath="url(#a)">
    <path
      d="M4.345 36.782 1.103 8.708l21.124-7.526 21.698 7.394-3.527 28.062L22.22 46.705 4.345 36.782Z"
      stroke="#DADADA"
      strokeWidth={2}
    />
    <path
      d="M22.255 5.695 8.421 36.475l5.168-.088 2.777-6.943h12.41l3.042 7.031 4.94.088L22.254 5.695Zm.035 9.862 4.676 9.773h-8.79l4.114-9.773Z"
      fill="#DADADA"
    />
  </g>
  <defs>
    <clipPath id="a">
      <path fill="#fff" d="M0 0h45.178v48H0z" />
    </clipPath>
  </defs>
</svg>
}

export const IconBootstrap = ({
  style = {},
  size = 26,
  color
}) => {
  return <svg
  width={61}
  height={48}
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g clipPath="url(#a)">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.512.006c-3.437 0-5.98 3.008-5.867 6.271.11 3.135-.032 7.194-1.054 10.505-1.026 3.32-2.76 5.424-5.591 5.694v3.049c2.832.27 4.565 2.373 5.59 5.693 1.023 3.311 1.165 7.37 1.055 10.505-.114 3.262 2.43 6.271 5.868 6.271h35.22c3.438 0 5.98-3.008 5.867-6.27-.11-3.135.032-7.195 1.054-10.506 1.026-3.32 2.755-5.424 5.587-5.694v-3.048c-2.832-.27-4.56-2.374-5.587-5.694-1.022-3.31-1.164-7.37-1.054-10.505.114-3.262-2.43-6.271-5.867-6.271H12.512Zm28.33 29.54c0 4.492-3.352 7.217-8.913 7.217h-9.466a1.021 1.021 0 0 1-1.021-1.021V12.258a1.021 1.021 0 0 1 1.02-1.02h9.413c4.637 0 7.68 2.511 7.68 6.367 0 2.707-2.047 5.13-4.655 5.555v.141c3.55.39 5.941 2.849 5.941 6.245Zm-9.945-15.072h-5.398v7.624h4.547c3.514 0 5.452-1.415 5.452-3.944 0-2.371-1.667-3.68-4.601-3.68Zm-5.398 10.65v8.401h5.597c3.659 0 5.597-1.468 5.597-4.227 0-2.76-1.993-4.175-5.833-4.175H25.5Z"
      fill="#DADADA"
    />
  </g>
  <defs>
    <clipPath id="a">
      <path fill="#fff" d="M0 0h60.241v48H0z" />
    </clipPath>
  </defs>
</svg>
}
export const IconCSS = ({
  style = {},
  size = 26,
  color
}) => {
  return <svg
  width={42}
  height={48}
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g clipPath="url(#a)">
    <path
      d="M21.11 46.88 4.45 42.196 1.085 1.082l39.738.082-3.557 41.038-16.155 4.677Z"
      stroke="#DADADA"
      strokeWidth={2}
    />
    <path
      d="M34.089 9.229H7.537l.72 5.177h12.6l-12.4 5.322.72 5.005h18.267l-.662 6.99-6.185 1.209-5.61-1.438-.43-3.97h-5.15l.69 8.256 11.047 3.078 10.586-3.365 1.352-16.139h-11.19l12.197-5.063V9.23Z"
      fill="#DADADA"
    />
  </g>
  <defs>
    <clipPath id="a">
      <path fill="#fff" d="M0 0h41.914v48H0z" />
    </clipPath>
  </defs>
</svg>
}
export const IconFireBase = ({
  style = {},
  size = 26,
  color
}) => {
  return <svg
  width={36}
  height={48}
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M12.844 12.185 2.09 32.591 6.986 1.279a.254.254 0 0 1 .02-.073.09.09 0 0 1 .012-.018c.007.007.021.022.037.053l5.79 10.944ZM17.465 8.036a.24.24 0 0 1 .017-.03c.023.011.065.04.106.119l4.191 8.032-3.07 3.166-3.606-6.708 2.362-4.579Zm.032-.047-.002.002a.01.01 0 0 1 .002-.002Z"
    stroke="#DADADA"
    strokeWidth={2}
  />
  <path
    d="M17.744 20.594 1.65 36.63l12.354-23.56 3.849 7.232-.108.292Z"
    stroke="#DADADA"
  />
  <path
    d="M33.677 38.051 18.513 46.51a2.274 2.274 0 0 1-2.216 0L1.819 38.415 29.28 10.98l.003.015 4.393 27.055Z"
    stroke="#DADADA"
    strokeWidth={2}
  />
  <path
    d="M19.021 47.262a3.298 3.298 0 0 1-3.215 0L.127 38.563 0 38.698l15.806 8.825a3.298 3.298 0 0 0 3.215 0l15.898-8.866-.04-.239-15.858 8.845Z"
    fill="#EEAB37"
  />
</svg>
}

export const IconPHP = ({
  style = {},
  size = 26,
  color
}) => {
  return <svg
  width={92}
  height={48}
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g clipPath="url(#a)">
    <path
      d="M90.673 23.86c0 6.027-4.713 11.73-12.887 15.985-8.125 4.23-19.42 6.875-31.95 6.875-12.53 0-23.824-2.646-31.95-6.875C5.714 35.59 1 29.887 1 23.86c0-6.027 4.713-11.73 12.887-15.985C22.012 3.645 33.307 1 45.837 1c12.53 0 23.824 2.646 31.95 6.875 8.173 4.255 12.886 9.958 12.886 15.985Z"
      stroke="#DADADA"
      strokeWidth={2}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m12.872 37.987 5.023-25.43h11.616c5.023.314 7.534 2.826 7.534 7.222 0 7.534-5.965 11.93-11.302 11.615h-5.65l-1.256 6.593h-5.965Zm8.476-11.302 1.57-9.418h4.081c2.198 0 3.767.942 3.767 2.825-.313 5.338-2.825 6.28-5.65 6.594h-3.768Zm14.53 4.71 5.023-25.43h5.965l-1.255 6.592h5.65c5.024.314 6.907 2.826 6.28 5.966l-2.198 12.871h-6.279l2.198-11.615c.313-1.57.313-2.512-1.884-2.512h-4.71l-2.825 14.127h-5.965Zm19.063 6.592 5.023-25.43H71.58c5.023.314 7.535 2.826 7.535 7.222 0 7.534-5.965 11.93-11.302 11.615h-5.651l-1.256 6.593H54.94Zm8.476-11.302 1.57-9.418h4.082c2.197 0 3.767.942 3.767 2.825-.314 5.338-2.826 6.28-5.651 6.594h-3.768Z"
      fill="#DADADA"
    />
  </g>
  <defs>
    <clipPath id="a">
      <path fill="#fff" d="M0 0h91.673v48H0z" />
    </clipPath>
  </defs>
</svg>
}
export const IconAndroid = ({
  style = {},
  size = 26,
  color
}) => {
  return <svg
  width={111}
  height={24}
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g clipPath="url(#a)">
    <path
      d="M.055 15.059c0-1.25.21-2.417.628-3.5a8.648 8.648 0 0 1 1.758-2.83 8.095 8.095 0 0 1 2.704-1.891c1.05-.458 2.2-.687 3.45-.687.948 0 1.81.14 2.586.419.776.279 1.527.736 2.252 1.372V6.486h4.253V23.63h-4.253v-1.457c-.725.637-1.476 1.095-2.252 1.373-.775.28-1.638.42-2.587.42-1.25 0-2.4-.23-3.449-.687a8.095 8.095 0 0 1-2.704-1.892 8.65 8.65 0 0 1-1.758-2.83c-.419-1.083-.628-2.25-.628-3.5Zm9.092 4.905a5.45 5.45 0 0 0 1.055-.108c.368-.073.74-.196 1.113-.369.374-.173.74-.404 1.097-.695.357-.29.697-.647 1.021-1.071v-5.325a6.013 6.013 0 0 0-1.021-1.063 5.723 5.723 0 0 0-1.097-.695 4.68 4.68 0 0 0-1.113-.376 5.473 5.473 0 0 0-1.055-.11c-.659 0-1.276.123-1.85.37a4.516 4.516 0 0 0-1.499 1.029c-.424.44-.756.96-.996 1.557a5.183 5.183 0 0 0-.36 1.95c0 .704.12 1.354.36 1.951a4.8 4.8 0 0 0 .996 1.557 4.52 4.52 0 0 0 1.499 1.03 4.665 4.665 0 0 0 1.85.368Zm19.17-9.58c-2.015.014-3.765 1.419-3.765 3.503v9.744h-4.253v-9.627c.023-4.015 3.5-7.799 7.957-7.853h.12c4.456.054 7.933 3.838 7.957 7.853v9.627H32.08v-9.744c0-2.084-1.75-3.489-3.766-3.504m10.032 4.676c0-1.25.21-2.417.628-3.5a8.652 8.652 0 0 1 1.758-2.83 8.095 8.095 0 0 1 2.704-1.891c1.05-.458 2.2-.687 3.45-.687.948 0 1.813.14 2.595.419.781.279 1.529.73 2.243 1.356v-6.58h4.253V23.63h-4.253v-1.44c-.714.637-1.462 1.091-2.243 1.365-.782.273-1.647.41-2.596.41-1.25 0-2.4-.229-3.449-.686a8.095 8.095 0 0 1-2.704-1.892 8.647 8.647 0 0 1-1.758-2.83c-.419-1.083-.628-2.25-.628-3.5Zm9.092 4.905a5.45 5.45 0 0 0 1.055-.108c.368-.073.74-.196 1.113-.369.374-.173.74-.404 1.097-.695a6.28 6.28 0 0 0 1.021-1.071v-5.325a6.024 6.024 0 0 0-1.021-1.063 5.721 5.721 0 0 0-1.097-.695 4.683 4.683 0 0 0-1.113-.376 5.475 5.475 0 0 0-1.055-.11c-.659 0-1.275.123-1.85.37a4.514 4.514 0 0 0-1.499 1.029c-.424.44-.756.96-.996 1.557a5.179 5.179 0 0 0-.36 1.95c0 .704.12 1.354.36 1.951s.572 1.116.996 1.557a4.52 4.52 0 0 0 1.499 1.03 4.663 4.663 0 0 0 1.85.368Zm28.455 0c.636 0 1.236-.12 1.8-.36a4.429 4.429 0 0 0 1.474-1.013c.418-.435.747-.951.987-1.548.24-.598.36-1.259.36-1.984 0-.715-.123-1.37-.368-1.968a4.82 4.82 0 0 0-1.005-1.549c-.42-.432-.92-.78-1.473-1.02a4.36 4.36 0 0 0-1.775-.37 4.534 4.534 0 0 0-3.273 1.39c-.419.436-.75.952-.997 1.55a5.124 5.124 0 0 0-.368 1.967c0 .725.12 1.386.36 1.984.24.597.57 1.113.988 1.548.417.435.919.78 1.473 1.013.564.24 1.17.36 1.817.36Zm0 4.002a9.17 9.17 0 0 1-3.5-.67 8.884 8.884 0 0 1-2.87-1.867 8.816 8.816 0 0 1-1.943-2.83c-.474-1.088-.712-2.268-.712-3.54 0-1.24.238-2.4.712-3.483a9.012 9.012 0 0 1 1.934-2.83 9.04 9.04 0 0 1 2.871-1.9 8.944 8.944 0 0 1 3.508-.695c1.239 0 2.406.232 3.5.695a9.064 9.064 0 0 1 2.862 1.9 9.011 9.011 0 0 1 1.934 2.83 8.582 8.582 0 0 1 .712 3.482c0 1.273-.237 2.453-.712 3.542a8.82 8.82 0 0 1-1.942 2.83 8.912 8.912 0 0 1-2.863 1.866 9.106 9.106 0 0 1-3.491.67Zm13.04-18.823c-.345 0-.67-.067-.977-.202a2.618 2.618 0 0 1-1.357-1.356 2.404 2.404 0 0 1-.202-.978c0-.344.067-.672.202-.985A2.593 2.593 0 0 1 87.956.258c.308-.135.64-.204.977-.202.345 0 .673.067.985.202.305.129.581.315.816.549.233.234.42.511.549.815.135.313.202.641.202.986 0 .344-.067.67-.202.977a2.591 2.591 0 0 1-1.365 1.357 2.462 2.462 0 0 1-.985.201Zm-2.127 1.343h4.253V23.63h-4.253V6.486Zm6.209 8.573c0-1.25.209-2.417.628-3.5A8.648 8.648 0 0 1 95.4 8.73a8.095 8.095 0 0 1 2.704-1.891c1.049-.458 2.199-.687 3.449-.687.949 0 1.814.14 2.595.419.781.279 1.529.73 2.244 1.356v-6.58h4.253V23.63h-4.253v-1.44c-.715.637-1.463 1.091-2.244 1.365-.781.273-1.646.41-2.595.41-1.25 0-2.4-.229-3.45-.686a8.095 8.095 0 0 1-2.703-1.892 8.648 8.648 0 0 1-1.758-2.83c-.419-1.083-.628-2.25-.628-3.5Zm9.091 4.905c.335 0 .687-.036 1.055-.108a4.91 4.91 0 0 0 1.114-.369 5.202 5.202 0 0 0 1.096-.695c.357-.29.698-.647 1.022-1.071v-5.325a6.037 6.037 0 0 0-1.022-1.063 5.708 5.708 0 0 0-1.096-.695 4.676 4.676 0 0 0-1.114-.376 5.472 5.472 0 0 0-1.055-.11 4.66 4.66 0 0 0-1.85.37 4.518 4.518 0 0 0-1.498 1.029c-.424.44-.757.96-.997 1.557a5.183 5.183 0 0 0-.36 1.95c0 .704.12 1.354.36 1.951s.573 1.116.997 1.557c.424.441.923.785 1.498 1.03a4.664 4.664 0 0 0 1.85.368Zm-35.643-9.632c-2.85 0-4.107 1.47-4.107 3.555v9.744h-4.253v-9.627c.024-4.015 2.343-7.962 8.36-7.962"
      fill="#DADADA"
    />
  </g>
  <defs>
    <clipPath id="a">
      <path fill="#fff" d="M0 0h110.701v24H0z" />
    </clipPath>
  </defs>
</svg>
}
export const IconDBox = ({
  style = {},
  size = 26,
  color
}) => {
  return <svg
  width={48}
  height={48}
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M21.423 4.35 3.536 11.752c-.995.411-.984 1.824.017 2.221l17.962 7.123a6.664 6.664 0 0 0 4.913 0l17.963-7.123c1-.397 1.011-1.81.016-2.221L26.52 4.35a6.666 6.666 0 0 0-5.097 0ZM25.565 24.986V42.78c0 .847.854 1.426 1.64 1.114l20.016-7.769c.457-.18.756-.622.756-1.114V17.217c0-.846-.853-1.426-1.64-1.114l-20.015 7.77a1.198 1.198 0 0 0-.757 1.113ZM20.892 25.904l-5.94 2.868-.604.292L1.81 35.072C1.015 35.455 0 34.876 0 33.992v-16.7c0-.32.164-.596.383-.803.092-.092.196-.168.304-.228.3-.18.727-.228 1.09-.084l19.015 7.534c.966.383 1.042 1.738.1 2.193Z"
    fill="#DADADA"
  />
  <path
    d="m20.892 25.904-5.94 2.868L.382 16.489c.092-.092.196-.168.304-.228.3-.18.727-.228 1.09-.084l19.015 7.534c.966.383 1.042 1.738.1 2.193Z"
    fill="#DADADA"
  />
</svg>
}

export const IconRaro = ({
  style = {},
  size = 26,
  color
}) => {
  return <svg
  width={48}
  height={48}
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M30.662 13.833V9.069a3.668 3.668 0 0 0 2.115-3.306v-.109a3.668 3.668 0 0 0-3.668-3.668H29a3.668 3.668 0 0 0-3.667 3.668v.11a3.668 3.668 0 0 0 2.115 3.305v4.764a10.386 10.386 0 0 0-4.94 2.174L9.445 5.832c.093-.336.142-.682.148-1.03a4.133 4.133 0 1 0-4.138 4.126 4.088 4.088 0 0 0 2.035-.554l12.864 10.01a10.42 10.42 0 0 0 .159 11.736l-3.913 3.914a3.365 3.365 0 0 0-.977-.16 3.394 3.394 0 1 0 3.396 3.397 3.35 3.35 0 0 0-.16-.978l3.871-3.872a10.438 10.438 0 1 0 7.933-18.588m-1.604 15.666a5.355 5.355 0 1 1 0-10.706 5.355 5.355 0 0 1 .005 10.703"
    fill="#DADADA"
  />
</svg>
}

export const IconJava = ({
  style = {},
  size = 26,
  color
}) => {
  return <svg
  width={36}
  height={48}
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M11.401 37.121s-1.834 1.067 1.306 1.428c3.803.434 5.747.372 9.939-.422 0 0 1.102.691 2.64 1.29-9.396 4.027-21.265-.233-13.885-2.296Zm-1.148-5.255s-2.057 1.523 1.085 1.848c4.063.42 7.271.453 12.824-.616 0 0 .768.779 1.975 1.205-11.36 3.322-24.015.262-15.884-2.437ZM19.933 22.951c2.315 2.666-.609 5.064-.609 5.064s5.88-3.034 3.18-6.835c-2.522-3.544-4.456-5.305 6.013-11.376 0 0-16.433 4.104-8.584 13.147"
    fill="#DADADA"
  />
  <path
    d="M32.36 41.008s1.358 1.118-1.495 1.984c-5.423 1.643-22.574 2.139-27.338.065-1.713-.745 1.499-1.779 2.51-1.996 1.053-.228 1.655-.186 1.655-.186C5.787 39.533-4.62 43.51 2.406 44.65c19.158 3.106 34.924-1.4 29.954-3.64ZM12.283 26.421s-8.723 2.072-3.089 2.824c2.38.319 7.122.247 11.54-.123 3.61-.305 7.235-.953 7.235-.953s-1.273.546-2.194 1.175c-8.86 2.33-25.973 1.246-21.046-1.138 4.167-2.014 7.554-1.785 7.554-1.785m15.65 8.747c9.006-4.68 4.842-9.176 1.935-8.57-.712.148-1.03.276-1.03.276s.265-.414.77-.593c5.75-2.022 10.171 5.961-1.856 9.123 0 0 .14-.124.18-.236ZM22.503 0s4.988 4.99-4.73 12.661c-7.793 6.154-1.777 9.663-.003 13.672-4.549-4.104-7.887-7.717-5.647-11.079C15.409 10.318 24.516 7.924 22.503 0"
    fill="#DADADA"
  />
  <path
    d="M13.168 47.85c8.645.553 21.919-.308 22.233-4.398 0 0-.604 1.55-7.144 2.782-7.378 1.389-16.477 1.227-21.875.337 0 0 1.105.914 6.787 1.278"
    fill="#DADADA"
  />
</svg>
}

export const IconSBELT = ({
  style = {},
  size = 26,
  color
}) => {
  return <svg
  width={39}
  height={48}
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M24.254 47.923 11.286 35.04l7.167-7.292L38.67 47.923H24.254Z"
    fill="#DADADA"
  />
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="m11.126 35.05 12.853-12.853h14.45L18.432 42.192l-7.307-7.142ZM0 23.839l7.297 7.292L38.43 0H23.904L0 23.839Z"
    fill="#DADADA"
  />
</svg>
}

export const IconHtml = ({
  style = {},
  size = 26,
  color
}) => {
  return <svg
  width={42}
  height={48}
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g clipPath="url(#a)">
    <path
      d="M21.11 46.88 4.45 42.197 1.085 1.082l39.738.082-3.557 41.038L21.11 46.88Z"
      stroke="#DADADA"
      strokeWidth={2}
    />
    <path
      d="m33.63 14.061.488-5.236H7.566l1.467 16.052h18.325l-.719 6.847-5.869 1.582-5.954-1.726-.317-4.085H9.234l.72 8.342 10.816 3.021 10.903-3.02 1.467-16.283H13.895l-.547-5.494H33.63Z"
      fill="#DADADA"
    />
  </g>
  <defs>
    <clipPath id="a">
      <path fill="#fff" d="M0 0h41.914v48H0z" />
    </clipPath>
  </defs>
</svg>
}

export const IconJavascript = ({
  style = {},
  size = 26,
  color
}) => {
  return <svg
  width={48}
  height={48}
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g clipPath="url(#a)">
    <path d="M1 1h46v46H1V1Z" stroke="#DADADA" strokeWidth={2} />
    <path
      d="M44.072 36.552c-.352-2.19-1.78-4.029-6.01-5.744-1.469-.675-3.107-1.159-3.595-2.272-.173-.648-.196-1.013-.087-1.406.315-1.273 1.835-1.67 3.04-1.305.775.26 1.51.858 1.952 1.812 2.072-1.342 2.067-1.332 3.513-2.254-.529-.821-.812-1.2-1.158-1.552-1.246-1.391-2.944-2.107-5.658-2.053l-1.415.183c-1.355.342-2.646 1.054-3.404 2.007-2.272 2.578-1.624 7.09 1.141 8.948 2.724 2.044 6.726 2.51 7.237 4.421.497 2.34-1.72 3.098-3.924 2.83-1.625-.339-2.528-1.164-3.505-2.666-1.797 1.04-1.797 1.04-3.645 2.104.438.958.899 1.392 1.633 2.222 3.477 3.527 12.178 3.354 13.739-1.985.064-.182.483-1.405.146-3.29Zm-17.978-14.49h-4.49c0 3.877-.017 7.728-.017 11.607 0 2.468.127 4.731-.274 5.425-.657 1.364-2.36 1.195-3.135.93-.79-.387-1.19-.94-1.656-1.72-.128-.223-.224-.397-.256-.41-1.218.744-2.431 1.492-3.65 2.236.607 1.245 1.501 2.327 2.647 3.03 1.71 1.026 4.01 1.34 6.415.789 1.565-.457 2.915-1.401 3.623-2.838 1.022-1.885.803-4.166.794-6.69.022-4.115 0-8.23 0-12.36Z"
      fill="#DADADA"
    />
  </g>
  <defs>
    <clipPath id="a">
      <path fill="#fff" d="M0 0h48v48H0z" />
    </clipPath>
  </defs>
</svg>
}

export const IconReact = ({
  style = {},
  size = 26,
  color
}) => {
  return <svg
  width={54}
  height={48}
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M53.9 24.006c0-3.571-4.472-6.955-11.327-9.053 1.582-6.988.879-12.547-2.22-14.327-.714-.417-1.549-.615-2.46-.615v2.45c.505 0 .911.099 1.252.286 1.494.857 2.142 4.12 1.637 8.316a33.837 33.837 0 0 1-.56 3.23 53.257 53.257 0 0 0-6.977-1.197 53.582 53.582 0 0 0-4.57-5.493c3.581-3.33 6.943-5.153 9.228-5.153V0c-3.02 0-6.976 2.153-10.975 5.889-4-3.714-7.954-5.845-10.976-5.845v2.45c2.275 0 5.647 1.813 9.229 5.12a51.892 51.892 0 0 0-4.537 5.482c-2.483.264-4.834.67-6.988 1.208a33.155 33.155 0 0 1-.571-3.186c-.516-4.197.12-7.46 1.604-8.327.33-.198.758-.286 1.263-.286V.055c-.922 0-1.757.198-2.483.615-3.087 1.78-3.779 7.328-2.186 14.294C4.45 17.073 0 20.446 0 24.006c0 3.57 4.471 6.954 11.327 9.052-1.582 6.988-.879 12.547 2.22 14.327.713.417 1.548.615 2.471.615 3.022 0 6.977-2.153 10.976-5.889 3.999 3.714 7.954 5.845 10.975 5.845.923 0 1.758-.198 2.483-.615 3.087-1.78 3.78-7.328 2.187-14.294 6.811-2.098 11.26-5.482 11.26-9.041Zm-14.305-7.329a49.476 49.476 0 0 1-1.483 4.34 51.887 51.887 0 0 0-1.44-2.637 59.469 59.469 0 0 0-1.581-2.57c1.56.23 3.065.516 4.504.867Zm-5.032 11.701a58.54 58.54 0 0 1-2.647 4.197c-1.637.143-3.296.22-4.966.22-1.66 0-3.318-.077-4.944-.21a60.549 60.549 0 0 1-2.659-4.174 57.265 57.265 0 0 1-2.285-4.373 57.313 57.313 0 0 1 2.274-4.383 58.56 58.56 0 0 1 2.648-4.197 57.174 57.174 0 0 1 4.966-.22c1.659 0 3.318.077 4.944.209a60.537 60.537 0 0 1 2.659 4.175c.835 1.44 1.593 2.9 2.285 4.372a61.48 61.48 0 0 1-2.275 4.384Zm3.55-1.428a47.085 47.085 0 0 1 1.515 4.373c-1.439.351-2.955.648-4.526.878a60.72 60.72 0 0 0 1.582-2.603c.505-.88.978-1.77 1.428-2.648ZM26.971 38.673a45.315 45.315 0 0 1-3.054-3.516c.988.044 2 .077 3.02.077 1.034 0 2.055-.022 3.055-.077a42.881 42.881 0 0 1-3.021 3.516ZM18.798 32.2a49.563 49.563 0 0 1-4.505-.867 49.476 49.476 0 0 1 1.484-4.34c.45.879.923 1.758 1.439 2.637a72.913 72.913 0 0 0 1.582 2.57ZM26.917 9.34a45.29 45.29 0 0 1 3.054 3.515c-.989-.044-2-.077-3.021-.077-1.033 0-2.055.022-3.054.077a42.897 42.897 0 0 1 3.02-3.515Zm-8.13 6.47a60.62 60.62 0 0 0-3.01 5.241 47.084 47.084 0 0 1-1.516-4.373c1.439-.34 2.955-.637 4.526-.867ZM8.844 29.566c-3.89-1.66-6.405-3.835-6.405-5.56 0-1.724 2.516-3.91 6.405-5.559.945-.406 1.978-.769 3.043-1.11a52.772 52.772 0 0 0 2.472 6.692 52.038 52.038 0 0 0-2.439 6.657 33.386 33.386 0 0 1-3.076-1.12Zm5.91 15.7c-1.493-.858-2.141-4.12-1.636-8.317.12-1.033.319-2.12.56-3.23 2.153.527 4.505.933 6.977 1.197a53.593 53.593 0 0 0 4.57 5.493c-3.582 3.33-6.944 5.153-9.229 5.153-.494-.011-.912-.11-1.241-.297Zm26.06-8.372c.517 4.197-.12 7.46-1.603 8.327-.33.198-.758.286-1.264.286-2.274 0-5.647-1.813-9.228-5.12a51.9 51.9 0 0 0 4.537-5.482c2.483-.264 4.834-.67 6.987-1.208.253 1.11.451 2.175.572 3.197Zm4.23-7.328c-.944.406-1.977.769-3.043 1.11a52.768 52.768 0 0 0-2.472-6.692 52.008 52.008 0 0 0 2.44-6.657c1.087.34 2.12.714 3.087 1.12 3.889 1.66 6.405 3.835 6.405 5.56-.011 1.724-2.527 3.91-6.416 5.559Z"
    fill="#DADADA"
  />
  <path
    d="M26.939 29.026a5.02 5.02 0 1 0 0-10.042 5.02 5.02 0 0 0 0 10.042Z"
    fill="#DADADA"
  />
</svg>
}

export const IconPS = ({
  style = {},
  size = 26,
  color
}) => {
  return <svg
  width={39}
  height={38}
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <rect
    x={0.75}
    y={0.75}
    width={37.5}
    height={36.5}
    rx={6.88}
    stroke="#D1ED5D"
    strokeWidth={1.5}
  />
  <path
    d="M11.5 27.257V10.57c.898-.046 2.164-.07 3.495-.07 1.868 0 3.09.573 3.851 1.443.773.88 1.14 2.14 1.14 3.632 0 1.932-.617 3.245-1.55 4.081-.943.845-2.274 1.26-3.8 1.26-.284 0-.466-.008-.637-.015h-.002c-.144-.006-.285-.012-.467-.012h-.5v6.368H11.5Zm1.53.314v-.002.002Zm-1.53 0v-.002.002Zm1.53-8.757v.462l.46.037c.35.027.627.027 1.176.027h.017c.888 0 1.832-.174 2.56-.76.748-.604 1.179-1.57 1.179-2.952 0-1.111-.307-2.026-.947-2.661-.64-.635-1.54-.918-2.58-.918-.575 0-1.134.026-1.416.055l-.449.047v6.663Zm11.967 3.074-.009-.005-.009-.005c-.98-.528-1.623-1.035-2.024-1.593-.392-.547-.582-1.183-.582-2.029 0-.92.317-1.739.887-2.326.567-.584 1.415-.97 2.54-.97 1.053 0 1.787.165 2.2.336v1.57a5.445 5.445 0 0 0-2.2-.463c-.659 0-1.171.188-1.521.524a1.577 1.577 0 0 0-.484 1.144c0 .184.02.379.094.582.073.204.19.39.352.571.31.346.811.697 1.567 1.137l.012.007c1.084.592 1.743 1.144 2.136 1.713.385.558.544 1.175.544 1.963 0 1.169-.391 2.016-1.002 2.575-.617.564-1.51.881-2.59.881-1.105 0-2.01-.243-2.538-.543v-1.603c.824.448 1.713.65 2.537.65.636 0 1.169-.149 1.55-.476.39-.336.55-.799.55-1.271 0-.414-.127-.801-.465-1.195-.316-.37-.815-.742-1.545-1.174Z"
    fill="#D1ED5D"
    stroke="#D1ED5D"
  />
</svg>
}

export const IconWordpress = ({
  style = {},
  size = 26,
  color
}) => {
  return <svg
  width={49}
  height={48}
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M3.412 24c0 8.149 4.736 15.192 11.603 18.529L5.194 15.62A20.51 20.51 0 0 0 3.412 24Zm34.487-1.04c0-2.544-.914-4.306-1.698-5.678-1.043-1.696-2.022-3.132-2.022-4.828 0-1.893 1.436-3.654 3.458-3.654.091 0 .178.011.266.016A20.51 20.51 0 0 0 24 3.411c-7.193 0-13.52 3.69-17.202 9.28.483.015.938.025 1.325.025 2.153 0 5.487-.261 5.487-.261 1.11-.066 1.24 1.565.132 1.696 0 0-1.116.131-2.357.196l7.498 22.301 4.506-13.513-3.208-8.789a37.569 37.569 0 0 1-2.16-.196c-1.109-.065-.979-1.761.131-1.696 0 0 3.4.261 5.423.261 2.153 0 5.487-.26 5.487-.26 1.11-.066 1.241 1.564.132 1.695 0 0-1.117.131-2.356.196l7.44 22.133 2.054-6.863c.89-2.848 1.567-4.893 1.567-6.655ZM24.361 25.8l-6.177 17.95a20.588 20.588 0 0 0 12.653-.328 1.812 1.812 0 0 1-.146-.283L24.36 25.8Zm17.705-11.679c.089.656.139 1.36.139 2.118 0 2.089-.391 4.438-1.566 7.374L34.35 41.796c6.121-3.57 10.238-10.2 10.238-17.796a20.472 20.472 0 0 0-2.522-9.879ZM24 0C10.767 0 0 10.766 0 24s10.767 24 24 24 24.002-10.766 24.002-24C48.001 10.765 37.233 0 24 0Zm0 46.9C11.374 46.9 1.1 36.627 1.1 24 1.1 11.372 11.373 1.1 24 1.1 36.626 1.1 46.9 11.373 46.9 24c0 12.627-10.273 22.9-22.899 22.9Z"
    fill="#DADADA"
  />
</svg>
}

export const IconWebflow = ({
  style = {},
  size = 26,
  color
}) => {
  return <svg
  width={52}
  height={52}
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g clipPath="url(#a)" stroke="#DADADA" strokeWidth={2}>
    <path d="M51 26c0 13.807-11.193 25-25 25S1 39.807 1 26 12.193 1 26 1s25 11.193 25 25Z" />
    <path
      d="m34.59 23.215.07-.222c.816-2.057 2.157-3.801 4.38-4.356l-4.881 11.857-.016.04-.013.04a6.508 6.508 0 0 1-5.335 4.49l-.125-.886-.559-3.994c-.203-1.458-.405-2.923-.558-4.04a268.46 268.46 0 0 1-.233-1.762c-.01-.076-.012-.104-.012-.104v.048l-1.933-.36-2.436 6.336v.002c-.928 2.392-2.542 4.429-5.328 4.77l-2.689-16.422a5.078 5.078 0 0 1 3.694 4.402v.002l.004.057.013.218.046.782.14 2.409c.103 1.805.2 3.602.2 3.833l1.934.36 2.876-7.442.002-.007.003-.007c.886-2.394 2.378-4.384 4.953-4.747l.132 1.003c.152 1.164.355 2.72.558 4.295.203 1.575.406 3.166.558 4.397.076.617.139 1.14.183 1.527a26.62 26.62 0 0 1 .063.604l1.953.303 2.356-7.426Z"
      fill="#DADADA"
    />
  </g>
  <defs>
    <clipPath id="a">
      <path fill="#fff" d="M0 0h52v52H0z" />
    </clipPath>
  </defs>
</svg>
}

IconWhatsApp.propTypes = {
  color: PropTypes.any,
  size: PropTypes.any,
  style: PropTypes.object
}

IconHamBurger.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.object
}

IconClose.propTypes = {
  color: PropTypes.any,
  size: PropTypes.any,
  style: PropTypes.object
}

IconArrowLeft.propTypes = {
  color: PropTypes.any,
  size: PropTypes.any,
  style: PropTypes.object
}
