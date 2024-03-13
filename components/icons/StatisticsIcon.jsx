import { Ionicons } from '@expo/vector-icons'
import { View } from 'react-native'

function StatisticsIcon(props) {
  const { color, size, state } = props

  if ( state === 'active' ) {
    return (
      <View style={{ height: 32, width: 64, alignItems: "center", backgroundColor: "#F4EAE9", borderRadius: 20 }} >
        <Ionicons name="analytics-sharp" size={size} color={color} />
      </View>
      
    )
  } else if ( state === 'inActive' ) {
    return (
      <View style={{ height: 32, width: 64, alignItems: "center" }} >
        <Ionicons name="analytics-sharp" size={size} color={color} />
      </View>
    )
  }

  
}

export default StatisticsIcon