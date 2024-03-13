import React from 'react'
import { View, Text, StyleSheet, Image, Touchable } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { SimpleLineIcons } from '@expo/vector-icons'
import HeaderTitle from './HeaderTitle';
import { TouchableOpacity } from 'react-native-web';

export default function Header() {
  return (
    <View style={styles.header}>
        <SimpleLineIcons name="menu" size={24} color="#822C41" />
      
      <HeaderTitle />
      <MaterialIcons name="notifications-none" size={24} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-around",
    elevation: 9,
    shadowColor: "#000",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: .8,
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  }
});