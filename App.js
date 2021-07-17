
import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/Home';
import IssLocationScreen  from './Screens/IssLocation';
import MeteorScreen from './Screens/Meteor';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
       initialRouteName="Home"
       screenOptions={{headerShown:false}}
       
      >
        <Stack.Screen name="Home"
                      component={HomeScreen}  />
        <Stack.Screen name="IssLocation"
                      component={IssLocationScreen}  />
        <Stack.Screen name="Meteor"
                      component={MeteorScreen}  />
      </Stack.Navigator>
          </NavigationContainer>
  );
}

const Stack=createStackNavigator()

