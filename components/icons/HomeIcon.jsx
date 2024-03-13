import { Svg, Path, Rect, G, ClipPath, Defs } from 'react-native-svg'

export default function HomeIcon (props) {
  const { name, color, size } = props

  if ( name === 'home' ) {
    return (
      <Svg width="64" height="32" viewBox="0 0 64 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <G clip-path="url(#clip0_173_105)">
      <Rect width="64" height="32" rx="16" fill="#FCCDA3"/>
      <Path d="M42 26H22" stroke="#F17400" stroke-linecap="round"/>
      <Path d="M22 15L26.063 11.7497M42 15L33.8741 8.49931C32.7784 7.62279 31.2216 7.62279 30.1259 8.49931L29.344 9.12486" stroke="#F17400" stroke-linecap="round"/>
      <Path d="M35.5 9.5V7.5C35.5 7.22386 35.7239 7 36 7H38.5C38.7761 7 39 7.22386 39 7.5V12.5" stroke="#F17400" stroke-linecap="round"/>
      <Path d="M24 26V13.5" stroke="#F17400" stroke-linecap="round"/>
      <Path d="M40 13.5V17.5M40 26V21.5" stroke="#F17400" stroke-linecap="round"/>
      <Path d="M35 26V21C35 19.5858 35 18.8787 34.5607 18.4393C34.1213 18 33.4142 18 32 18C30.5858 18 29.8787 18 29.4393 18.4393M29 26V21" stroke="#F17400" stroke-linecap="round" stroke-linejoin="round"/>
      <Path d="M34 13.5C34 14.6046 33.1046 15.5 32 15.5C30.8954 15.5 30 14.6046 30 13.5C30 12.3954 30.8954 11.5 32 11.5C33.1046 11.5 34 12.3954 34 13.5Z" stroke="#F17400"/>
      </G>
      <Defs>
      <ClipPath id="clip0_173_105">
      <Rect width="64" height="32" fill="white"/>
      </ClipPath>
      </Defs>
      </Svg>

    )
  } else if ( name === 'home-outline' ) {
    return (
      <Svg width="64" height="32" viewBox="0 0 64 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <G clip-path="url(#clip0_173_108)">
      <Path d="M42 26H22" stroke="#808080" stroke-linecap="round"/>
      <Path d="M22 15L26.063 11.7497M42 15L33.8741 8.49931C32.7784 7.62279 31.2216 7.62279 30.1259 8.49931L29.344 9.12486" stroke="#808080" stroke-linecap="round"/>
      <Path d="M35.5 9.5V7.5C35.5 7.22386 35.7239 7 36 7H38.5C38.7761 7 39 7.22386 39 7.5V12.5" stroke="#808080" stroke-linecap="round"/>
      <Path d="M24 26V13.5" stroke="#808080" stroke-linecap="round"/>
      <Path d="M40 13.5V17.5M40 26V21.5" stroke="#808080" stroke-linecap="round"/>
      <Path d="M35 26V21C35 19.5858 35 18.8787 34.5607 18.4393C34.1213 18 33.4142 18 32 18C30.5858 18 29.8787 18 29.4393 18.4393M29 26V21" stroke="#808080" stroke-linecap="round" stroke-linejoin="round"/>
      <Path d="M34 13.5C34 14.6046 33.1046 15.5 32 15.5C30.8954 15.5 30 14.6046 30 13.5C30 12.3954 30.8954 11.5 32 11.5C33.1046 11.5 34 12.3954 34 13.5Z" stroke="#808080"/>
      </G>
      <Defs>
      <ClipPath id="clip0_173_108">
      <Rect width="64" height="32" rx="16" fill="white" />
      </ClipPath>
      </Defs>
      </Svg>

    )
  }

  
}
