import { AntDesign } from '@expo/vector-icons'
import Home from '../screens/Home'
import ProfilLink from './ProfilLink'
import MapIcon from './icons/MapIcon'
import CallCenterIcon from './icons/CallCenterIcon'
import DemandesIcon from './icons/DemandesIcon'
import Releve from './icons/ReleveIcon'
import SettingsIcon from './icons/SettingsIcon'
import SuiviDemIcon from './icons/SuiviDemIcon'
import DrawerMenu from './DrawerMenu'
import { MaterialIcons } from '@expo/vector-icons/build/Icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import HeaderTitle from './HeaderTitle'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer'
import { Image, View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import AuthBtn from './AuthBtn'
import Prestations from './icons/Prestations'
import AboutIcon from './icons/AboutIcon'
// import { login, logout } from '../features/auth/loggedinSlice.js'
import { fetchData, loseData, loseUser, selectUser, store } from '../store.js'
import { useEffect } from 'react'

export const CustomDrawer = (props) => {
  const { navigation } = props
  
  // const count = useSelector((state) => state.counter.value)
  // const logState = useSelector((state) => state.isLogged.value)
  const state = store.getState()
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  const action = type => store.dispatch({type})


  return (
    <DrawerContentScrollView {...props} >
      <DrawerItemList {...props} />
      <View>
        <TouchableOpacity 
          
          style={{ }} >
            <DrawerItem
              label={ () => (<AntDesign name="arrowleft" size={24} color="black" />) }
              onPress={() => props.navigation.closeDrawer()}
            />
          
        </TouchableOpacity>
        
        <View style={{ alignItems: 'center' }} >
        <HeaderTitle />
        { user != null ? 
          (
            <View>
            <ProfilLink name={user.fullName} id={user.userId} navigation={navigation} />

        <View style={styles.line}>
        </View>


        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: 18, width: 270, marginHorizontal: 6, paddingVertical: 22 }} >
          <DemandesIcon sideBar />
          <Text style={{ marginHorizontal: 14, fontSize: 14, fontWeight: 700, color: "#4E4446" }} >Demandes</Text>
          <MaterialIcons name="arrow-drop-down" size={24} color="#7A7375" />
        </TouchableOpacity>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: 18, width: 270, marginHorizontal: 6, paddingVertical: 22 }} >
          <MapIcon color="gray" sideBar />
          <Text style={{ marginHorizontal: 14, fontSize: 14, fontWeight: 700, color: "#4E4446" }} >Nous trouver</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: 18, width: 270, marginHorizontal: 6, paddingVertical: 22 }} >
          <CallCenterIcon sideBar />
          <Text style={{ marginHorizontal: 14, fontSize: 14, fontWeight: 700, color: "#4E4446" }} >Assistance</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('DemandeSuiv')
          }}
          style={{ flexDirection: 'row', alignItems: 'center', padding: 18, width: 270, marginHorizontal: 6, paddingVertical: 22 }} >
          <SuiviDemIcon sideBar />
          <Text style={{ marginHorizontal: 14, fontSize: 14, fontWeight: 700, color: "#4E4446" }} >Suivi de demandes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: 18, width: 270, marginHorizontal: 6, paddingVertical: 22 }} >
          <Releve sideBar />
          <Text style={{ marginHorizontal: 14, fontSize: 14, fontWeight: 700, color: "#4E4446" }} >Relevé de prestations</Text>
        </TouchableOpacity>

        <View style={styles.line}>
        </View>

        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: 18, width: 270, marginHorizontal: 6, paddingVertical: 22 }} >
          <SettingsIcon />
          <Text style={{ marginHorizontal: 14, fontSize: 14, fontWeight: 700, color: "#4E4446" }} >Paramètres</Text>
        </TouchableOpacity>
        {/* if we use redux-toolkit instead of redux-saga, the onpress of "Déconnexion" TouchableopaCity will be like below:       
            onPress={() => 
            dispatch(logout())} */}
        <TouchableOpacity 
          
          onPress={() => { 
                            props.navigation.closeDrawer()
                            dispatch(loseUser())
                  }}
          style={{ flexDirection: 'row', alignItems: 'center', padding: 18, width: 270, marginHorizontal: 6, paddingVertical: 22 }} >
          <AntDesign name="poweroff" size={20} color="#4E4446" />
          <Text style={{ marginHorizontal: 14, fontSize: 14, fontWeight: 700, color: "#4E4446" }} >Déconnexion</Text>
        </TouchableOpacity>
        </View>
          ) : (
            <View style={{
            }} >
              <TouchableOpacity
                onPress={() => {
                          props.navigation.closeDrawer()  
                          /* dispatch(fetchData()) */}
                }
                style={{
                  backgroundColor: '#822C41',
                  textColor: '#FFF',
                  flexDirection: 'row',
                  padding: 8,
                  alignItems: 'center',
                  borderRadius: 100,
                  width: 276,
                  height: 40,
                  marginVertical: 15,
                  marginLeft: 4
                }}

              >
                <MaterialCommunityIcons name="power-standby" size={24} color="white" />
                <Text style={{ color: '#FFF', paddingHorizontal: 10, fontWeight: 800 }} >SE CONNECTER</Text>
              </TouchableOpacity>
              <View style={styles.line}>
              </View>

              <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: 18, width: 270, marginHorizontal: 6, paddingVertical: 22 }} >
                <Prestations />
                <Text style={{ marginHorizontal: 14, fontSize: 14, fontWeight: 700, color: "#4E4446" }} >Prestations</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: 18, width: 270, marginHorizontal: 6, paddingVertical: 22 }} >
                <MapIcon color="gray" sideBar />
                <Text style={{ marginHorizontal: 14, fontSize: 14, fontWeight: 700, color: "#4E4446" }} >Nous trouver</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: 18, width: 270, marginHorizontal: 6, paddingVertical: 22 }} >
                <AboutIcon />
                <Text style={{ marginHorizontal: 14, fontSize: 14, fontWeight: 700, color: "#4E4446" }} >Qui sommes-nous ?</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: 18, width: 270, marginHorizontal: 6, paddingVertical: 22 }} >
                <CallCenterIcon sideBar />
                <Text style={{ marginHorizontal: 14, fontSize: 14, fontWeight: 700, color: "#4E4446" }} >Assistance</Text>
              </TouchableOpacity>

              <View style={styles.line}>
              </View>

              <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: 18, width: 270, marginHorizontal: 6, paddingVertical: 22 }} >
                <SettingsIcon />
                <Text style={{ marginHorizontal: 14, fontSize: 14, fontWeight: 700, color: "#4E4446" }} >Paramètres</Text>
              </TouchableOpacity>
              
            </View>
            
          )
        }
      
      </View>
      </View>
      
    </DrawerContentScrollView>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  menuItemsCard: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  circleContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    padding: 10,
  },
  line: {
    height: 1,
    width: 244,
    backgroundColor: '#B8B8B8',
    left: 16,
    marginVertical: 12
  }
})