import { View, Text, Touchable, Image } from 'react-native'
import React from 'react'
import { DrawerItem } from '@react-navigation/drawer'

const AuthBtn = (props) => {
  

  return (
    <Touchable
      style={{
        backgroundColor: '#822C41',
        textColor: '#FFF'
      }}

    >
      <Image source={require('../assets/powerbtn.png')} />
      <Text>SE CONNECTER</Text>
    </Touchable>
  )
}

export default AuthBtn