import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTab from '../tabs';
import {InputApi} from 'scenes';

const AppStack = createStackNavigator();
const AppStackScreen = () => (
  <AppStack.Navigator headerMode="none">
    <AppStack.Screen name="Home" component={BottomTab} />
    <AppStack.Screen name="InputApi" component={InputApi} />
  </AppStack.Navigator>
);

export default AppStackScreen;
