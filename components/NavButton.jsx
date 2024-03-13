import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const NavButton = (props) => {
  const { icon, title, onPress = null } = props

  return (
    <TouchableOpacity>
      <View style={{
        alignItems: 'center',
        justifyContent: 'center',
        
      }}>
        <View style={{
          backgroundColor: '#FFF',
          width: 90, height: 90,
          borderRadius: 100,
          alignItems: 'center',
          justifyContent: 'center',
          elevation: 40,
          shadowColor: '#F01',
          shadowOpacity: 0.2,
          shadowOffset: { width: -2, height: 20},
          shadowRadius: 120,
          
        }}>
          {icon}
        </View>
        <View
          style={{
            width: 90,
            alignItems: 'center',
            justifyContent: 'center',
            alignContent: 'center',
            height: 30
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 700,
              fontSize: 11,
            }}
          >
            {title}
          </Text>
        </View>
        
      </View>
    </TouchableOpacity>
    
  )
}

export default NavButton