import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const ProfilLink = (props) => {
  const { name, id, navigation } = props

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('ProfilPage')
      }}
      style={{
        flexDirection: 'row',
        margin: 6,
        padding: 2,
        alignItems: 'center',
        backgroundColor: '#FAFAFA',
        borderColor: '#79747E1F',
        borderWidth: 1,
        borderRadius: 8,
        width: 276,
        height: 58
    }} >
      <Image source={require('../assets/profilIcon.png')} style={{ marginHorizontal: 5, width: 32, height: 32 }} />
      <View>
        <Text style={{ fontWeight: '700', fontSize: 14 }} >{name}</Text>
        <View style={{
          backgroundColor: '#822C41',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 3,
          width: 90
        }}>
          <Text style={{ color: '#FFF', fontWeight: '700', fontSize: 11 }}>N°{id}/000</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default ProfilLink