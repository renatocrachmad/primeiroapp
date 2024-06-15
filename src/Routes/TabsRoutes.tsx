import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { Home } from '../pages/home';
import { Profile } from '../pages/Profile';
import { styles } from './style';
import { Text, View } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';

export type RootTabParamsList = {
  TabHome: { name: string };
  TabProfile: { name: string };
}

const Tab = createBottomTabNavigator<RootTabParamsList>();

export function TabsRoutes() {
  return (
    <Tab.Navigator 
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#001937',
          height: 60,
        },

        headerStyle: {
          backgroundColor: '#ddd',
        }
      }}
    >
      <Tab.Screen
        name="TabHome"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.boxNavigation}>
              <Icon name="home" size={focused ? 25 : 20} color={focused ? "#f00" : "#fff"} />
              {/* <Text style={styles.nameRoute}>{focused ? "" : "Home"}</Text> */}
              <Text style={styles.nameRoute}>Home</Text>
            </View>
          ),
          headerTitle: "Home",
          tabBarLabel: '',
        }}
      />

      <Tab.Screen
        name="TabProfile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.boxNavigation}>
              <Icon name="person" size={focused ? 25 : 20} color={focused ? "#f00" : "#fff"} />
              <Text style={styles.nameRoute}>Profile</Text>
            </View>
          ),
          tabBarLabel: '',
          headerTitle: "Profile",
        }}
      />

    </Tab.Navigator>
  )
}
