import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTab from '../tabs';

const AppStack = createStackNavigator();
const AppStackScreen = () => (
  <AppStack.Navigator headerMode="none">
    <AppStack.Screen name="Home" component={BottomTab} />
  </AppStack.Navigator>
);

export default AppStackScreen;
