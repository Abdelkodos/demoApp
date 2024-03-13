import React from 'react'
import { TouchableOpacity } from 'react-native'
import { SimpleLineIcons } from '@expo/vector-icons'

const DrawerMenu = (props) => {
  const { navigation } = props

  return (
    <TouchableOpacity
      style={{
        padding: 10
      }}
      onPress={navigation}
    >
      <SimpleLineIcons name="menu" size={24} color="#822C41" />
    </TouchableOpacity>
  )
}

export default DrawerMenu