import HomeIcon from '../components/icons/HomeIcon'
import StatisticsIcon from '../components/icons/StatisticsIcon'
import HeaderTitle from '../components/HeaderTitle'
import DrawerMenu from '../components/DrawerMenu'
import { MaterialIcons } from '@expo/vector-icons'
import Home from './Home'
import Statistics from './Statistics'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import DemandeSuiv from './DemandeSuiv'

const Tab = createBottomTabNavigator()

export const Main = () => {
  return (
    <Tab.Navigator
      initialRouteName='SuivDemand'
      screenOptions={({route}) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconN
          let rn = route.name

          if (rn === 'Home') {
            iconN = focused ? 'home' : 'home-outline'
            // style = focused ? active : { borderRadius: 20 }
            return <HomeIcon name={iconN} size={size} color={color} />
          } else if (rn === 'Statistics') {
            return focused ? (<StatisticsIcon state='active' color={color} size={size} />) : (<StatisticsIcon state='inActive' color={color} size={size} />)
          }
        },
        tabBarStyle: {
          borderRadius: 20,
          top: 610,
          left: 25,
          width: 340,
          height: 80,
          position: 'absolute',
        },
        tabBarLabelStyle: {
          fontWeight: 600,
          fontSize: 12
        },
        tabBarActiveTintColor: '#822C41',
        // tabBarActiveBackgroundColor: '#F4EAE9',
          
        })}
    >
      <Tab.Screen
        options={{
          headerShown: false
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          headerShown: false
        }}
        name="Statistics" 
        component={Statistics}
      />  
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="SuivDemand" 
        component={DemandeSuiv}
      />  
    </Tab.Navigator>
  )
}