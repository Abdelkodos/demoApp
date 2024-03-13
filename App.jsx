import React from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'
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
import { Provider } from 'react-redux'
import { store } from './store'
import { CustomDrawer } from './components/CustomDrawer'

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

function App() {

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

  return (
    <SafeAreaProvider>
      <Provider store={store} >
        <NavigationContainer>
          <Drawer.Navigator initialRouteName='Main'
            
            drawerContent={(props) => (
              <CustomDrawer {...props} />
            )}
          >
            <Drawer.Screen name="Main" component={Main}
              options={defaultOptions}
                  
                
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
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