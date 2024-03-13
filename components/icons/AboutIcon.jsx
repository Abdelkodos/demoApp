import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const AboutIcon = (props) => {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_55827_17907)" fill="#49454F">
        <Path d="M12 .75C5.797.75.75 5.797.75 12c0 2.307.692 4.516 2.003 6.404l-1.98 4.327a.375.375 0 00.496.497l4.327-1.98A11.165 11.165 0 0012 23.25c6.203 0 11.25-5.046 11.25-11.25C23.25 5.797 18.203.75 12 .75zm0 21.75c-2.22 0-4.346-.687-6.144-1.988a.376.376 0 00-.376-.036l-3.607 1.65 1.652-3.606a.375.375 0 00-.038-.376A10.42 10.42 0 011.5 12C1.5 6.21 6.21 1.5 12 1.5S22.5 6.21 22.5 12 17.79 22.5 12 22.5z" />
        <Path d="M14.146 20.742c-.198.048-.4.09-.604.126a.375.375 0 10.128.739c.221-.038.44-.084.655-.137a.375.375 0 00-.178-.728zM16.02 20.052a.375.375 0 00.336.67c2.658-1.333 4.601-3.86 5.196-6.76a.375.375 0 10-.735-.15 9.082 9.082 0 01-4.798 6.24zM13.579 10.772c0-.873-.711-1.585-1.585-1.585s-1.585.712-1.585 1.585v6.29c0 .874.71 1.585 1.585 1.585.874 0 1.585-.71 1.585-1.584v-6.29zm-.75 6.29a.836.836 0 01-1.67 0v-6.29a.836.836 0 011.67 0v6.29zM11.994 8.534c.874 0 1.585-.71 1.585-1.585 0-.873-.711-1.584-1.585-1.584s-1.585.71-1.585 1.584c0 .874.71 1.585 1.585 1.585zm0-2.419a.836.836 0 11-.002 1.671.836.836 0 01.002-1.67z" />
      </G>
      <Defs>
        <ClipPath id="clip0_55827_17907">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default AboutIcon