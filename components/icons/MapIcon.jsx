import * as React from "react"
import Svg, { Mask, Path, G } from "react-native-svg"

function MapIcon(props) {
  const { color, width = 40, height = 40, sideBar } = props

  return (
    <>
    
      { sideBar ?
        (
          <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Mask
        id="a"
        style={{
          maskType: "luminance"
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={24}
        height={24}
      >
        <Path d="M0 0h24v24H0V0z" fill="#fff" />
      </Mask>
      <G
        mask="url(#a)"
        stroke="#4E4446"
        strokeWidth={0.8}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M12 .352a8.789 8.789 0 00-7.127 13.932l6.558 9.073a.701.701 0 001.138 0l6.558-9.073A8.79 8.79 0 0012 .352zM10.253 8.944a1.758 1.758 0 10.703-1.218" />
        <Path d="M15.11 9.719a3.181 3.181 0 000-1.156l.534-.715a3.89 3.89 0 00-.703-1.217l-.886.105a3.157 3.157 0 00-1-.579l-.352-.819a3.883 3.883 0 00-1.406 0l-.352.82c-.37.13-.708.328-1 .578l-.886-.105a3.887 3.887 0 00-.704 1.217l.534.715a3.182 3.182 0 000 1.156l-.534.714a3.895 3.895 0 00.704 1.218l.886-.106c.292.25.63.448 1 .579l.352.819a3.878 3.878 0 001.406 0l.352-.82c.37-.13.708-.328 1-.578l.886.106a3.888 3.888 0 00.703-1.218l-.534-.714z" />
        <Path d="M17.273 9.14a5.273 5.273 0 11-10.546 0 5.273 5.273 0 0110.546 0z" />
      </G>
    </Svg>
        ) : 
        (
          <Svg
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
          >
            <Mask
              id="a"
              style={{
                maskType: "luminance"
              }}
              maskUnits="userSpaceOnUse"
              x={0}
              y={0}
              width={width}
              height={height}
            >
              <Path d="M0 0h40v40H0V0z" fill="#fff" />
            </Mask>
            <G
              mask="url(#a)"
              stroke={color}
              strokeWidth={1.5}
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <Path d="M20 .586c-8.09 0-14.648 6.558-14.648 14.648 0 3.201 1.027 6.162 2.769 8.572l10.93 15.122a1.17 1.17 0 001.898 0l10.93-15.122a14.581 14.581 0 002.77-8.572C34.648 7.144 28.09.586 20 .586zM17.089 14.907a2.93 2.93 0 101.172-2.03" />
              <Path d="M25.184 16.198a5.309 5.309 0 000-1.927l.89-1.19a6.491 6.491 0 00-.492-1.07c-.2-.346-.43-.666-.68-.96l-1.476.176a5.262 5.262 0 00-1.668-.965l-.586-1.365A6.473 6.473 0 0020 8.79c-.4 0-.792.038-1.172.108l-.586 1.365a5.261 5.261 0 00-1.668.965l-1.476-.176c-.25.294-.48.614-.68.96-.2.347-.362.706-.492 1.07l.89 1.19a5.307 5.307 0 000 1.927l-.89 1.19c.13.364.292.722.492 1.069s.43.666.68.96l1.476-.175c.488.417 1.051.746 1.668.965l.586 1.364c.38.07.772.109 1.172.109.4 0 .792-.039 1.172-.109l.586-1.364a5.267 5.267 0 001.668-.965l1.476.176c.25-.295.48-.614.68-.961.2-.347.362-.705.492-1.069l-.89-1.19z" />
              <Path d="M28.79 15.234a8.79 8.79 0 11-17.579 0 8.79 8.79 0 0117.578 0z" />
            </G>
          </Svg>
        )
      }
    </>
    
  )
}

export default MapIcon