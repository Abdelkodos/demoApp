import React from 'react'
import { StyleSheet, Text, Image, View, TouchableOpacity, ImageBackground } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import Header from '../components/Header'
import HomeBar from '../components/icons/HomeIcon'
import StatisticsIcon from '../components/icons/StatisticsIcon'
import NavButton from '../components/NavButton'
import DemandesIcon from '../components/icons/DemandesIcon'
import MapIcon from '../components/icons/MapIcon'
import CallCenterIcon from '../components/icons/CallCenterIcon'
import IdCardIcon from '../components/icons/IdCardIcon'
import SuiviDemIcon from '../components/icons/SuiviDemIcon'
import ReleveIcon from '../components/icons/ReleveIcon'
import { increment, decrement } from '../features/counter/counterSlice'

function Statistics({ navigation }) {

  // const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/background.png')} resizeMode='cover' style={styles.image} >
        <View style={styles.content}>
          <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            alignContent: 'center',
            
          }} >
            <Text style={{
              fontWeight: 700,
              fontSize: 17,
              textAlign: 'center'
            }}>Bienvenue dans votre application</Text>
            <Text style={{
              marginVertical: 20,
              fontSize: 16,
              width: 300,
              paddingHorizontal: 15,
              textAlign: 'center'
            }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
          </View>
          <View style={{
            alignItems: 'center',
            alignContent: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            flexWrap: 'wrap'
            
          }} >
            <NavButton icon={<DemandesIcon />} title='Demandes' />
            <NavButton icon={<MapIcon color="#822C41" />} title='Nous trouver' />
            <NavButton icon={<CallCenterIcon />} title='Assistance' />
            <NavButton icon={<IdCardIcon />} title='Mes cartes' />
            <NavButton icon={<SuiviDemIcon />} title='Suivi de demandes' />
            <NavButton icon={<ReleveIcon color="#822C41" />} title='Relevé de prestations' />
          </View>
          <View>
            {/* <Text>{count}</Text>
            <TouchableOpacity onPress={() => dispatch(increment())} >
              <Text>add 1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => dispatch(decrement())} >
              <Text>remove 1</Text>
            </TouchableOpacity> */}
          </View>
          
        </View>
      </ImageBackground>
      {/* Navigation Part 
      <View style={{
          height: 80,
          backgroundColor: "#FFD9CB",
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          flexDirection: 'row',
          justifyContent: 'space-around'
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.push('Home')}
        >
          <View 
            style={{
              alignItems: 'center',
            }}
          >
            <Image
              style={{
                width: 58,
                height: 58
              }}
              source={require('../assets/homePng.png')}
            />
            <Text style={{ color: "#fff" }}>Home</Text>
          </View>
          <View 
            style={{
              alignItems: 'center',
            }}
          >
            <Image
              style={{
                width: 70,
                height: 70
              }}
              source={require('../assets/sttc.png')}
            />
            <View style={{ width: 70, height: 4, backgroundColor: 'coral' }}>

            </View>
          
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.push('Statistics')}
        >
          <View 
            style={{
              alignItems: 'center',
            }}
          >
            <Image
              style={{
                width: 75,
                height: 75
              }}
              source={require('../assets/sttc.png')}
            />
            <View style={{ width: 70, height: 4, backgroundColor: 'coral' }}></View>
          </View>
        </TouchableOpacity>

      </View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    marginTop: 20,
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
})

export default Statistics