import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import Statistics from '../screens/Statistics'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const Navigator = () => {
  <Tab.Navigator
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
          top: 710,
          left: 10,
          width: 340,
          height: 80,
          position: 'absolute',
        },
        tabBarLabelStyle: {
          fontWeight: 600,
          fontSize: 12
        },
        tabBarActiveTintColor: 'coral',
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
    </Tab.Navigator>
}

export default Navigator