import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SuiviDemIcon(props) {
  const  { sideBar } = props

  return (
    <>
      { sideBar
        ?

        (
          <Svg
            width={20}
            height={26}
            viewBox="0 0 20 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
          >
            <Path
              d="M7.261 2.461h-5.09C1.526 2.461 1 2.986 1 3.633v12.883"
              stroke="#49454F"
              strokeWidth={0.8}
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              d="M16.812 16.623V3.633c0-.647-.525-1.172-1.172-1.172h-5.09"
              stroke="#49454F"
              strokeWidth={0.8}
              strokeMiterlimit={10}
              strokeLinejoin="round"
            />
            <Path
              d="M1 18.156v4c0 .647.525 1.172 1.172 1.172h9.438M10.68 4.188V3.125a1.774 1.774 0 10-3.548 0v1.063h3.548zM11.89 6.26H5.922a.469.469 0 01-.469-.469V4.188h6.906v1.603c0 .259-.21.469-.469.469zM9.35 8.945h3.502M9.35 10.77h3.502M5.009 14.53h7.843M5.009 16.356h5.363M5.009 18.18h4.34M11.084 18.06a4.289 4.289 0 101.129-1.191M14.705 18.388v3.942M16.676 20.36h-3.942M7.438 11.19H5.243a.234.234 0 01-.234-.235V8.76c0-.129.105-.234.234-.234h2.195c.13 0 .235.105.235.234v2.195c0 .13-.105.235-.235.235z"
              stroke="#49454F"
              strokeWidth={0.8}
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              d="M15.086 8.828V4.422a.234.234 0 00-.235-.234H2.961a.234.234 0 00-.234.234v16.945c0 .13.105.234.234.234h7.638M15.086 16.087V10.47M5.009 12.705h7.843"
              stroke="#49454F"
              strokeWidth={0.8}
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        )
        :
        (
          <Svg
            width={33}
            height={42}
            viewBox="0 0 33 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
          >
            <Path
              d="M11.75 2.906H3.012C1.901 2.906 1 3.806 1 4.918v22.118"
              stroke="#822C41"
              strokeWidth={1.2}
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              d="M28.148 27.22V4.918c0-1.112-.9-2.012-2.011-2.012h-8.739"
              stroke="#822C41"
              strokeWidth={1.2}
              strokeMiterlimit={10}
              strokeLinejoin="round"
            />
            <Path
              d="M1 29.853v6.867c0 1.112.9 2.013 2.012 2.013h16.204M17.62 5.87V4.046a3.046 3.046 0 10-6.09 0V5.87h6.09zM19.699 9.427H9.45a.805.805 0 01-.805-.805V5.87h11.857v2.752c0 .445-.36.805-.804.805zM15.337 14.038h6.013M15.337 17.172h6.013M7.883 23.628H21.35M7.883 26.762h9.208M7.883 29.895h7.453M18.314 29.688a7.364 7.364 0 101.938-2.046M24.532 30.252v6.768M27.916 33.636h-6.768M12.055 17.892H8.286a.402.402 0 01-.402-.403v-3.768c0-.223.18-.403.402-.403h3.769c.222 0 .402.18.402.403v3.768c0 .223-.18.403-.402.403z"
              stroke="#822C41"
              strokeWidth={1.2}
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              d="M25.184 13.837V6.272a.402.402 0 00-.402-.402H4.367a.402.402 0 00-.403.402v29.094c0 .222.18.402.403.402H17.48M25.184 26.3v-9.646M7.883 20.494H21.35"
              stroke="#822C41"
              strokeWidth={1.2}
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        )
      }
    </>
  )
}

export default SuiviDemIcon
