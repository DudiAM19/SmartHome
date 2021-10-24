import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {FrontPage} from 'scenes';

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator headerMode="none">
    <AuthStack.Screen name="FrontPage" component={FrontPage} />
  </AuthStack.Navigator>
);

export default AuthStackScreen;
