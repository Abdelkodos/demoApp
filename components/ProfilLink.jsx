import { View, Text, Image } from 'react-native'
import React from 'react'

const ProfilLink = () => {

  return (
    <View style={{
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
      <Image source={require('../assets/profilIcon.png')} style={{ marginHorizontal: 5 }} />
      <View>
        <Text style={{ fontWeight: '700', fontSize: 14 }} >Ahmed BEN ALLA</Text>
        <View style={{
          backgroundColor: '#822C41',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 3,
          width: 90
        }}>
          <Text style={{ color: '#FFF', fontWeight: '700', fontSize: 11 }}>N°267898/000</Text>
        </View>
      </View>
    </View>
  )
}

export default ProfilLink