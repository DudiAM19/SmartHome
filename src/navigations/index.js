import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStackScreen from './auth';
import AppStackScreen from './app';
import {Colors} from 'styles';

const RootStack = createStackNavigator();
const RootStackScreen = () => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen
      name="FrontPage"
      component={AuthStackScreen}
      options={{animationEnabled: false}}
    />
    <RootStack.Screen name="App" component={AppStackScreen} />
  </RootStack.Navigator>
);

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
};

export default RootNavigator;
