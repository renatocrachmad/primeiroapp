import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { Home } from '../Pages/Home';
import { Profile } from '../Pages/Profile';
import { styles } from './style';
import { Text, View } from 'react-native';

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
          tabBarIcon: ({focused, size, color}) => (
            <View style={styles.boxNavigation}>
              {/* <Icon name="" size={20} color="#000" /> */}
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
          tabBarIcon: ({}) => (
            <View style={styles.boxNavigation}>
              {/* <Icon name="" size={20} color="#000" /> */}
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

