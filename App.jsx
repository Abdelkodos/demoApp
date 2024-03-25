import React, { useEffect } from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity, ImageBackground, Button } from 'react-native'
import { Feather } from '@expo/vector-icons/build/Icons'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer'
import { Main } from './screens/Main'
import DrawerMenu from './components/DrawerMenu'
import { MaterialIcons } from '@expo/vector-icons/build/Icons'
import HeaderTitle from './components/HeaderTitle'
import Navigator from './routes/Navigator'
import AuthBtn from './components/AuthBtn'
import { AntDesign } from '@expo/vector-icons'
import Home from './screens/Home'
import ProfilLink from './components/ProfilLink'
import MapIcon from './components/icons/MapIcon'
import CallCenterIcon from './components/icons/CallCenterIcon'
import DemandesIcon from './components/icons/DemandesIcon'
import Releve from './components/icons/ReleveIcon'
import SettingsIcon from './components/icons/SettingsIcon'
import SuiviDemIcon from './components/icons/SuiviDemIcon'
import { Provider, useDispatch } from 'react-redux'
import { store, selectData, fetchData, fetchUser, selectUser } from './store'
import { useSelector } from 'react-redux'
import { CustomDrawer } from './components/CustomDrawer'
import { Touchable } from 'react-native'
import ProfilPage from './screens/ProfilPage'
import Statistics from './screens/Statistics'
import DemandeSuiv from './screens/DemandeSuiv'

const Drawer = createDrawerNavigator()

const drawerScreenOptions = ({ navigation }) => ({
  headerTitle: () => <HeaderTitle />,
  drawerLabel: "home ",
  headerLeft: () => (
    <DrawerMenu navigation={() => navigation.openDrawer() } />
  ),
  headerRight: () => (
    <MaterialIcons name="notifications-none" size={24} color="black" style={{ right: 16}} />
  ),
  headerStyle: {
    height: 80, 
  }
}) 

const MyNavigator = () => {
  const state = store.getState()
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  const defaultOptions = ({ navigation }) => ({
    headerTitle: () => <HeaderTitle />,
    drawerLabel: "home ",
    headerLeft: () => (
      <DrawerMenu navigation={() => navigation.openDrawer() } />
    ),
    headerRight: () => (
      <MaterialIcons name="notifications-none" size={24} color="black" style={{ right: 16}} />
    ),
    drawerItemStyle: { display: 'none' } 
  })

  // useEffect(() => {
  //   // dispatch(fetchData())
  //   console.log(state)
  // }, [state])

  return (
    <>
      {
        user == null 
          ?
          <View style={{ 
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <ImageBackground source={require('./assets/bg_img.png')} resizeMode='cover' style={{ flex: 1, justifyContent: 'center', width: 460, alignItems: 'center' }} >
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                <Text style={{ color: "#fff" }} >Royaume du Maroc</Text>
                <Image source={require('./assets/Logo_FFF.png')} />
                <Text style={{ color: "#fff", fontSize: 26 }} >Fondation Mohammed VI</Text>
                <Text style={{ color: "#fff", fontSize: 11 }} >de Promotion des OEuvres Sociales de l'Education-Formation</Text>
                <TouchableOpacity
                  onPress={() => (dispatch(fetchUser())) }
                  style={{ backgroundColor: "#FFF", color: "#695449", borderRadius: 30, justifyContent: "center", paddingHorizontal: 20 }} >
                  <Text>S'AUTHENTIFIER</Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
            
          </View> :
          <NavigationContainer>
            <Drawer.Navigator initialRouteName='Main'
              
              drawerContent={(props) => (
                <CustomDrawer {...props} />
              )}
            >
              <Drawer.Screen name="Main" component={Main}
                options={defaultOptions}
              />
              <Drawer.Screen name="ProfilPage" component={ProfilPage}
                options={defaultOptions}
              />
              <Drawer.Screen name="Statistics" component={Statistics}
                options={defaultOptions}
              />
              <Drawer.Screen name="DemandeSuiv" component={DemandeSuiv}
                options={defaultOptions}
              />
            </Drawer.Navigator>
          </NavigationContainer>
          
      }
    </>
    
  )
}

function App() {

  const data = store.getState()
  useEffect(() => {
    // dispatch(fetchData())
      console.log(data.rootReducer.user)
      console.log(data.rootReducer.data)
    
      
  }, [data])

  return (
    <Provider store={store} >
      <SafeAreaProvider>
        {/* <View style={{ 
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }} >
          <ImageBackground source={require('./assets/background.png')} resizeMethod='cover' style={{ flex: 1, justifyContent: 'center' }} >
            <Text>Royaume du Maroc</Text>
            <Image source={require('./assets/fondLogo.png')} />
          </ImageBackground>
      </View> */}                                                                                                                                                                                                                  
        <MyNavigator />
      </SafeAreaProvider>
    </Provider>
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

export default App 