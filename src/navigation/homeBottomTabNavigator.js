import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Entypo from 'react-native-vector-icons/Entypo';

const Tab = createBottomTabNavigator();

const HomeBottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabStyle: {
          backgroundColor: '#000000',
        },
        headerShown: false,
        activeTintColor: '#fff',
      }}>
      <Tab.Screen
        name={'Home'}
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name={'home'} size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen name={'Search'} component={Home} />
      <Tab.Screen name={'Upload'} component={Home} />
      <Tab.Screen name={'Inbox'} component={Home} />
      <Tab.Screen name={'Profile'} component={Home} />
    </Tab.Navigator>
  );
};

export default HomeBottomTabNavigator;
